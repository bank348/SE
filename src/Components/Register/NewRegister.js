import React from "react" ;

export default function Register () {

    return ( 
    <div className="Kaika">
        <h2 class="Header">สมัครสมาชิก</h2> 
        <div class="Input">
         <from>
            <input type= "text" placeholder="ชื่อ" class="from-control" size="120" required /> <br/> <br/>
            <input type= "text" placeholder="นามสกุล" class="from-control" size="120" required/> <br/> <br/>
            <input type= "text" placeholder="นามสกุล" class="from-control" size="120" required /> <br/> <br/>
            <input type= "text" placeholder="เลขบัตรประจำตัวประชาชน" class="from-control" maxlength="13" size="120" required /> <br/> <br/>
            <input type= "e-mail" placeholder="e-mail" class="from-control" size="120" required /> <br/> <br/>
            <input type= "text" placeholder="เบอร์โทรศัพท์" class="from-control" maxlength="10" size="120" required /> <br/> <br/>
            <h3 class="Local">ที่อยู่</h3> <br/>
            <input type= "text" placeholder="เลขที่บ้าน" class="bank"  size="120" required /> <br/> <br/> 
            <div className="TUM">
                <input type= "text" placeholder="เขต" class="bank"  size="55" required /><br/> <br/>
            </div> 
            <div className ="InputAddress">
                <input type= "text" placeholder="เเขวง"   size="55" required /> 
            </div>
            <div className="TUM">  
                <input type= "text" placeholder="จังหวัด" class="bank"  size="55" required />
            </div>    
            <div className ="postid">
                <input type= "text" placeholder="รหัสไปรษณีย์"   size="55" required maxlength="5" /> 
            </div> 
            
         </from> 
         
        </div>
            <div className="Confirmbutton">
           <button class="btn btn-primary" type="button"href="#">ยืนยัน</button> </div>
         <div className="Cancelbutton"> 
         <button class="btn btn-danger" type="button"href="#">ยกเลิก</button>
        </div> 
    </div>


    ) ;
}