import React, { PureComponent } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator';

@inject('todoStore')
@autobind // inject 아래 위치해야함.
@observer
class TodoEditFormContainer extends PureComponent {
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = { ...todo, id: generateId(5) };
    this.props.todoStore.addTodo(todo);
  }

  render() {
    const { todoStore } = this.props;

    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}
        onAddTodo={this.onAddTodo}
      />
    );
  }
}

export default TodoEditFormContainer;
