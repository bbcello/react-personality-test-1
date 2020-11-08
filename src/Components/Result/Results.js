import React from 'react';
import styled from 'styled-components';

import Colors from '../Result/Colors';
import Letters from '../Result/Letters';


// styled-components
const NextBtn = styled.div`
/* div */
display: block;
width: 8rem;
height: 3.5rem;
color: #fff;
position: absolute;
line-height: 3.5rem;
bottom: -5rem;
left: 0;
right: 0;
margin: auto;
overflow: hidden;
border-radius: 5px;
box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);

@media (min-width: 1200px) {
  width: 15rem;
}

  /* div span,.icon */
  span,
  .icon {
    display: block;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    color: #fff;
  }
  /* div span */
  span {
    width: 72%;
    line-height: inherit;
    font-size: 1rem;
    text-transform: uppercase;
    left: 0;
    transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
  }
  /* div .icon */
  .icon {
    width: 28%;
    right: 0;
    transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
  }
  /* div .fa */
  .fa {
    font-size: 1rem;
    transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400), height .25s ease;
  }
/* div:hover */
&:hover {
  opacity: .9;
  animation: none;
  /* div:hover span */
  span {
    left: -72%;
    opacity: 0;
  }
  /* div:hover .icon */
  .icon {
    width: 100%;
    /* div:hover .icon .fa */
    .fa {
      font-size: 1rem;
    }
  }
}
`



// class entery point
class Results extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      nextBtnShow: true,
      showColorsResult: true,
      showLettersResult: false,
      showBriggsResult: true,
      showReplayBtn: false
    }
  }

  // next button will accompany result colors + letters + briggs
  renderNextBtn() {
    return (
      <NextBtn onClick={() => this._onNextClick()}>
        <span>Next</span>
        <div className="icon">
          <i className="fa fa-chevron-right"></i>
        </div>
      </NextBtn>
    )
  }

  // render colors result
  renderResultColors() {
    return (
      <Colors resultColors={this.props.resultColors}/>
    )
  }

  //render letters result
  renderResultLetters() {
    return (
      <Letters resultLetters={this.props.resultLetters}/>
    )
  }

  // render main class Results
  render() {
    return (
      <div>
        {this.state.showColorsResult ? this.renderResultColors() : null}
        {this.state.showLettersResult ? this.renderResultLetters() : null}
        {this.state.nextBtnShow ? this.renderNextBtn() : null}
      </div>
    )
  }

  _onNextClick() {
    setTimeout(() => {
      this.setState({
        showColorsResult: !this.state.showColorsResult, // -> false
        showLettersResult: !this.state.showLettersResult // -> true
      })
    }, 800)
  }

}

export default Results;