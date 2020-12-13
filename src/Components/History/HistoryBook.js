import React from "react" ;

export default function HistoryBook () {

    return ( 
    <div className="HistoryCheck">
        <h2 class="Header">ประวัติการยืมหนังสือ</h2> 
        <div class="Inputhis">
         <from>
            <input type= "text" placeholder="รหัสสมาชิก" class="from-control" size="120" />  
         </from> 
        </div>
            <div className="Checkbutton">
                <button class="btn btn-primary" type="button"href="#">ดูประวัติ</button> 
           </div>
    </div>


    ) ;
}