import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 5px 0 5px 0;
  text-align: center;
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <Root>
        © DenisSoft 2018
      </Root>
    );
  }
}
