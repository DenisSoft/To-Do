import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import TaskList from '../../containers/TaskList';
import CategoryList from '../../containers/Categories';

const Root = styled.section`
  display: flex;
  margin: 20px;
  width: 98%;
  height: 673px;
`;

export default class extends PureComponent {

  render() {
    return (
      <Root>
        <Route component={CategoryList} />
        <Route
          path="/to-do/:idCategory"
          render={(props) => (
            <TaskList idCategory={props.match.params.idCategory} />
          )}
        />
      </Root>
    );
  }
}

