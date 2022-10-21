import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

export default function HomeIndex() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [site, setSite] = useState({})

    const handleChange = (e) => {
        setSite({ ...site, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/dmkho/', site)
            .then(response => {
                router.push('/dmkho');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
        <Layout>
            <form onSubmit={handleSubmit}>
                <label>Mã kho</label>
                <input name="ma_kho" required type="text" value={site.ma_kho || ''} onChange={handleChange}></input><br/>
                <label>Tên kho</label>
                <input name="ten_kho" required type="text" value={site.ten_kho || ''} onChange={handleChange}></input><br/>
                <label>Tên khác</label>
                <input name="ten_kho2" type="text" value={site.ten_kho2 || ''} onChange={handleChange}></input><br/>
                <input type="submit" value="Lưu"></input>
            </form>
        </Layout>
    </div>
    )
}