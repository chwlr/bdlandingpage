import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'

const LmbgContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
`

const LmbgCard = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  color: white;
  border: 1px solid transparent;
  padding: 1rem;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
  img {
    margin: 10px;
    max-width: 100%;
  }
`

export { LmbgContainer, LmbgCard }