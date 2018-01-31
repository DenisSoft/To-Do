import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Button = styled.input`
    background-color: transparent;
    font-family: cursive;
    font-size: 18px;
    border: 1px solid black;
    border-radius 0 3px 3px 0;
    border-left: 0;
    color: inherit;
    margin: 0;
    height: 35px;
    padding: 0 5px 7px 5px;
    width: 60px;  
    cursor: pointer;
    &:hover{
    background-color: #7baaf7;    
    }
`;

export default class extends PureComponent {
  render() {
    return (
      <Button type="submit" value={this.props.value} />
    );
  }
}
