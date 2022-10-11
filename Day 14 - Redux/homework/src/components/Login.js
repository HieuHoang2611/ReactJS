import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); //Khởi tạo navigate
  const dispatch = useDispatch(); //Khởi tạo dispatch
  //const [user, setUser] = useState({ username: "", password: "" }); //Khởi tạo state

  const userlogined = useSelector((state) => state.userlogined); //Sử dụng useSelector để lấy giá trị của state



  //Tạo hàm login có nhiệm vụ gọi dispatch với action login, payload là thông tin user
  const login = (e) => {
    dispatch({ type: "LOGIN", payload: {} });
  };
  //Sử dụng useEffect() để navigate tới route”/users” nếu thông tin đăng nhập đúng
  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);

  //Tạo hàm return giao diện
  return (
    <div>
        <h1>UserList</h1>
      <nav>
      <Link to="/"><button onClick={() => login()}>UserList</button></Link>
      </nav>
      <Outlet /> {/*Sử dụng Outlet để render component con*/}
    </div>
  );
}
export default Login; //Export default component Login
