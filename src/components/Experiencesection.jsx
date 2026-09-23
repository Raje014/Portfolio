const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      id: 1,
      role: "Developer Trainee / Developer Intern",
      company: "National Informatics Centre (NIC), Chennai",
      duration: "Jan 2026 – May 2026",
      description: [
        "Worked on real-world government software projects.",
        "Contributed to the redesign of the eDAR website interface.",
        "Developed a hybrid mobile application for geotagging temple locations.",
        "Worked with geospatial technologies and map-based interfaces.",
        "Collaborated with teams and followed development workflows."
      ],
      technologies: [
        "Ionic Angular",
        "TypeScript",
        "PostgreSQL",
        "PostGIS",
        "Leaflet",
        "QGIS",
        "GeoServer"
      ]
    },

    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Altruisty, Chennai",
      duration: "Jan 2025 – Mar 2025",
      description: [
        "Developed a Django-based quiz application.",
        "Worked with HTML, CSS, JavaScript and MySQL.",
        "Implemented CRUD operations and database integration.",
        "Contributed to both frontend and backend development.",
        "Improved application functionality through testing and debugging."
      ],
      technologies: [
        "Django",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL"
      ]
    },

    {
      id: 3,
      role: "Full Stack Developer Intern",
      company: "Retech Solutions, Chennai",
      duration: "Jun 2024",
      description: [
        "Developed Django-based web applications.",
        "Worked with Python, HTML, CSS and Bootstrap.",
        "Implemented backend functionality using Django.",
        "Integrated database operations into web applications.",
        "Tested applications and resolved development issues."
      ],
      technologies: [
        "Django",
        "Python",
        "HTML",
        "CSS",
        "Bootstrap"
      ]
    }
  ];

  return (
    <section
      id="experience"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb"
      }}
      className="py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{
              color: darkMode ? "#ffffff" : "#1f2937"
            }}
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              Experience
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280"
            }}
          >
            Hands-on experience through internships and real-world projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <div
            className="absolute left-[10px] sm:left-[15px] top-0 bottom-0 w-[2px]"
            style={{
              backgroundColor: darkMode ? "#374151" : "#e5e7eb"
            }}
          />

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative pl-10 sm:pl-14 pb-12 sm:pb-14 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              {/* Timeline Circle */}
              <div
                className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full border-4 flex items-center justify-center z-10"
                style={{
                  backgroundColor: darkMode ? "#111827" : "#f9fafb",
                  borderColor: "#f97316"
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#f97316"
                  }}
                />
              </div>

              {/* Experience Card */}
              <div
                style={{
                  background: darkMode
                    ? "linear-gradient(to right, #1f2937, #111827)"
                    : "linear-gradient(to right, #ffffff, #f9fafb)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb"
                }}
                className="
                  rounded-xl
                  border
                  p-5
                  sm:p-6
                  md:p-7
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:shadow-lg
                  hover:shadow-orange-500/10
                "
              >

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">

                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-1"
                      style={{
                        color: darkMode ? "#ffffff" : "#1f2937"
                      }}
                    >
                      {experience.role}
                    </h3>

                    <p
                      className="text-base sm:text-lg font-semibold"
                      style={{
                        color: "#f97316"
                      }}
                    >
                      {experience.company}
                    </p>
                  </div>

                  {/* Duration */}
                  <div
                    className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap"
                    style={{
                      backgroundColor: darkMode
                        ? "#374151"
                        : "#fff7ed",
                      color: darkMode
                        ? "#d1d5db"
                        : "#ea580c"
                    }}
                  >
                    {experience.duration}
                  </div>

                </div>

                {/* Description */}
                <ul className="space-y-2 mb-5">
                  {experience.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                      style={{
                        color: darkMode ? "#d1d5db" : "#4b5563"
                      }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: "#f97316"
                        }}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: darkMode
                          ? "#374151"
                          : "#fff7ed",
                        color: darkMode
                          ? "#d1d5db"
                          : "#4b5563",
                        borderColor: darkMode
                          ? "#4b5563"
                          : "#fed7aa"
                      }}
                      className="
                        px-3
                        py-1.5
                        text-xs
                        sm:text-sm
                        rounded-full
                        border
                        transition-all
                        duration-300
                        hover:border-orange-500
                        hover:text-orange-500
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;