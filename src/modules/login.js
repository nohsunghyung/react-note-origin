import { createAction, handleActions } from "redux-actions";
import { userLogin } from "../utils/Api";

// 로그인 input 변경
const CHANGE_INPUT = "login/CHANGE_INPUT";
const LOGIN_START = "login/LOGIN_START";
const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
const LOGIN_FAIL = "login/LOGIN_FAIL";

export const onChangeValue = createAction(CHANGE_INPUT, (name, value) => ({
  name,
  value,
}));

export const loginUser = (apiParams) => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const { data } = await userLogin(apiParams);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
  }
};

const initialState = {
  username: "",
  password: "",
};

// 리듀서
const login = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload }) => {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
    [LOGIN_START]: (state) => {
      return {
        ...state,
      };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      console.log("LOGIN_SUCCESS", state, action);
      return {
        ...state,
      };
    },
    [LOGIN_FAIL]: (state, action) => {
      console.log("LOGIN_FAIL", state, action);
      return {
        ...state,
      };
    },
  },
  initialState
);

export default login;
