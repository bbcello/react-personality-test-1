import React, { Component } from 'react';
import styled from 'styled-components';
import _var from '../Include/_var';


import QuestionPage from './QuestionPage';


const ContainerWrap = styled.div.attrs({
  className: 'container'
})`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  background-color: ${_var.$blackBg};
`

const Title = styled.h1.attrs({
  className: 'title'
})`
  position: relative;
  font-family: ${_var.$titleFont};
  font-size: 1.1rem;
  color: ${_var.$red800};
  text-align: center;
  padding-top: 2rem;
`

const CardRounded = styled.div.attrs({
  className: 'card rounded'
})`
  position: absolute;
  height: 60%;
  width: 80%;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);

  @media (min-width: 701px) {
    width: 60%;
  }
`

const RulesWrapper = styled.div.attrs({
  className: 'rules_wrapper'
})`
  margin-top: 1rem;

    li {
      font-family: ${_var.$mainFont};
      font-size: 1.2rem;
      padding-top: 1rem;
    }

  @media (min-width: 501px) {
    margin-top: 2.5rem;

    ul {
      padding: 0;
      list-style-type: none;
      text-align: center;

      li {
        font-size: 1.5rem;
        padding-top: 1rem;
      }
    }
  }
`

// start button
const Button = styled.div.attrs({
  className: 'button animated infinite pulse'
})`
  display: block;
  background-color: ${_var.$red800};
  width: 8rem;
  height: 3.5rem;
  color: #fff;
  position: absolute;
  line-height: 3.5rem;
  bottom: .5rem;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
  transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);

    span,
    .icon {
      display: block;
      height: 100%;
      text-align: center;
      position: absolute;
      top: 0;
      color: #fff;
    }

    span {
      width: 72%;
      line-height: inherit;
      font-size: 1rem;
      text-transform: uppercase;
      left: 0;
      transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);

      &:after {
        content: '';
        background-color: #a53125;
        width: 2px;
        height: 70%;
        position: absolute;
        top: 15%;
        right: -1px;
      }
    }

    .icon {
      width: 28%;
      right: 0;
      transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
    }
      .fa {
        font-size: 1rem;
        transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400), height .25s ease;
      }

  &:hover {
    opacity: .9;
    animation: none;

    span {
      left: -72%;
      opacity: 0;
    }

    .icon {
      width: 100%;
      .fa {
        font-size: 1rem;
      }
    }
  }
`

const RulesList = props => {
  const rules = props.rules;
  const listRules = rules.map((rule) => 
    <li key={rule.toString()}>
      {rule}
    </li>
  );
  return (
    <ul>{listRules}</ul>
  );
}

const rules = [
  'Consist of 40 questions.',
  'Answer honestly.',
  'Just select Yes or No',
  'Try not to select don`t know'
]

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  
  render() {
    return (
      <div>
        <ContainerWrap>
          <CardRounded>
            <Title>Welcome to Personality Test</Title>
            <RulesWrapper>
              <RulesList rules={rules} />
            </RulesWrapper>
            <Button onClick={this._onButtonClick}>
              <span>Start</span>
              <div className="icon">
                <i className="fa fa-check"></i>
              </div>
            </Button>
          </CardRounded>
        </ContainerWrap>
        {this.state.showComponent ? <QuestionPage /> : null}
      </div>
    );
  }
}

export default WelcomePage;