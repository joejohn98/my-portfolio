const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-[#020817] transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="bg-white dark:bg-[#020817] border border-transparent dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate frontend developer with a strong foundation in
                building modern web applications. My journey in web development
                began over 5 years ago, and I've been in love with creating
                beautiful, functional user interfaces ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in React development, with expertise in TypeScript,
                modern JavaScript, and responsive design principles. I'm
                committed to writing clean, maintainable code and creating
                seamless user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or sharing my knowledge through
                blog posts and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
