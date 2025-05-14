

import type React from "react"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "../types"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-[#020817] border dark:border-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-fill"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1 + tagIndex * 0.05,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </motion.a>
          )}

          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-sm">Demo</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
