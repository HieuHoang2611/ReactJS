import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";
import Image from 'next/image'

export default function itemlist(){

    const [itemlist,setItemList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/dmvt')
        .then(res => {
            setItemList(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        console.log(id)
        axios.delete('http://localhost:3001/dmvt/' + id)
            .then(res => {
                if (res.status === 200) {
                    setItemList(itemlist.filter(itemlist => itemlist.id !== id))
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
                    <h2>Danh mục vật tư</h2>
                    <Link href='/dmvt/create'>
                        <button className="btn btn-success mx-2">Thêm mới</button>
                    </Link>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Hình ảnh</th> 
                                <th>Mã vật tư</th>
                                <th>Tên vật tư</th>
                                <th>Mô tả</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemlist.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ma_vt}</td>
                                        <td>{item.ten_vt}</td>
                                        <td><Image src={`/image/${item.image}`} alt="me" width="64" height="64" /></td>
                                        <td>
                                            <Link href={{
                                                pathname: 'dmvt/edit/' + item.id
                                            }}>
                                                <button className="btn btn-secondary mx-2">Sửa</button>
                                            </Link>
                                            <button className="btn btn-warning mx-2" onClick={()=>handleDelete(item.id)}>Xóa</button>
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