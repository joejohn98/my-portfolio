import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#020817] py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {year} All rights reserved. Built with <span className="text-destructive">❤</span> by Joe John</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;