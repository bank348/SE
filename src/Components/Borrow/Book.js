import React from "react" ;

export default function Borrow() {
    return (

        <div className="Kaika">
            <h2 class="Header">รายการยืมหนังสือ</h2> 
            <div class="Input">
                <from>
                    <input type= "text" placeholder="รหัสสมาชิก" class="from-control" size="120" /> <br/> <br/>
                    <input type= "text" placeholder="รหัสหนังสือ" class="from-control" size="120" /> 
                </from> 
            </div>
                <div className="Confirm">
                    <button class="btn btn-primary" type="button"href="#">ยืนยัน</button> </div>
                <div className="Cancel"> 
                    <button class="btn btn-danger" type="button"href="#">ยกเลิก</button>
            </div> 
    </div>
    
    );
}