import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import logo from '../assets/img/Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import translate from '../assets/img/language.png'
import translateInv from '../assets/img/language-inv.png'

const NavBar = ({ languageLines, language, handleChangeLanguage }) => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 120,
              height: 'auto'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              {languageLines[language].navbar.home}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              {languageLines[language].navbar.skills}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              {languageLines[language].navbar.projects}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jeremias-dominguez-vega/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkedin" className="image" />
              </a>
              <a
                href="https://www.instagram.com/jere.dvega/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="instagram" className="image" />
              </a>
              <a
                className="translate"
                onClick={handleChangeLanguage}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src={hover ? translateInv : translate}
                  alt="translate"
                  className="translate-img"
                />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1RhfUgNsEYUXSLAN9t6NMsiHLoW2MSC1j/view?usp=sharing',
                  '_blank'
                )
              }
            >
              <span>{languageLines[language].navbar.myCV}</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
