import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import AddAndUpdateCategory from '../../containers/Categories/add-update-category';
import PropTypes from 'prop-types';

const Form = styled.div`
    display: flex;
    margin: 25px 0 0 55px;
`;
const Button = styled.div`
    &:hover{
      color: #7baaf7;     
    }
    &:before{   
    content: ${(props) => props.content};
    font-size: 23px;
    }
`;

export default class extends React.Component {
  static propTypes = {
    category: PropTypes.node,
    update: PropTypes.bool,
    content:PropTypes.bool,
  };
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { content } = this.props;
    return (
      <div>
        <Button className="ButtonInForm" onClick={this.toggleModal} content={content} />
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          height={170}
        >
          <Form>
            <AddAndUpdateCategory
              onClose={this.toggleModal}
              category={this.props.category}
              update={this.props.update}
            />
          </Form>
        </Modal>
      </div>
    );
  }
}

