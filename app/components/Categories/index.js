import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Category from '../../containers/FilterCategories';
import PropTypes from 'prop-types';


const Root = styled.section`  
  display: flex;
  width: 40%;
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
    categories: PropTypes.array,
  };

  render() {
    return (
      <Root>
        <List>
          {
            this.props.categories.map((category) => (
              <Item key={category.id}>
                <Category category={category} />
              </Item>
               ))
           }
        </List>
      </Root>
    );
  }
}

