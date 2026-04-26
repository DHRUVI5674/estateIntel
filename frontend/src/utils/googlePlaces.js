const API_KEY = "AIzaSyCEW0bCq_jD9iZR5SIuWi9GXC8aZ-jiB_k";

// Haversine formula to calculate distance between two lat/lng coordinates in miles
export const calculateDistanceMiles = (lat1, lon1, lat2, lon2) => {
    const R = 3958.8; // Earth radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;  
    const dLon = (lon2 - lon1) * Math.PI / 180; 
    const a = 0.5 - Math.cos(dLat)/2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon))/2;
    return (R * 2 * Math.asin(Math.sqrt(a))).toFixed(1);
}

// Load Google Maps script globally
const loadGoogleScript = () => {
    return new Promise((resolve, reject) => {
        if (window.google && window.google.maps && window.google.maps.places) {
            resolve();
            return;
        }
        
        const existingScript = document.getElementById('google-maps-script-api');
        if (existingScript) {
            existingScript.addEventListener('load', resolve);
            return;
        }

        const script = document.createElement('script');
        script.id = 'google-maps-script-api';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject("Google Maps script failed to load");
        
        document.head.appendChild(script);
    });
};

export const geocodeAddress = async (address) => {
    await loadGoogleScript();
    return new Promise((resolve, reject) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                resolve({
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                });
            } else {
                reject(status);
            }
        });
    });
};

export const fetchNearbyPlaces = async (lat, lng, radius = 2500, type = 'hospital') => {
    await loadGoogleScript();
    return new Promise((resolve, reject) => {
        // Create an invisible div node, required by PlacesService parameter
        const mapNode = document.createElement('div');
        const service = new window.google.maps.places.PlacesService(mapNode);

        let mappedType = type.toLowerCase();
        // Maps generic category strings to valid Google Place Types
        const typeMap = {
            'hospital': 'hospital',
            'school': 'school',
            'police': 'police',
            'park': 'park',
            'all': ''
        };
        
        const request = {
            location: new window.google.maps.LatLng(lat, lng),
            radius: radius,
        };

        if (mappedType !== 'all') {
            request.type = typeMap[mappedType] || mappedType;
        } else {
            // Google Places API requires a keyword, name, or type. 
            // If 'all', we provide a broad keyword to pull community amenities.
            request.keyword = 'hospital OR school OR park OR police station';
        }

        service.nearbySearch(request, (results, status) => {
            console.log(`[Google Places] Status for '${mappedType}' at ${lat},${lng}:`, status);
            
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                // Formatting results to cleanly integrate into the UI
                const formattedResults = results.map(place => {
                    const placeLat = place.geometry.location.lat();
                    const placeLng = place.geometry.location.lng();
                    const distance = calculateDistanceMiles(lat, lng, placeLat, placeLng);
                    
                    return {
                        id: place.place_id,
                        name: place.name,
                        category: type,
                        rating: place.rating ? Number(place.rating).toFixed(1) : 'New',
                        distance: distance,
                        status: place.business_status === 'OPERATIONAL' ? 'Open' : (place.business_status || 'Unknown'),
                        lat: placeLat,
                        lng: placeLng,
                        address: place.vicinity || 'Address not listed',
                        image: place.photos && place.photos.length > 0 
                               ? place.photos[0].getUrl({ maxWidth: 400 }) 
                               : 'https://images.unsplash.com/photo-1541888085-3bcff70ce041?auto=format&fit=crop&q=80&w=800'
                    };
                });
                
                // Sort by distance locally to provide better user experience
                formattedResults.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
                resolve(formattedResults);
            } else {
                resolve([]);
            }
        });
    });
};
