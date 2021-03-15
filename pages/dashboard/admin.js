import { Form, Button, Card} from 'react-bootstrap'
import styled from 'styled-components'
import Link from 'next/link'


const Container = styled.div`
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Admin() {
  return (
    <Container>
      <Card style={{ padding: "20px", width: "500px" }}>
        <h4 className="text-center my-3" style={{ color: "#14213d", fontWeight: 'bold' }}>Menu</h4>
        <Link href="/dashboard/artikel">
          <Button style={{ margin: "5px" }}>Artikel</Button>
        </Link>
        <Link href="/">
          <Button style={{ margin: "5px" }}>Foto</Button>
        </Link>
    </Card>
    </Container>
  )
}