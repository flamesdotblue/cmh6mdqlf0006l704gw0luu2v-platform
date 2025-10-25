import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">GoAurex</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
