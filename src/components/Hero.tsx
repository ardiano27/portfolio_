"use client";

import { useState } from "react";

export default function Hero() {
  const [isDeveloper, setIsDeveloper] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-between px-16 bg-black text-white">
      
      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-6xl font-semibold">
          Hi, I'm{" "}
          <span className="text-orange-500 italic">
            Arlecchino
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          The intersection of logic and aesthetics.
        </p>

        {/* Dynamic Role */}
        <p className="mt-6 text-xl font-medium">
          {isDeveloper ? "Full Stack Developer" : "Graphic Designer"}
        </p>

        {/* Toggle */}
        <div className="mt-6 flex items-center gap-3">
          <span>Developer</span>

          <input
            type="checkbox"
            className="w-5 h-5 accent-orange-500"
            onChange={() => setIsDeveloper(!isDeveloper)}
          />

          <span>Designer</span>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src={
            isDeveloper
              ? "/images/develop.png"
              : "/images/graphic.png"
          }
          className="w-[350px] h-[450px] object-cover rounded-2xl shadow-xl transition-all duration-500"
        />
      </div>
    </section>
  );
}