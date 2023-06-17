import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import contactImg from '../assets/img/contact-img.svg'

const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
}

const Contact = ({ languageLines, language }) => {
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState(
    languageLines[language].contact.form.button.send
  )
  const [status, setStatus] = useState({})

  useEffect(() => {
    setButtonText(languageLines[language].contact.form.button.send)
  }, [language])

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setButtonText(languageLines[language].contact.form.button.sending)

    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(formDetails)
    })

    setButtonText(languageLines[language].contact.form.button.send)

    let result = response.json()
    setFormDetails(formInitialDetails)

    if (result.code === 200) {
      setStatus({
        success: true,
        message: languageLines[language].contact.form.messageStatus.messageTrue
      })
    } else {
      setStatus({
        success: false,
        message: languageLines[language].contact.form.messageStatus.messageFalse
      })
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>{languageLines[language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder={languageLines[language].contact.form.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder={languageLines[language].contact.form.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder={languageLines[language].contact.form.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder={languageLines[language].contact.form.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
