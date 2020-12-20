import React,{useEffect, useState} from "react" ;
import swal from 'sweetalert';
import Axios from "axios";

export default function Returnbook () {
    const [memID, setmemID] = useState();
    const [bookID, setbookID] = useState();
    const [message, setMessage] = useState();

    const onSubmit =(e) =>{
        e.preventDefault();
        const payload = {
            memID,
            bookID,
            message
        };//console.log('submit payload',payload);
    }
    const returnSucess = ()=>{
        returnBook()
          swal({
            title:  message
          });
    }
    const confirm = ()=>{
        returnBook()
          swal({
            title:  "Confirm"
        });
    }
    const returnBook = async () => {
        Axios.post('http://localhost:5000/returnBook',{
            "memberId" : memID,
            "bookId" : bookID
        })
        .then(res => {
          console.log(res)
          setMessage(res.data)
          console.log(message)
        })
        .catch(err => {
          console.log(err)
        });
      }

    return ( 
    <div className="Kaika">
        <h2 class="Header">รายการคืนหนังสือ</h2> 
        <div class="Input">
         <from onSubmit = {onSubmit}>
            <label className="borrowID">รหัสสมาชิก</label>
            <input type= "text" placeholder="รหัสสมาชิก" class="from-control" size="120" 
            onChange = {(e) => setmemID(e.target.value)}/> <br/> <br/>
             <label className="borrowNameBook">รหัสหนังสือ</label>
            <input type= "text" placeholder="รหัสหนังสือ" class="from-control" size="120" 
            onChange = {(e) => setbookID(e.target.value)}/> 
            <div className="Confirm">
                <button class="btn btn-success" type="button"href="#"onClick={()=>returnSucess()}>คืน</button> </div>
            <div className="Cancel"> 
                <button class="btn btn-primary" type="button"href="#" onClick={()=>confirm()}>ยืนยัน</button> </div> 
         </from> 
        </div>
            
    </div>


    ) ;
}