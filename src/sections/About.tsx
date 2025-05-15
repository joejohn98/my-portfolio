

import type React from "react"
import { Code, Globe, Lightbulb, Layers } from "lucide-react"
import { motion } from "framer-motion"

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-[#020817] border border-transparent dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate frontend developer with a strong foundation in building modern web applications. My
                journey in web development began over 2 years ago, and I've been in love with creating beautiful,
                functional user interfaces ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in React development, with expertise in TypeScript, modern JavaScript, and responsive
                design principles. I'm committed to writing clean, maintainable code and creating seamless user
                experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing
                my knowledge through blog posts and community engagement.
              </p>
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Proficient in React, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full mb-4">
                  <Layers size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">State Management</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Experience with Redux, Context API, and other state management solutions.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-4">
                  <Globe size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Responsive Design</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating websites that look great on all devices and screen sizes.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-full mb-4">
                  <Lightbulb size={24} className="text-pink-600 dark:text-pink-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strong analytical skills with a focus on finding efficient solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
