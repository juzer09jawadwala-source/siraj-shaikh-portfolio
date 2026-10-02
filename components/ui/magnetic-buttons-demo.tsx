import React from "react";
import MagneticEffect from "./magnetic-effect";

export function MagneticButtonsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6 p-8">
      <MagneticEffect distance={0.5}>
        <button className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all">
          Listen to Demo
        </button>
      </MagneticEffect>

      <MagneticEffect distance={0.4}>
        <button className="px-5 py-2.5 rounded-full border border-cyan-400/30 text-white hover:bg-cyan-500/10 transition-all">
          Bookings
        </button>
      </MagneticEffect>
    </div>
  );
}

export default MagneticButtonsDemo;
