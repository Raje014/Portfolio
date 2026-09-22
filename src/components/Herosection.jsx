import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import Resume from "../assets/resume.pdf";
import Profile from '../assets/Profile.png'
import { Download, Mail } from "lucide-react";
import Hi from '../assets/Hi.png'

const Herosection = ({ darkMode }) => {
  const socialIcons = [
    {icon: instagram,alt: "Instagram"},
    {icon: github,alt: "GitHub"},
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:"text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:"text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font relative z-10"
      >
        <div
          className="container mx-auto flex flex-col
            items-center justify-between
            gap-10 px-4 py-12 sm:px-8 lg:mt-14
            lg:flex-row lg:gap-10 lg:px-14 lg:py-14 mt-14"
        >
          {/* LEFT SIDE */}
          <div
            className="mb-12 flex w-full flex-col items-center
              text-center lg:mb-0 lg:w-[48%] lg:items-start
              lg:text-left"
          >
            {/* SOCIAL ICONS */}
            <div
              className="mb-6 flex w-full justify-center
                gap-4 sm:gap-6 lg:justify-start"
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={`${400 + index * 100}`}
                  className=" transform transition-transform
                    duration-300 hover:scale-110"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`h-8 w-8 object-contain
                      sm:h-10 sm:w-10
                      ${darkMode ? "" : "brightness-75"}
                    `}
                  />
                </a>
              ))}
            </div>

            {/* HEADING */}
            <h1
              className={`title-font mb-4 text-3xl
                font-bold sm:text-4xl lg:text-5xl
                ${theme.textPrimary}
              `}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Rajalakshmi
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`mb-6 max-w-md leading-relaxed
                sm:mb-8 sm:max-w-lg
                ${theme.textSecondary}
              `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I am a Software Developer passionate about building
              responsive web applications using Python, Django,
              React, SQL and AI technologies.
            </p>

            {/* BUTTON */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col justify-center
                  gap-3 sm:flex-row sm:gap-4 lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a
                  href={Resume}
                  download
                  className="w-full sm:w-auto"
                >
                  <button
                    className="inline-flex w-full items-center
                      justify-center rounded-full border-0
                      bg-gradient-to-r from-orange-500 to-amber-500
                      px-6 py-3 text-base font-semibold text-white
                      transition-all duration-300
                      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                      sm:w-auto sm:px-8 sm:text-lg"
                  >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download CV
                  </button>
                </a>
                <a href="#contact" className='w-full sm:w-auto'>
                    <button className={`w-full sm:w-auto inline-flex
                      items-center ${theme.buttonSecondary}
                      justify-center border-0 py-3 px-6 sm:px-8
                      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                      rounded-full text-base sm:text-lg
                      font-semibold transition-all duration-300
                      transform`
                      }> 
                      <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                      Contact Me
                      </button>
                </a>
              </div>
            </div>
          </div>
          {/* right side */}
          <div
            className="mt-8 flex w-full max-w-md justify-center
            lg:mt-0 lg:w-[40%] lg:max-w-lg"
            data-aos="fade-left"
            data-aos-delay="400"
            >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
                {/* Profile Image */}
                <div className="relative">
                <img
                    src={Profile}
                    alt="Rajalakshmi"
                    className=" w-full h-auto object-contain
                    transform hover:scale-105 transition-transform
                    duration-500"
                />

                {/* Hi Sticker */}
                <img
                    src={Hi}
                    alt="Hi"
                    className="absolute top-2
                    left-8 sm:top-4 sm:left-12
                    w-14 h-14 sm:w-20 sm:h-20 object-contain
                    animate-bounce opacity-90 z-20"
                />
                </div>
            </div>
          </div>
        </div>
        <div className ={`absolute -top-20 -left-20 w-40 h-40
        sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
        mix-blended-multiply filter blur-3xl opacity-10 animate-pulse
        delay-1000 hidden sm:block`}   
        >
        </div>
      </section>
    </div>
  );
};

export default Herosection;