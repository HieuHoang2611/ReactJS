import { Formik, Form, Field, ErrorMessage } from "formik";
import { BrowserRouter, Link, Route, Routes, Outlet,useParams } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Home } from "./Home/Home";


import { useState } from "react";


function Expenses() {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
  let params = useParams();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Tên : {employees[params.pid].name} </h2>
        <h2>Tuổi : {employees[params.pid].age} </h2>
        <h2>Mã nhân viên : {employees[params.pid].id} </h2>

      </main>
    );
  }

const FormikForm = () => {
    var loginId = 0
    let navigate = useNavigate(); 
    const [form, setForm] = useState({ email: '', password: '' });
    const [account, setAccount] = useState([ 
        {email:'admin@gmail.com', password : 'admin'}
    ]);

    const formSchema =  Yup.object().shape({
        email : Yup.string().email().required(),
        password : Yup.string().required(),
    })
    const handleSubmit = (values) => {
        if(account.some(a => a.email === values.email && a.password === values.password)){
            alert('access sucessfully');
            loginId = values.email;
            navigate(`/home/${loginId}`)}
            else{
                alert('access failed');
            }

    }


        return(
            <div className="container">
                <h1>Sign Up</h1>
            <Formik
                enableReinitialize={true}
                initialValues={form}
                onSubmit={(values,{resetForm}) => {
                    handleSubmit(values);
                    resetForm();
                }}
                validationSchema={formSchema}
          >
              <Form>
                <Field type="text" name="email" placeholder="Enter your email address"/>
                <br />
                <ErrorMessage component="div" className="text-danger" name="email" />
                <br />
                <Field type="password" name="password" placeholder="Enter your password"/>
                <br />
                <ErrorMessage component="div" className="text-danger" name="password" />
                <br />
                <button type="submit" className="btn btn-primary">Login</button>
              </Form>
          </Formik>
          </div>
    )
      
}
export default function LoginForm(){
    return(
        <BrowserRouter>
                <div className="main-route-place">
                    <Routes>
                        <Route path="/" element={<FormikForm/>}></Route>
                        <Route path="/home/:id" element={<Home />}>
                            <Route path="expenses/:pid" element={<Expenses />}></Route>
                        </Route>
                    </Routes>
                        
                </div>
            </BrowserRouter>
    )
          
}