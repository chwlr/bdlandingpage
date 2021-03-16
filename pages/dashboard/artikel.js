import { Container, Row, Col, Table, Button } from 'react-bootstrap'
 
export default function Artikel() {
  return (
    <Container>
      <h4 className="text-center my-3" style={{ color: "#14213d", fontWeight: 'bold' }}>Artikel</h4>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button style={{ margin: "10px" }}>Tambah Data</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Artikel Pendek</th>
                <th>Artikel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2021-01-22</td>
                <td>Artikel A</td>
                <td>Irure enim et officia mollit aute et non labore. Pariatur tempor dolor est cupidatat tempor cupidatat minim deserunt laboris. Ad in in proident adipisicing reprehenderit nulla fugiat est sit dolor in deserunt sit.</td>
                <td>Consequat pariatur enim aliquip enim minim ea sit irure. Labore sunt pariatur minim esse. Reprehenderit aute enim exercitation sunt. Nulla Lorem sunt nulla laboris aliqua laboris officia. Dolor laborum sint qui duis sunt veniam non ut excepteur duis cillum occaecat aliqua.

Occaecat amet labore cillum ad in duis adipisicing velit nulla aliqua est officia. Mollit eiusmod ut commodo nisi id adipisicing anim ad incididunt nostrud. Labore ad esse laborum reprehenderit nisi.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2021-01-22</td>
                <td>Artikel A</td>
                <td>Irure enim et officia mollit aute et non labore. Pariatur tempor dolor est cupidatat tempor cupidatat minim deserunt laboris. Ad in in proident adipisicing reprehenderit nulla fugiat est sit dolor in deserunt sit.</td>
                <td>Consequat pariatur enim aliquip enim minim ea sit irure. Labore sunt pariatur minim esse. Reprehenderit aute enim exercitation sunt. Nulla Lorem sunt nulla laboris aliqua laboris officia. Dolor laborum sint qui duis sunt veniam non ut excepteur duis cillum occaecat aliqua.

Occaecat amet labore cillum ad in duis adipisicing velit nulla aliqua est officia. Mollit eiusmod ut commodo nisi id adipisicing anim ad incididunt nostrud. Labore ad esse laborum reprehenderit nisi.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}