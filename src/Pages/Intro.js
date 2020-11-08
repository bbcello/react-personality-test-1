import React from 'react';
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


// ===========================================================================================
// styled-components
// ===========================================================================================
const Container = styled.div`
  /* div .container */
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  background: ${colors.$colorBg};
`

const Card = styled.div`
  /* div .card */
  position: absolute;
  height: 60%;
  width: 80%;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px -6px 8px 0px rgba(0, 0, 0, 0.1), 
              0px 6px 8px 0px rgba(0, 0, 0, 0.1), 
              6px 0px 8px 0px rgba(0, 0, 0, 0.1), 
              -6px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background: ${colors.$colorCardBg};
  background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
  background-size: 3px 3px;

  @media (min-width: 701px) {
    width: 60%;
  }
`
const Title = styled.h1`
  /* h1 */
  position: relative;
  font-family: ${font.$titleFont};
  font-size: 2.5rem;
  color: ${colors.$colorGold};
  text-align: center;
  padding-top: 15rem;


  @media (min-width: 1200px) {
    padding-top: 3rem;
    font-size: 2rem;
    letter-spacing: 2px;
  }
`

const StartBtn = styled.div`
  /* div */
  display: block;
  width: 12rem;
  height: 3.5rem;
  color: #fff;
  position: absolute;
  line-height: 3.5rem;
  bottom: 2rem;
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


// ===========================================================================================
// Main
// ===========================================================================================
const Intro = ({title, _onStartClick}) => {
  return (
    <Container className="container intro">
      <Card className="card">
        <Title>
          <span> 돈BTI 테스트 </span>
        </Title>
        <StartBtn onClick={() => _onStartClick()}>
          <span>테스트 시작!</span>
          <div className="icon">
            <i className="fa fa-arrow-right"></i>
          </div>
        </StartBtn>
      </Card>
    </Container>
  );
}

export default Intro;