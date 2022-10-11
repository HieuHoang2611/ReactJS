import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); //Khởi tạo navigate
    const dispatch = useDispatch(); //Khởi tạo dispatch
    const [user, setUser] = useState({ username: "", password: "" }); //Khởi tạo state

    const userlogined = useSelector(state => state.userlogined); //Sử dụng useSelector để lấy giá trị của state
    
    //Tạo hàm setValueForUser để handle giá trị từ input
    const handleChange = (e) => {
      setUser({...user,[e.target.name] : e.target.value})
    };

    //Tạo hàm login có nhiệm vụ gọi dispatch với action login, payload là thông tin user
    const login = (e) => {
        e.preventDefault();
      dispatch({ type: "LOGIN", payload: user });
    };
    //Sử dụng useEffect() để navigate tới route”/users” nếu thông tin đăng nhập đúng
    useEffect(() => {                     
      if (userlogined.username) {
        navigate("/users");
      }
    }, [userlogined, navigate]);


    //Tạo hàm return giao diện
    return (
      <form onSubmit={login}>
        <label>User name</label>
        <input
          id="username"
          name="username"
          onChange={handleChange}
          type="text"
        />
        <label>Password</label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
  export default Login; //Export default component Login