import { motion } from "motion/react";
import { useState } from "react";

const stats = [
  { number: "25+", label: "Technologies Mastered" },
  { number: "15+", label: "Projects Delivered" },
  { number: "4", label: "Research Publications" },
  { number: "7", label: "Research Domains" },
  { number: "3", label: "Industry Internships" },
];

const duplicatedStats = [...stats, ...stats, ...stats];

export default function StatsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF99]/5 to-transparent" />

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#050505] to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#050505] to-transparent" />

      <motion.div
        className="flex gap-10 w-max"
        animate={{
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedStats.map((stat, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
            whileHover={{
              scale: 1.08,
              y: -8,
            }}
            transition={{ duration: 0.25 }}
            className="group relative cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#00FF99]/20 via-[#00D9FF]/20 to-[#00FF99]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Card */}
            <div className="relative flex items-center gap-8 px-12 py-7 rounded-[32px] border border-[#00FF99]/20 bg-[#0F1115]/85 backdrop-blur-xl hover:border-[#00FF99]/50 transition-all duration-300">
              
              {/* Number */}
              <div className="text-6xl font-black bg-gradient-to-r from-[#00FF99] to-[#00D9FF] bg-clip-text text-transparent whitespace-nowrap">
                {stat.number}
              </div>

              {/* Divider */}
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00FF99]/40 to-transparent" />

              {/* Content */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  Achievement
                </span>

                <span className="mt-2 text-lg font-medium text-gray-300 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-[#00FF99]/30 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}