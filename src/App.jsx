import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Skills from './components/sections/Skills'
import Footer from './components/Footer'
import Header from './components/Header'
import SkillsStrip from './components/SkillsStrip'
import { useSite } from './theme'
import { ui } from './data/portfolio'
import './App.css'

function App() {
  const { t } = useSite()

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo-principal">
        {t(ui.skip)}
      </a>
      <Header />

      <main id="conteudo-principal">
        <Hero />
        <SkillsStrip />
        <About />
        <Skills />
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
