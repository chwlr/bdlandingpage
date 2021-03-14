import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { AccordionSection, Wrap, Dropdown } from './styleAccordion'

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fca311', size: '25px' }}>
      <AccordionSection id="faq">
      <h1 className="text-center mb-5" style={{ color: "#14213d", fontWeight: 'bold' }}>FAQ</h1>
        <Container>
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;