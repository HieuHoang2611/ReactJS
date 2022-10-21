import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";
import Image from 'next/image'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ItemTypeDashBoard(){

    const [itemType,setItemType] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/dmloaivt')
        .then(res => {
            setItemType(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        console.log(id)
        axios.delete('http://localhost:3001/dmloaivt/' + id)
            .then(res => {
                if (res.status === 200) {
                    setItemType(itemType.filter(itemType => itemType.id !== id))
                }
            })
            .catch(err => { 
                console.log(err); 
            });
    }

    return(
        <div >
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <h2>Danh mục loại sản phẩm</h2>
                    <Link href='/dmloaivt/create'>
                        <button className="btn btn-success mx-2">Thêm mới</button>
                    </Link>
                    </div>
                    <MDBTable align='middle'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Mã loại</th>
                                <th scope='col'>Tên loại</th>
                                <th scope='col'>Trạng thái</th> 
                                <th scope='col'></th> 
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                itemType.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ma_loai}</td>
                                        <td>{item.ten_loai}</td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Sử dụng
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <Link href={{
                                                pathname: 'dmloaivt/edit/' + item.id
                                            }}>
                                                <button className="btn btn-secondary mx-2" title="Edit"><i class="bi bi-clipboard2-check"></i></button>
                                            </Link>
                                            <button className="btn btn-warning mx-2" title="Delete" onClick={()=>handleDelete(item.id)}><i class="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                         </MDBTableBody>
                    </MDBTable>
                </div>
        </div>
    )
}