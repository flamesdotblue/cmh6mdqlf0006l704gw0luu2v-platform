import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold">GoAurex</span>
          </div>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} GoAurex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
