import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function HomeIndex() {
  const router = useRouter();
  const query = router.query;
  const [recept, setRecept] = useState({
    ma_ct: "XK1",
    ma_vt: "S10DA021",
    ma_kho: "KHO01",
  });
  const [r70, setR70] = useState({
      so_phieu: "",
      ngay_lap_phieu: "",
      ma_ct: "XK1",
      ma_vt: "",
      ma_kho: "",
      so_luong: 0,
      t_tien: 0
  });

  const [itemlist, setItemList] = useState([]);
  const [stocklist, setStockList] = useState([]);
  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  useEffect(() => {
    axios
      .get("http://localhost:3001/dmvt/")
      .then((res) => {
        setItemList(res.data);
        setRecept({ ...recept, ma_vt: res.data[0].ma_vt });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3001/dmkho/")
      .then((res) => {
        setStockList(res.data);
        setRecept({ ...recept, ma_kho: res.data[0].ma_kho });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setRecept({ ...recept, [e.target.name]: e.target.value });
    if(e.target.name !=='don_gia') setR70({ ...r70, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/xuatkho/", recept)
      .then((response) => {
        axios
          .post("http://localhost:3001/r70/", r70)
          .then((response) => {
            router.push("/xktran");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="row g-3">
        <h2>Thêm mới phiếu xuất kho</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group col-sm-7">
            <label className="fw-bold">Số phiếu</label>
            <input
              className="form-control"
              name="so_phieu"
              required
              type="text"
              value={recept.so_phieu || ""}
              onChange={handleChange}
            ></input>
            <br />
          </div>
          <div className="form-group col-sm-7">
            <div className="form-group date" id="datePicker">
              <label className="fw-bold">Ngày lập phiếu</label>
              <input
                name="ngay_lap_phieu"
                required
                type="date"
                className="form-control"
                value={recept.ngay_lap_phieu || new Date()}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="form-group col-sm-7">
            <label className="fw-bold">Sản phẩm</label>
            <select
              className="form-control"
              name="ma_vt"
              onChange={handleChange}
              required
            >
              {itemlist.map((item, index) => (
                <option key={index} value={item.ma_vt}>
                  {item.ten_vt}
                </option>
              ))}
            </select>
            <br />
          </div>
          <div className="form-group col-sm-7">
            <label className="fw-bold">Kho</label>
            <select
              className="form-control"
              name="ma_kho"
              onChange={handleChange}
              required
            >
              {stocklist.map((stock, index) => (
                <option key={index} value={stock.ma_kho}>
                  {stock.ten_kho}
                </option>
              ))}
            </select>
            <br />
          </div>
          <div className="form-group col-sm-7">
            <label className="fw-bold">Số lượng</label>
            <input
              className="form-control"
              name="so_luong"
              type="number"
              value={recept.so_luong || 0}
              onChange={handleChange}
              min="0"
            ></input>
            <br />
          </div>
          <div className="form-group col-sm-7">
            {" "}
            <label className="fw-bold">Đơn giá</label>
            <input
              className="form-control"
              name="don_gia"
              type="number"
              value={recept.don_gia || 0}
              onChange={handleChange}
              min="0"
            ></input>
            <br />
          </div>
          <div className="form-group col-sm-7">
            <label className="fw-bold">Tổng tiền</label>
            <input
              className="form-control"
              name="t_tien"
              type="number"
              value={recept.t_tien || 0}
              onChange={handleChange}
              min="0"
            ></input>
            <br />
          </div>
          <input
            className="form-control w-50"
            type="submit"
            value="Lưu"
          ></input>
        </form>
      </div>
    </Layout>
  );
}
