import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRightCircle } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Nhk4dWoYLj83rV44/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs sm:text-sm text-neutral-200">
            Technology • Data Visualization • Cloud • Marketing
          </span>
          <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Build smarter, scale faster with data-driven solutions
          </h1>
          <p className="mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
            At GoAurex, we empower businesses with cutting-edge data, cloud, and marketing solutions. From warehousing and ETL to multi-cloud migrations and data-driven email campaigns, we help you operate smarter and stay ahead.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition">
              Start Your Project
              <ArrowRightCircle className="h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
