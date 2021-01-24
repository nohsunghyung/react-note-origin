import { observable, action, runInAction, makeAutoObservable } from "mobx";
import Api from "../utils/Api";

class NoteStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @observable
  posts = [];

  @action
  fetchList() {
    Api.get("posts")
      .then(({ data }) => {
        runInAction(() => {
          this.posts = data.posts;
        });
      })
      .catch();
  }
}

export default NoteStore;
