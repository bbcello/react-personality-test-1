import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _var from '../../Include/_var';


const Col = styled.div.attrs({
  className: 'question col'
})`
  padding: 1rem 0;
`

const AnswerOptionLi = styled.li.attrs({
  className: 'answerOption'
})`
  list-style-type: none;
`

const Label = styled.label`
  position: relative;
  padding-left: 3rem;
  line-height: 2.3rem;
  cursor: pointer;
  font-family: ${_var.$mainFont};

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 1rem;
    display: block;
    width: 25px;
    height: 25px;
    border: 2px solid ${_var.$teal800};
    border-radius: 4px;
    z-index: -1;
  }

  &,
  &::before {
    transition: .5s all ease;
  }
`

const Input = styled.input.attrs({
  type: 'radio',
  name: 'radioGroup'
})`
  position: absolute;
  opacity: 0;
  z-index: -1;

  & + ${Label}::before {
    border-radius: 18px;
  }

  &:checked + ${Label} {
    padding-left: 2rem;
    color: #fff;
  }

  &:checked + ${Label}::before {
    top: 0;
    width: 100%;
    height: 100%;
    background: ${_var.$teal800};
  }
`


const AnswerOption = props => {
  return (
    <AnswerOptionLi>
      <Input
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        name={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <Label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </Label>
    </AnswerOptionLi>
  );
}

AnswerOption.PropTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};


export default AnswerOption;