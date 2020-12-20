import React,{useEffect, useState} from "react" ;
import Axios from "axios";
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Register () {
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [memberId, setmemberId] = useState('');
    const [sex, setsex] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [result, setResult] = useState('');

    const MySwal = withReactContent(Swal)
    
    
     const addMember = async () =>  {
        try {
              Axios.post('http://localhost:5000/addMember',{
                "memberId" : memberId,
                "Fname" : FName,
                "Lname" : LName,
                "sex" : sex,
                "phone" : phone,
                "address" : address,
                "mail" : email
            })
            .then(res => {
                setResult(res.data)
                console.log(result)
            })
            .catch(err => {
                console.log(err)
              });
            
          } catch (error) {
            console.error(error);
          }
        }
    const onSubmit =(e) =>{
        e.preventDefault();
    
        const payload = {
            FName,
            LName,
            memberId,
            sex,
            phone,
            address,
            email,
            result
          //message
        };//console.log('submit payload',payload);

    }
    const AddSucess = async()=>{
        addMember()
        swal({
            title:  result
          });
    }
    const confirm = ()=>{
        addMember()
        swal({
          title:  "Confirm"
        });
      }
    

//     useEffect(() => {
//     Axios.post('http://localhost:5000/addMember',{
//         "memberId" : memberId,
//         "Fname" : FName,
//         "Lname" : LName,
//         "sex" : sex,
//         "phone" : phone,
//         "address" : address,
//         "mail" : email
//     })
//     .then(res => {
//       //console.log(res)
//       setResult(res.data)
//       //console.log(result)
//     })
//     .catch(err => {
//       console.log(err)
//     });
//   })

    return ( 
    <div className="Kaika">
        <h2 class="Header">สมัครสมาชิก</h2> 
        <div class="Input">
         <from onSubmit = {onSubmit} class="was-validated">
          <div class="mb-3">
            <label>ชื่อ</label><br/>  
            <input type= "text" placeholder="ชื่อ" class="form-control is-valid" required 
            onChange = {(e) => setFName(e.target.value)}/>
            <div class="invalid-feedback">กรุณาใส่ชื่อ</div>
          </div>

          <div class = "mb-3">
            <label>นามสกุล</label><br/> 
            <input type= "text" placeholder="นามสกุล" class="form-control is-valid"  required 
            onChange = {(e) => setLName(e.target.value)}/>
            <div class="invalid-feedback">กรุณาใส่นามสกุล</div>
          </div>

          <div class = "mb-3">
            <label className ="id">เลขบัตรประจำตัวประชาชน</label><br/> 
            <input type= "text" placeholder="เลขบัตรประจำตัวประชาชน" class="form-control is-valid" maxlength="13"  required 
            onChange = {(e) => setmemberId(e.target.value)}/>
            <div class="invalid-feedback">กรุณาใส่เลขบัตรประจำตัวประชาชน</div> 
          </div>

          <div class = "mb-3">
            <label>เพศ</label>
            <select class="form-select" required aria-label="select example" onChange = {(e) => setsex(e.target.value)}>
                        <option value="">เลือกเพศของคุณ</option>
                        <option value="1">ชาย</option>
                        <option value="2">หญิง</option>
                        <option value="3">ไม่ระบุ</option>
                </select>
                <div class="invalid-feedback" >โปรดใส่ข้อมูล</div> 
          </div>  

          <div class = "mb-3">
            <label className ="mail">อีเมลล์</label><br/>
            <input type= "e-mail" placeholder="e-mail" class="form-control is-valid" required 
            onChange = {(e) => setemail(e.target.value)}/> 
             <div class="invalid-feedback">กรุณาใส่ e-mail</div>
          </div>

          <div class = "mb-3">
            <label className = "tel">เบอร์โทรศัพท์</label><br/>
            <input type= "text" placeholder="เบอร์โทรศัพท์" class="form-control is-valid" maxlength="10"  required 
            onChange = {(e) => setphone(e.target.value)}/> 
            <div class="invalid-feedback">กรุณาใส่เบอร์โทรศัพท์</div>
          </div>

          <div class = "mb-3">
            <label className = "address">ที่อยู่</label>
             <textarea class="form-control is-valid" placeholder="ที่อยู่" required onChange = {(e) => setaddress(e.target.value)}></textarea>
                 <div class="invalid-feedback">กรุณาใส่ที่อยู่</div>
          </div>     
            <div className="Confirmbutton">
                <button class="btn btn-success" type="button" onClick={()=>AddSucess()} >เพิ่ม</button> </div>
            <div className="Cancelbutton"> 
                <button class="btn btn-primary" type="button" onClick={()=>confirm()}>ยืนยัน</button>
            </div>   
         </from>          
        </div>
             
    </div>


    ) ;
}