import React, { Component } from 'react';
import Header from './components/Header';

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

  render() {
    const { undoList } = this.state;

    return (
      <div>
        <Header addUndoItem={ this.addUndoItem }/>
        {
          undoList.map((item, index) => (
            <div key={ index }>{ item }</div>
          ))
        }
      </div>
    );
  }
}

export default TodoList;
