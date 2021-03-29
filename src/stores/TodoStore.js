import { observable, action, computed, makeObservable, toJS } from 'mobx';

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _todo = {}; // id, title, date

  @observable
  _todos = [];

  get todo() {
    return this._todo;
  }

  // @computed 를 붙이면 캐싱하는 데이터만 새로 rendering 한다.
  // 붙이지 않으면 모든 데이터에 대해서 새로 rendering이 일어나 불필요하다.
  @computed
  get todos() {
    // // 유사 배열이니 배열 형태로 변경하려고 'slice'를 사용함
    // return this._todos ? this._todos.slice() : [];

    // mobx에서 자체적으로 mobxObject를 js 형태로 변경해주는게 있어
    // slice를 사용하지 말고 toJS를 사용하면 좋다.
    return toJS(this._todos);
  }

  @action
  setTodoProps(name, value) {
    this._todo = {
      ...this.todo,
      [name]: value,
    };
  }

  @action
  addTodo(todo) {
    this._todos.push(todo);
  }
}

export default new TodoStore();
