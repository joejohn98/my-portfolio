import React from 'react'

const Hero:React.FC = () => {
const skills = ['React', 'JavaScript', 'TypeScript', 'Redux','Tailwind CSS', 'HTML','CSS']

  return (
     <section id="home" className="min-h-screen flex flex-col justify-center relative py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Joe John</span>
               <span className="block mt-2">Frontend Developer</span>
             </h1>

             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I craft responsive websites where technology meets creativity. 
            Passionate about building excellent software that improves the lives of those around me.
             </p>
          
          
          <div className="flex flex-wrap gap-2 mt-8 ">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-[#27374d] px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
         
        </div>
      </div>
      
      
    </section>
  )
}

export default Hero;
