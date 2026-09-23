import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import Project5 from '../assets/Project5.png'
import Project6 from '../assets/Project6.png'
import Project7 from '../assets/Project7.png'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projectsection = ({darkMode}) => {
    const projects = [
    {
        id: 1,
        title: 'StyleNest - Ecommerce',
        desc: 'A full-stack ecommerce application built with Django, MySQL and Razorpay payment integration.',
        image: Project1,
        tags: ['Django', 'HTML', 'CSS', 'JavaScript', 'Razorpay API', 'MySQL'],
        github: 'https://github.com/Raje014/StyleNest---Wear-Your-Confidence-',
        demo: null
    },
    {
        id: 2,
        title: 'Hybrid Mobile Application',
        desc: 'A hybrid mobile application for managing and visualizing geotagged temple locations using Ionic Angular and Leaflet.',
        image: Project2,
        tags: ['Ionic Angular', 'HTML', 'CSS', 'TypeScript', 'Leaflet'],
        github: 'https://github.com/Raje014/hrce-final',
        demo: null
    },
    {
        id: 3,
        title: 'LinkedIn Automation Agent',
        desc: 'An automation workflow for generating and publishing LinkedIn content using AI, APIs and Google Sheets.',
        image: Project3,
        tags: ['n8n', 'Gemini API', 'LinkedIn API', 'Groq API', 'Google Sheets'],
        github: 'https://github.com/Raje014/Linkedin-Agent',
        demo: null
    },
    {
        id: 4,
        title: 'eDAR',
        desc: 'A redesigned web interface for the eDAR platform with a modern and responsive user experience.',
        image: Project4,
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Angular'],
        github: null,
        demo: 'https://irad.parivahan.gov.in/'
    },
    {
        id: 5,
        title: 'Instagram Clone',
        desc: 'A responsive Instagram-inspired frontend application built with React and CRUD operations.',
        image: Project5,
        tags: ['React', 'JSON DB', 'HTML', 'Bootstrap', 'CRUD'],
        github: 'https://github.com/Raje014/Instagram_clone',
        demo: null
    },
    {
        id: 6,
        title: 'Call Center Performance Dashboard',
        desc: 'An interactive Excel dashboard for analyzing call center performance, agent productivity and key metrics.',
        image: Project6,
        tags: ['Excel', 'Pivot Tables', 'Slicers', 'Data Visualization', 'Data Cleaning'],
        github: 'https://github.com/Raje014/call-center-performance-dashboard',
        demo: null
    },
    {
        id: 7,
        title: 'Vrta Motors',
        desc: 'A responsive automotive website developed using React, JavaScript, HTML, CSS and Bootstrap.',
        image: Project7,
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/Raje014/Car-Garage-Main',
        demo: 'https://www.vrtamotors.com/'
    }
    ];

  return (
    <section id="projects"
    style={{
        backgroundColor:darkMode ? '#111827' : '#f9fafb'
    }}
    className = 'relative py-24'>
        <div className="container mx-auto px-4">
            <div className="text-center mb-10" data-aos='fade-up'>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3"
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                My
                <span style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}> Projects
                </span>
                </h2>
                <p className='max-w-xl mx-auto'
                style={{
                    color: darkMode? '#d1d5db' : '#6b7280'
                }}>
                    A showcase of my recent works
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {projects.map((project, index) => (
                    <div key={project.id}
                    style={{
                        background : darkMode
                        ? 'linear-gradient(to-right, #1f2937, #111827)'
                        : 'linear-gradient(to-right, #ffffff, #f5fafb)'
                    }}
                    className={`group rounded-xl border transition-all duration-300 ${
                        darkMode
                        ? 'border-gray-500 hover:border-orange-500'
                        : 'border-gray-900 hover:border-orange-500'
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index*100}>
                        <div className="h-36 overflow-hidden rounded-t-xl">
                            <img src={project.image} alt={project.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform
                            duration-500' />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2"
                            style={{
                                color:darkMode? 'white' : '#1f2937'
                            }}>
                                {project.title}
                            </h3>
                            <p className="text-sm mb-3"
                            styel={{
                                color:darkMode? '#d1d5db' : '#6b7280'
                            }}>
                                {project.descrption}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx}
                                    style= {{
                                        backgroundColor: darkMode? '#374151' : '#f3f4f6',
                                        color: darkMode? '#d1d5db' : '#4b5563'
                                    }}
                                    className='px-2 py-1 text-x5 rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <a href={project.github}
                                target='_blank'
                                style={{
                                    backgroundColor: darkMode? '#374151' : '#f3f4f6',
                                    color: darkMode? 'white' : '#374151'
                                }}
                                className='flex-1 flex items-center justify-center gap-1.5
                                px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                data-aos='zoom-in'
                                data-aos-delay='300'>
                                    <FaGithub className="text-sm"/>
                                    <span>Code</span>
                                </a>
                                {/* demo */}
                                {project.demo ? (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                        }}
                                        className="flex-1 flex items-center justify-center gap-1.5
                                        px-3 py-2 text-sm rounded-lg text-white
                                        hover:shadow-lg hover:shadow-orange-500/25
                                        transition-all"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        <span>Demo</span>
                                    </a>
                                ) : (
                                    <Link
                                        to="/not-found"
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                        }}
                                        className="flex-1 flex items-center justify-center gap-1.5
                                        px-3 py-2 text-sm rounded-lg text-white
                                        hover:shadow-lg hover:shadow-orange-500/25
                                        transition-all"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        <span>Demo</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <a href="https://github.com/Raje014"
                style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)'
                }}
                className='inline-flex items-center gap-2 font-semibold
                px-7 py-4 text-sm rounded-full text-white hover:shadow-lg 
                hover:shadow-orange-500/25 transition-all'
                data-aos='zoom-in'
                data-aos-delay='300'>
                    <FaGithub />
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className="text-sm"/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projectsection