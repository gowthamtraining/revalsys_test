
import { ShieldCheck, Sparkles, Award, Target } from 'lucide-react';
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-txt-main tracking-tight sm:text-5xl">
          About ElectroShow
        </h1>
        <p className="text-txt-muted text-base md:text-lg leading-relaxed">
          We are a premier electronics retailer showcasing high-quality laptops, mobiles, wearable watches, audio gears, custom keyboards, mice, and sharp displays. Since 2026, our mission has been to power digital workspaces across the globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-bg-card border border-border-main p-6 rounded-2xl shadow-sm space-y-3">
          <span className="inline-block p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
            <Target className="w-6 h-6" />
          </span>
          <h3 className="font-bold text-txt-main text-lg">Our Mission</h3>
          <p className="text-sm text-txt-muted leading-relaxed">
            To make cutting-edge electronic innovations accessible and reliable, ensuring engineers, creators, and enthusiasts have the tools they need to succeed.
          </p>
        </div>

        <div className="bg-bg-card border border-border-main p-6 rounded-2xl shadow-sm space-y-3">
          <span className="inline-block p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </span>
          <h3 className="font-bold text-txt-main text-lg">Guaranteed Quality</h3>
          <p className="text-sm text-txt-muted leading-relaxed">
            Every product catalog item undergoes robust quality audits before showcase. We partner with only the world's most reputable technology brands.
          </p>
        </div>

        <div className="bg-bg-card border border-border-main p-6 rounded-2xl shadow-sm space-y-3">
          <span className="inline-block p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
            <Sparkles className="w-6 h-6" />
          </span>
          <h3 className="font-bold text-txt-main text-lg">Workplace Aesthetics</h3>
          <p className="text-sm text-txt-muted leading-relaxed">
            We believe tech tools should not only be high-performance but also aesthetically pleasing. Clean lines, solid builds, and modern looks are standard.
          </p>
        </div>

        <div className="bg-bg-card border border-border-main p-6 rounded-2xl shadow-sm space-y-3">
          <span className="inline-block p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
            <Award className="w-6 h-6" />
          </span>
          <h3 className="font-bold text-txt-main text-lg">Top Customer Support</h3>
          <p className="text-sm text-txt-muted leading-relaxed">
            We offer round-the-clock email and telephone customer care. If a gadget doesn't meet your workspace design, we'll swap it stress-free.
          </p>
        </div>
      </div>

      <div className="bg-bg-alt border border-border-main rounded-3xl p-8 md:p-12 text-center grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <span className="text-4xl font-extrabold text-brand-primary">10K+</span>
          <p className="text-xs font-semibold text-txt-muted uppercase tracking-wider">Happy Customers</p>
        </div>
        <div className="space-y-1">
          <span className="text-4xl font-extrabold text-brand-primary">25+</span>
          <p className="text-xs font-semibold text-txt-muted uppercase tracking-wider">Premium Categories</p>
        </div>
        <div className="space-y-1">
          <span className="text-4xl font-extrabold text-brand-primary">99.9%</span>
          <p className="text-xs font-semibold text-txt-muted uppercase tracking-wider">Uptime Delivery</p>
        </div>
        <div className="space-y-1">
          <span className="text-4xl font-extrabold text-brand-primary">24/7</span>
          <p className="text-xs font-semibold text-txt-muted uppercase tracking-wider">Active Monitoring</p>
        </div>
      </div>
    </div>
  );
}
