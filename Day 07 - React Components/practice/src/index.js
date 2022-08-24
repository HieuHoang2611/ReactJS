import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Props from './Components/ClassProps';
// import Props from './Components/FunctionProps';
import ValidateProps from './Components/ValidateProps';


import reportWebVitals from './reportWebVitals';

// const article = {
//   headerProp: "A",
//   contentProp: "B"
// };



const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Props headerProp = "Header from function props..." contentProp = "Content from function props..."/>);
// root.render(<Props article={article} />);

root.render(<ValidateProps />);













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
