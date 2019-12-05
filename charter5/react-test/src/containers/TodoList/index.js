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

  addUndoItem = (item) => {
    this.setState({
      undoList: [...this.state.undoList, item]
    });
  }

  deleteItem = (index) => {
    const newList = [...this.state.undoList];
    newList.splice(index, 1);
    this.setState({
      undoList: newList
    });
  }

  render() {
    const { undoList } = this.state;

    return (
      <div>
        <Header addUndoItem={ this.addUndoItem }/>
        <UndoList list={ undoList } deleteItem={ this.deleteItem } />
      </div>
    );
  }
}

export default TodoList;
