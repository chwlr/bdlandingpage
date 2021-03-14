import styled from 'styled-components'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  padding-top: 50px;
  padding-bottom: 50px;
`;

// const Container = styled.div`
//   position: absolute;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

const Wrap = styled.div`
  background: transparent;
  background: linear-gradient(to right, #373b44, #4286f4);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;
  margin: 5px 0 0 0;
  border-radius: 25px;
  border: 1px solid #14213d;
  h1 {
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: transparent;
  background: linear-gradient(to right, #373b44, #4286f4);
  color: white;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid #14213d;
  margin: 5px 0 0 0;
  p {
    text-align: left;
    padding: 1rem;
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
  }
`;

export { AccordionSection, Wrap, Dropdown }