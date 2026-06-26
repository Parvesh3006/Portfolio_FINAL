import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initializing Neural Systems...");

  const loadingTexts = [
    "Initializing Neural Systems...",
    "Loading AI Modules...",
    "Synchronizing Research Nodes...",
    "Rendering Intelligent Interface..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 800);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00FF99 1px, transparent 1px),
            linear-gradient(to bottom, #00FF99 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF99] to-transparent opacity-10"
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo/Title */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-12"
      >
        <h1 className="font-heading text-6xl font-bold text-[#F5F5F5] tracking-wider">
          P<span className="text-[#00FF99]">S</span>
        </h1>
        <motion.div
          className="absolute -inset-4 bg-[#00FF99] rounded-full blur-2xl opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Progress Bar */}
      <div className="relative w-80 h-1 bg-[#0F1115] rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00FF99] to-[#00D9FF]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#00FF99] blur-md opacity-50"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Progress Text */}
      <motion.div
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-[#00FF99] font-mono text-sm"
      >
        {text}
      </motion.div>

      {/* Percentage */}
      <div className="mt-2 text-[#F5F5F5] font-mono text-2xl font-bold">
        {progress}%
      </div>

      {/* Circular HUD Elements */}
      <div className="absolute top-20 right-20">
        <motion.div
          className="w-32 h-32 border border-[#00FF99] rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-32 h-32 border-t-2 border-[#00FF99] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
