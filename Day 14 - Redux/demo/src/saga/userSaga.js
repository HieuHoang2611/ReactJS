import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS
} from "../redux/action";

//Khai báo BaseURL là đường url tới Mock API
const BaseURL = "http://localhost:3001/userinfo";

//Khai báo hàm getUser():
function* getUser(action) {
    try {
      const response = yield axios.get(BaseURL); //Fetch dữ liệu từ Mock API
      // Sau khi lấy được dữ liệu từ fake API
      // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
      yield put({ type: FETCH_USER_SUCCESS, payload: response.data }); //Sử dụng yield put để dispatch
                                                                        //action có type FETCH_USER_SUCCESS
                                                                        //payload là data lấy được từ Mock API
    } catch (error) {
      console.log("error - getUser : ", error);
    }
  }

  //Khai báo hàm authSagaFun()
  function* authSagaFun(action) {
    const user = action.payload; //Lấy thông tin user từ action
    //Kiểm tra thông tin đăng nhập có đúng như yêu cầu bài toán không, nếu đúng thì thực hiện 2 dispatch
    //console.log(user);
    if (user.username === "admin" && user.password === "letmein") {
      yield put({ type: LOGIN_SUCCESS, payload: user }); //action có type LOGIN_SUCCESS, payload là user
      yield put({ type: FETCH_USER, payload: {} }); //action có type FETCH_USER, payload là {}
    }
  }

  //Khai báo hàm rootSaga() -- có nhiệm vụ lắng nghe action và xử lí gọi hàm tương ứng
  export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
  }