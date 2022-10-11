import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import User from "./User";
import store from "../redux/store";

function AppSaga() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/" element={<User />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default AppSaga;