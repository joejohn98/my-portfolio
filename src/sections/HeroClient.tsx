"use client";

import Button from "@/components/Button";
import { ExternalLink } from "lucide-react";

interface HeroClientProps {
  skills: string[];
}

export default function HeroClient({ skills }: HeroClientProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-gray-900 dark:text-white mb-4 animate-slide-up">
            {"Hi, I'm "}
            <span className="text-blue-600 dark:text-blue-400">Joe John</span>
            <span className="block mt-2">Fullstack Developer</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-slide-up delay-100">
            I'm a Fullstack Developer with a passion for creating beautiful,
            responsive, and user-friendly web experiences with modern
            technologies. Passionate about creating scalable applications that
            solve real problems.
          </p>

          <div className="flex flex-wrap gap-2 mt-8 animate-slide-up delay-200">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-[#27374d] px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10 animate-slide-up delay-300">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1tua18jrkM-9hauFLSuhGuNx0z5EkvggG/view?usp=drive_link",
                  "_blank",
                )
              }
              className="gap-1"
            >
              Resume <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
