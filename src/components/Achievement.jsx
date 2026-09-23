import {
  FaTrophy,
  FaMedal,
  FaLightbulb,
  FaVolleyballBall,
  FaUsers,
  FaAward
} from "react-icons/fa";

const Achievement = ({ darkMode }) => {
  const achievements = [
    {
      text: "Topper Trophy for outstanding academic performance in 2nd Semester.",
      icon: FaTrophy,
    },
    {
      text: "3rd Place at the college-level Innovation Competition for AgriVibe.",
      icon: FaMedal,
    },
    {
      text: "Presented a research idea at Intent 2.0 — an international conference organized by IETE, Chennai.",
      icon: FaLightbulb,
    },
    {
      text: "Best Volunteer Award for contributions during college sports events.",
      icon: FaVolleyballBall,
    },
    {
      text: "Joint Treasurer, Multimedia Club.",
      icon: FaUsers,
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-10 sm:mb-12 md:mb-14"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{
              color: darkMode ? "#ffffff" : "#1f2937",
            }}
          >
            Achievements{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              & Recognition
            </span>
          </h2>

          <p
            className="text-base sm:text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A few moments worth mentioning
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-xl border p-4 sm:p-5 flex items-center gap-4
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(249, 115, 22, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = darkMode
                    ? "#374151"
                    : "#e5e7eb";

                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl
                  flex items-center justify-center flex-shrink-0
                  transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: darkMode
                      ? "#374151"
                      : "#fff7ed",
                    color: "#f97316",
                  }}
                >
                  <Icon className="text-xl sm:text-2xl" />
                </div>

                {/* Text */}
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                    color: darkMode
                      ? "#d1d5db"
                      : "#374151",
                  }}
                >
                  {achievement.text}
                </p>

              </div>
            );
          })}

        </div>

        {/* Small bottom highlight */}
        <div
          className="flex justify-center mt-10"
          data-aos="fade-up"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              backgroundColor: darkMode
                ? "#1f2937"
                : "#fff7ed",
              color: darkMode
                ? "#fdba74"
                : "#ea580c",
            }}
          >
            <FaAward />
            <span>Learning • Creating • Contributing</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievement;