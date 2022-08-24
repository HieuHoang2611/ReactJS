import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Alert from './Components/Alert';
import ListClass from './Components/StudentInfo';

import "bootstrap/dist/css/bootstrap.css"
import reportWebVitals from './reportWebVitals';


const listStudent = [
        {
            name: 'Nguyễn Văn A',
            age: 13,
            address: 'Hà Nội'

        },
        {
            name: 'Nguyễn Văn B',
            age: 40,
            address: 'Bắc Linh'

        }

];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ListClass listStudent = {listStudent}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
