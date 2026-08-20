import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Skills from './components/sections/Skills'
import Aurora from './components/Aurora'
import CursorNamePrompt from './components/CursorNamePrompt'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Header from './components/Header'
import TechCarousel from './components/TechCarousel'
import { useSite } from './theme'
import { ui } from './data/portfolio'
import './App.css'

function App() {
  const { t } = useSite()

  return (
    <div className="site-shell">
      <Aurora />
      <CustomCursor />
      <CursorNamePrompt />
      <a className="skip-link" href="#conteudo-principal">
        {t(ui.skip)}
      </a>
      <Header />

      <main id="conteudo-principal">
        <Hero />
        <About />
        <Skills />
        <TechCarousel />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
