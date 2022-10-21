import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeIndex() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [itemType, setItemType] = useState({})

    const handleChange = (e) => {
        setItemType({ ...itemType, [e.target.name]: e.target.value });
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/dmloaivt/', itemType)
            .then(response => {
                router.push('/dmloaivt');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <Layout>
        <div>
            <h2>Thêm mới loại sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="formGroupitemTypeInput">Mã loại sản phẩm</label>
                    <input required type="text" class="form-control" id="formGroupitemTypeInput" name="ma_loai"  placeholder="Mã loại sản phẩm" value={itemType.ma_loai || ''} onChange={handleChange}></input><br/>
                </div>
                <div class="form-group">
                    <label for="formGroupitemTypeInput">Tên loại</label>
                    <input required name="ten_loai" type="text" class="form-control" id="formGroupitemTypeInput" placeholder="Tên loại sản phẩm"  value={itemType.ten_loai || ''} onChange={handleChange}></input><br/>
                </div>
                <div class="form-group">
                    <label for="formGroupitemTypeInput">Tên khác</label>
                    <input name="ten_loai2" type="text" class="form-control" id="formGroupitemTypeInput" placeholder="Tên khác"  value={itemType.ten_loai2 || ''} onChange={handleChange}></input><br/>
                </div>  
                <div class="form-group">
                    <label for="formGroupitemTypeInput">Trạng thái</label>
                    <div class="form-control" id="formGroupitemTypeInput">
                        <input class="form-check-input" type="radio" name="status" id="inlineRadio1" value="1" checked onChange={handleChange}/>
                        <label class="form-check-label" for="inlineRadio1"> Sử dụng</label>
                    </div>
                    <div class="form-control" id="formGroupitemTypeInput">
                        <input class="form-check-input" type="radio" name="status" id="inlineRadio1" value="0" onChange={handleChange}/>
                        <label class="form-check-label" for="inlineRadio1"> Không sử dụng</label>
                    </div>
                </div>
                <br/>
                <input type="submit" class="form-control" id="formGroupitemTypeInput" value="Lưu"></input>
            </form>
        </div>
    </Layout>
    )
}