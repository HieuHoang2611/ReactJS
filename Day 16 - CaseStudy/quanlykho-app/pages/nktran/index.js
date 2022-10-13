import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function stockin(){

    const [stockin,setStockIn] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/nhapkho')
        .then(res => {
            setStockIn(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/nhapkho/' + id)
            .then(res => {
                if (res.status === 200) {
                    setStockIn(stockin.filter(stockin => stockin.id !== id))
                }
            })
            .catch(err => { 
                console.log(err); 
            });
    }

    return(
        <div >
            <Layout>
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <h2>Phiếu nhập kho</h2>
                    <Link href='/nhapkho/create'>
                        <button className="btn btn-success mx-2">Thêm mới</button>
                    </Link>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Số phiếu nhập</th>
                                <th>Ngày lập phiếu</th>
                                <th>Mã vật tư</th>
                                <th>Mã kho</th>
                                <th>Số lượng nhập</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stockin.map((stock, index) => (
                                    <tr key={index}>
                                        <td>{stock.so_phieu}</td>
                                        <td>{stock.ngay_lap_phieu}</td>
                                        <td>{stock.ma_vt}</td>
                                        <td>{stock.ma_kho}</td>
                                        <td>{stock.so_luong}</td>
                                        <td>{stock.don_gia}</td>
                                        <td>{stock.t_tien}</td>
                                        <td>
                                            <Link href={{
                                                pathname: 'nhapkho/edit/' + stock.id
                                            }}>
                                                <button className="btn btn-secondary mx-2">Sửa</button>
                                            </Link>
                                            <button className="btn btn-warning mx-2" onClick={()=>handleDelete(index)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}