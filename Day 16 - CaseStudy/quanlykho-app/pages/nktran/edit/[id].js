import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react";
import Layout from "../../../components/layout";
import '@progress/kendo-theme-material/dist/all.css'
import {PDFExport, savePDF} from '@progress/kendo-react-pdf'

 import {Button} from '@progress/kendo-react-buttons'

export default function HomeIndex() {
    const pdfExportComponent = useRef(null)
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [recept, setRecept] = useState({
        "ma_ct" : "XK1",
        "ma_vt"  : "S10DA021",
        "ma_kho"  : "KHO01"

    })
    const [itemlist, setItemList] = useState([])
    const [siteList, setSiteList] = useState([])

    useEffect(() => {
            axios.get('http://localhost:3001/nhapkho/' + id)
            .then(res => {
                setRecept(res.data);
            })
            .catch(err => { console.log(err); });
            axios.get('http://localhost:3001/dmvt/')
            .then(res => {
                setItemList(res.data); 
            })
            .catch(err => { console.log(err); });
            axios.get('http://localhost:3001/dmkho/')
                .then(res => {
                    setSiteList(res.data);
                })
                .catch(err => { console.log(err); });
        }, [id])

    const handleChange = (e) => {
        setRecept({ ...recept, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/nhapkho/' + id, recept)
            .then(response => {
                router.push('/nktran');
            })
            .catch(err => { console.log(err); });
    }
    const handleExportWithComponent = (e) => {
        pdfExportComponent.current.save();
    }
    return (
        <div>
            <Layout>
                <PDFExport ref={pdfExportComponent} paperSize="A4">
            <form onSubmit={handleSubmit}>
                <label>Số phiếu</label>
                    <input name="so_phieu" required type="text" value={recept.so_phieu || ''} onChange={handleChange}></input><br/>
                <label>Ngày lập phiếu</label>
                    <input name="ngay_lap_phieu" required type="date" value={recept.ngay_lap_phieu || ''} onChange={handleChange}></input><br/>
                <label>Sản phẩm</label>
                <select name="ma_vt" onChange={handleChange} required value={recept.ma_vt || ''}>
                {
                                itemlist.map((item, index) => (
                                    <option key={index} value={item.ma_vt}>{item.ten_vt}</option>
                                ))
                            }  
                </select><br/>
                <label>Kho</label>
                <select name="ma_kho" onChange={handleChange} required value={recept.ma_kho || ''}>
                {
                                siteList.map((site, index) => (
                                    <option key={index} value={site.ma_kho}>{site.ten_kho}</option>
                                ))
                            }  
                </select><br/>
                <label>Số lượng</label>
                    <input name="so_luong" type="number" value={recept.so_luong || 0} onChange={handleChange} min="0"></input><br/>
                <label>Đơn giá</label>
                    <input name="don_gia" type="number" value={recept.don_gia || 0} onChange={handleChange} min="0"></input><br/>
                <label>Tổng tiền</label>
                    <input name="t_tien" type="number" value={recept.t_tien || 0} onChange={handleChange} min="0"></input><br/>
                    <input type="submit" value="Lưu"></input>
                    <div className="button-area">
                    <Button primary={true} onClick={handleExportWithComponent}>In phiếu nhập kho</Button>
                    </div>

            </form>
            </PDFExport>

            </Layout>

        </div>
    )
}