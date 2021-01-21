import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3003/",
  // headers: {
  //   Authorization: token,
  // },
});

Api.interceptors.request.use(
  function (config) {
    // 로컬스토리지에 있는 토큰값 실기
    console.log("axios 보내기전에 요청을 계속 보낸다");
    config.headers.Authorization = localStorage.getItem("token");
    // 요청을 보내기 전에 수행할 일
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
Api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  }
);

export default Api;
