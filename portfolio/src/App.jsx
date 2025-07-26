import AnimatedBackground from "./components/AnimatedBackground"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar" // ako imaš
import About from "./components/About" // ako imaš
import Projects from "./components/Projects" // ako imaš
import Footer from "./components/Footer"
import Contact from "./components/Contact" // ako imaš
import Services from "./components/Services" // ako imaš
function App() {
  const darkMode = true

  return (
    <>
      {/* Background uvijek prvi i ispod svega */}
      <AnimatedBackground darkMode={darkMode} />
      <Navbar />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      
      <Footer darkMode={darkMode} />
    </>
  )
}

export default App
