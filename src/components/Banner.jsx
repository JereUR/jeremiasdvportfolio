import { Container, Col, Row } from 'react-bootstrap'
/* import { ArrowRightCircle } from 'react-bootstrap-icons' */
import { useEffect, useState } from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

import headerImg from '../assets/img/header-img.svg'

const Banner = ({ languageLines, language }) => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = [
    'FrontEnd Developer',
    'Computer Engineer',
    'Web Developer',
    'React.Js Developer'
  ]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

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
                    {/* <button onClick={() => console.log('Connect')}>
                {languageLines[language].navbar.connect}{' '}
                <ArrowRightCircle size={25} />
              </button> */}
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
