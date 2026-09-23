import {FaGithub, FaLinkedin, FaInstagram, FaHeart} from 'react-icons/fa'

const Footersection = ({darkMode}) => {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer
        style={{
            background: darkMode
            ? 'linear-gradient(to bottom, #000000, #111827)'
            : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
            borderColor: darkMode ? '#374151' : '#d1d5db' 
        }}
        className='border-t'>
            <div className="container mx-auto px-4 py-8">
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <h3 className="text-2xl font-bold"
                    style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Portfolio
                    </h3>

                    <p className="text-sm"
                    style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                    }}>
                        Full Stack Developer & Software Engineer
                    </p>

                    <div className="flex gap-4">
                        <a href="https://github.com/Raje014" target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${darkMode ? 'bg-[#374151] text-white' : 'bg-[#e5e7eb] text-[#374151]'}`}>
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/rajalakshmi014" target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${darkMode ? 'bg-[#374151] text-white' : 'bg-[#e5e7eb] text-[#374151]'}`}>
                            <FaLinkedin />
                        </a>

                        <a href="https://www.instagram.com/_black_pearl_014/" className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${darkMode ? 'bg-[#374151] text-white' : 'bg-[#e5e7eb] text-[#374151]'}`}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className={`mt-6 pt-6 border-t text-center md:text-right ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className={`text-sm flex items-center justify-center md:justify-end gap-1 ${darkMode ? 'text-[#9ca3af]' : 'text-[#6b7280]'}`}>
                        © {currentYear} Made with
                        <FaHeart className="text-red-500" />
                        by <span className="text-[#f97316]">
                            Rajalakshmi
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footersection