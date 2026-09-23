import Html from '../assets/Html.png'
import Css from '../assets/Css.png'
import Js from '../assets/Js.png'
import Python from '../assets/Python.png'

const Skillsection = ({ darkMode }) => {

const skills = [
    { name: 'Python', icon: Python, level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'HTML', icon: Html, level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: Css, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Bootstrap', icon: Js, level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: Js, level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'React', icon: Python, level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'Ionic Angular', icon: Html, level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'Django', icon: Css, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'NumPy', icon: Js, level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'Pandas', icon: Css, level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'Matplotlib', icon: Js, level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'AI', icon: Css, level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'n8n Automation', icon: Js, level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'MySQL', icon: Css, level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'PostgreSQL', icon: Js, level: 70, color: 'from-indigo-500 to-violet-500' },
    { name: 'LangChain', icon: Css, level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'Git/GitHub', icon: Css, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Agile Methodology', icon: Js, level: 90, color: 'from-blue-500 to-cyan-500' }
];

    return (
        <section
            id="skills"
            style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
            className="py-14 relative overflow-hidden"
        >
            <div className="container px-5 py-14 mx-auto">

                {/* HEADING */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1
                        className="sm:text-4xl text-3xl font-bold title-font mb-4"
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                        My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Skills
                        </span>
                    </h1>

                    <p
                        className="text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                    >
                        Technologies and tools I use to build responsive,
                        scalable and intelligent applications.
                    </p>
                </div>

                {/* SKILL CARDS */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${300 + index * 100}`}
                            className="group"
                        >
                            <div
                                style={{
                                    background: darkMode
                                        ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                                        : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                                    borderColor: darkMode ? '#374151' : '#e5e7eb'
                                }}
                                className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgb(255,165,0,0.3)]"
                            >

                                {/* ICON + NAME */}
                                <div className="flex items-center gap-4 mb-6">

                                    <div
                                        style={{
                                            background: darkMode
                                                ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                                                : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
                                        }}
                                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h3
                                        className="text-xl font-semibold"
                                        style={{
                                            color: darkMode ? 'white' : '#1f2937'
                                        }}
                                    >
                                        {skill.name}
                                    </h3>

                                </div>

                                {/* PROFICIENCY */}
                                <div className="mb-2 flex justify-between items-center">

                                    <span
                                        className="font-medium"
                                        style={{
                                            color: darkMode ? '#d1d5db' : '#6b7280'
                                        }}
                                    >
                                        Proficiency
                                    </span>

                                    <span
                                        className="font-bold"
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                    >
                                        {skill.level}%
                                    </span>

                                </div>

                                {/* PROGRESS BAR */}
                                <div
                                    className="w-full rounded-full h-3 overflow-hidden"
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                    }}
                                >
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>

                                {/* BOTTOM ACCENT */}
                                <div
                                    className={`mt-6 pt-4 border-t ${
                                        darkMode ? 'border-gray-700' : 'border-gray-300'
                                    }`}
                                >
                                    <div
                                        className="h-1 rounded-full w-1/3 group-hover:w-full transition-all duration-500"
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skillsection