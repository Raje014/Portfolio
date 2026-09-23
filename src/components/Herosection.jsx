import Resume from "../assets/Resume.pdf";
import Profile from "../assets/Profile.png";
import Hi from "../assets/Hi.png";

import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Herosection = ({ darkMode }) => {

  const socialIcons = [
    {
      icon: FaGithub,
      alt: "GitHub",
      link: "https://github.com/Raje014",
    },
    {
      icon: FaLinkedin,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/rajalakshmi014/",
    },
    {
      icon: FaInstagram,
      alt: "Instagram",
      link: "https://www.instagram.com/_black_pearl_014/",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white",
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
          className="
            container mx-auto flex flex-col
            items-center justify-between
            gap-10 px-4
            pt-20 pb-12
            sm:px-8 sm:pt-24
            lg:flex-row lg:gap-10
            lg:px-14 lg:pt-28 lg:pb-14"
        >

          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              mb-12 flex w-full flex-col
              items-center text-center
              lg:mb-0 lg:w-[48%]
              lg:items-start lg:text-left
            "
          >

            {/* ================= SOCIAL ICONS ================= */}
            <div
              className="
                mb-6 flex w-full justify-center
                gap-4 sm:gap-5
                lg:justify-start
              "
            >

              {socialIcons.map((social, index) => {

                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                    data-aos="fade-up"
                    data-aos-delay={`${400 + index * 100}`}
                    className="
                      group flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      border
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    "
                    style={{
                      color: darkMode ? "#d1d5db" : "#374151",
                      borderColor: darkMode ? "#374151" : "#d1d5db",
                      backgroundColor: darkMode
                        ? "#1f2937"
                        : "#ffffff",
                    }}
                  >

                    <Icon
                      className="
                        h-5 w-5
                        transition-all duration-300
                        group-hover:text-orange-500
                      "
                    />

                  </a>
                );
              })}

            </div>

            {/* ================= HEADING ================= */}
            <h1
              className={`
                title-font mb-4 text-3xl
                font-bold sm:text-4xl lg:text-5xl
                ${theme.textPrimary}
              `}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Rajalakshmi
            </h1>

            {/* ================= DESCRIPTION ================= */}
            <p
              className={`
                mb-6 max-w-md leading-relaxed
                sm:mb-8 sm:max-w-lg
                ${theme.textSecondary}
              `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I’m a Software Developer focused on building responsive web applications 
              and intelligent solutions using Python, Django, React, SQL, and AI technologies. 
              I enjoy transforming ideas into practical, user-focused applications and solving 
              real-world problems through technology.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="w-full pt-4 sm:pt-6">

              <div
                className="
                  flex flex-col justify-center
                  gap-3 sm:flex-row sm:gap-4
                  lg:justify-start
                "
                data-aos="fade-up"
                data-aos-delay="700"
              >

                {/* DOWNLOAD CV */}
                <a
                  href={Resume}
                  download
                  className="w-full sm:w-auto"
                >
                  <button
                    className="
                      inline-flex w-full
                      items-center justify-center
                      rounded-full border-0
                      bg-gradient-to-r
                      from-orange-500 to-amber-500
                      px-6 py-3
                      text-base font-semibold text-white
                      transition-all duration-300
                      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                      sm:w-auto sm:px-8 sm:text-lg
                    "
                  >
                    <Download
                      className="
                        mr-2 h-4 w-4
                        sm:h-5 sm:w-5
                      "
                    />

                    Download CV
                  </button>
                </a>

                {/* CONTACT ME */}
                <a
                  href="#contact"
                  className="w-full sm:w-auto"
                >
                  <button
                    className={`
                      w-full sm:w-auto
                      inline-flex items-center
                      justify-center
                      ${theme.buttonSecondary}
                      border-2
                      py-3 px-6 sm:px-8
                      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                      rounded-full
                      text-base sm:text-lg
                      font-semibold
                      transition-all duration-300
                    `}
                  >

                    <Mail
                      className="
                        mr-2 h-4 w-4
                        sm:h-5 sm:w-5
                      "
                    />

                    Contact Me

                  </button>
                </a>

              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              mt-8 flex w-full
              justify-center
              lg:mt-0 lg:w-[48%]
              lg:max-w-xl
            "
            data-aos="fade-left"
            data-aos-delay="400"
          >

            <div className="relative w-4/5 sm:w-4/5 lg:w-full">

              {/* PROFILE IMAGE */}
              <div className="relative">

                <img
                  src={Profile}
                  alt="Rajalakshmi"
                  className="
                    w-full h-auto
                    object-contain
                    transform
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* HI STICKER */}
                <img
                  src={Hi}
                  alt="Hi"
                  className="
                    absolute top-2 left-8
                    sm:top-4 sm:left-12
                    w-14 h-14
                    sm:w-20 sm:h-20
                    object-contain
                    animate-bounce
                    opacity-90
                    z-20
                  "
                />
              </div>
            </div>
          </div>
        </div>
        {/* ================= DECORATIVE CIRCLE ================= */}
        <div
          className={`
            absolute -top-20 -left-20
            w-40 h-40
            sm:w-64 sm:h-64
            ${theme.decorativeCircle}
            rounded-full
            mix-blended-multiply
            filter blur-3xl
            opacity-10
            animate-pulse
            delay-1000
            hidden sm:block
          `}
        />

      </section>

    </div>
  );
};

export default Herosection;