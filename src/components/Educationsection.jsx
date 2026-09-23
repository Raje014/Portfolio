const Educationsection = ({ darkMode }) => {
  const education = [
    {
      title: "B.E — Computer Science Engineering",
      institution: "Jerusalem College of Engineering, Chennai",
      duration: "2022 – 2026",
      result: "CGPA: 9.0 / 10",
    },
    {
      title: "Higher Secondary (12th)",
      institution: "Daniel Thomas Matriculation Higher Secondary School, Chennai",
      duration: "2021 – 2022",
      result: "90%",
    },
    {
      title: "Secondary School (10th)",
      institution: "Daniel Thomas Matriculation Higher Secondary School, Chennai",
      duration: "2019 – 2020",
      result: "73%",
    },
  ];

  const certifications = [
    {
      title: "AWS Services Fundamentals for Beginners",
      organization: "Simplilearn SkillUp",
    },
    {
      title: "Build AI Agents using LangGraph",
      organization: "Simplilearn SkillUp",
    },
    {
      title: "Introduction to SQL",
      organization: "Simplilearn SkillUp",
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      organization: "Forage",
    },
  ];

  return (
    <section
      id="education"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{
              color: darkMode ? "#ffffff" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Education
            </span>
          </h2>

          <p
            className="text-base sm:text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            My academic background and certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto">

          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-5 sm:gap-7 pb-10 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div
                  className="absolute left-[7px] sm:left-[9px] top-5 w-[2px] h-full"
                  style={{
                    backgroundColor: darkMode
                      ? "#374151"
                      : "#d1d5db",
                  }}
                />
              )}

              {/* Timeline Dot */}
              <div
                className="relative z-10 mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 flex-shrink-0"
                style={{
                  backgroundColor: darkMode
                    ? "#111827"
                    : "#f9fafb",
                  borderColor: "#f97316",
                }}
              />

              {/* Education Content */}
              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">

                  <div>
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold"
                      style={{
                        color: darkMode ? "#ffffff" : "#1f2937",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-1 text-sm sm:text-base"
                      style={{
                        color: darkMode ? "#fb923c" : "#ea580c",
                      }}
                    >
                      {item.institution}
                    </p>
                  </div>

                  <span
                    className="text-sm sm:text-base font-medium"
                    style={{
                      color: darkMode ? "#9ca3af" : "#6b7280",
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                {/* Result Badge */}
                <div className="mt-3">
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-sm font-semibold"
                    style={{
                      backgroundColor: darkMode
                        ? "#374151"
                        : "#fff7ed",
                      color: darkMode
                        ? "#fed7aa"
                        : "#ea580c",
                    }}
                  >
                    {item.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className="max-w-5xl mx-auto mt-16 sm:mt-20"
          data-aos="fade-up"
        >
          <h3
            className="text-2xl sm:text-3xl font-bold mb-7"
            style={{
              color: darkMode ? "#ffffff" : "#1f2937",
            }}
          >
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {certifications.map((certificate, index) => (
              <div
                key={index}
                className="rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: darkMode
                    ? "linear-gradient(to right, #1f2937, #111827)"
                    : "linear-gradient(to right, #ffffff, #f9fafb)",

                  borderColor: darkMode
                    ? "#374151"
                    : "#e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#f97316";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = darkMode
                    ? "#374151"
                    : "#e5e7eb";
                }}
              >
                <div className="flex items-center gap-4">

                  {/* Certificate Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: darkMode
                        ? "#374151"
                        : "#fff7ed",
                      color: "#f97316",
                    }}
                  >
                    🎓
                  </div>

                  <div>
                    <h4
                      className="font-semibold text-base sm:text-lg"
                      style={{
                        color: darkMode
                          ? "#ffffff"
                          : "#1f2937",
                      }}
                    >
                      {certificate.title}
                    </h4>

                    <p
                      className="text-sm mt-1"
                      style={{
                        color: darkMode
                          ? "#9ca3af"
                          : "#6b7280",
                      }}
                    >
                      {certificate.organization}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Educationsection;