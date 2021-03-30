import { useRouter } from "next/router";
import {Container, Row, Col, Card} from 'react-bootstrap'
import Image from 'next/image'
import styled from 'styled-components'


const CardStyle = styled(Card)`
  padding: 10px;
`

export default function BeritaItem() {

  const {
    query: { item },
  } = useRouter();

  console.log(item)
  return (
    <Container>
      <Row>
        <Col>
          <CardStyle>
            <h1>judul aja</h1>
            <Image src="/Poster_Rawan_Longsor_Tingkulu.jpg" alt="Picture of the author"
              layout="responsive" width="500" height="auto"/>
            </CardStyle>
        </Col>
      </Row>
    </Container>
  );
}