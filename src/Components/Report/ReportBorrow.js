
import React,{useState} from "react" ;

export default function Register (){

  const [Date, setDate] = useState('');
  const [Status, setStatus] = useState('');
  const [Datelast, setDatelast] = useState('');

  const onSubmit =(e) =>{
    e.preventDefault();

  }

  const payload = {

    Date,
    Status,Datelast
  }


  console.log('submit payload',payload);
  return(
    
    <div className="HistoryCheck">
      <h2 class="Header">รายงานการยืมหนังสือ</h2> 
      <div class="Inputhis">
      <form  onSubmit = {onSubmit}>
        <label className="ate">วันที่</label><br/>
        <input type= "date" placeholder="วันที่ต้องการเช็ก" class="from-control" size="120" 
        onChange = {(e) => setDate(e.target.value)}/> <br/><br/>
        <label className="ate">ถึง</label><br/>
        <input type= "date" placeholder="วันที่ต้องการเช็ก" class="from-control" size="120"
         onChange = {(e) => setDatelast(e.target.value)}/><br/><br/>

         <select class="select status" required aria-label="select example"  onChange = {(e) => setStatus(e.target.value)}>
                        <option value="" >status</option>
                        <option value="All" >All</option>
                        <option value="Borrowing">Borrowing</option>
                        <option value="Returned">Returned</option>
                </select>  
        <div className="Checkbutton">
            <div className="cnbutton"> 
            <button class="btn btn-success" type="button"href="#" >ยืนยัน</button> </div> 
       </div>
     </form>
     
     </div>        
    </div>




        );
 
  }
  
