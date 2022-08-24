import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line
/* createelement by CodeGym
//Sử dụng const để tạo biến name mang giá trị là “Your name”
const name = "Your name";

//Sử dụng hàm React.createElement để khởi tạo element mang giá trị hiển thị tên của bạn
const nameElement = React.createElement("h1", { style: { textAlign: "center" } }, name)

//Khai báo biến root và khởi tạo với ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

//Truyền element ở Bước 4 vào hàm root.render()
root.render(nameElement);
*/

/* createelement by F8
const postItem = React.createElement('div', {className: 'post-item'}
                        ,React.createElement('h2',{title: 'Học ReactJS tại F8'},'Học React')
                        ,React.createElement('p',{},'Học ReactJS từ cơ bản tới nâng cao')
                        )
*/
//const courses = ['Javascript', 'ReactJS']
const postCourses = React.createElement('div',{'class':'post-courses'},
                          React.createElement('h1',{title:'Hello',class: 'heading'},'Hello guys!'),
                          React.createElement('ul',{}
                                ,React.createElement('li',{key:1},'Javascript')
                                ,React.createElement('li',{key:2},'ReactJS')
                          ),
)    
console.log(postCourses)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(postCourses);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
