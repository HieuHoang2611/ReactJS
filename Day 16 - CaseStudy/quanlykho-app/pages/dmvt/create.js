import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

export default function HomeIndex() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [item, setItem] = useState({})
    const [selectedImage, setSelectedImage] = useState(null);
    // useEffect(() => {
    //     axios.get('http://localhost:3001/items/' + id)
    //         .then(res => {
    //             console.log(res);
    //             setItem(res.data);
    //         })
    //         .catch(err => { console.log(err); });
    // }, [id])
    // // console.log(query.id);

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
        if( e.target.files[0] && e.target.name == 'image') {
            setSelectedImage(e.target.files[0]);
            setItem({ ...item, [e.target.name]: e.target.files[0].name });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/dmvt/', item)
            .then(response => {
                router.push('/dmvt');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <Layout>
        <div>
            <form onSubmit={handleSubmit}>
                <input name="ma_vt" type="text" placeholder="Mã vật tư" value={item.ma_vt || ''} onChange={handleChange}></input><br/>
                <input name="ten_vt" type="text" placeholder="Tên vật tư"  value={item.ten_vt || ''} onChange={handleChange}></input><br/>
                <input name="ten_vt2" type="text" placeholder="Tên khác"  value={item.ten_vt2 || ''} onChange={handleChange}></input><br/>
                <input name="loai_vt" type="text" placeholder="Loại vật tư"  value={item.loai_vt || ''} onChange={handleChange}></input><br/>
                    {selectedImage && (
                        <div>
                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /><br />
                        </div>
                    )}
                    <br />
                Image <span className="font-css top">*</span>    
                <input type="file" name="image" onChange={handleChange}/>
                <input type="submit" value="Lưu"></input>
            </form>
        </div>
    </Layout>
    )
}