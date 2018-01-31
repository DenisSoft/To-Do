import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormUpdateTask = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-wrap: wrap;
  font-size: 20px;
  width: 557px;
}
`;
const CategoryList = styled.select`
  border: 1px grey solid;
  width: 330px;
`;
const Name = styled.div`
  color: black;
  margin: -20px 0 0 10px;
  font-size: 30px;
  overflow: hidden;
`;
const Root = styled.section`  
  display: flex;
  flex-direction: column;
`;
const Option = styled.option`  
`;
const Done = styled.div`  
`;
const InputTitle = styled.input`  
  border: 1px grey solid;
  width: 330px;
  margin-top: 10px;
`;

const ButtonSave = styled.input`
    display: flex;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
    margin: 20px 10px 10px 476px;
    width: 80px;
    padding: 1px 0 1px 19px;
    font-size: 16px;
  &:hover{
    background-color: #7baaf7;    
  }
`;
const ChangeStatus = styled.input`
    height: 15px;
    width: 15px;
    margin: 10px;
`;
const InputDescription = styled.textarea`
    height: 180px;
    width: 557px;
    border: 1px solid grey;
`;

export default class extends PureComponent {
  static propTypes = {
    task: PropTypes.node,
    categories: PropTypes.array,
    onClose: PropTypes.func,
    updateTask: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      id: props.task.id,
      idCategory: props.task.idCategory,
      title: props.task.title,
      isDone: props.task.isDone,
      description: props.task.description,
    };

    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDoneChange = this.onDoneChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { updateTask, onClose } = this.props;
    const { id, idCategory, title, isDone, description } = this.state;

    if (title) {
      updateTask(+id, idCategory, title, isDone, description);
    }
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  }
  onCategoryChange(e) {
    this.setState({ idCategory: +e.target.value });
  }
  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  onDoneChange(e) {
    this.setState({ isDone: !this.state.isDone });
  }
  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    const titleCurrentCategory = this.props.categories.find((i) => i.id === this.state.idCategory).title;
    return (
      <Root>
        <Name>
          {this.props.task.title}
        </Name>
        <FormUpdateTask onSubmit={this.onSubmit}>
          <CategoryList value={this.state.idCategory} onChange={this.onCategoryChange}>
            <Option value={this.state.idCategory}>{titleCurrentCategory}</Option>
            {
                this.props.categories.map((category) => (
                  <Option value={category.id}>{category.title}</Option>
                ))
            }
          </CategoryList>
          <InputTitle
            onChange={this.onTitleChange}
            value={this.state.title}
            type="text"
            maxLength={30}
          />
          <Done>
            <ChangeStatus
              type="checkbox"
              onChange={this.onDoneChange}
              checked={this.state.isDone}
            />Done
          </Done>
          <InputDescription
            onChange={this.onDescriptionChange}
            value={this.state.description}
            type="text"
          />
          <ButtonSave value="Save" type="submit"/>
        </FormUpdateTask>
      </Root>
    );
  }
}
