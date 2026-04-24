import React from 'react';
import { MapPin, FileText, Calendar, CheckCircle } from 'lucide-react';

const TrustSection = () => (
  <>
    <section className="py-24 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[.25em] text-sm">Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Enter Location", icon: <MapPin size={28} />, color: "from-blue-600 to-indigo-50" },
            { step: "02", title: "Get Report", icon: <FileText size={28} />, color: "from-emerald-500 to-teal-400" },
            { step: "03", title: "Book Audit", icon: <Calendar size={28} />, color: "from-amber-500 to-orange-400" },
            { step: "04", title: "Analysis", icon: <CheckCircle size={28} />, color: "from-indigo-600 to-purple-50" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl text-center group hover:-translate-y-2 transition-all">
              <div className={`w-16 h-16 rounded-2xl mx-auto bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-10 rounded-[2.5rem] bg-blue-50/50 border border-blue-100">
            <div className="text-5xl font-black text-blue-600 mb-2">25,000+</div>
            <div className="text-xl font-bold">Reports Generated</div>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100">
            <div className="text-5xl font-black text-emerald-600 mb-2">98%</div>
            <div className="text-xl font-bold">Accuracy Rate</div>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-indigo-50/50 border border-indigo-100">
            <div className="text-5xl font-black text-indigo-600 mb-2">5,000+</div>
            <div className="text-xl font-bold">Inspections</div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TrustSection;
