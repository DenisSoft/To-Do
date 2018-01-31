import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FormUpdateTask from '../FormUpdateTask';
import PropTypes from 'prop-types';

export const Root = styled.form`
  border: 1px solid black;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.div`
  padding: 35px 0 20px 20px;
  color: black;
  margin: 0;
  font-size: 30px;
  overflow: hidden;
`;
const Control = styled.div`
    display: flex;
    padding-left: 7px;
`;
const ChangeStatus = styled.input`
    height: 20px;
    width: 20px;
    margin: 50px;
`;
const ButtonDelete = styled.div`
    height: 20px;
    width: 20px;
    margin: 45px 55px 50px 0;
    &:hover{
      color: #7baaf7;     
    }
    &:before{   
      content: "\f014";
      font-size: 23px;
    }
`;

export default class Category extends PureComponent {
  static propTypes = {
    changeStatus: PropTypes.func,
    deleteTask: PropTypes.func,
    task: PropTypes.node,
  };

  render() {
    const { task } = this.props;

    return (
      <Root>
        <Control>
          <ChangeStatus
            type="checkbox"
            onClick={() => { this.props.changeStatus(task.id); }}
            checked={this.props.task.isDone}
          />
          <Name>
            {task.title}
          </Name>
        </Control>
        <Control>
          <FormUpdateTask task={this.props.task} />
          <ButtonDelete onClick={() => { this.props.deleteTask(task.id); }} />
        </Control>
      </Root>
    );
  }
}
