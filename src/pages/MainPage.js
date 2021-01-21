import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Api from "../utils/Api";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 노트 리스트
      lists: [],
    };
  }
  componentDidMount() {
    Api.get("posts")
      .then(({ data }) => {
        console.log(data.posts);
        this.setState({
          lists: data.posts,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { lists } = this.state;
    return (
      <div>
        <h1 className="page-header">학습노트 리스트</h1>
        <div className="main list-container contents">
          <ul>
            {lists.map((list) => {
              const { _id, title, contents, createdAt } = list;
              return (
                <li key={_id}>
                  <div className="post-title">{title}</div>
                  <div className="post-contents">{contents}</div>
                  <div className="post-time">
                    {createdAt}
                    <i className="icon ion-md-create"></i>
                    <i className="icon ion-md-trash"></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="empty-content">
          <h3>등록된 학습노트가 없습니다.</h3>
        </div> */}
        <NavLink to={"/write"} className="create-button">
          <i className="ion-md-add"></i>
        </NavLink>
      </div>
    );
  }
}

export default MainPage;
