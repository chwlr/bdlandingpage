import { Row, Col } from 'react-bootstrap'
import { LmbgContainer, LmbgCard } from './lembagaStyle'

  const Lembaga = () => {
  return (
    <LmbgContainer>
      <h1 className="text-center mb-5" style={{ color: "#14213d", fontWeight: "bold"}}>Lembaga Terkait</h1>
        <Row className="ml-auto">
          <Col>
            <LmbgCard>
              <img style={{ maxWidth: "100%", height: "100px" }} src="/Badan_Informasi_Geospasial_logo.png"/>
              <img style={{ maxWidth: "100%", height: "100px" }} src="/bmkg.png"/>
              <img style={{ maxWidth: "100%", height: "100px"}} src="/kotaku.png"/>
              <img style={{ maxWidth: "100%", height: "100px" }} src="/lapan.png"/>
            </LmbgCard>
          </Col>
        </Row>
    </LmbgContainer>
  )
}

export default Lembaga