import './App.css'
import { useState } from 'react'

import LanguageLines from './language/Languages.json'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
/* import Contact from './components/Contact' */
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('english')

  const handleChangeLanguage = () => {
    if (language === 'english') {
      setLanguage('spanish')
    } else {
      setLanguage('english')
    }
  }

  return (
    <div className="App">
      <NavBar
        languageLines={LanguageLines}
        language={language}
        handleChangeLanguage={handleChangeLanguage}
      />
      <Banner languageLines={LanguageLines} language={language} />
      <Skills languageLines={LanguageLines} language={language} />
      <Projects languageLines={LanguageLines} language={language} />
      <Footer languageLines={LanguageLines} language={language} />
    </div>
  )
}

export default App
