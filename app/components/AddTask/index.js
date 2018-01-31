import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: block;
`;
const Input = styled.input`
  width: 310px;
`;

export default class AddTask extends PureComponent {
  static propTypes = {
    addTask: PropTypes.func,
    idCategory: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      taskTitle: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    const { addTask, idCategory } = this.props;
    const { taskTitle } = this.state;

    if (taskTitle) {
      addTask(+idCategory, taskTitle);
    }
    e.preventDefault();
    this.setState({ taskTitle: '' });
  }

  handleInputChange(e) {
    this.setState({
      taskTitle: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input
          className="InputForm"
          onChange={this.handleInputChange}
          value={this.state.taskTitle}
          type="text"
          placeholder="Text input with button"
          maxLength={30}
        />
        <Button value="Add" />
      </Form>
    );
  }
}

