import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginTo from '../components/Login/index'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Login() {
  return (
    <Container>
      <Head>
        <title>Bigdata Kota Manado</title>
        <link rel="icon" href="/Bigdata-COlor-Alfa.png" />
      </Head>
      <LoginTo />
    </Container>
  )
}