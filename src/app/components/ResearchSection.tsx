import { motion } from "motion/react";

import {
  FileText,
  TrendingUp,
  Award,
  ExternalLink,
  User,
} from "lucide-react";

import BorderGlow from "./ui/BorderGlow";

const research = [
  {
    title: "Smart City CPS Platform",

    abstract:
      "Secure cyber-physical systems for smart city infrastructure.",

    technologies: ["IoT", "CPS", "Flask", "Security"],

    innovation:
      "Privacy-preserving communication protocols for smart infrastructure.",

    status: "Published",

    impact: "Deployed in pilot smart city program.",

    authorProfile:
      "https://orcid.org/0009-0007-5923-4767",

    publicationLink:
      "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003521525-11/critical-infrastructure-protection-encompassing-difficulties-cyber-physical-system-stability-security-privacy-forensics-smart-cities-anirudh-sachin-kiran-aravind-vittal-prasad-parvesh-gurhoshiaa-gnana-swathika",
  },

  {
    title: "QuantumShield EdgeChain",

    abstract:
      "VLSI-enabled quantum-resistant blockchain architecture integrating AI-driven intrusion detection and computer vision for secure IoT edge systems and autonomous networks.",

    technologies: [
      "Post-Quantum Cryptography",
      "Blockchain",
      "VLSI",
      "Edge AI",
      "Computer Vision",
      "YOLOv8",
      "CNN-LSTM",
      "Graph Neural Networks",
      "TensorFlow Lite",
      "PyTorch",
      "IoT Security",
      "ASIC Design",
      "FPGA",
      "Cadence",
      "Synopsys",
    ],

    innovation:
      "Integrated lattice-based quantum-resistant blockchain with AI-powered IDS and real-time computer vision optimized for embedded IoT edge devices.",

    status: "Published",

    impact:
      "Achieved 95%+ IDS accuracy, real-time YOLOv8 threat detection, and ultra-low latency quantum-secure blockchain operations for edge systems.",

    authorProfile:
      "https://ieeexplore.ieee.org/author/762979062102591",

    publicationLink:
      "https://ieeexplore.ieee.org/document/11484519",
  },

  {
  title: "Deep Learning–Driven OCT Skin Layer Analysis for Diabetic Foot Ulcer Detection",

  abstract:
    "Automated deep learning framework for OCT skin layer segmentation and quantitative thickness analysis in diabetic foot patients using custom BARS-UNet architectures.",

  technologies: [
    "Deep Learning",
    "Medical Imaging",
    "OCT",
    "PyTorch",
    "U-Net",
    "Swin-UNet",
    "MedSAM",
    "Computer Vision",
    "Grad-CAM",
    "CNN",
    "Image Segmentation",
    "Boundary Analysis"
  ],

  innovation:
    "Novel Boundary-Aware Residual Squeeze U-Net (BARS-UNet) framework integrating residual learning, squeeze-and-excitation attention, boundary-aware feature branches, and quantitative thickness analysis for diabetic foot OCT imaging.",

  status: "Under Review",

  impact:
    "Achieved 0.8518 Dice score for DFU segmentation, 0.9567 AUC-ROC clinical classification accuracy, and automated analysis across 3200+ OCT skin images.",

  publicationLink:
    "https://www.pdffiller.com/s/JHRp5CmoW",
},

  {
  title: "FedUnlearnGuard",

  abstract:
    "Secure federated machine unlearning framework integrating blockchain auditability, anomaly detection, and differential privacy against poisoning attacks in decentralized AI systems.",

  technologies: [
    "Federated Learning",
    "Machine Unlearning",
    "Blockchain",
    "Differential Privacy",
    "PyTorch",
    "Cybersecurity",
    "Anomaly Detection",
    "Isolation Forest",
    "Graph Clustering",
    "Privacy-Preserving AI"
  ],

  innovation:
    "Multi-layer federated defense architecture combining secure machine unlearning, blockchain-based audit trails, reputation-driven client selection, and real-time poisoning attack detection.",

  status: "Published",

  impact:
    "Achieved 98.5% model accuracy under 10% Byzantine poisoning attacks with ε ≤ 0.5 differential privacy guarantees and 99.1% inference confidence.",

  publicationLink:
    "https://www.pdffiller.com/s/zojz3abU",
},
  {
  title: "GPS Spoofing Detection for UAVs",

  abstract:
    "Real-time hybrid UAV GPS spoofing detection framework integrating physics-based kinematic validation and machine learning anomaly detection for autonomous aerial cybersecurity.",

  technologies: [
    "Machine Learning",
    "UAV Security",
    "FastAPI",
    "Random Forest",
    "WebSocket",
    "Cybersecurity",
    "Python",
    "Anomaly Detection",
    "Real-Time Systems",
    "GPS Spoofing"
  ],

  innovation:
    "Dual-layer spoofing defense architecture combining physics-driven flight validation with AI-powered anomaly classification for explainable real-time UAV protection.",

  status: "Published",

  impact:
    "Achieved ~99% spoofing detection accuracy with sub-second real-time response across teleportation, drift, altitude spoofing, and time manipulation attacks.",

  publicationLink:
    "https://www.pdffiller.com/s/38C3WoZT9",
},

  {
    title: "Quantum Resistant Blockchain",

    abstract:
      "Post-quantum cryptographic protocols for future-proof blockchain security.",

    technologies: [
      "Blockchain",
      "Quantum Security",
      "Cryptography",
    ],

    innovation:
      "NIST-compliant quantum-resistant blockchain signatures.",

    status: "In Progress",

    impact: "Future-proof decentralized security framework.",
  },

  {
    title: "Q-FairGrid Optimizer",

    abstract:
      "Quantum-inspired genetic algorithm framework for fairness-aware multi-objective power allocation and optimization in smart grid digital twin environments.",

    technologies: [
      "Quantum Computing",
      "Genetic Algorithms",
      "Smart Grid",
      "Digital Twin",
      "Optimization",
      "Python",
      "Evolutionary Computing",
      "Cyber-Physical Systems",
      "Multi-Objective Optimization",
      "AI",
    ],

    innovation:
      "Adaptive quantum-inspired genetic optimization using qubit chromosome encoding, adaptive rotation gates, fairness-aware allocation, and adversarially resilient resource optimization.",

    status: "In Review",

    impact:
      "Achieved 44% reduction in unfairness, improved resilience under cyberattack scenarios, and faster convergence compared to classical GA and NSGA-II methods.",

    publicationLink:
      "https://www.pdffiller.com/s/ZF4csvF9",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-32">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#00FF99] to-transparent"
            style={{
              left: `${i * 3.3}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Research <span className="text-[#00FF99]">Portfolio</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />

          <p className="text-[#9ca3af] mt-6 max-w-2xl mx-auto">
            Advancing AI, cybersecurity, blockchain, medical imaging,
            and intelligent edge systems through research and innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {research.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >

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
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-[#0F1115] to-black border border-[#00FF99]/20 overflow-hidden">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#00FF99]/10 to-[#00D9FF]/10" />

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-center justify-between mb-5">

                    <span
                      className={`px-4 py-1 rounded-full text-xs font-mono border ${
                        paper.status === "Published"
                          ? "bg-[#00FF99]/10 text-[#00FF99] border-[#00FF99]/30"
                          : "bg-[#00D9FF]/10 text-[#00D9FF] border-[#00D9FF]/30"
                      }`}
                    >
                      {paper.status}
                    </span>

                    <FileText className="w-5 h-5 text-[#00FF99]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {paper.title}
                  </h3>

                  {/* Abstract */}
                  <p className="text-[#9ca3af] text-sm leading-relaxed mb-5 line-clamp-3">
                    {paper.abstract}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {paper.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-[#00FF99]/10 text-[#00FF99] text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Innovation */}
                  <div className="mb-5 p-4 rounded-2xl bg-[#00FF99]/5 border border-[#00FF99]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#00FF99]" />
                      <span className="text-[#00FF99] text-sm font-semibold">
                        Key Innovation
                      </span>
                    </div>

                    <p className="text-[#9ca3af] text-sm">
                      {paper.innovation}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="flex items-start gap-2 text-[#00D9FF] mb-6">
                    <TrendingUp className="w-5 h-5 mt-1" />
                    <span className="text-sm font-medium leading-relaxed">
                      {paper.impact}
                    </span>
                  </div>

                  {/* LINKS */}
                  {(paper.publicationLink || paper.authorProfile) && (

                    <div
                      className={`flex gap-3 mt-auto ${
                        paper.publicationLink && !paper.authorProfile
                          ? "justify-center"
                          : "flex-wrap"
                      }`}
                    >

                      {/* View Paper */}
                      {paper.publicationLink && (
                        <a
                          href={paper.publicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl 
                          bg-cyan-400/10 border border-cyan-400/30 
                          text-cyan-300 hover:bg-cyan-400 hover:text-black 
                          transition-all duration-300 text-sm font-medium
                          
                          ${
                            paper.publicationLink && !paper.authorProfile
                              ? "w-full max-w-[260px]"
                              : ""
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Paper
                        </a>
                      )}

                      {/* Author Profile */}
                      {paper.authorProfile && (
                        <a
                          href={paper.authorProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 rounded-2xl 
                          bg-green-400/10 border border-green-400/30 
                          text-green-300 hover:bg-green-400 hover:text-black 
                          transition-all duration-300 text-sm font-medium"
                        >
                          <User className="w-4 h-4" />
                          Author Profile
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}