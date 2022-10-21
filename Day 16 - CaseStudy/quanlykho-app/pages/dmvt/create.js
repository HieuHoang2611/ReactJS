import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ItemCreate() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [item, setItem] = useState({})
    const [itemType, setItemType] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/dmloaivt/')
            .then(res => {
                setItemType(res.data); 
            })
            .catch(err => { console.log(err); });
        }, [])

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
        if( e.target.files != null && e.target.name == 'image') {
            setSelectedImage(e.target.files[0]);
            var fileToLoad = e.target.files[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
              var srcData = fileLoadedEvent.target.result; // <--- data: base64
              //console.log(srcData);
              setItem({ ...item, [e.target.name]: srcData });}
            fileReader.readAsDataURL(fileToLoad);
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
        <div className="row g-3">
            <h2>Thêm mới mã sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-sm-7">
                    <label className="fw-bold" htmlFor="formGroupItemInput">Mã vật tư</label>
                    <input required type="text" className="form-control" id="formGroupItemInput" name="ma_vt"  placeholder="Mã vật tư" value={item.ma_vt || ''} onChange={handleChange}></input><br/>
                </div>
                <div className="form-group col-sm-7">
                    <label className="fw-bold" htmlFor="formGroupItemInput">Tên vật tư</label>
                    <input required name="ten_vt" type="text" className="form-control" id="formGroupItemInput" placeholder="Tên vật tư"  value={item.ten_vt || ''} onChange={handleChange}></input><br/>
                </div>
                <div className="form-group col-sm-7">
                    <label className="fw-bold" htmlFor="formGroupItemInput">Tên khác</label>
                    <input name="ten_vt2" type="text" className="form-control" id="formGroupItemInput" placeholder="Tên khác"  value={item.ten_vt2 || ''} onChange={handleChange}></input><br/>
                </div>  
                <div className="form-group col-sm-7">
                    <label className="fw-bold" htmlFor="formGroupItemInput">Trạng thái</label>
                    <div className="form-control" id="formGroupItemInput">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="1" checked onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="inlineRadio1"> Sử dụng</label>
                        <br/>
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="0" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="inlineRadio1"> Không sử dụng</label>
                    </div>
                </div><br/>
                <div className="form-group col-sm-7">
                    <label className="fw-bold" htmlFor="formGroupItemInput">Loại vật tư</label>
                    <select name="loai_vt" className="form-control" id="formGroupItemInput"  onChange={handleChange} required>
                {
                                itemType.map((item, index) => (
                                    <option key={index} value={item.ma_loai}>{item.ten_loai}</option>
                                ))
                            }  
                </select>
                </div>
                <br/>
                    {selectedImage && (
                        <div>
                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /><br />
                        </div>
                    )}
                    <br />
                 <div className="form-group col-sm-7">
                 Image <span className="font-css top">*</span>    
                <input type="file" className="form-control col-sm-7" id="formGroupItemInput" name="image" onChange={handleChange}/>
                 </div>
                 <br/>
                <input type="submit" className="form-control col-sm-7" id="formGroupItemInput" value="Lưu"></input>
            </form>
        </div>
    </Layout>
    )
}