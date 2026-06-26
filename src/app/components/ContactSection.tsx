import { motion } from "motion/react";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [sending, setSending] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_h22simq",
        "template_l6fe8f8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "h9HZzKH7FimP62SQu"
      );

      setSuccessMessage("✅ Message has been sent successfully!");
      setErrorMessage("");
      setTimeout(() => {
  setSuccessMessage("");
}, 5000);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("❌ Failed to send message. Please try again.");
      setSuccessMessage("");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
  id="contact"
  className="relative py-32 overflow-hidden bg-gradient-to-b from-[#050505] via-[#0F1115] to-[#050505]"
>
      {/* Animated Waves */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FF99] to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold text-[#F5F5F5] mb-4">
            Get In <span className="text-[#00FF99]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] mx-auto rounded-full" />
          <p className="text-[#9ca3af] mt-6 max-w-2xl mx-auto">
            Let's collaborate on cutting-edge AI and full-stack projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0F1115] to-[#0F1115]/50 border border-[#00FF99]/20 backdrop-blur-sm">
              {/* Holographic UI Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #00FF99, #00D9FF, #00FF99)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-[#F5F5F5] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-[#00FF99]/30 text-[#F5F5F5] focus:border-[#00FF99] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-[#F5F5F5] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-[#00FF99]/30 text-[#F5F5F5] focus:border-[#00FF99] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
<div>
  <label className="block text-[#F5F5F5] font-medium mb-2">Message</label>
  <textarea
    value={formData.message}
    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    rows={5}
    className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-[#00FF99]/30 text-[#F5F5F5] focus:border-[#00FF99] focus:outline-none transition-colors resize-none"
    placeholder="Your message..."
  />
</div>

{/* Success Message */}
{successMessage && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 font-medium"
  >
    {successMessage}
  </motion.div>
)}

{/* Error Message */}
{errorMessage && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 font-medium"
  >
    {errorMessage}
  </motion.div>
)}

{/* Submit Button */}
<motion.button
  onClick={sendEmail}
  disabled={sending}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full px-8 py-4 bg-[#00FF99] text-[#050505] font-bold rounded-lg flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
>
  <span className="relative z-10 flex items-center gap-2">
    <Send className="w-5 h-5" />
    {sending ? "Sending..." : "Send Message"}
  </span>

  <motion.div
    className="absolute inset-0 bg-[#00D9FF]"
    initial={{ x: "-100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3 }}
  />
</motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: "parveshshanmugam@gmail.com",
                color: "#00FF99",
                link: "mailto:parvesh@example.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "Parvesh3006",
                color: "#00D9FF",
                link: "https://github.com/Parvesh3006",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Parvesh Shanmugam",
                color: "#a855f7",
                link: "https://www.linkedin.com/in/parvesh-shanmugam-a61991330/",
              },
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={i}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#0F1115] to-[#0F1115]/50 border border-[#00FF99]/20 backdrop-blur-sm"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${contact.color}15`,
                      border: `2px solid ${contact.color}40`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: contact.color }} />
                  </div>
                  <div>
                    <div className="text-[#9ca3af] text-sm">{contact.label}</div>
                    <div className="text-[#F5F5F5] font-medium">{contact.value}</div>
                  </div>

                  {/* Glow on Hover */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${contact.color}40, transparent 70%)`,
                    }}
                  />
                </motion.a>
              );
            })}

            {/* Resume Download */}
            <a
  href="/resume.pdf"
  download="Parvesh_Shanmugam_Resume.pdf"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full p-6 rounded-2xl bg-gradient-to-r from-[#00FF99] to-[#00D9FF] text-[#050505] font-bold flex items-center justify-center gap-3 relative overflow-hidden group"
  >
    <Download className="w-6 h-6 z-10" />

    <span className="z-10">Download Resume</span>

    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00FF99]"
      initial={{ x: "-100%" }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
</a>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
