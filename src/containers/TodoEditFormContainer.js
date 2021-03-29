import React, { PureComponent } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoEditFormContainer extends PureComponent {
  render() {
    const { todoStore } = this.props;

    return <TodoEditFormView todo={todoStore.todo} />;
  }
}

export default TodoEditFormContainer;
