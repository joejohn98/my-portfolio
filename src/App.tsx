import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./sections/Hero";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
