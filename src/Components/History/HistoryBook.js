import React,{useEffect, useState} from "react" ;
import history from './history';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import swal from 'sweetalert';
import Axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';
 

export default function HistoryBook () {
    // const data = [
    //     {Book_Name: "", status_Return: ""},
    //     {Book_Name: "", status_Return: ""},
    //     {Book_Name: "", status_Return: ""},
    //     {Book_Name: "", status_Return: ""},
    //     {Book_Name: "", status_Return: ""}
    // ]
    const [memID, setmemID] = useState();
    const [message, setMessage] = useState([]);

    const renderTable = (keyname, index) => {
        //console.log(message[0])
        return(
            <tr key={index}>
                <td>{message[keyname].Book_Name}</td>
                <td>{message[keyname].status_Return}</td>
            </tr>
        )
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        const payload = {
            memID,
            message
        };//console.log('submit payload',payload);
    }

    const historySucess = ()=>{
        checkHistory()
          swal({
            title:  message
          });
    }
    const confirm = ()=>{
        checkHistory()
          swal({
            title:  "Confirm"
        });
    }
    const checkHistory = async () => {
        Axios.post('http://localhost:5000/getHistory',{
            "memberId" : memID,
        })
        .then(res => {
          //console.log(res)
          setMessage(res.data)
          console.log(message)
        })
        .catch(err => {
          console.log(err)
        });
      }

    return ( 
    <div className="HistoryCheck">
        <h2 class="Header">ประวัติการยืมหนังสือ</h2> 
        <div class="Inputhis">
         <form onSubmit = {onSubmit}>
            <label className="HisIDmem">รหัสสมาชิก</label>
            <input type= "text" placeholder="รหัสสมาชิก" class="from-control" size="120" required
            onChange = {(e) => setmemID(e.target.value)}/>  
            <div className="Checkbutton">
                
                <div className="conbutton"> 
                <button class="btn btn-success" type="button"href="#" onClick={()=>confirm()}>ยืนยัน</button> </div> 
           </div>
         </form>
         <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>ชื่อหนังสือ</th>
      <th>สถานะ</th>
      <th>วันที่ยืม</th>
      <th>วันที่คืน</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(message).map(renderTable) }
  </tbody>
</ReactBootStrap.Table> 
          
        </div>        
    </div>


    ) ;
}