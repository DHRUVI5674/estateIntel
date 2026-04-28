// Mock database for specific property insights
const insightsData = {
  "mumbai": {
    property: {
      name: "Oberoi Sky City",
      location: "Borivali East, Mumbai",
      price: "₹3.2 Cr",
      details: "3 BHK • 1,450 Sq.Ft • Garden View",
      image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000"
    },
    overallScore: 4.8,
    verdict: "Best for Families",
    sections: {
      location: {
        demand: "High",
        type: "Developing Residential",
        summary: "Excellent appreciation potential due to upcoming metro connectivity."
      },
      price: {
        status: "Fair Price",
        comparison: "2.5% below market average for Borivali East.",
        trend: [10, 15, 25, 40, 35]
      },
      surroundings: {
        amenities: "Schools (3), Hospitals (2), Parks (1)",
        recommendation: "Family-friendly",
        score: 92
      },
      connectivity: {
        commute: "15 mins to Western Express Highway",
        transport: "Metro Station (200m), Bus Depot (500m)",
        travelTimes: [
          { place: "BKC", time: "45 mins" },
          { place: "Airport", time: "30 mins" },
          { place: "Station", check: "5 mins" }
        ]
      },
      investment: {
        potential: "High Growth",
        rental: "₹85,000/mo potential",
        yield: "3.2%"
      },
      safety: {
        level: "Very High",
        lifestyle: "Quiet & Urban",
        tags: ["Gated Community", "CCTV Secured"]
      }
    }
  },
  "delhi": {
    property: {
      name: "DLF Kings Court",
      location: "Greater Kailash, Delhi",
      price: "₹8.5 Cr",
      details: "4 BHK • 3,200 Sq.Ft • Park Facing",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    overallScore: 4.5,
    verdict: "Luxury Investment",
    sections: {
      location: {
        demand: "Medium",
        type: "Established Premium",
        summary: "Stagnant but highly stable location with legacy value."
      },
      price: {
        status: "Overpriced",
        comparison: "5% premium over neighboring properties.",
        trend: [5, 10, 8, 12, 10]
      },
      surroundings: {
        amenities: "Elite Clubs (2), Hospitals (4), Markets (3)",
        recommendation: "Highly Developed",
        score: 98
      },
      connectivity: {
        commute: "Connects directly to Ring Road",
        transport: "Magenta Line Metro (1km)",
        travelTimes: [
          { place: "CP", time: "25 mins" },
          { place: "Airport", time: "40 mins" },
          { place: "Gurgaon", time: "50 mins" }
        ]
      },
      investment: {
        potential: "Stable",
        rental: "₹2.5L/mo potential",
        yield: "2.8%"
      },
      safety: {
        level: "High",
        lifestyle: "Active & Elite",
        tags: ["Private Security", "VVIP Area"]
      }
    }
  },
  "bangalore": {
    property: {
      name: "Prestige Lakeside Habitat",
      location: "Whitefield, Bangalore",
      price: "₹1.8 Cr",
      details: "3 BHK • 1,850 Sq.Ft • Pool View",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000"
    },
    overallScore: 4.2,
    verdict: "Great for IT Professionals",
    sections: {
      location: {
        demand: "Very High",
        type: "IT Corridor",
        summary: "Massive demand due to proximity to ITPL and major tech parks."
      },
      price: {
        status: "Underpriced",
        comparison: "12% cheaper than neighboring EPIP area.",
        trend: [20, 35, 50, 45, 60]
      },
      surroundings: {
        amenities: "Malls (2), Schools (5), Tech Parks (4)",
        recommendation: "Urban & Busy",
        score: 85
      },
      connectivity: {
        commute: "WHITEFIELD-HOSKOTE MAIN ROAD",
        transport: "Proposed Metro (ongoing), Extensive Bus network",
        travelTimes: [
          { place: "ITPL", time: "10 mins" },
          { place: "Outer Ring Road", time: "30 mins" },
          { place: "MG Road", time: "60 mins" }
        ]
      },
      investment: {
        potential: "Explosive Growth",
        rental: "₹65,000/mo potential",
        yield: "4.1%"
      },
      safety: {
        level: "Medium-High",
        lifestyle: "Vibrant & Active",
        tags: ["Large Community", "Traffic Prone"]
      }
    }
  }
};

const getInsightsByCity = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();
    const data = insightsData[city] || insightsData["mumbai"]; // Fallback to Mumbai
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Comprehensive Area Insight Report Generator
const areaReports = {
  "mumbai": {
    locationName: "Borivali East, Mumbai",
    summary: "Borivali East is a rapidly developing area with strong connectivity and growing property demand, making it suitable for both families and investors.",
    score: 4.8,
    bestFor: "Families & Long-term Investors",
    location: {
      demand: "High",
      type: "Residential & Developing",
      insight: "The area is witnessing a surge in livability due to its green surroundings (Sanjay Gandhi National Park) and upcoming infrastructure boosts."
    },
    price: {
      comparison: "Fairly Priced",
      recommendation: "Excellent buying opportunity before the new Metro Line 7 becomes fully operational."
    },
    surroundings: {
      evaluation: "Excellent presence of Tier-1 schools, multi-specialty hospitals, and local markets.",
      insight: "Highly suitable for families seeking a balanced urban-nature lifestyle."
    },
    connectivity: {
      access: "Direct access to Western Express Highway and Metro Line 7.",
      travelTime: "45 mins to BKC, 30 mins to Airport.",
      insight: "Excellent connectivity for working professionals commuting to South Mumbai or Suburban hubs."
    },
    investment: {
      potential: "High Investment Potential",
      insight: "Property appreciation has averaged 8-10% annually over the last 3 years; rental demand remains consistently high due to proximity to business parks."
    },
    safety: {
      level: "High",
      lifestyle: "Quiet & Active",
      insight: "Widely regarded as one of Mumbai's safest residential zones with highly active community engagement."
    },
    recommendation: "Recommended for long-term investment. The current price entry point offers significant upside as transit-oriented development matures."
  },
  "delhi": {
    locationName: "Greater Kailash, Delhi",
    summary: "Greater Kailash remains one of Delhi's most prestigious and stable residential hubs, offering ultra-luxury living with legacy investment value.",
    score: 4.5,
    bestFor: "Luxury Seekers & Professionals",
    location: {
      demand: "Medium",
      type: "Established Premium",
      insight: "A highly mature market where scarcity of new inventory maintains premium value."
    },
    price: {
      comparison: "Overpriced",
      recommendation: "Best for end-users seeking status and comfort rather than short-term capital flip."
    },
    surroundings: {
      evaluation: "Elite social infrastructure with high-end clubs, private clinics, and luxury retail.",
      insight: "Perfect for those prioritizing lifestyle and immediate daily convenience."
    },
    connectivity: {
      access: "Centrally located with nearby Ring Road access and Magenta Line Metro.",
      travelTime: "25 mins to CP, 40 mins to IGI Airport.",
      insight: "Moderate accessibility despite heavy peak-hour traffic due to central positioning."
    },
    investment: {
      potential: "Stable",
      insight: "Low risk with steady but slow appreciation. Rental demand for independent floors remains the highest in South Delhi."
    },
    safety: {
      level: "High",
      lifestyle: "Active & Elite",
      insight: "Highly secured with private surveillance and active welfare associations."
    },
    recommendation: "Best for residential living. Ideal for families wanting to settle in a historically safe and culturally rich neighborhood."
  },
  "bangalore": {
    locationName: "Whitefield, Bangalore",
    summary: "Whitefield is Bangalore's tech heartland, transitioning from a purely commercial hub into a vibrant, self-sustaining residential ecosystem.",
    score: 4.2,
    bestFor: "IT Professionals & Young Families",
    location: {
      demand: "Very High",
      type: "IT Corridor / Urban Hub",
      insight: "Ongoing transformation into a commercial mega-hub has pushed residential demand to an all-time high."
    },
    price: {
      comparison: "Underpriced",
      recommendation: "Great opportunity to buy in projects slightly away from the main tech parks where prices are still competitive."
    },
    surroundings: {
      evaluation: "Surrounded by tech parks, premium malls (Phoenix, VR), and international schools.",
      insight: "Urban & Busy; ideal for those who want work-life proximity."
    },
    connectivity: {
      access: "Metropolitan connectivity improving with the Purple Line Metro extension.",
      travelTime: "10 mins to ITPL, 60 mins to MG Road.",
      insight: "Moderate accessibility; improved significantly by metro but challenged by peak-time logistics."
    },
    investment: {
      potential: "Explosive Growth",
      insight: " белый field is the epicenter of Bangalore's real estate expansion, with high yields from corporate rentals."
    },
    safety: {
      level: "Medium-High",
      lifestyle: "Vibrant & Active",
      insight: "Generally safe for late-night commuters due to the 24/7 nature of its tech parks."
    },
    recommendation: "Recommended for long-term investment. Whitefield's evolution into a transit-rich hub ensures sustained value growth."
  }
};

const getAreaReport = async (req, res) => {
  try {
    const rawCity = req.params.city || "Mumbai";
    const city = rawCity.toLowerCase();
    
    // Check if we have hardcoded data, otherwise generate dynamic report
    let report = areaReports[city];
    
    if (!report) {
      // Generate Dynamic AI Insight Report for any location
      report = {
        locationName: rawCity.split(',')[0].trim(),
        fullName: rawCity,
        summary: `${rawCity} is a ${city.includes('tech') ? 'rapidly evolving tech corridor' : 'vibrant residential area'} characterized by shifting demand patterns and ${city.includes('premium') ? 'high-end' : 'diverse'} housing options.`,
        score: (3.5 + Math.random() * 1.5).toFixed(1),
        confidence: "Medium",
        bestFor: city.includes('college') ? "Students & Academics" : "Professionals & Families",
        multiScores: {
          demand: { score: 8.2, reason: "Consistent search volume and low inventory levels." },
          value: { score: 7.5, reason: "Price per square foot remains competitive vs neighboring hubs." },
          connectivity: { score: 6.8, reason: "Strong main road access but challenged by local congestion." },
          livability: { score: 8.5, reason: "High density of local amenities and green spaces." },
          safety: { score: 7.2, reason: "Standard urban safety profile with active local monitoring." },
          investment: { score: 9.0, reason: "Strong appreciation potential driven by local infrastructure bets." }
        },
        priceIntelligence: {
          comparison: "Underpriced",
          trend: "Rising 📈",
          insight: "Current entry rates are 15% lower than the city benchmark, presenting a classic early-entry opportunity."
        },
        lifestyle: {
          amenities: "Balanced presence of schools and retail outlets.",
          recommendation: "Highly family-friendly with a focus on neighborhood quietude.",
          lifestyleType: "Quiet"
        },
        connectivity: {
          access: "Primary highway access within 2km.",
          commuteTime: "35 mins",
          insight: "Good connectivity with minimal commute time enhances daily convenience compared to central districts."
        },
        growthForecast: {
          status: "High Growth Area 🚀",
          rentalDemand: "Strong",
          insight: "Upcoming commercial projects nearby are likely to drive a 12% jump in rental yields by 2027."
        },
        safetyEnvironment: {
          safetyLevel: "High",
          safetyInsight: "Statistically lower incident rates than neighboring commercial sectors.",
          environment: "Moderate Crowd / Low Pollution"
        },
        comparison: {
          nearby: "Better than peripheral zones in pricing but slightly behind established hubs in public transport density.",
          competitors: ["Sector 12", "Green Hills"]
        },
        recommendation: "Recommended for long-term investment. Ideal for residential living with a focus on future value appreciation.",
        tags: ["#HighGrowthArea", "#BestForFamilies", "#BudgetFriendly"]
      };
    } else {
      // Enhance hardcoded reports with the new 12-section structure
      report = {
        ...report,
        fullName: report.locationName,
        confidence: "High",
        multiScores: {
          demand: { score: 8.8, reason: "Top 5% search volume in the region." },
          value: { score: report.price.comparison === 'Underpriced' ? 9.2 : 6.5, reason: "Market valuation vs internal analytics." },
          connectivity: { score: 9.0, reason: "Proximity to Metro and Highway hubs." },
          livability: { score: 8.5, reason: "Density of schools and hospitals." },
          safety: { score: 8.0, reason: "Based on local safety indicators and gated presence." },
          investment: { score: 9.2, reason: "Historically strong appreciation history." }
        },
        priceIntelligence: {
          comparison: report.price.comparison,
          trend: "Rising 📈",
          insight: report.price.recommendation
        },
        lifestyle: {
          amenities: report.surroundings.evaluation,
          recommendation: report.surroundings.insight,
          lifestyleType: report.safety.lifestyle
        },
        connectivity: {
          access: report.connectivity.access,
          commuteTime: report.connectivity.travelTime.split(',')[0],
          insight: report.connectivity.insight
        },
        growthForecast: {
          status: "High Growth Area 🚀",
          rentalDemand: "Strong",
          insight: report.investment.insight
        },
        safetyEnvironment: {
          safetyLevel: report.safety.level,
          safetyInsight: report.safety.insight,
          environment: "Low Pollution / Controlled Crowd"
        },
        comparison: {
          nearby: `Better than neighboring ${city === 'mumbai' ? 'Malad' : 'GK2'} in livability but mirrors the pricing trend.`,
          competitors: city === 'mumbai' ? ["Malad", "Kandivali"] : ["GK2", "South Ex"]
        },
        tags: ["#HighGrowthArea", "#BestForFamilies", "#PremiumLocation", "#InvestmentHotspot"]
      };
    }

    // Simulate AI thinking time
    setTimeout(() => {
      res.status(200).json(report);
    }, 1800);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate dynamic report" });
  }
};

module.exports = { getInsightsByCity, getAreaReport };
