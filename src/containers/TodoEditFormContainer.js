import React, { PureComponent } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind // inject 아래 위치해야함.
@observer
class TodoEditFormContainer extends PureComponent {
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  render() {
    const { todoStore } = this.props;

    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}
      />
    );
  }
}

export default TodoEditFormContainer;
