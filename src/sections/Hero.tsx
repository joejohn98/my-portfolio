
import type React from "react"
import Button from "../components/Button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"


const Hero: React.FC = () => {
  const skills = [
    "React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={container}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-gray-900 dark:text-white mb-4"
            variants={item}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Joe John</span>
            <span className="block mt-2">Frontend Developer</span>
          </motion.h1>

          <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg" variants={item}>
            I craft responsive websites where technology meets creativity. Passionate about building excellent software
            that improves the lives of those around me.
          </motion.p>

          <motion.div className="flex flex-wrap gap-2 mt-8" variants={container}>
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-gray-200 dark:bg-[#27374d] px-3 py-1 rounded-full text-sm font-medium"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="flex flex-wrap gap-4 mt-10" variants={item}>
            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Projects
            </Button>
            <Button variant="outline" onClick={() => window.open("/resume.pdf", "_blank")} className="gap-1">
              Resume <ExternalLink size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
