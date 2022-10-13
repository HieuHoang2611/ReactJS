import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function stocklist(){

    const [stocklist,setStockList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/dmkho')
        .then(res => {
            setStockList(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/dmkho/' + id)
            .then(res => {
                if (res.status === 200) {
                    setStockList(stocklist.filter(stocklist => stocklist.id !== id))
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
                    <h2>Danh mục kho hàng</h2>
                    <Link href='/dmkho/create'>
                        <button className="btn btn-success mx-2">Thêm mới</button>
                    </Link>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Mã kho</th>
                                <th>Tên kho</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stocklist.map((stock, index) => (
                                    <tr key={index}>
                                        <td>{stock.ma_kho}</td>
                                        <td>{stock.ten_kho}</td>
                                        <td>
                                            <Link href={{
                                                pathname: 'dmkho/edit/' + stock.id
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