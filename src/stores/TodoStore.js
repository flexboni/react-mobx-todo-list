import { observable, action, computed } from 'mobx';

class TodoStore {
  @observable
  _todo = {
    title: 'test',
  }; // id, title, date

  get todo() {
    return this._todo;
  }
}

export default new TodoStore();
