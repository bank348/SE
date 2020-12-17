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
         <from onSubmit = {onSubmit}>
            <input type= "text" placeholder="ชื่อ" class="from-control" size="120" required 
            onChange = {(e) => setFName(e.target.value)}/> <br/> <br/>
            <input type= "text" placeholder="นามสกุล" class="from-control" size="120" required 
            onChange = {(e) => setLName(e.target.value)}/> <br/> <br/>
            <input type= "text" placeholder="เลขบัตรประจำตัวประชาชน" class="from-control" maxlength="13" size="120" required 
            onChange = {(e) => setmemberId(e.target.value)}/> <br/> <br/>
            <input type= "text" placeholder="เพศ" class="from-control" size="120" required 
            onChange = {(e) => setsex(e.target.value)}/> <br/> <br/>
            <input type= "e-mail" placeholder="e-mail" class="from-control" size="120" required 
            onChange = {(e) => setemail(e.target.value)}/> <br/> <br/>
            <input type= "text" placeholder="เบอร์โทรศัพท์" class="from-control" maxlength="10" size="120" required 
            onChange = {(e) => setphone(e.target.value)}/> <br/> <br/>            
            <input type= "text" placeholder="ที่อยู่" class="bank"  size="120" required 
            onChange = {(e) => setaddress(e.target.value)}/> <br/> <br/>  
            <div className="Confirmbutton">
                <button class="btn btn-success" type="button"href="#" onClick={()=>AddSucess()}>เพิ่ม</button> </div>
            <div className="Cancelbutton"> 
                <button class="btn btn-primary" type="button"href="#" onClick={()=>confirm()}>ยืนยัน</button>
            </div>   
         </from>          
        </div>
             
    </div>


    ) ;
}