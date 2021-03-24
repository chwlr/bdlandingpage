import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css' // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility'
import dataCovid from "./dataCovid.json"
import dataCctv from "./dataCctv.json"

const MapContainers = styled(Container)`
    background-color: transparent;
    padding-top: 50px;
    padding-bottom: 50px;
`

export default function LeafletMaps () {

    const position = [1.4907921, 124.8484833]
    

    const LayerStyle = {
        fillColor: "blue",
        fillOpacity: '0.2',
        color: "yellow"
    }


return (
    <MapContainers className="my-5">
            <h1 className="text-center mb-5" style={{ color: "#14213D", fontWeight: "bold" }}>Layer Peta Terbaru</h1>
            <Row>
                <Col md lg>
                    <h5 className="text-center" style={{ color: "#14213D", fontWeight: "bold", margin: "15px", padding: "10px" }}>Titik CCTV Kota Manado</h5>
                    <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: '500px' }}>
                        <TileLayer
                        attribution='&copy; Studio Bigdata Kota Manado 2021'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {dataCctv.features.map((k, i) => {
                            return k.geometry.coordinates.map((l) => {
                                
                                return (
                                    <Marker key={i} position={[l[1], l[0]]} >
                                        <Popup>
                                            {k.properties.lokasi}
                                        </Popup>
                                    </Marker>
                                )
                            })
                        })}

                    </MapContainer>
                </Col>
                <Col md lg>
                    <h5 className="text-center" style={{ color: "#14213D", fontWeight: "bold", margin: "15px", padding: "10px" }}>Banjir Kota Manado 22 Januari 2021</h5>
                    <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: '500px'}}>
                        <TileLayer
                        attribution='&copy; Studio Bigdata Kota Manado 2021'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <GeoJSON style={LayerStyle} data={dataCovid.features}/>
                    </MapContainer>
                </Col>
            </Row>
        </MapContainers>
)
}

