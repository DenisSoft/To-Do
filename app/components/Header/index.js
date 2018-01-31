import React, { PureComponent } from 'react';
import Logo from 'components/Logo';
import Search from '../../containers/FilterTasks';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default class Header extends PureComponent {
  render() {
    return (
      <Root>
        <Logo />
        <Search />
      </Root>
    );
  }
}
