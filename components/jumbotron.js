import { Jumbotron, Row, Col } from 'react-bootstrap'
import { Wrapper, Containers, JumButton } from './styles'


export default function Jumbrotronx() {
    return (
           <Containers fluid className="px-5 pt-2">
             <Row>
               <Col></Col>
               <Col sm md={8}>
                      <Jumbotron fluid className="jumbotron">
                          <Wrapper justifyContent="center">
                              <h1 className="my-5" style={{ color: '#14213D', fontWeight: 'bold', }}>UPTD <br/> PENGOLAHAN DATA DAN INFORMASI GEOSPASIAL</h1>
                                <a href="https://panada.manadokota.go.id" target="_blank"><JumButton>PANADA LINI</JumButton></a>
                            </Wrapper>
                      </Jumbotron>
                </Col>
                <Col></Col>
             </Row>
           </Containers>
    )
  }
