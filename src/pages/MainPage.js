import React, { Component } from "react";

export class MainPage extends Component {
  render() {
    return (
      <div>
        <h1 class="page-header">학습노트 리스트</h1>
        <div class="main list-container contents">
          <ul>
            <li>
              <div class="post-title">타이틀</div>
              <div class="post-contents">제목</div>
              <div class="post-time">
                2020-09-18
                <i class="icon ion-md-create"></i>
                <i class="icon ion-md-trash"></i>
              </div>
            </li>
          </ul>
        </div>
        {/* <div class="empty-content">
          <h3>등록된 학습노트가 없습니다.</h3>
        </div> */}
        <a href="" class="create-button">
          <i class="ion-md-add"></i>
        </a>
      </div>
    );
  }
}

export default MainPage;
