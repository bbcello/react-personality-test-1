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
    var relativeOffset = anime.timeline();
    relativeOffset
      .add({
        targets: '.title',
        translateX: '150%',
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.intro .button',
        translateX: '100%',
        easing: 'easeOutExpo',
        offset: '-=600'
      })
      .add({
        targets: '.intro .card',
        translateX: '150%',
        easing: 'easeOutExpo',
        offset: '-=1000'
      })
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