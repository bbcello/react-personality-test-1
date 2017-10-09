import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _var from '../../Include/_var';


const Row = styled.div.attrs({
  className: 'row'
})`
  margin: 1rem 0;
`

const Col = styled.div.attrs({
  className: 'questionCount col'
})`
  padding: 0;
`

const QuestionCountWrap = styled.div.attrs({
  className: 'wrap'
})`
  position: relative;
  font-size: 1rem;
  font-family: ${_var.$latoFont};
  color: ${_var.$teal800};
`


const QuestionCount = (props) => {
  return (
    <Row>
      <Col>
        <QuestionCountWrap>
          Question <span>{props.counter}</span> of <span>{props.total}</span>
        </QuestionCountWrap>
      </Col>
    </Row>
  );
}


QuestionCount.PropTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};


export default QuestionCount;