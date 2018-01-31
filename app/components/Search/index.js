import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    color: black;
    padding: 20px 20px 20px 10px;
    font-family: cursive;
`;
const Inscription = styled.div`
    color: black;
    font-family: cursive;
    font-size: 0.6em;
    margin: 3% 20px 0 0;
`;
const Checkbox = styled.input`
    height: 20px;
    width: 20px;
    margin: 18px 18px 0;
`;
const InputSearch = styled.form`
    margin: 0 18px;
    background-color: transparent;    
    font-size: 18px;
    border: 1px solid black;
    color: inherit;
    font-size: 0,6em;
    margin: 2% 0;
    border-radius: 3px;
    height: 35px;
    padding: 0 5px 0 5px;
`;
const Reset = styled.input`
    width: 25px; 
    height: 25px; 
    margin: 4px 0;
    padding: 0;
    font-size: 17px;
    cursor: pointer;
    border: 1px gray solid;
    &:hover{
      background-color: #7baaf7;
    }
`;

export default class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.reset = this.reset.bind(this);
    this.changeDone = this.changeDone.bind(this);
  }
  changeDone() {
    this.props.updateFilterTasks(this.state.title)
  }
  handleInputChange(e) {
    this.setState({
      title: e.target.value,
    });
    this.props.updateFilterTasks(e.target.value, true);
  }
  reset(e) {
    this.setState({
      title: '',
    });
    this.props.updateFilterTasks('', true);
  }

  render() {
    return (
      <Root>
        <Checkbox type="checkbox" onClick={this.changeDone}/>
        <Inscription>
          Show done
        </Inscription>
        <InputSearch>
          <input
            type="search"
            placeholder="Search"
            value={this.state.title}
            onChange={this.handleInputChange} />
          <Reset onClick={this.reset} type="reset" value="X" />
        </InputSearch>
      </Root>
    );
  }
}
