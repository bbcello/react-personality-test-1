import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Variables
const font = {
  $titleFont: 'Ubuntu, sans-serif',
  $mainFont: 'Raleway, sans-serif',
  $latoFont: 'Lato, sans-serif' 
}


// styled-components
const Row = styled.div`
  margin: 1rem 0;

  /* laptop */
  @media (min-width: 1200px) {
    margin: 3rem 0;
  }
`

const Col = styled.div`
  padding: 1rem 0;
`

const QuestionTitle = styled.h1.attrs({
  className: 'questionTitle'
})`
  font-size: 1.3rem;
  font-family: ${font.$mainFont};
  text-align: center;
`


const Question = props => {
  return (
    <Row className="row">
      <Col className="col">
        <QuestionTitle>{props.content}</QuestionTitle>
      </Col>
    </Row>
  );
}


Question.PropTypes = {
  content: PropTypes.string.isRequired
}


export default Question