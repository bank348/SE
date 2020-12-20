import React from "react" ;
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <Link to = '/'>
        <li className="nav-item active">
          <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
        </li>
      </Link>  
      <Link to = '/Book'>
        <li className="nav-item active">
          <a className="nav-link">การยืม</a>
        </li>
      </Link>
      <Link to = '/Return'>
        <li className="nav-item active">
          <a className="nav-link">การคืน</a>     
        </li>
      </Link>
      <Link to = '/History'>
        <li className="nav-item active">
          <a className="nav-link" > ประวัติการยืม </a>
        </li>
      </Link>  
      <Link to = '/Add'>
        <li className="nav-item active">
          <a className="nav-link" > เพิ่มหนังสือ </a>
        </li>
      </Link>
      <Link to = '/Register'>
        <li className="nav-item active">
          <a className="nav-link"> สมัครสมาชิกลูกค้า </a>  
        </li>
      </Link>  
      <Link to = '/Report'>
      <li className="nav-item active">
          <a className="nav-link"> รายงาน </a>  
        </li>
      </Link>  
    </ul>
  </div>
</nav>
       
    );
  }
  