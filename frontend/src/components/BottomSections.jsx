import React from 'react';
import { MapPin, FileText, Calendar, CheckCircle, Check, Phone, Mail, Clock, Shield } from 'lucide-react';

const BottomSections = () => (
  <>
    {/* Process Section */}
    <section className="py-24 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[.25em] text-sm">Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Enter Location", icon: <MapPin size={28} />, color: "from-blue-600 to-indigo-500" },
            { step: "02", title: "Get Data Report", icon: <FileText size={28} />, color: "from-emerald-500 to-teal-400" },
            { step: "03", title: "Book Inspection", icon: <Calendar size={28} />, color: "from-amber-500 to-orange-400" },
            { step: "04", title: "Receive Analysis", icon: <CheckCircle size={28} />, color: "from-indigo-600 to-purple-500" }
          ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl text-center group hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 rounded-2xl mx-auto bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-slate-400 text-xs font-bold mt-2">STEP {item.step}</p>
             </div>
          ))}
        </div>
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-10 rounded-[2.5rem] bg-indigo-50/50 border border-indigo-100">
            <div className="text-5xl font-black text-indigo-600 mb-2">25,000+</div>
            <div className="text-xl font-bold">Reports Generated</div>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100">
            <div className="text-5xl font-black text-emerald-600 mb-2">98%</div>
            <div className="text-xl font-bold">Accuracy Rate</div>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-blue-50/50 border border-blue-100">
            <div className="text-5xl font-black text-blue-600 mb-2">5,000+</div>
            <div className="text-xl font-bold">Inspections</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Rajesh Kumar", role: "Software Engineer", text: "Saved me from major seepage issues. Worth it!", stars: 5 },
            { name: "Priya Sharma", role: "Marketing Manager", text: "Incredibly detailed neighborhood data for schools.", stars: 5 },
            { name: "Amit Patel", role: "Business Owner", text: "Professional service and comprehensive reports.", stars: 5 }
          ].map((testimonial, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <span key={i} className="text-amber-400">★</span>)}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium italic">"{testimonial.text}"</p>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black">{testimonial.name}</span>
                <span className="text-slate-500 text-xs font-bold uppercase">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[.25em] text-sm italic">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 tracking-tight">Transparent pricing. No hidden fees.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {[
            { title: "Basic", price: "₹999", desc: "Neighborhood report overview.", popular: false, features: ["Neighborhood Report", "School data", "Water quality", "PDF Download"] },
            { title: "Premium", price: "₹2,499", desc: "Comparative data for homebuyers.", popular: true, features: ["Everything in Basic", "Comparative Data", "Price trends", "Expert consultation"] },
            { title: "Inspection", price: "₹7,999", desc: "Full physical property audit.", popular: false, features: ["120-point audit", "Seepage check", "Electrical & Plumbing", "Detailed Report"] }
          ].map((plan, i) => (
            <div key={i} className={`flex flex-col p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-indigo-600 bg-indigo-900 text-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-white text-slate-900 shadow-xl shadow-slate-50'}`}>
              <h3 className="text-2xl font-black mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-sm font-bold opacity-60">/one-time</span>
              </div>
              <ul className="space-y-4 mb-10 border-t border-white/10 pt-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-sm font-bold items-center">
                    <Check size={14} className="text-indigo-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black ${plan.popular ? 'bg-white text-indigo-950' : 'bg-slate-900 text-white'}`}>Get Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* Footer */}
    <footer className="py-20 bg-slate-900 text-white px-6">
       <div className="max-w-7xl mx-auto flex justify-between items-center gap-10 border-t border-white/5 pt-10">
          <div className="flex items-center gap-2 font-black text-2xl"><Shield fill="currentColor" /> estateIntel</div>
          <div className="flex gap-10 text-slate-400 font-bold text-sm">
            <span className="hover:text-white cursor-default">Privacy</span> <span className="hover:text-white cursor-default">Terms</span> <span className="hover:text-white cursor-default">Contact</span>
          </div>
          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2024 estateIntel.</div>
       </div>
    </footer>
  </>
);

export default BottomSections;
