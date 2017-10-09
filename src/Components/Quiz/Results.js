import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _var from '../../Include/_var';


const ResultWrap = styled.div.attrs({
  className: 'Result'
})`
  h1 {
    color: ${_var.$teal800};
    font-size: 2rem;
    font-family: ${_var.$titleFont};
  }

  p {
    font-family: ${_var.$mainFont};
  }
`

const Result = props => {
  return (
    <ResultWrap>
      <h1>Briggs Result</h1>
      <p>You are type {props.resultBriggs}</p>
      <h1>Colors Result</h1>
      <p>You are type {props.resultColors}</p>
      <h1>Letters Result</h1>
      <p>You are type {props.resultLetters}</p>
    </ResultWrap>
  );
}

Result.PropTypes = {
  resultBriggs: PropTypes.string.isRequired,
  resultColors: PropTypes.string.isRequired,
  resultLetters: PropTypes.string.isRequired
};

export default Result;