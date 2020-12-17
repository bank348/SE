import React,{useEffect, useState} from "react" ;
import swal from 'sweetalert';
import Axios from "axios";


export default function Addbook () {

    const [data, setData] = useState();
    const [pass, setPass] = useState();
    const [message, setMessage] = useState();

    //console.log(data,pass)

    const onSubmit =(e) =>{
        e.preventDefault();

        const payload = {
            data,
            pass
            //message
        };//console.log('submit payload',payload);
    }

    const AddSucess = ()=>{
      addBook()
        swal({
          title:  message
        });
    }
    const confirm = ()=>{
      addBook()
        swal({
          title:  "Confirm"
        });
    }

    const addBook = async () => {
      Axios.post('http://localhost:5000/addBook',{
        "bookId" : pass,
        "bookName" : data
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
    <div className="AddBookData">
        <h2 class="Header">การเพิ่มหนังสือ</h2> 
        <div class="Inputadd">
         <form onSubmit = {onSubmit}> 
            <input type= "text" placeholder="ชื่อหนังสือ" class="from-control" size="120" required 
            onChange = {(e) => setData(e.target.value)}/> <br/> <br/>
            <input type= "text" placeholder="รหัสหนังสือ" class="from-control" size="120" required 
            onChange = {(e) => setPass(e.target.value)}/> <br/> <br/>
            <div className="Addbutton">
                <button class="btn btn-success" type="submit" onClick={()=>AddSucess()}>เพิ่ม</button> </div>
            <div className="Cancelbuttons">
                <button class="btn btn-primary" type="submit" onClick={()=>confirm()}>ยืนยัน</button> </div>
            
         </form> 
        </div>
    </div> 
    


     ) ;

    }    
  