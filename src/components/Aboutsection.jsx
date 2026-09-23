import SkillImg from '../assets/SkillImg.png'

const Aboutsection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}>
      <div
        className="max-w-6xl w-full grid
          grid-cols-1 lg:grid-cols-2 gap-8
          sm:gap-12 items-center">
        {/* IMAGE / SHAPE */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className=" flex flex-wrap justify-center
            gap-4 relative order-2 lg:order-1">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* STAR SHAPE */}
            <div
              className="absolute -inset-8 lg:-inset-12
                bg-gradient-to-r from-orange-500 via-orange-400
                to-amber-500 star-shape z-0 rotate-12"
              data-aos="zoom-in"
              data-aos-delay="600">
            </div>
            <img src={SkillImg} alt="About Image"
            className='absolute insert-0 w-full h-full
            object-cover z-10 transition-all duration-300' 
            data-aos='zoom-in'
            data-aos-delay='400'/>
          </div>
        </figure>
        <article
        data-aos='fade-left'
        data-aos-delay='300'
        className='text-center lg:text-left relative order-1 lg:order-2'>
            <header>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 
                text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
                data-aos='fade-up'
                data-aos-delay='400'>About Me</h1>
            </header>
            <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r 
                from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
                ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                data-aos='fade-up'
                data-aos-delay='500'>
                I’m a Computer Science Engineering graduate and Software Developer with a strong interest in building responsive web applications, 
                intelligent systems, and practical technology solutions. I enjoy working across the frontend and backend, using technologies such as 
                Python, Django, React, SQL, and AI. I’m a creative, curious, and continuous learner who enjoys exploring new technologies and improving my 
                development skills.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <div className="text-center" data-aos='zoom-in' data-aos-delay='600'>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">5+</div>
                    <div className={`text-xs sm:text-sm lg:text-base
                        ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Projects
                        </div>
                </div>
                <div className="text-center" data-aos='zoom-in' data-aos-delay='600'>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">2+</div>
                    <div className={`text-xs sm:text-sm lg:text-base
                        ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Internships
                    </div>
                </div>
                <div className="text-center" data-aos='zoom-in' data-aos-delay='600'>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">10+</div>
                    <div className={`text-xs sm:text-sm lg:text-base
                        ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Technologies
                    </div>
                </div>
            </div>
            <button className={`w-full sm:w-auto border-2 border-orange-500 
                ${darkMode ? 'text-white bg-orange-500/10 ' : 'text-gray-800 bg-white/90'} 
                inline-flex items-center justify-center py-3 px-6 sm:px-8 
                hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] 
                rounded-full text-base sm:text-lg font-semibold transition-all duration-300`}> 
                Learn More
            </button>
        </article>
      </div>
    </section>
  );
};

export default Aboutsection;