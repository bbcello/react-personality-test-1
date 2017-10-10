import React, { Component } from 'react';

// CSS
import './Styles/App.css';

// Pages
import WelcomePage from './Pages/WelcomePage';
import QuestionPage from './Pages/QuestionPage';

class App extends Component {
  render() {
    return (
      <div>
        <WelcomePage />
      </div>
    );
  }
}


export default App;