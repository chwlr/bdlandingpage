import { Row, Col } from 'react-bootstrap'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { Footainers } from './FooterStyle'

export default function Footer() {
  
  return (
    <IconContext.Provider value={{ color: 'white', size: '45px', padding: '5px 0'}}>
      <Footainers fluid>
        <Row >
          <Col xs={12}><h4 className="text-center my-2">BAPELITBANG KOTA MANADO</h4></Col>
          <Col xs={12}><p className="text-center my-2">Jl. Balai Kota No. 1, Tikala Ares, Kec. Tikala</p></Col>
          <Col xs={12}><p className="text-center my-2">Kota Manado, Sulawesi Utara 95124</p></Col>
          <Col xs={12}><p className="text-center my-2">Email : bigdatamdo@gmail.com</p></Col>
          <Col xs={12} className="text-center"> <a href="https://www.facebook.com/bigdata.manado.7" target="_blank"><FaFacebookSquare /></a> <a href="https://youtube.com/channel/UCkhvLQZwqhK2deYLpn0zpog" target="_blank"><FaYoutube /></a> <a href="https://instagram.com/manadobigdata?igshid=8afg3flkesmk" target="_blank"><AiFillInstagram /></a>   </Col>
          <Col xs={12}><p className="text-center my-2">© 2021 Bapelitbangda Kota Manado. Designed {"&"} Developed by Bigdata</p></Col>
        </Row>
      </Footainers>
    </IconContext.Provider>
  )
}