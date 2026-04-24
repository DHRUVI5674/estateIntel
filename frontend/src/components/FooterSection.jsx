import React from 'react';
import { Phone, Mail, Clock, Globe, Check, Shield } from 'lucide-react';

const FooterSection = () => (
  <>
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-indigo-600 font-black uppercase tracking-[.25em] text-sm italic">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-16">Transparent pricing. No hidden fees.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
            { title: "Basic", price: "₹999", popular: false },
            { title: "Premium", price: "₹2,499", popular: true },
            { title: "Inspection", price: "₹7,999", popular: false }
          ].map((plan, i) => (
            <div key={i} className={`p-10 rounded-[3rem] border ${plan.popular ? 'bg-indigo-900 text-white scale-105 border-indigo-600 shadow-2xl' : 'bg-white border-slate-100 shadow-xl'}`}>
              <h3 className="text-2xl font-black mb-4">{plan.title}</h3>
              <div className="text-5xl font-black mb-8">{plan.price}</div>
              <button className={`w-full py-5 rounded-2xl font-black ${plan.popular ? 'bg-white text-indigo-950' : 'bg-slate-900 text-white'}`}>Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-blue-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
          <div className="lg:w-2/5 bg-indigo-950 p-12 text-white relative h-full">
            <span className="text-indigo-400 font-black uppercase tracking-[.25em] text-xs">Start your property check</span>
            <h2 className="text-4xl font-black mt-6 mb-12">Protecting your biggest investment</h2>
            <div className="space-y-6">
              <div className="flex gap-4"><Phone className="text-indigo-400" /> <span>+91 800 123 4567</span></div>
              <div className="flex gap-4"><Mail className="text-indigo-400" /> <span>hi@estateintel.in</span></div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 bg-white">
            <form className="space-y-6">
              <input placeholder="Full Name" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold" />
              <input placeholder="Phone" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold" />
              <textarea placeholder="How can we help?" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold h-32" />
              <button className="w-full py-6 bg-indigo-600 text-white font-black rounded-2xl shadow-xl">Request Callback</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2"><Shield /> <span className="text-2xl font-black">estateIntel</span></div>
        <div className="flex gap-8 text-slate-400 font-bold text-sm">
          <span>Privacy</span> <span>Terms</span> <span>Contact</span>
        </div>
      </div>
    </footer>
  </>
);

export default FooterSection;
