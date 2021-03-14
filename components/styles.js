import { Container, Card} from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  width: 100%;
  height: 80%;
  flex-direction: ${props => props.flex ? "row" : "column"};
  text-align: center;
  color: #1d3557;
`

const JumButton = styled.button`
  padding: 5px 10px;
  background-color: #FCA311;
  border-radius: 25px;
  border: 1px solid #FCA311;
  color: #14213D; 
  font-weight: bold;
  font-size: 15px;
  &:hover{
      background-color: #14213D;
      border: 1px solid #14213D;
      color: #FCA311;
    }
    &:active{
      background-color: #14213D;
      border: 1px solid #14213D;
      color: #FCA311;
    }
  
`

const MisContainer = styled(Container)`
background-color: #fca311;
background-repeat: no-repeat;
background: linear-gradient(180deg, rgba(20, 33, 61, 0.1) 0%, rgba(20, 33, 61, 0.1) 100%), url('/bgputihpanjang.png');
background-attachment: fixed;
padding-top: 50px;
padding-bottom: 50px;
`

const Containers = styled(Container)`
  background-image: url('/low_poly_world.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70em 70em;
  /* background: linear-gradient(180deg, rgba(83, 181, 236, 0.48) 0%, rgba(180, 145, 255, 0.28) 100%); */
  background-color: white;
`

const NavStyles = styled.div`
  .navbar-brand, .navbar-nav .nav-item .nav-link {
    color: white;
    font-weight: 500;
    &:hover{
            color: #FCA311;
        }
  }

  .navbar-brand {
    width: 200px;
  }
`

const MisCards = styled(Card)`
  align-items: center;
  justify-content: center;
  color: #1d3557;
  border-radius: 15px;
  background: transparent;
  font-weight: 500;

  p {
    text-align: center;
    padding: 2px;
    font-weight: bold;
  }
`

const Cards = styled(Card)`
  align-items: center;
  justify-content: center;
  color: #1d3557;
  border-radius: 15px;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #e5e5e5;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px) saturate(100%) contrast(45%) brightness(130%);

  p {
    text-align: center;
    padding: 2px;
    font-weight: bold;
  }
`


const FtrContainer = styled(Container)`
background-color: #fca311;
background-repeat: no-repeat;
background: url('/6661.jpg');
background-size: cover;
background-position: center;
padding-top: 50px;
padding-bottom: 50px;
`

export { Wrapper, Containers, NavStyles, Cards, FtrContainer, MisContainer, MisCards, JumButton}