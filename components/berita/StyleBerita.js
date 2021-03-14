import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'

const BrtContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
`

const ImgBrt = styled.img`
  max-width: 100%;
  max-height: 300px;
  padding: 1rem;
`

const Cards = styled(Card)`
  background: linear-gradient(to right, #373b44, #4286f4);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 25px;
  color: white;
  border: 1px solid #14213d;
  text-align: justify;


  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export { BrtContainer, ImgBrt, Cards }