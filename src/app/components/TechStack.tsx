import { motion } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Boxes,
  Cpu,
  Brain,
  Network,
} from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "#00FF99",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    name: "Backend",
    icon: Database,
    color: "#00D9FF",
    techs: ["Node.js", "Django", "FastAPI", "Flask", "Express"],
  },
  {
    name: "AI/ML",
    icon: Brain,
    color: "#a855f7",
    techs: ["PyTorch", "TensorFlow", "YOLO", "CNN", "LSTM", "GNN"],
  },
  {
    name: "Databases",
    icon: Boxes,
    color: "#fbbf24",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "#f472b6",
    techs: ["Docker", "AWS", "GCP", "Kubernetes", "CI/CD"],
  },
  {
  name: "Security",
  icon: Shield,
  color: "#00FF99",
  techs: [
    "SIEM",
    "Graylog",
    "OpenSearch",
    "Filebeat",
    "Winlogbeat",
    "Sidecar",
    "Syslog",
    "CEF",
    "Grok",
    "Blockchain",
    "Cryptography",
    "Federated Learning",
    "Privacy"
  ],
},
  {
  name: "Research",
  icon: Cpu,
  color: "#00D9FF",
  techs: [
    "Medical Imaging",
    "OCT",
    "Deep Learning",
    "Computer Vision",
    "Explainable AI",
    "Federated Learning",
    "Machine Unlearning",
    "Post-Quantum Cryptography",
    "Blockchain",
    "Cyber-Physical Systems",
    "Smart Grids",
    "Quantum Computing"
  ],
},
  {
    name: "Tools",
    icon: Network,
    color: "#a855f7",
    techs: ["Git", "Linux", "VS Code", "Jupyter", "Postman"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#050505] via-[#0F1115] to-[#050505]">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#00FF99"
              strokeWidth="1"
              className="absolute inset-0"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold text-[#F5F5F5] mb-4">
            Tech <span className="text-[#00FF99]">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />
          <p className="text-[#9ca3af] mt-6 max-w-2xl mx-auto">
            Cutting-edge technologies powering next-generation solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="group relative"
              >
                {/* Card */}
<div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0F1115] to-[#0F1115]/50 border border-[#00FF99]/20 backdrop-blur-sm">                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}, #00FF99, ${category.color})`,
                      backgroundSize: '200% 200%',
                      padding: '1px',
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
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: `${category.color}10`,
                        border: `1px solid ${category.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-[#F5F5F5] mb-4">
                      {category.name}
                    </h3>

                    {/* Technologies */}
                    <div className="space-y-2">
                      {category.techs.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2 text-[#9ca3af] text-sm"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: category.color }}
                          />
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${category.color}40, transparent 70%)`,
                    }}
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
