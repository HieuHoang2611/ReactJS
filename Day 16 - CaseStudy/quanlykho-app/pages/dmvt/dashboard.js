import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";
import Image from 'next/image'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ItemListDashBoard(){

    const [itemList,setItemList] = useState([]);

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
                    setItemList(itemList.filter(itemList => itemList.id !== id))
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
                    <h2>Danh mục vật tư</h2>
                    <Link href='/dmvt/create'>
                        <button className="btn btn-success mx-2">Thêm mới</button>
                    </Link>
                    </div>
                    <MDBTable align='middle'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Hình ảnh</th> 
                                <th scope='col'>Mã vật tư</th>
                                <th scope='col'>Tên vật tư</th>
                                <th scope='col'>Trạng thái</th> 
                                <th scope='col'></th> 
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                itemList.map((item, index) => (
                                    <tr key={index}>
                                        <td><Image className='rounded-circle hover-overlay hover-zoom' src={item.image} alt="me" width="64" height="64" /></td>
                                        <td>{item.ma_vt}</td>
                                        <td>{item.ten_vt}</td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Sử dụng
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <Link href={{
                                                pathname: 'dmvt/edit/' + item.id
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