import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
`;

export default class extends PureComponent {
  static propTypes = {
    progress: PropTypes.number,
  };
  render() {
    return (
      <Root>
        <progress max="100" value={this.props.progress || 0}/>
      </Root>
    );
  }
}
