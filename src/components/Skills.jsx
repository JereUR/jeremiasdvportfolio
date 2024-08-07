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
import shadcn from '../assets/img/shadcn.png'
import c from '../assets/img/c.png'
import astro from '../assets/img/astro.png'
import axios from '../assets/img/axios.png'
import node from '../assets/img/node.png'
import git from '../assets/img/git.png'
import visual from '../assets/img/visual.svg'
import tailwind from '../assets/img/tailwind.png'
import sql from '../assets/img/sql.png'
import json from '../assets/img/json.png'
import phyton from '../assets/img/python.png'
import redux from '../assets/img/redux.png'
import wordpress from '../assets/img/wordpress.png'
import vite from '../assets/img/vite.png'
import nextjs from '../assets/img/nextjs.svg'
import supabase from '../assets/img/supabase.png'
import linux from '../assets/img/linux.png'

const Skills = ({ languageLines, language }) => {
  const skillsArray = [
    { img: reactJS, title: 'React.js' },
    { img: javascript, title: 'Javascript' },
    { img: html, title: 'HTML' },
    { img: css, title: 'CSS' },
    { img: json, title: 'JSON' },
    { img: typescript, title: 'Typescript' },
    { img: shadcn, title: 'Shadcn UI' },
    { img: reactNative, title: 'React Native' },
    { img: supabase, title: 'Supabase' },
    { img: axios, title: 'Axios' },
    { img: vite, title: 'Vite' },
    { img: nextjs, title: 'Next.js' },
    { img: astro, title: 'Astro' },
    { img: git, title: 'Git' },
    { img: visual, title: 'Visual Studio Code' },
    { img: tailwind, title: 'Tailwind' },
    { img: redux, title: 'Redux' },
    { img: node, title: 'Node.js' },
    { img: sql, title: 'SQL' },
    { img: c, title: 'C' },
    { img: linux, title: 'Linux' },
    { img: phyton, title: 'Python' },
    { img: wordpress, title: 'Wordpress' }
  ]

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
                    {skillsArray.map((skill, index) => (
                      <img
                        src={skill.img}
                        alt={skill.title}
                        title={skill.title}
                        key={index}
                        className={
                          skill === javascript || skill === typescript
                            ? 'logo-skill rounded-skill'
                            : 'logo-skill'
                        }
                      />
                    ))}
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
