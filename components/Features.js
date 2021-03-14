import Link from "next/link"
import { Container, Row, Col } from 'react-bootstrap'
import { FaPencilAlt, FaWpforms } from "react-icons/fa"
import { IoIosHome, IoIosGlobe, IoIosStats } from "react-icons/io"
import { RiVirusLine } from "react-icons/ri"
import { CgGenderFemale } from "react-icons/cg"
import { Cards, FtrContainer } from './styles'
 
export default function Features() {
    return (
			<FtrContainer fluid id="pengembangan">
					<Container>
						<h1 className="text-center mb-5" style={{ color: "#14213D", fontWeight: "bold"}}>Pengembangan Sistem Informasi</h1>
							<Row>
									<Link href="https://panada.manadokota.go.id">
										<Col>
											<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
													<IoIosHome fontSize="3rem" color="#FCA311"/>
													<p>PANADA LINI</p>
											</Cards>
										</Col>
									</Link>
									<Link href="https://covid19.manadokota.go.id">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<RiVirusLine fontSize="3rem" color="#FCA311"/>
														<p>SIPANSER</p>
												</Cards>
										</Col>
									</Link>
									<Link href="geoportal.manadokota.go.id">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<IoIosGlobe fontSize="3rem" color="#FCA311"/>
														<p>GEOPORTAL</p>
												</Cards>
										</Col>
									</Link>
									
							</Row>
							<Row>
									<Link href="https://bigdata.manadokota.go.id/dashboard">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<IoIosStats fontSize="3rem" color="#FCA311"/>
														<p>DASHBOARD PANADA</p>
												</Cards>
										</Col>
									</Link>
									<Link href="https://docs.google.com/forms/d/1YL-lR0fiwUvCC_dS6A9Nc8Og2EthnnvIOWJQazzLbzM/edit?usp=drivesdk">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<FaWpforms fontSize="3rem" color="#FCA311"/>
														<p>FORMULIR <br /> PERMINTAAN DATA</p>
												</Cards>
										</Col>
									</Link>
									<Link href="https://docs.google.com/forms/d/1-LUlxFKAIpmvZzM-r-93WNxjvpRwKB2QYOgwb2DpaIQ/edit?usp=drivesdk">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<FaPencilAlt fontSize="3rem" color="#FCA311"/>
														<p>SURVEY <br />KEPUASAN</p>
												</Cards>
										</Col>
									</Link>
									<Link href="https://panada.manadokota.go.id/">
										<Col>
												<Cards className="mx-auto my-3" style={{ width: '300px', height: '180px' }}>
														<CgGenderFemale fontSize="3rem" color="#FCA311"/>
														<p>PANADA <br /> TANTE IVA</p>
												</Cards>
										</Col>
									</Link>
									
							</Row>
					</Container>
				</FtrContainer>
    )
}