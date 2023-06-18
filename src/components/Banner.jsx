import { Container, Col, Row } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

import headerImg from '../assets/img/header-img.svg'

const Banner = ({ languageLines, language }) => {
  const toRotate = languageLines[language].banner.toRotate.toRotate
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(toRotate[index])
  const [delta, setDelta] = useState(3000 - Math.random() * 100)
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const tick = () => {
    if (index < 3) {
      setText(toRotate[index + 1])
      setIndex(index + 1)
    } else {
      setText(toRotate[0])
      setIndex(0)
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                >
                  <span className="tagline">
                    {languageLines[language].banner.welcome}
                  </span>
                  <h1>
                    {languageLines[language].banner.hello}
                    <span className="wrap"> - {text}</span>
                    <p>
                      {'         '}
                      {languageLines[language].banner.presentation}
                    </p>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
        {windowWidth && windowWidth < 750 && (
          <span className="cv-text">
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
        )}
      </Container>
    </section>
  )
}

export default Banner
