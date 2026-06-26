import { motion } from "motion/react";
import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "MR GLOSS",

    description:
      "Premium automotive detailing website with immersive 3D animations and interactive user experience.",

    technologies: ["React", "Three.js", "Tailwind CSS", "Vite"],

    features: [
      "3D Product Showcase",
      "SEO Optimized",
      "Responsive Design",
      "Performance Optimized",
    ],

    color: "#00FF99",

    liveDemo: "https://www.mrglossceramiccoating.com/",

    github:
      "https://github.com/Rahulthesun/mr.gloss-next.js/tree/main/mr.gloss",
  },

  {
    title: "MERCARA EXPORTS",

    description:
      "B2B agro-export platform featuring premium product showcases and enterprise workflows.",

    technologies: ["React", "Node.js", "MongoDB", "Express"],

    features: [
      "Product Catalog",
      "B2B Portal",
      "Export Management",
      "Analytics Dashboard",
    ],

    color: "#00D9FF",

    liveDemo: "https://mercara-exports.vercel.app/",

    github: "https://github.com/Parvesh3006/mercara-exports",
  },

  {
    title: "Dental Clinic Management",

    description:
      "Full-stack appointment management system optimizing clinic workflows and patient experience.",

    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],

    features: [
      "Appointment Scheduling",
      "Patient Records",
      "Billing System",
      "Analytics",
    ],

    color: "#a855f7",

    liveDemo: "https://www.smileywood.in/",

    github: "https://github.com/Rahulthesun/drbharad_v2",
  },

  {
    title: "ZYPH26 Summit App",

    description:
      "Large-scale event management platform for tech summit with 500+ participants.",

    technologies: ["React", "Firebase", "Tailwind CSS"],

    features: [
      "Event Registration",
      "Schedule Management",
      "Live Updates",
      "Networking",
    ],

    color: "#fbbf24",

    github: "https://github.com/Rahulthesun/zeph",
  },

  {
    title: "AI Nursing Competency Platform",

    description:
      "LLM-powered adaptive learning system with AI-generated quizzes and personalized education modules.",

    technologies: ["React", "OpenAI API", "Python", "FastAPI"],

    features: [
      "AI Quiz Generation",
      "Adaptive Learning",
      "Progress Tracking",
      "Personalization",
    ],

    color: "#f472b6",

    github: "https://github.com/Parvesh3006/Nurse-Mentor-AI",
  },

  {
  title: "EaseeCode (Teen Syntax)",

  description:
    "A full-stack programming education platform designed to help students learn Python from scratch through structured learning modules, interactive quizzes, progress tracking, animated educational content, and an integrated multi-language coding environment.",

  technologies: [
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "JavaScript",
    "Vercel"
  ],

  features: [
    "Python Learning Modules",
    "Interactive Quizzes",
    "Progress Tracking",
    "Animated Video Lessons",
    "Online Code Editor",
    "Multi-Language Compiler",
    "Real-Time Code Execution",
    "Student Learning Dashboard"
  ],

  color: "#38bdf8",

  liveDemo: "https://teen-syntax.vercel.app/",

  github: "https://github.com/Parvesh3006/Teen-syntax",
},
];

export default function ProjectsSection() {
  return (
<section id="projects" className="relative py-24 sm:py-32">

      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #00FF99 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
<h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
            Featured <span className="text-[#00FF99]">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />

          <p className="text-[#9ca3af] mt-6 max-w-2xl mx-auto">
            Production-ready applications spanning web development,
            AI, cybersecurity, enterprise systems, and intelligent platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
className="relative p-5 sm:p-8 rounded-3xl
                bg-gradient-to-br from-[#0F1115] to-black 
                border border-[#00FF99]/20 
                overflow-hidden backdrop-blur-sm"
              >

                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}15, transparent 70%)`,
                  }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, #00FF99, ${project.color})`,
                    backgroundSize: "200% 200%",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    <Zap
                      className="w-7 h-7"
                      style={{ color: project.color }}
                    />
                  </div>

                  {/* Title */}
<h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9ca3af] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full 
                        bg-[#00FF99]/10 
                        border border-[#00FF99]/30 
                        text-[#00FF99] text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[#9ca3af] text-sm"
                      >
                        <span className="text-[#00FF99]">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    {/* Live Demo Button ONLY if available */}
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-3 rounded-2xl 
                        bg-[#00FF99]/10 border border-[#00FF99]/30 
                        text-[#00FF99] font-medium 
                        flex items-center justify-center gap-2 
                        hover:bg-[#00FF99]/20 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}

                    {/* GitHub Button */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-3 rounded-2xl 
                      bg-[#0F1115] border border-[#00FF99]/20 
                      text-white font-medium 
                      flex items-center justify-center gap-2 
                      hover:border-[#00FF99]/40 transition-all duration-300
                      ${project.liveDemo ? "flex-1" : "w-full"}`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>

                  </div>
                </div>

                {/* Reflection Effect */}
                <motion.div
                  className="absolute -inset-full 
                  bg-gradient-to-r from-transparent via-white/5 to-transparent 
                  opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />

                {/* Outer Glow */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}30, transparent 70%)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}