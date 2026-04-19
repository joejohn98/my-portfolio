import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

import Header from "@/components/Header";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import EmailJsInit from "@/components/EmailJSInit";
import Footer from "@/sections/Footer";

export default function Page() {
  return (
    <>
      <EmailJsInit />
      <div className="min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
