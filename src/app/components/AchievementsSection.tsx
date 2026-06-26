import { motion } from "motion/react";
import { Award, BookOpen, Trophy, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Paper Award",
    description: "Recognition for outstanding research contribution in federated learning security",
    year: "2024",
    color: "#00FF99",
  },
  {
    icon: BookOpen,
    title: "Book Chapter Publication",
    description: "Published chapter in international book on AI and cybersecurity applications",
    year: "2024",
    color: "#00D9FF",
  },
  {
    icon: Star,
    title: "ZYPH Hackathon Sponsor",
    description: "Official sponsor and technical mentor for ZYPH26 tech summit",
    year: "2026",
    color: "#a855f7",
  },
  {
    icon: Award,
    title: "Research Excellence",
    description: "4 published research papers across AI, security, and medical imaging domains",
    year: "2024-2025",
    color: "#fbbf24",
  },
];

export default function AchievementsSection() {
  return (
<section className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #00FF99 0px, #00FF99 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, #00FF99 0px, #00FF99 1px, transparent 1px, transparent 40px)
            `,
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
<h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
            Achievements & <span className="text-[#00FF99]">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                {/* Card */}
<div className="relative p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F1115] to-[#0F1115]/50 border border-[#00FF99]/20 backdrop-blur-sm overflow-hidden">
                  {/* Metallic Shine */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${achievement.color}20, transparent)`,
                    }}
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />

                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(45deg, ${achievement.color}, #00FF99, ${achievement.color})`,
                      backgroundSize: '200% 200%',
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    {/* Icon & Year */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${achievement.color}15`,
                          border: `2px solid ${achievement.color}40`,
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: achievement.color }} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#00FF99]/10 text-[#00FF99] font-mono text-sm">
                        {achievement.year}
                      </span>
                    </div>

                    {/* Title */}
<h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F5] mb-3">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#9ca3af] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Trophy Glow */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${achievement.color}40, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Spotlight */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 opacity-0 group-hover:opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${achievement.color}, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
