import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormAddAndUpdateCategory from '../FormAddAndUpdateCategory';
import PropTypes from 'prop-types';

export const Root = styled.form`
  border: 1px solid black;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.div`
  color: #7baaf7;
  margin: 0;
  font-size: 20px;
  padding: 2px;
  overflow: hidden;
  &:hover{
    color: black;     
  }
`;
const Control = styled.div`
    display: flex;
    padding-left: 7px;
`;
const Delete = styled.div`
    &:hover{
      color: #7baaf7;     
    }
    &:before{   
      content: "\f014";
      font-size: 23px;
    }
`;
const OpenList = styled.div` 
    visibility: ${(props) => props.visibility};
    &:hover{
      color: #7baaf7;     
    }
    &:before{  
      margin-top: 3px;
      content: ${(props) => props.content ? '"\\f0a7"' : '"\\f0a4"'};
    }
`;

export default class Category extends PureComponent {
  static propTypes = {
    deleteCategory: PropTypes.func,
    pushPopCategoryInFiltr: PropTypes.func,
    category: PropTypes.node,
    filterCategory: PropTypes.array,
    categories: PropTypes.array,
  };
  constructor(props) {
    super(props);

    this.deleteCategoryFunction = this.deleteCategoryFunction.bind(this);
    this.openCategoryFunction = this.openCategoryFunction.bind(this);
  }
  deleteCategoryFunction() {
    this.props.deleteCategory(this.props.category.id);
    if (this.props.filterCategory.includes(this.props.category.id)) {
      this.props.pushPopCategoryInFiltr(this.props.category.id, this.props.categories);
    }
  }
  openCategoryFunction() {
    this.props.pushPopCategoryInFiltr(this.props.category.id, this.props.categories);
  }

  render() {
    const { category, filterCategory } = this.props;
    const indentation = { marginLeft: category.idParentCategory ? 40 : 0 };

    return (
      <Root style={indentation}>
        <Control>
          <OpenList
            className="ButtonInForm"
            onClick={this.openCategoryFunction}
            visibility={category.listIdChildrenCategory.length ? 'visible' : 'hidden'}
            content={filterCategory.includes(category.id)}
          />
          <Link to={`/to-do/${category.id}`}>
            <Name>
              {category.title}
            </Name>
          </Link>
          <FormAddAndUpdateCategory
            category={category}
            update
            content={'"\\f044"'}
          />
        </Control>
        <Control>
          <Delete
            className="ButtonInForm"
            onClick={this.deleteCategoryFunction}
            update={1}
          />
          <FormAddAndUpdateCategory category={category} content={'"\\f196"'} />
        </Control>
      </Root>
    );
  }
}

