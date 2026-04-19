import { Code, Lightbulb, Lock, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up delay-100">
            <div className="bg-white dark:bg-[#020817] border border-transparent dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a full-stack developer with a passion for building
                comprehensive web solutions. I love bridging the gap between
                frontend and backend to create applications that look great and
                scale effortlessly.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My approach combines the interactivity of React and TypeScript
                on the client side with robust Node.js and Express backends. I
                also have a knack for structuring efficient MongoDB databases
                and ensuring security with JWT.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I&#39;m constantly learning and exploring new technologies to
                stay at the forefront of web development. I believe in the power
                of collaboration and enjoy working with teams to bring ideas to
                life.
              </p>
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <Code
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Proficient in Next.js, React, Redux, TypeScript, JavaScript, HTML,
                  CSS, and Tailwind CSS.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
                  <Server size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Backend Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Node.js, Express.js, MongoDB, REST APIs, and server-side architecture.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-4">
                  <Lock size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Authentication & Security</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  JWT authentication, secure password handling, and data protection best practices.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-full mb-4">
                  <Lightbulb
                    size={24}
                    className="text-pink-600 dark:text-pink-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strong analytical skills with a focus on finding efficient
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
