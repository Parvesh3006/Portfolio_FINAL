import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "AI Engineer",
    "ML Researcher",
    "Full Stack Architect",
    "Startup Builder",
    "Cybersecurity Enthusiast",
    "Medical Imaging Researcher",
    "Edge AI Developer",
    "Quantum Security Explorer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00FF99 1px, transparent 1px),
              linear-gradient(to bottom, #00FF99 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00FF99] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-14 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1115] border border-[#00FF99]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00FF99]" />
              <span className="text-[#00FF99] text-sm font-mono">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              PARVESH
              <br />
              <span className="text-[#00FF99]">SHANMUGAM</span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-[#9ca3af] mb-6 min-h-[28px]"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block font-mono text-[#00D9FF]"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#9ca3af] text-lg mb-8 leading-relaxed max-w-xl"
            >
              Building scalable intelligent systems at the intersection of AI,
              cybersecurity and full-stack engineering.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >

              {/* Projects Button */}
              {/* <button className="group relative px-8 py-4 bg-[#00FF99] text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
      
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>

                <motion.div
                  className="absolute inset-0 bg-[#00D9FF]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button> */}

              {/* Resume Button */}
              {/* <button className="relative px-8 py-4 border-2 border-[#00FF99] text-[#00FF99] font-semibold rounded-xl overflow-hidden group hover:text-black transition-colors">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                 
                </span>

                <motion.div
                  className="absolute inset-0 bg-[#00FF99]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button> */}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex items-center justify-center"
          >

            <div className="relative w-[550px] h-[550px] flex items-center justify-center">

              {/* Outer Glow */}
              <div className="absolute w-full h-full rounded-full bg-[#00FF99]/20 blur-3xl" />

              {/* Main Circular Image */}
              <motion.div
                className="relative w-[500px] h-[500px] rounded-full overflow-hidden border border-[#00FF99]/30 shadow-[0_0_60px_#00FF99aa]"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                {/* IMAGE */}
                <img
                  src="/images/portfolio_img.jpeg"
                  alt="Parvesh"
                  className="w-full h-full object-cover rotate-0 scale-100"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/10 to-transparent" />
              </motion.div>

              {/* Rotating Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#00FF99]/20"
                  style={{
                    width: `${500 + i * 25}px`,
                    height: `${500 + i * 25}px`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Floating Tech Labels */}
              {[
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className="absolute px-5 py-3 bg-[#0F1115]/90 border border-[#00FF99]/30 rounded-2xl text-[#00FF99] font-mono text-lg shadow-xl backdrop-blur-md"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}