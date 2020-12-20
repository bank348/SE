import React,{useEffect, useState} from "react" ;
import Axios from "axios";
import swal from 'sweetalert';

export default function Home () {
  const [bookid, setBookid] = useState('');
  const [result, setResult] = useState('');

  const onSubmit =(e) =>{
    e.preventDefault();

    const payload = {
      bookid,
      result
      //message
    };//console.log('submit payload',payload);
}

  const AddSucess = ()=>{
    swal({
      title:  result.isbn,
      text: result.Book_Name,
      icon : "success"
    });
  }

  useEffect(() => {
    Axios.post('http://localhost:5000/getBookById',{
      "bookId" : bookid
    })
    .then(res => {
      //console.log(res)
      setResult(res.data)
      //console.log(result)
    })
    .catch(err => {
      console.log(err)
    });
  })

    return ( 
      <div>
        <h2 class="Header">ค้นหาหนังสือ</h2> 
        <div class = "Search" >
        <label className="search">รหัสหนังสือ</label>
          <form onSubmit = {onSubmit}>
            <div class="search-input">
                  <input type="search" id="search-box" placeholder="Enter Book ID" size ="120"
                  onChange = {(e) => setBookid(e.target.value)}/>
            </div>
            <div class="search-botton">
            <button class="btn btn-primary" type="submit" onClick={()=>AddSucess()}>ค้นหา</button>
            </div>
            {/* <div class="checksearch-botton">
            <button class="btn btn-primary" type="submit" onClick={()=>AddSucess()}>ยืนยัน</button>
            </div> */}
          </form>
        </div>
      </div>
    ) ;
}