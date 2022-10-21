import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function Layout({ children }) {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth).then((res) => {
        router.push('/')
    });

  }
  return (
    <div className="wrapper pt-3">
      <div className="row">
        <div className="col-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-primary">
            <a
              href="/home"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
            <img src="https://learn.codegym.vn/wp-content/uploads/2020/11/Logo.png" alt="" className="bb-logo"></img>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link active" aria-current="page">
                  <i className="bi bi-house-fill"></i> &nbsp;Tổng quan
                  </a>
                </Link>
              </li>
              <br />
              <li className="nav-item bg-primary">
                <Link href="/dmloaivt">
                  <a className="nav-link text-white"><i className="bi bi-basket2-fill"></i> &nbsp;Danh mục loại sản phẩm</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/dmvt">
                  <a className="nav-link text-white"><i className="bi bi-bag-fill"></i> &nbsp;Danh mục sản phẩm</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/dmkho">
                  <a className="nav-link text-white"><i className="bi bi-grid-3x3-gap-fill"></i> &nbsp;Danh mục kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/nktran">
                  <a className="nav-link text-white"><i className="bi bi-door-closed-fill"></i> &nbsp;Phiếu nhập kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/xktran">
                  <a className="nav-link text-white"><i className="bi bi-door-open-fill"></i> &nbsp;Phiếu xuất kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/rpttonkho">
                  <a className="nav-link text-white"><i className="bi bi-bar-chart-fill"></i> &nbsp;Báo cáo tồn kho</a>
                </Link>
              </li>
              <br />
              <li className="nav-item bg-primary">
            <Link href="/">
                  <a className="nav-link active" aria-current="page">
                  <i className="bi bi-box-arrow-left"></i> &nbsp;Đăng xuất
                  </a>
            </Link>
            </li>
            </ul>
           
          </div>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
