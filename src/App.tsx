
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
