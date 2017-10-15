import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';


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


// custom style for modal
const customStyles = {
  overlay : {
    position : 'fixed',
    backgroundColor : 'rgba(0, 0, 0, 0.35)'
  },
  content : {
    position: 'absolute',
    background: '#fff',
    width: '80%',
    height: '70%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}


// styled-components
const Color = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  h1 {
    text-align: center;
    margin: 2rem auto 0 auto;
    font-family: ${font.$titleFont};
    font-size: 1rem;
  }

  span {
    text-align: center;
    margin: 0;
    color: ${colors.$colorGold};
    font-family: ${font.$mainFont};
    font-size: 0.8rem;
  }

  .w-100.line {
    height: 2px;
    max-width: 40%;
    margin: 1rem auto;
    background: ${colors.$colorGold};
  }

  .container {
    padding: 2rem;
    padding-left: 4rem;
    text-align: justify;
    .col {
      padding-right: 0;
      &:nth-of-type(1) {
        padding-bottom: 1rem;
      }
      &:nth-of-type(2) {
        padding-bottom: 1rem;
      }
      a:not([href]):not([tabindex]) {
        font-family: ${font.$mainFont};
        font-size: 1rem;
        display: inline-block;
        cursor: pointer;
        color: ${colors.$colorGold};
      }
    }
  }

  /* laptop and higher */
  @media (min-width: 1200px) {
    h1 {
      font-size: 2rem;
    }
    span {
      font-size: 1.2rem;
    }
    .w-100.line {
      max-width: 25%;
    }
    .container {
      padding: 3rem;
      .row {
        margin: 0;
        padding: 0 10rem;
        .col {
          a:not([href]):not([tabindex]) {
            font-size: 1.5rem;
          }
          &:nth-of-type(2) {
            transform: translateX(4rem);
          }
          &:last-child {
            transform: translateX(4rem);
          }
        }
      }
    }
  }
`


/* CLASS ENTRY */
class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrownModal: false,
      showGreenModal: false,
      showBlueModal: false,
      showRedModal: false
    };
    // open + close -> Brown Type Modal
    this.handleOpenBrownModal = this.handleOpenBrownModal.bind(this);
    this.handleCloseBrownModal = this.handleCloseBrownModal.bind(this);
    // open + close -> Green Type Modal
    this.handleOpenGreenModal = this.handleOpenGreenModal.bind(this);
    this.handlecloseGreenModal = this.handlecloseGreenModal.bind(this);
    // open + close -> Green Blue Modal
    this.handleOpenBlueModal = this.handleOpenBlueModal.bind(this);
    this.handleCloseBlueModal = this.handleCloseBlueModal.bind(this);
    // open + close -> Red Type Modal
    this.handleOpenRedModal = this.handleOpenRedModal.bind(this);
    this.handleCloseRedModal = this.handleCloseRedModal.bind(this);
  }
  
  // open -> Brown Type Modal
  handleOpenBrownModal() {
    this.setState({ showBrownModal: !this.state.showBrownModal });
  }
  // close -> Brown Type Modal
  handleCloseBrownModal() {
    this.setState({ showBrownModal: !this.state.showBrownModal });
  }
  // render -> Brown Type Modal
  renderBrownModal() {
    return (
      <Modal
        isOpen={this.state.showBrownModal}
        onRequestClose={this.handleCloseBrownModal}
        style={customStyles}
      >
        <h2>Brown Type</h2>
        {/* TODO: */}
      </Modal>
    )
  }

  // open -> Green Type Modal
  handleOpenGreenModal() {
    this.setState({ showGreenModal: !this.state.showGreenModal });
  }
  // open -> Green Type Modal
  handlecloseGreenModal() {
    this.setState({ showGreenModal: !this.state.showGreenModal });
  }
  // render -> Green Type Modal
  renderGreenModal() {
    return (
      <Modal
        isOpen={this.state.showGreenModal}
        onRequestClose={this.handlecloseGreenModal}
        style={customStyles}
      >
       <h2>Green Type</h2>
       {/* TODO: */}
      </Modal>
    )
  }

  // open -> Blue Type Modal
  handleOpenBlueModal() {
    this.setState({ showBlueModal: !this.state.showBlueModal });
  }
  // close -> Blue Type Modal
  handleCloseBlueModal() {
    this.setState({ showBlueModal: !this.state.showBlueModal });
  }
  // render -> Blue Type Modal
  renderBlueModal() {
    return (
      <Modal
        isOpen={this.state.showBlueModal}
        onRequestClose={this.handleCloseBlueModal}
        style={customStyles}
      >
        <h2>Blue Type</h2>
        {/* TODO: */}
      </Modal>
    )
  }

  // open -> Red Type Modal
  handleOpenRedModal() {
    this.setState({ showRedModal: !this.state.showRedModal });
  }
  // close -> Red Type Modal
  handleCloseRedModal() {
    this.setState({ showRedModal: !this.state.showRedModal });
  }
  // render -> Red Type Modal
  renderRedModal() {
    return (
      <Modal
        isOpen={this.state.showRedModal}
        onRequestClose={this.handleCloseRedModal}
        style={customStyles}
      >
        <h2>Red Type</h2>
        {/* TODO: */}
      </Modal>
    )
  }


  /* Main Render */
  render() {
    return (
      <Color>
        <h1>Colors Results</h1>
        <div className="w-100 line"></div>
        <span>You are type <strong>{this.props.resultColors}</strong></span>
        <div className="w-100 line"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <a onClick={this.handleOpenBrownModal}>Brown Type</a>
            </div>
            <div className="col">
              <a onClick={this.handleOpenGreenModal}>Green Type</a>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <a onClick={this.handleOpenBlueModal}>Blue Type</a>
            </div>
            <div className="col">
              <a onClick={this.handleOpenRedModal}>Red Type</a>
            </div>
          </div>
        </div>
        {this.renderBrownModal()}
        {this.renderGreenModal()}
        {this.renderBlueModal()}
        {this.renderRedModal()}
      </Color>
    )
  }
}



Colors.PropTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.number.isRequired,
  resultGreen: PropTypes.number.isRequired,
  resultBlue: PropTypes.number.isRequired,
  resultRed: PropTypes.number.isRequired
};


export default Colors;