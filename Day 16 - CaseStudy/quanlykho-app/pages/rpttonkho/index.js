import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function stock(){

    const [stock,setStock] = useState([]);
    const [itemlist,setItemList] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/r70')
        .then(res => {
            setStock(res.data);
        })
        .catch(err => { console.log(err); });

        axios.get('http://localhost:3001/dmvt')
        .then(res => {
            setItemList(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);
    var items = [];
    items = stock.map((item,index) => (
        items[index] = item.ma_vt
        ))
    items = items.filter(function(item, pos) {
        return items.indexOf(item) == pos;
    })
    items = items.map((item,index) => (
        items[index] = [items[index],"",0]
    ))
    items.map(function(item,i) {
         itemlist.map(function(itemlist,x) {       
            if(itemlist.ma_vt == items[i][0])    
                items[i][1] = itemlist.ten_vt
        })
        stock.map(function(stock,j) {
            if(stock.ma_vt == items[i][0])
                if(stock.ma_ct == 'NK1')
                    items[i][2] += Number(stock.so_luong)
                else
                    items[i][2] -= Number(stock.so_luong)
                })
    })
        // console.log(items);
    return(
        <div >
            <Layout>
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <h2>Báo cáo tồn kho theo vật tư</h2>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Mã vật tư</th>
                                <th>Tên vật tư</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value[0]}</td>
                                        <td>{value[1]}</td>
                                        <td>{value[2]}</td>
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