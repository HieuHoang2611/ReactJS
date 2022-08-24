import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
/* Bài tập 01
const h4 = <h4>Browser's details: {navigator.userAgent}</h4>
root.render(h4);
*/

// ----------------------------------------------------------------------------------------------
/*
const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
const studentsElement = students.map(student => (
  <tr>
    <td>{student.company}</td>
    <td>{student.contact}</td>
    <td>{student.country}</td>
  </tr>
))
const table = [
<tr>
<th>COMPANY</th>
<th>CONTACT</th>
<th>COUNTRY</th>
</tr>
,...studentsElement

]
root.render(table) */

//------------------------------------------------------------------------------------------------------------------
/*
const card =
<div className="container">
  <div className="card-animation">
  <div className="card">
    <div className="card--header">
    <img
      className="avatar"
      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="avatar"
    />
    </div>
    <div className="card--body">
      <div>
        <p className="text-header">Ruma Khan</p>
        <p className="text-sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
      </div>
    </div>
  </div>
</div>


root.render(card)
*/
//----------------------------------------------------------------
const signin =
<div id="mycontainer" className="container d-flex  align-items-center text-center">
<img id="bg" src="https://bst.icons8.com/wp-content/uploads/2020/02/how-to-create-gradient-article.jpg" alt=""  />
<div className="form-signin">
  <form>
    <img className="mb-5 icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="102" height="87" />
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
      <label>Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
      <label>Password</label>
    </div>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" /> Remember me
      </label>
    </div>
    <button className="btn btn-primary btn-block mb-4" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-white">© 2017–2021</p>
  </form>
</div>
</div>
root.render(signin)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
