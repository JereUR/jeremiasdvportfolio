import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Col, Row } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

import colorSharp from '../assets/img/color-sharp.png'
/* import ProgressBar from './ProgressBar' */
import reactJS from '../assets/img/reactJs.png'
import reactNative from '../assets/img/reactNative.png'
import javascript from '../assets/img/JavaScript.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import typescript from '../assets/img/typescript.png'

const Skills = ({ languageLines, language }) => {
  console.log('Hola')
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const skillsArray = [reactJS, javascript, html, css, typescript, reactNative]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                >
                  <div className="skill-bx">
                    <h2>{languageLines[language].skills.title}</h2>
                    <p>{languageLines[language].skills.introduction}</p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      {skillsArray.map((skill, index) => (
                        <img
                          src={skill}
                          alt={`skill${index}`}
                          key={index}
                          className="logo-skill"
                        />
                      ))}
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  )
}

export default Skills
