import { motion } from "motion/react";
import { Code2, Database, Brain, Shield, Zap, Cpu } from "lucide-react";
const skills = [
  { icon: Brain, name: "AI/ML", color: "#00FF99" },
  { icon: Code2, name: "Full Stack", color: "#00D9FF" },
  { icon: Shield, name: "Security", color: "#a855f7" },
  { icon: Database, name: "Big Data", color: "#fbbf24" },
  { icon: Zap, name: "Edge AI", color: "#f472b6" },
  { icon: Cpu, name: "IoT/CPS", color: "#00FF99" },
];

const timeline = [
  { year: "2023/24", event: "Research Student" },
  { year: "2024/25", event: "Research Assistant" },
  { year: "2025", event: "AI Development & Full-Stack Internships" },
  { year: "2026", event: "Cybersecurity Research & Security Operations (SIEM) Intern" },
];
export default function AboutSection() {  
  return (
    <section
  id="about"
  className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]"
>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #00FF99 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
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
            About <span className="text-[#00FF99]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative"
>
<motion.div
  className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] mx-auto"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {/* Glow */}
    <motion.div
      className="absolute -inset-10 rounded-full bg-[#00FF99]/35 blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    />

    {/* Profile Image */}
    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#00FF99]/40 shadow-[0_0_40px_rgba(0,255,153,0.3)]">
      <img
        src="/cmbtr.jpeg"
        alt="Parvesh Shanmugam"
        className="
          w-full
          h-full
          object-cover
          object-center
          scale-100
          brightness-100
          contrast-100
          saturate-100
        "
      />

      <div className="absolute inset-0 bg-black/10" />
    </div>

    {/* Rotating Rings */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute border border-[#00FF99]/20 rounded-full"
        style={{
          inset: `${-10 - i * 15}px`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 15 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* Floating Tech Icons */}
    {skills.map((skill, i) => {
      const Icon = skill.icon;
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 235;

      return (
        <motion.div
          key={i}
          className="absolute w-14 h-14 rounded-full bg-[#0F1115] border-2 flex items-center justify-center shadow-lg"
          style={{
            left: "50%",
            top: "50%",
            borderColor: skill.color,
            x: Math.cos(angle) * radius - 28,
            y: Math.sin(angle) * radius - 28,
          }}
          animate={{
            y: [
              Math.sin(angle) * radius - 28,
              Math.sin(angle) * radius - 40,
              Math.sin(angle) * radius - 28,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <Icon
            className="w-6 h-6"
            style={{
              color: skill.color,
            }}
          />
        </motion.div>
      );
    })}
  </motion.div>
</motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#9ca3af] text-lg leading-relaxed">
              Passionate and detail-oriented{" "}
              <span className="text-[#00FF99] font-semibold">software developer</span> with experience in full-stack development, AI/ML, cloud technologies, and scalable system design. Skilled in building modern web applications, developing intelligent solutions, and working across frontend, backend, databases, and deployment workflows.
            </p>

            <p className="text-[#9ca3af] text-lg leading-relaxed">
              Strong interest in{" "}
              <span className="text-[#00D9FF] font-semibold">emerging technologies</span>,
              including Generative AI, cybersecurity, distributed systems, and data-driven applications, with a focus on creating impactful and efficient real-world solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 rounded-lg bg-[#0F1115] border border-[#00FF99]/20 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" style={{ color: skill.color }} />
                    <span className="text-[#F5F5F5] text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline */}
            <div className="space-y-4 pt-8">
              <h3 className="text-[#F5F5F5] font-heading text-2xl font-bold mb-6">Journey</h3>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 text-[#00FF99] font-mono font-bold">{item.year}</div>
                  <div className="w-2 h-2 rounded-full bg-[#00FF99]" />
                  <div className="text-[#9ca3af]">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
