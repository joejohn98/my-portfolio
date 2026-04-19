import HeroClient from "@/sections/HeroClient";

export default function Hero() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "TypeScript",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];

  return <HeroClient skills={skills} />;
}
