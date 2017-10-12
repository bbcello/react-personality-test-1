import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import _var from '../../Include/_var';


const Row = styled.div.attrs({
  className: 'row'
})`
  margin: 1rem 0;

  //laptop
  @media (min-width: 1200px) {
    margin: 3rem 0;
  }
`

const Col = styled.div.attrs({
  className: 'question col'
})`
  padding: 1rem 0;
`

const QuestionTitle = styled.h1.attrs({
  className: 'questionTitle'
})`
  font-size: 1.3rem;
  font-family: ${_var.$mainFont};
  text-align: center;
`
// animation



const Question = props => {
  return (
    <Row>
      <Col>
        <QuestionTitle>{props.content}</QuestionTitle>
      </Col>
    </Row>
  );
}


Question.PropTypes = {
  content: PropTypes.string.isRequired
}


export default Question