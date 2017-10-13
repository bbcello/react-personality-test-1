import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Variables
const font = {
  $titleFont: 'Ubuntu, sans-serif',
  $mainFont: 'Raleway, sans-serif',
  $latoFont: 'Lato, sans-serif' 
}

const colors = {
  $colorBg: '#333',
  $colorCardBg: '#302f34',
  $colorGold: '#d4cd96'
}

// styled-components
const Row = styled.div`
  margin: 1rem 0;
`

const Col = styled.div`
  padding: 0;
`

const Wrap = styled.div`
  position: relative;
  padding-left: 1rem;
  font-size: 1rem;
  font-family: ${font.$latoFont};
  color: ${colors.$colorGold};

  /* laptop */
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding-left: 3rem;
    padding-top: 1rem;
  }
`


const QuestionCount = (props) => {
  return (
    <Row className="row">
      <Col className="col">
        <Wrap>
          Question <span>{props.counter}</span> of <span>{props.total}</span>
        </Wrap>
      </Col>
    </Row>
  );
}


QuestionCount.PropTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};


export default QuestionCount;