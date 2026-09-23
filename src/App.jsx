import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection'
import Skillsection from './components/Skillsection'
import Projectsection from './components/Projectsection'
import Contactsection from './components/Contactsection'
import Footersection from './components/Footersection'
import Experiencesection from './components/Experiencesection'
import Educationsection from './components/Educationsection'
import Achievement from './components/Achievement'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration:1000,
      once: false,
      offset: 100
    });
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Herosection darkMode={darkMode} />
      <Aboutsection darkMode={darkMode} />
      <Skillsection darkMode={darkMode} />
      <Experiencesection darkMode={darkMode} />
      <Achievement darkMode={darkMode} />
      <Projectsection darkMode={darkMode}/>
      <Educationsection darkMode={darkMode} />
      <Contactsection darkMode={darkMode} />
      <Footersection darkMode={darkMode} />
    </div>
  )
}

export default App
