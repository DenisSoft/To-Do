import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import UpdateTask from '../../containers/TaskList/update-task';
import PropTypes from 'prop-types';

const Form = styled.div`
    display: flex;
`;
const ButtonUpdate = styled.div`
    height: 20px;
    width: 20px;
    margin: 45px 55px 50px 50px;
    &:hover{
      color: #7baaf7;     
    }
    &:before{   
      content: "\f044";
      font-size: 23px;
    }
`;

export default class extends React.Component {
  static propTypes = {
    task: PropTypes.object,
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
    return (
      <div>
        <ButtonUpdate onClick={this.toggleModal} />
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          height={410}
          width={600}
        >
          <Form>
            <UpdateTask onClose={this.toggleModal} task={this.props.task} />
          </Form>
        </Modal>
      </div>
    );
  }
}

