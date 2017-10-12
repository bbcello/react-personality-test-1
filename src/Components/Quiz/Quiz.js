import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';


const Wrap = styled.div.attrs({
  className: 'wrap'
})`
  margin: 1rem 1rem;
  z-index: 1;
`

const Row = styled.div.attrs({
  className: 'row'
})`
  margin: 0;
`

const AnswerOptionUl = styled.ul.attrs({
  className: 'answerOptions'
})`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-grow: 1;

  @media (min-width: 812px) {
    flex-direction: row;
  }
`


const Quiz = props => {
  const renderAnswerOptions = key => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
    <Wrap key={props.questionId}>
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <div className="w-100"></div>
      <Question content={props.question} />
      <div className="w-100"></div>
      <Row>
        <AnswerOptionUl>
          {props.answerOptions.map(renderAnswerOptions)}
        </AnswerOptionUl>
      </Row>
    </Wrap>
  );
}


Quiz.PropTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};


export default Quiz;