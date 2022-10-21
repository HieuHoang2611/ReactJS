import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";

export default function HomeIndex() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [issue, setIssue] = useState({
        "ma_ct" : "XK1",
        "ma_vt"  : "S10DA021",
        "ma_kho"  : "KHO01"

    })
    const [itemlist, setItemList] = useState([])
    const [stocklist, setStockList] = useState([])

    useEffect(() => {
            axios.get('http://localhost:3001/xuatkho/' + id)
            .then(res => {
                setIssue(res.data);
            })
            .catch(err => { console.log(err); });
            axios.get('http://localhost:3001/dmvt/')
            .then(res => {
                setItemList(res.data); 
            })
            .catch(err => { console.log(err); });
            axios.get('http://localhost:3001/dmkho/')
                .then(res => {
                    setStockList(res.data);
                })
                .catch(err => { console.log(err); });
        }, [id])

    const handleChange = (e) => {
        setIssue({ ...issue, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/xuatkho/' + id, issue)
            .then(response => {
                router.push('/xktran');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
            <Layout>
            
            <form onSubmit={handleSubmit}>
                <label>Số phiếu</label>
                    <input name="so_phieu" required type="text" value={issue.so_phieu || ''} onChange={handleChange}></input><br/>
                <label>Ngày lập phiếu</label>
                    <input name="ngay_lap_phieu" required type="date" value={issue.ngay_lap_phieu || ''} onChange={handleChange}></input><br/>
                <label>Sản phẩm</label>
                <select name="ma_vt" onChange={handleChange} required value={issue.ma_vt || ''}>
                {
                                itemlist.map((item, index) => (
                                    <option key={index} value={item.ma_vt}>{item.ten_vt}</option>
                                ))
                            }  
                </select><br/>
                <label>Kho</label>
                <select name="ma_kho" onChange={handleChange} required value={issue.ma_kho || ''}>
                {
                                stocklist.map((stock, index) => (
                                    <option key={index} value={stock.ma_kho}>{stock.ten_kho}</option>
                                ))
                            }  
                </select><br/>
                <label>Số lượng</label>
                    <input name="so_luong" type="number" value={issue.so_luong || 0} onChange={handleChange} min="0"></input><br/>
                <label>Đơn giá</label>
                    <input name="don_gia" type="number" value={issue.don_gia || 0} onChange={handleChange} min="0"></input><br/>
                <label>Tổng tiền</label>
                    <input name="t_tien" type="number" value={issue.t_tien || 0} onChange={handleChange} min="0"></input><br/>
                    <input type="submit" value="Lưu"></input>
            </form>
            </Layout>

        </div>
    )
}