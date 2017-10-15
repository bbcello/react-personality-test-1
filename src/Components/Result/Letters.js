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
const Letter = styled.div`
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
class Letters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTypeAModal: false,
      showTypeBModal: false,
      showTypeCModal: false,
      showTypeDModal: false
    };
    // open + close -> Type A Modal
    this.handleOpenTypeAModal = this.handleOpenTypeAModal.bind(this);
    this.handleCloseTypeAModal = this.handleCloseTypeAModal.bind(this);
    // open + close -> Type B Modal
    this.handleOpenTypeBModal = this.handleOpenTypeBModal.bind(this);
    this.handleCloseTypeBModal = this.handleCloseTypeBModal.bind(this);
    // open + close -> Type C Modal
    this.handleOpenTypeCModal = this.handleOpenTypeCModal.bind(this);
    this.handleCloseTypeCModal = this.handleCloseTypeCModal.bind(this);
    // open + close -> Type D Modal
    this.handleOpenTypeDModal = this.handleOpenTypeDModal.bind(this);
    this.handleCloseTypeDModal = this.handleCloseTypeDModal.bind(this);
  }
  
  // open -> Type A Modal
  handleOpenTypeAModal() {
    this.setState({ showTypeAModal: !this.state.showTypeAModal });
  }
  // close -> Type A Modal
  handleCloseTypeAModal() {
    this.setState({ showTypeAModal: !this.state.showTypeAModal });
  }
  // render -> Type A Modal
  renderTypeAModal() {
    return (
      <Modal
        isOpen={this.state.showTypeAModal}
        onRequestClose={this.handleCloseTypeAModal}
        style={customStyles}
      >
        <h2>Type A</h2>
        {/* TODO: */}
      </Modal>
    )
  }

  // open -> Type B Modal
  handleOpenTypeBModal() {
    this.setState({ showTypeBModal: !this.state.showTypeBModal });
  }
  // open -> Type B Modal
  handleCloseTypeBModal() {
    this.setState({ showTypeBModal: !this.state.showTypeBModal });
  }
  // render -> Type B Modal
  renderTypeBModal() {
    return (
      <Modal
        isOpen={this.state.showTypeBModal}
        onRequestClose={this.handleCloseTypeBModal}
        style={customStyles}
      >
       <h2>Type B</h2>
       {/* TODO: */}
      </Modal>
    )
  }

  // open -> Type C Modal
  handleOpenTypeCModal() {
    this.setState({ showTypeCModal: !this.state.showTypeCModal });
  }
  // close -> Type C Modal
  handleCloseTypeCModal() {
    this.setState({ showTypeCModal: !this.state.showTypeCModal });
  }
  // render -> Type C Modal
  renderTypeCModal() {
    return (
      <Modal
        isOpen={this.state.showTypeCModal}
        onRequestClose={this.handleCloseTypeCModal}
        style={customStyles}
      >
        <h2>Type C</h2>
        {/* TODO: */}
      </Modal>
    )
  }

  // open -> Type D Modal
  handleOpenTypeDModal() {
    this.setState({ showTypeDModal: !this.state.showTypeDModal });
  }
  // close -> Type D Modal
  handleCloseTypeDModal() {
    this.setState({ showTypeDModal: !this.state.showTypeDModal });
  }
  // render -> Type D Modal
  renderTypeDModal() {
    return (
      <Modal
        isOpen={this.state.showTypeDModal}
        onRequestClose={this.handleCloseTypeDModal}
        style={customStyles}
      >
        <h2>Type D</h2>
        {/* TODO: */}
      </Modal>
    )
  }


  /* Main Render */
  render() {
    return (
      <Letter>
        <h1>Letters Results</h1>
        <div className="w-100 line"></div>
        <span>You are type <strong>{this.props.resultLetters}</strong></span>
        <div className="w-100 line"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <a onClick={this.handleOpenTypeAModal}>Type A</a>
            </div>
            <div className="col">
              <a onClick={this.handleOpenTypeBModal}>Type B</a>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <a onClick={this.handleOpenTypeCModal}>Type C</a>
            </div>
            <div className="col">
              <a onClick={this.handleOpenTypeDModal}>Type D</a>
            </div>
          </div>
        </div>
        {this.renderTypeAModal()}
        {this.renderTypeBModal()}
        {this.renderTypeCModal()}
        {this.renderTypeDModal()}
      </Letter>
    )
  }
}



Letters.PropTypes = {
  resultLetters: PropTypes.string.isRequired
};


export default Letters;