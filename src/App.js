import React, { Component } from 'react';
import anime from 'animejs';

// CSS
import './Styles/App.css';

// Pages
import Intro from './Pages/Intro';
import QuestionPage from './Pages/QuestionPage';


class App extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      showQuestionPage: false
    }
    this._onStartClick = this._onStartClick.bind(this);
  }

  animateOut() {
    setTimeout(() => anime({
      targets: '.intro .card',
      translateX: '150%',
      elasticity: function(el, i, l) {return (200 + i * 200);}}), 200);
  }

  // render Intro component
  renderIntro() {
    return (
      <Intro 
        _onStartClick={this._onStartClick}
        title={'Welcome To Personality Test'}
      />
    );
  }

  // render QuestionPage component
  renderQuestion() {
    return (
      <QuestionPage />
    );
  }

  // render main
  render() {
    return (
      <div>
        {this.state.showQuestionPage ? this.renderQuestion() : this.renderIntro()}
      </div>
    );
  }

  _onStartClick() {
    this.animateOut();
    setTimeout(() => this.setState({showQuestionPage: !this.state.showQuestionPage}), 1500);
  }
}


export default App;