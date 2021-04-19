import React, {useState} from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavStyles } from './styles'

export default function Navbarx() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

    return (
       <NavStyles>
          <Container fluid style={{ backgroundColor: '#14213D' }}>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
              <Navbar.Brand href="#home"><img src="/logo-pemkot_rev.png" alt="logo-bigdata" style={{ maxWidth: "100%", height: "auto" }} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}>  {click ? <FaTimes color="#fca311"/> : <FaBars color="white"/>} </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto text-center">
                  <Nav.Item>
                    <Nav.Link className="mx-2" href="/">HOME</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mx-2" href="#pengembangan">PENGEMBANGAN</Nav.Link></Nav.Item>
                  <Nav.Item>
                  <Nav.Link className="mx-2" href="#peta">PETA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mx-2" href="#misi">GAMBARAN UMUM</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mx-2" href="#faq">FAQ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mx-2" href="#berita">ARTIKEL</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
              </Navbar>
          </Container>
       </NavStyles>
    )
  }