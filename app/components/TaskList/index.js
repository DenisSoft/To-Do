import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Task from '../../containers/TaskList/task';

const Root = styled.section`
  display: flex;
  width: 60%;
  margin-left: 10px;
  overflow-y: scroll;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
`;

export default class extends PureComponent {
  static propTypes = {
    tasks: PropTypes.array,
  };

  render() {
    return (
      <Root>
        <List>
          {
            this.props.tasks.map((task) => (
              <Item key={task.id}>
                <Task task={task} />
              </Item>
            ))
          }
        </List>
      </Root>
    );
  }
}
