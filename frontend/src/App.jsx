import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import TopSections from "./components/TopSections";
import BottomSections from "./components/BottomSections";

function App() {
  useEffect(() => {
    document.title = "EstateIntel - Smart Property Decisions";
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Navigation />
      <TopSections />
      <BottomSections />
    </div>
  );
}

export default App;
