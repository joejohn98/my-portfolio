import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
