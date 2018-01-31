import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

import Content, { Root as ContentRoot } from 'components/Content';
import Footer from 'components/Footer';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 99.6%;
  margin: 0 auto;
`;

export default class App extends PureComponent {

  render() {
    return (
      <Root>
        <Header />
        <Route component={Content} />
        <Footer />
      </Root>
    );
  }
}

