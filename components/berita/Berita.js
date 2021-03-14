import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from "next/link";
import { Data } from './Data'
import { BrtContainer, ImgBrt, Cards } from './StyleBerita'

export default function Berita () {
    return (
        <BrtContainer id="berita">
						<h1 className="text-center mb-5" style={{ color: "#14213d", fontWeight: "bold"}}>Artikel</h1>
            <Row>
								{Data.map((item) => (
										<Link href="/berita/[item]" as={`/berita/${item.id}`} key={item.id}>
												<Cards>
														<ImgBrt src={item.foto + ".jpg"} />
														<Col className="my-3">
															<h3>{item.judul}</h3>
															<h6>{item.tanggal}</h6>
															<p>{item.pendek}</p>
														</Col>
												</Cards>
								</Link>
								))}
            </Row>
        </BrtContainer>
    )
}
