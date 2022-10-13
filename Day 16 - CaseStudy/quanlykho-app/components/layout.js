import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <div className="wrapper pt-3">
      <div className="row">
        <div className="col-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
            <img src="https://learn.codegym.vn/storage/2020/11/Logo.png" alt="" className="bb-logo"></img>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Tổng quan
                  </a>
                </Link>
              </li>
              <br />
              <li className="nav-item bg-primary">
                <Link href="/dmvt">
                  <a className="nav-link text-white">Danh mục sản phẩm</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/dmkho">
                  <a className="nav-link text-white">Danh mục kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/nktran">
                  <a className="nav-link text-white">Phiếu nhập kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/xktran">
                  <a className="nav-link text-white">Phiếu xuất kho</a>
                </Link>
              </li>
              <li className="nav-item bg-primary">
                <Link href="/rpttonkho">
                  <a className="nav-link text-white">Báo cáo tồn kho</a>
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
