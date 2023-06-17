import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

import projMilenium from '../assets/img/project-milenium.png'
import projQueMirar from '../assets/img/project-que-mirar.png'
import projPalomba from '../assets/img/project-palomba.png'
import projHandshape from '../assets/img/project-handshape.png'
import projGithub from '../assets/img/project-github.png'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = ({ languageLines, language }) => {
  const works = [
    {
      title: languageLines[language].projects.works[0].title1,
      description: languageLines[language].projects.works[0].description1,
      imgUrl: projMilenium,
      url: 'https://mileniumgimnasio.xyz/'
    },
    {
      title: languageLines[language].projects.works[1].title2,
      description: languageLines[language].projects.works[1].description2,
      imgUrl: projPalomba,
      url: 'https://palombabienesraices.com.ar/'
    },
    {
      title: languageLines[language].projects.works[2].title3,
      description: languageLines[language].projects.works[2].description3,
      imgUrl: projHandshape,
      url: 'https://pypi.org/project/handshape-datasets/'
    }
  ]

  const projects = [
    {
      title: languageLines[language].projects.projects[0].title1,
      description: languageLines[language].projects.projects[0].description1,
      imgUrl: projQueMirar,
      url: 'https://whattowatch-nine.vercel.app/'
    }
  ]

  const others = [
    {
      title: languageLines[language].projects.others[0].title1,
      description: languageLines[language].projects.others[0].description1,
      imgUrl: projGithub,
      url: 'https://github.com/JereUR'
    }
  ]

  return (
    <section className="project" id="projects">
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
                  <h2>{languageLines[language].projects.title}</h2>
                  <p>{languageLines[language].projects.introduction}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          {languageLines[language].projects.tabOne}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          {languageLines[language].projects.tabTwo}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          {languageLines[language].projects.tabThree}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first" className="tab-cards">
                        <Row>
                          {works.map((work, index) => {
                            return <ProjectCard key={index} {...work} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className="tab-cards">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className="tab-cards">
                        <Row>
                          {others.map((other, index) => {
                            return <ProjectCard key={index} {...other} />
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" />
    </section>
  )
}

export default Projects
