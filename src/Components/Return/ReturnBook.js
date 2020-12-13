import React from "react" ;

export default function Returnbook () {

    return ( 
    <div className="Kaika">
        <h2 class="Header">รายการคืนหนังสือ</h2> 
        <div class="Input">
         <from>
            <input type= "text" placeholder="รหัสสมาชิก" class="from-control" value=""size="120" /> <br/> <br/>
            <input type= "text" placeholder="รหัสหนังสือ" class="from-control" value=""size="120" /> 
         </from> 
        </div>
            <div className="Confirm">
           <button class="btn btn-primary" type="button"href="#">ยืนยัน</button> </div>
         <div className="Cancel"> 
         <button class="btn btn-danger" type="button"href="#">ยกเลิก</button>
        </div> 
    </div>


    ) ;
}