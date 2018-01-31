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

export default class extends PureComponent {
  static propTypes = {
    category: PropTypes.node,
    update: PropTypes.node,
    addCategory: PropTypes.func,
    onClose: PropTypes.func,
    updateCategory: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      categoryTitle: props.hasOwnProperty('update') ? props.update && props.category.title : '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    const { addCategory, updateCategory, onClose, category, update } = this.props;
    const { categoryTitle } = this.state;

    if (update) {
      if (categoryTitle) {
        updateCategory(category.id, categoryTitle, category.idParentCategory, category.listIdChildrenCategory);
      }
    } else if (this.props.hasOwnProperty('category')) {
      if (categoryTitle) {
        addCategory(categoryTitle, category.id);
      }
    } else if (categoryTitle) {
      addCategory(categoryTitle);
    }

    e.preventDefault();
    this.setState({ categoryTitle: '' });
    if (onClose) {
      onClose();
    }
  }

  handleInputChange(e) {
    this.setState({
      categoryTitle: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input
          className="InputForm"
          onChange={this.handleInputChange}
          value={this.state.categoryTitle}
          type="text"
          placeholder="Enter category title"
          maxLength={30}
        />
        <Button value="Add" />
      </Form>
    );
  }
}
