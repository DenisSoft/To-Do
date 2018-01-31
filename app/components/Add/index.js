import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import AddAndUpdateCategory from '../../containers/Categories/add-update-category';
import AddTask from '../../containers/TaskList/add-task';

export const Root = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    color: black;
    padding: 20px 20px 20px 20px;
    font-family: cursive;
    justify-content: space-between;
`;

export default class extends PureComponent {

  render() {
    return (
      <Root>
        <AddAndUpdateCategory />
        <Route
          path="/to-do/:idCategory"
          render={(props) => (
            <AddTask idCategory={props.match.params.idCategory} />
          )}
        />
      </Root>
    );
  }
}
