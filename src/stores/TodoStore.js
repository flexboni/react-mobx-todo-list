import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _todo = {}; // id, title, date

  get todo() {
    return this._todo;
  }

  @action
  setTodoProps(name, value) {
    this._todo = {
      ...this.todo,
      [name]: value,
    };
  }
}

export default new TodoStore();
