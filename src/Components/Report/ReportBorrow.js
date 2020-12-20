import React from 'react';

export default function Register (){
  return(
    
    <div className="HistoryCheck">
      <h2 class="Header">รายงานการยืมหนังสือ</h2> 
      <div class="Inputhis">
      <form>
        <input type= "text" placeholder="วันที่ต้องการเช็ก" class="from-control" size="120" />  
        <div className="Checkbutton">
            
            <div className="conbutton"> 
            <button class="btn btn-success" type="button"href="#" >ยืนยัน</button> </div> 
       </div>
     </form>
     
     </div>        
    </div>




        );
 


  
}