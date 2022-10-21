import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";
import Image from 'next/image'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Site(){

    const [site,setSite] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/dmkho')
        .then(res => {
            setSite(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        console.log(id)
        axios.delete('http://localhost:3001/dmkho/' + id)
            .then(res => {
                if (res.status === 200) {
                    setSite(site.filter(site => site.id !== id))
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
                    <MDBTable align='middle'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Mã kho</th>
                                <th scope='col'>Tên kho</th>
                                <th scope='col'>Trạng thái</th> 
                                <th scope='col'></th> 
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                site.map((site, index) => (
                                    <tr key={index}>
                                        <td>{site.ma_kho}</td>
                                        <td>{site.ten_kho}</td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Sử dụng
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <Link href={{
                                                pathname: 'dmkho/edit/' + site.id
                                            }}>
                                                <button className="btn btn-secondary mx-2" title="Edit"><i class="bi bi-clipboard2-check"></i></button>
                                            </Link>
                                            <button className="btn btn-warning mx-2" title="Delete" onClick={()=>handleDelete(site.id)}><i class="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                         </MDBTableBody>
                    </MDBTable>
                </div>
            </Layout>
        </div>
    )
}