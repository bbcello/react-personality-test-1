import React, { Component } from 'react';
import styled from 'styled-components';
import _var from '../Include/_var';

// Components
import Quiz from '../Components/Quiz/Quiz';

// Results
import Results from '../Components/Quiz/Results';

// api
import quizQuestions from '../api/quizQuestions';


// ===========================================================================================
// Styles
// ===========================================================================================
const ContainerWrap = styled.div.attrs({
  className: 'container'
})`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  background-color: ${_var.$blackBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CardRounded = styled.div.attrs({
  className: 'card rounded'
})`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);

  @media (min-width: 701px) {
    width: 80%;
  }

  @media (min-width: 955px) {
    width: 50%;
  }
`


// ===========================================================================================
// Class Question Page
// ===========================================================================================
class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Colors: {
          Green: 10,
          Brown: 10,
          Blue: 10,
          Red: 10
        },
        Letters: {
          A: 10,
          B: 10,
          C: 10,
          D: 10
        },
        Briggs: {
          EI: 10,
          SN: 10,
          TF: 10,
          JP: 10
        }
      },
      resultBriggs: '',
      resultColors: '',
      resultLetters: '',
      // showNextButton: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  } // end - constructor()

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map((question) => question.answers);
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    });
  } // end - componentWillMount()

  // Setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount;
    let applyAnswer = (answer) => {
      const answer_array = answer.split(',');
      let briggsAnswer = answer_array[0];
      let colorsAnswer = answer_array[1];
      let lettersAnswer = answer_array[2];
      if (answer_array.length === 3) {
        answersCount['Briggs'][briggsAnswer] += 1;
        answersCount['Colors'][colorsAnswer] += 1;
        answersCount['Letters'][lettersAnswer] += 1;
      } else if (answer_array.length === 4) {
        answersCount['Briggs'][briggsAnswer] -= 1;
        answersCount['Colors'][colorsAnswer] -= 1;
        answersCount['Letters'][lettersAnswer] -= 1;
      }
      return answersCount;
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  } // setUserAnswer

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  } // setNextQuestion()

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800);
    } else {
      setTimeout(() => this.setBriggsResults(this.getBriggsResults()), 800);
      setTimeout(() => this.setColorsResults(this.getColorsResults()), 800);
      setTimeout(() => this.setLettersResults(this.getLettersResults()), 800);
    }
  } // handleAnswerSelected()


  // ===========================================================================================
  // Get Results
  // ===========================================================================================

  // get briggs result
  getBriggsResults() {
    const answersCount = this.state.answersCount;
    const briggsAnswer = answersCount['Briggs'];
    const answersCountKeysBriggs = Object.keys(briggsAnswer);
    const answersCountValuesBriggs = answersCountKeysBriggs.map((key) => briggsAnswer[key]);
    const maxAnswerCountBriggs = Math.max.apply(null, answersCountValuesBriggs);
    return answersCountKeysBriggs.filter((key) => briggsAnswer[key] === maxAnswerCountBriggs);
  }
  
  // get colors result
  getColorsResults() {
    const answersCount = this.state.answersCount;
    const colorsAnswer = answersCount['Colors'];
    const answersCountKeysColors = Object.keys(colorsAnswer);
    const answersCountValuesColors = answersCountKeysColors.map((key) => colorsAnswer[key]);
    const maxAnswerCountColors= Math.max.apply(null, answersCountValuesColors);
    return answersCountKeysColors.filter((key) => colorsAnswer[key] === maxAnswerCountColors);
  }

  // get letters results
  getLettersResults() {
    const answersCount = this.state.answersCount;
    const lettersAnswer = answersCount['Letters'];
    const answersCountKeysLetters = Object.keys(lettersAnswer);
    const answersCountValuesLetters = answersCountKeysLetters.map((key) => lettersAnswer[key]);
    const maxAnswerCountLetters= Math.max.apply(null, answersCountValuesLetters);
    return answersCountKeysLetters.filter((key) => lettersAnswer[key] === maxAnswerCountLetters);
  }


  // ===========================================================================================
  // Set Results
  // ===========================================================================================

  // set briggs results
  setBriggsResults(resultBriggs) {
    if (resultBriggs.length >= 1) {
      this.setState({resultBriggs: resultBriggs[0]});
    }
  }

  // set colors results
  setColorsResults(resultColors) {
    if (resultColors.length >= 1) {
      this.setState({resultColors: resultColors[0]});
    }
  }

  // set letters results
  setLettersResults(resultLetters) {
    if (resultLetters.length >= 1) {
      this.setState({resultLetters: resultLetters[0]});
    }
  }


  // ===========================================================================================
  // Render methods
  // ===========================================================================================
  
  // render quiz
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  } // renderQuiz()

  // render result
  renderResult() {
    return (
      <Results 
        resultBriggs={this.state.resultBriggs}
        resultColors={this.state.resultColors}
        resultLetters={this.state.resultLetters}
      />
    );
  } // renderResult()

  // render main
  render() {
    return (
      <ContainerWrap>
        <CardRounded>
          {this.state.resultBriggs 
          && this.state.resultColors
          && this.state.resultLetters ? this.renderResult() : this.renderQuiz()}
        </CardRounded>
      </ContainerWrap>
    );
  } // render()
}

export default QuestionPage;