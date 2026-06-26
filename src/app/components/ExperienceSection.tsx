import { motion } from "motion/react";
import { Building2, ChevronDown } from "lucide-react";
import { useState } from "react";
import BorderGlow from "./ui/BorderGlow";

import image1 from "../../../images/image_1.jpg";
import image2 from "../../../images/image_2.jpg";
import image3 from "../../../images/image_3.jpg";

const experiences = [
  {
    company: "VIT Chennai",
    role: "Smart City Research Assistant",
    duration: "2024",
    technologies: ["Flask", "IoT", "CPS", "Python"],
    image: image1,
    achievements: [
      "Designed Flask APIs for CPS communication",
      "Implemented privacy-preserving protocols",
      "Integrated smart infrastructure systems",
      "Published research on secure CPS platforms",
    ],
  },

  {
  company: "VIT Chennai",
  role: "Research Assistant - OCT Based Diabetic Foot Ulcer Analysis",
  duration: "2024 - 2026",
  technologies: [
    "Python",
    "PyTorch",
    "OpenCV",
    "NumPy",
    "Pandas",
    "U-Net",
    "U-Net++",
    "DeepLabV3+",
    "Attention U-Net",
    "Dense U-Net",
    "ResNet34",
    "ResNet50",
    "DenseNet121",
    "EfficientNet-B4",
    "VGG16",
    "Swin-UNet",
    "MedSAM",
    "Vision Transformers",
    "Grad-CAM",
    "COCO",
    "CLAHE",
    "Gaussian Filtering",
    "Logistic Regression",
    "Scikit-Learn"
  ],
  achievements: [
    "Developed automated OCT skin-layer segmentation pipelines for diabetic foot ulcer analysis",
    "Annotated and processed 700+ OCT images with pixel-level segmentation masks",
    "Designed and evaluated 11 deep learning architectures for multi-class medical image segmentation",
    "Achieved a Dice score of 0.8518 on DFU skin-layer segmentation using a custom Residual U-Net framework",
    "Built boundary-based thickness analysis and clinical classification pipelines achieving 0.9567 AUC-ROC",
    "Performed explainable AI analysis using Grad-CAM to validate clinically relevant model attention"
  ],
},

  {
    company: "BUILDIFY",
    role: "Chief Developer",
    duration: "2024-Present",
    technologies: [
      "Next.js",
      "React.js",
      "Three.js",
      "Node.js",
      "MongoDB",
      "SEO Optimization",
      "Tailwind CSS",
      "JavaScript",
      "Full Stack Development",
    ],
    achievements: [
      "Developed MR GLOSS – a premium automotive business website with advanced Three.js animations and interactive UI experiences",
      "Implemented SEO optimization, chatbot integration, lead-generation workflows, and responsive rendering for enhanced customer engagement",
      "Built and deployed the Dental Clinic Management System for Dr. Bharads with appointment booking, service management, and patient workflows",
      "Created responsive frontend interfaces and backend operational workflows for healthcare management systems",
      "Developed and delivered the official ZYPH26 Summit App platform for the Nilgiris Calls Global Summit | ZYPH Hackathon at KCT Tech Park, Coimbatore",
      "Implemented scalable event registration systems, participant engagement modules, and responsive cross-device compatibility",
      "Represented BUILDIFY as an official sponsor and technical contributor for the ZYPH26 summit event",
    ],
    projects: [
      {
        name: "MR GLOSS – Premium Automotive Business Website",
        website: "https://www.mrglossceramiccoating.com/",
      },
      {
        name: "Dental Clinic Management System – Dr. Bharads",
        website: "https://www.smileywood.in/",
      },
      {
        name: "ZYPH26 Summit App – Official Event Platform",
        website: "BUILDIFY Official Sponsored Event Platform",
      },
    ],
  },

  {
    company: "ennVee Solutions Pvt Ltd",
    role: "Full Stack Developer Intern",
    duration: "2024-2025",
    technologies: ["React", "FastAPI", "MySQL", "Docker",  "Workbench", "Django", "REST APIs", "Djanngo Admin", "JavaScript" , "Python" , "Full Stack Development"],
    image: image2,
    achievements: [
      "Developed Skills Matrix Portal from scratch",
      "Implemented role-based workflow systems",
      "Optimized MySQL queries for enterprise scale",
      "Built enterprise resource management tools",
    ],
  },

  {
    company: "IXES Global Solutions",
    role: "Full Stack Developer Intern",
    duration: "2025",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    image: image3,
    achievements: [
      "Built production-grade full-stack systems",
      "Optimized backend performance by 40%",
      "Designed scalable database architecture",
      "Implemented secure REST API endpoints",
    ],
  },

  {
  company: "Thinksynq Solutions Pvt. Ltd.",
  role: "SIEM & Security Operations Intern",
  duration: "2026",
  technologies: [
    "Thinklog SIEM",
    "Graylog",
    "OpenSearch",
    "Filebeat",
    "Winlogbeat",
    "Sidecar",
    "Syslog",
    "CEF",
    "Grok",
    "Pipelines",
    "FortiGate",
    "Linux",
    "Ubuntu",
    "AlmaLinux",
    "SSH"
  ],
  achievements: [
    "Performed end-to-end SIEM administration and security monitoring on the Thinklog platform",
    "Created and optimized dashboards, streams, alerts, pipelines, and log enrichment workflows",
    "Developed custom detection queries for security event analysis and operational monitoring",
    "Integrated servers, firewalls, switches, and endpoints through centralized log collection",
    "Implemented log forwarding and onboarding procedures for enterprise infrastructure",
    "Gained hands-on experience in real-world SOC and cybersecurity operations"
  ],
},


];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00FF99 1px, transparent 1px),
              linear-gradient(to bottom, #00FF99 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold text-[#F5F5F5] mb-4">
            Professional <span className="text-[#00FF99]">Experience</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FF99] via-[#00D9FF] to-[#00FF99]">
            <motion.div
              className="absolute w-2 h-2 bg-[#00FF99] rounded-full left-1/2 -translate-x-1/2"
              animate={{ y: [0, "100%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-[#050505] border-2 border-[#00FF99] rounded-full">
                  <motion.div
                    className="absolute inset-0 bg-[#00FF99] rounded-full"
                    animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0F1115] to-[#0F1115]/50 border border-[#00FF99]/20 backdrop-blur-sm cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() =>
                    setExpandedIndex(
                      expandedIndex === index ? null : index
                    )
                  }
                >
                {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF99]/0 via-[#00FF99]/50 to-[#00D9FF]/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                    fillOpacity={0.5}
                  >
                    <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#00FF99]/10 border border-[#00FF99]/30 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-[#00FF99]" />
                        </div>

                        <div>
                          <h3 className="text-xl font-heading font-bold text-[#F5F5F5]">
                            {exp.company}
                          </h3>

                          <p className="text-[#00D9FF] font-medium">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="text-[#9ca3af] font-mono text-sm">
                        {exp.duration}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#00FF99]/10 border border-[#00FF99]/30 text-[#00FF99] text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[#9ca3af]"
                          >
                            <span className="text-[#00FF99] mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {exp.image && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: expandedIndex === index ? 1 : 0,
      y: expandedIndex === index ? 0 : 20,
    }}
    transition={{ duration: 0.4 }}
    className="mt-8"
  >
    <div className="rounded-2xl border border-[#00FF99]/20 bg-[#0F1115] p-3">
      <img
        src={exp.image}
        alt={exp.company}
        className="
          w-full
          h-auto
          rounded-xl
          transition-all
          duration-300
          hover:scale-[1.01]
        "
      />
    </div>
  </motion.div>
)}
</motion.div>

                    {/* Expand Icon */}
                    <motion.div
                      className="flex items-center justify-center mt-4 text-[#00FF99]"
                      animate={{
                        rotate:
                          expandedIndex === index ? 180 : 0,
                      }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  </BorderGlow>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}