import React, { Component } from 'react';
import Header from './components/Header';
import UndoList from './components/UndoList';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      undoList: []
    };
  }

  addUndoItem = (value) => {
    this.setState({
      undoList: [...this.state.undoList, { status: 'div', value }]
    });
  }

  deleteItem = (index) => {
    const newList = [...this.state.undoList];
    newList.splice(index, 1);
    this.setState({
      undoList: newList
    });
  }

  changeStatus = (index) => {
    const newList = this.state.undoList.map((item, index1) => ({
      ...item,
      status: index1 === index ? 'input' : 'div'
    }));
    this.setState({
      undoList: newList
    });
  }

  handleBlur = (index) => {
    const newList = this.state.undoList.map((item, index1) => ({
      ...item,
      status: 'div'
    }));
    this.setState({
      undoList: newList
    });
  }

  valueChange = (index, value) => {
    const newList = this.state.undoList.map((item, index1) => ({
      ...item,
      value: index1 === index ? value : item.value
    }));
    this.setState({
      undoList: newList
    })
  }

  render() {
    const { undoList } = this.state;

    return (
      <div>
        <Header addUndoItem={ this.addUndoItem }/>
        <UndoList
          list={ undoList }
          deleteItem={ this.deleteItem }
          changeStatus={ this.changeStatus }
          handleBlur={ this.handleBlur }
          valueChange={ this.valueChange }
        />
      </div>
    );
  }
}

export default TodoList;
