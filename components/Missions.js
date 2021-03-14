import { Container, Row, Col, Card } from 'react-bootstrap'
import { MisContainer, MisCards } from './styles'

export default function Missions () {
    return (
        <MisContainer fluid id="misi">
            <h1 className="text-center mb-5" style={{ color: "#14213d", fontWeight: 'bold' }}>Visi dan Misi</h1>
            <Container>
                <Row>
                    <Col lg="6">
                        <MisCards  className="mx-auto my-2" style={{ maxWidth: "500px", height: 'auto', border: 'none' }}>
                            <Card.Body>
                                <Card.Title className="text-center" style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Visi</Card.Title>
                                <p>Aplikasi ini dibangun sebagai sistem informasi berbasis geospasial yang akurat, mutakhir dan unified untuk menjadi satu basis data / referensi yang dapat dimanfaatkan secara mudah oleh internal Perangkat Daerah Pemerintah Kota Manado dan oleh masyarakat dengan tujuan agar pengelolaan pembangunan, pemanfaatan dan pengendalian ruang lebih efektif dan efisien yang kemudian dikemas dalam bentuk 1 Portal atau dikenal dengan kebijakan one map policy.</p>
                            </Card.Body>
                        </MisCards>
                    </Col>
                    <Col lg="6">
                        <MisCards  className="mx-auto my-2" style={{ maxWidth: "500px", height: 'auto', border: 'none'}}>
                            <Card.Body>
                                <Card.Title className="text-center" style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Misi</Card.Title>
                                <p>
                                Output dari pekerjaan ini diharapkan dapat dihasilkan aplikasi / Web GIS / Portal yang dapat diakses oleh pemerintah atau masyarakat yang membutuhkan informasi berbasis Peta seperti informasi eksisting dan perencanaan wilayah, data kependudukan, data infrastruktur, data perpajakan, data perijinan, data kebencanaan dan data wilayah administrasi.
                                </p>
                            </Card.Body>
                        </MisCards>
                    </Col>
                </Row>
            </Container>
        </MisContainer>
    )
}