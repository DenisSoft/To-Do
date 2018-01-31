import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`  
    font-size: 18px;
    border: 1px solid black;
    color: inherit;
    width: 60px;
    height: 35px;
    border-radius 3px;
    cursor: pointer;
    &:hover{
    background-color: #7baaf7;    
    }
`;
const Footer = styled.div`  
    display: flex;
    flex-direction: row-reverse;
`;
const BackDrop = styled.div`  
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.6);
    padding: 200px;
`;
const ModalWindow = styled.div`  
    background: #fff;
    border-radius: 5px;
    width: ${(props) => props.width || 500}px;
    margin: 0 auto;
    padding: 10px;  
`;
const Border = styled.div` 
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height}px;
    border: 2px #7baaf7 solid;
    border-radius: 5px;
    margin: 0 auto;
`;
const Close = styled.div`
    justify-content: flex-end;
    display: flex;
    margin-right: 4px;
    &:hover{
      color: #7baaf7;     
    }
    &:before{  
      content: "\f057";
    }
`;

export default class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    height: PropTypes.node,
    width: PropTypes.node,
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <BackDrop>
        <ModalWindow width={this.props.width}>
          <Border height={this.props.height}>
            <Close onClick={this.props.onClose} />
            {this.props.children}
            {this.props.onClose}
          </Border>
        </ModalWindow>
      </BackDrop>
    );
  }
}

