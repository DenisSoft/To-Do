import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    background-color: white;
    color: black;
    padding: 20px 0 20px 20px;
    font-family: cursive;
`;

export default class Logo extends PureComponent {
  render() {
    return (
      <Root>
        To-Do List
      </Root>
    );
  }
}
