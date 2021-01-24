import { observable, action, makeAutoObservable } from "mobx";

class LoginStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @observable
  username = "노성형";
}

export default LoginStore;
