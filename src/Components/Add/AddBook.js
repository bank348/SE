import React,{useState} from "react" ;
import swal from 'sweetalert';
import Axios from "axios";


export default function Addbook () {

    const [data, setData] = useState('');
    const [pass, setPass] = useState('');

    console.log(data,pass)

    const onSubmit =(e) =>{
        e.preventDefault();

        const payload = {
            data,
            pass
        };console.log('submit payload',payload);
    }

    const AddSucess = ()=>{
        swal({
          title:  ,
          icon : "success"
        });
    }

    async function getUser() {
        try {
          const response = await Axios.get('http://localhost:5000/');
          console.log(response);
          return response
        } catch (error) {
          console.error(error);
        }   
      }
  /*  function App() {
        Axios({
          method: "GET",
          url: "http://localhost:5000/",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          console.log(res.data.message);
    });  */
    
    return ( 
    <div className="AddBookData">
        <h2 class="Header">การเพิ่มหนังสือ</h2> 
        <div class="Inputadd">
         <form onSubmit = {onSubmit}> 
            <input type= "text" placeholder="ชื่อหนังสือ" class="from-control" size="120"  
            onChange = {(e) => setData(e.target.value)}/> <br/> <br/>
           
            <input type= "text" placeholder="รหัสหนังสือ" class="from-control" size="120"  
            onChange = {(e) => setPass(e.target.value)}/> <br/> <br/>
            <div className="Addbutton">
                <button class="btn btn-primary" type="submit" onClick={()=>AddSucess()}>เพิ่ม</button> </div>
            <div className="Cancelbuttons"> 
                <button class="btn btn-danger" type="button"href="#">ยกเลิก</button></div>
         </form> 
        </div>
    </div> 
    


     ) ;

    }    
  