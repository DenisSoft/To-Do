import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Progress from '../../containers/TaskList/progress';
import Add from '../Add';
import ToDoList from '../ToDoList';

export const Content = styled.div`
`;

export default class extends PureComponent {
  render() {
    return (
      <Content>
        <Progress />
        <Route component={Add} />
        <Route component={ToDoList} />
      </Content>
    );
  }
}
