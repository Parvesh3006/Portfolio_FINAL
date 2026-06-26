import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden bg-[#050505] border-t border-[#00FF99]/10">
      {/* Background Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00FF99] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Glowing Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#00FF99] to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo & Motto */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="font-heading text-3xl font-bold text-[#F5F5F5] mb-2">
                P<span className="text-[#00FF99]">S</span>
              </h3>
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] rounded-full"
                animate={{
                  scaleX: [1, 1.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <p className="text-[#9ca3af] italic mb-4">
              "Engineering Intelligent Systems for the Future"
            </p>
            <p className="text-[#9ca3af] text-sm">
              Building at the intersection of AI research and full-stack engineering
            </p>
          </div>

          {/* Center - Quick Links */}
<div>
  <h4 className="text-[#F5F5F5] font-heading font-bold mb-4">
    Quick Links
  </h4>

  <ul className="space-y-2">
    {quickLinks.map((link, i) => (
      <motion.li
        key={link.name}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <a
          href={link.href}
          className="text-[#9ca3af] hover:text-[#00FF99] transition-colors inline-flex items-center gap-2 group"
        >
          <span className="w-0 group-hover:w-2 h-px bg-[#00FF99] transition-all duration-300" />

          {link.name}
        </a>
      </motion.li>
    ))}
  </ul>
</div>

          {/* Right - Social Links */}
          <div>
            <h4 className="text-[#F5F5F5] font-heading font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, link: "https://github.com/Parvesh3006", color: "#00FF99" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/parvesh-shanmugam-a61991330/", color: "#00D9FF" },
                { icon: Mail, link: "mailto:parveshshanmugam@gmail.com", color: "#a855f7" },
              ].map(({ icon: Icon, link, color }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="relative w-12 h-12 rounded-lg bg-[#0F1115] border border-[#00FF99]/20 flex items-center justify-center group"
                >
                  <Icon className="w-5 h-5 text-[#9ca3af] group-hover:text-[#00FF99] transition-colors" />
                  <motion.div
                    className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity"
                    style={{ background: color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[#00FF99]/10 text-center"
        >
          <p className="text-[#9ca3af] flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} - Parvesh Shanmugam -</span>
            <span className="hidden sm:inline">Built with Love</span>
            <Heart className="w-4 h-4 text-[#00FF99] fill-[#FF0000]" />
          </p>
        </motion.div>

        {/* Subtle Neon Glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#00FF99] to-transparent blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </footer>
  );
}
