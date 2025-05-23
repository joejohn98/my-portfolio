import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { useEffect } from "react";
import { initEmailJS } from "./utils/emailjs";
import { EMAILJS_CONFIG } from "./utils/constants";

function App() {
  // Initialize EmailJS
  useEffect(() => {
    initEmailJS(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);
  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="font-[Inter] min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
