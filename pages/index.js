import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarx from '../components/navbar';
import Jumbrotronx from '../components/jumbotron';
import Features from '../components/Features';
import Missions from '../components/Missions';
import MapsComponent from '../components/maps';
import Accordion from '../components/accordion/Accordion';
import Berita from '../components/berita/Berita';
import Lembaga from '../components/lembaga/lembaga';
import Footer from '../components/Footer/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bigdata Kota Manado</title>
        <link rel="icon" href="/Bigdata-COlor-Alfa.png" />
      </Head>
      <Navbarx />
      <Jumbrotronx/>
      <Features />
      <MapsComponent />
      <Missions />
      <Accordion />
      <Berita />
      <Lembaga />
      <Footer />
    </div>
  )
}
