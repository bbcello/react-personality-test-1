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
const ResultWrap = styled.div.attrs({
  className: 'Result'
})`
  h1 {
    color: ${colors.$colorGold};
    font-size: 2rem;
    font-family: ${font.$titleFont};
  }

  p {
    font-family: ${font.$mainFont};
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