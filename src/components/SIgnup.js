import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../config/firebase'
import { Link } from 'react-router-dom'
export default function SIgnup() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const history=useHistory()
    const signup=()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user=>{
            if(user){
            history.push('/')
            }
        }))
      
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
  });

    }

    return (
        <div>
            {/* <input type='text' value={name} onChange={e=>setname(e.target.value)}/> */}
            <div className='container'>
        <div className='row'>
            <div className='col-md-10 one'>
            <div class="form-group two">
            <input type='text' value={email} onChange={e=>setemail(e.target.value)} className='form-control' /><br/>
            <input type='text' value={password} onChange={e=>setpassword(e.target.value)} className='form-control' /><br/>
            <button onClick={signup} className='btn btn-info text-capitalize'>signup</button><br/>
           <Link to='/signin'><h4 className='mt-2 text-capitalize'>Already user click here</h4></Link>
            </div>
         
            </div>
        </div>
          
        </div>
        </div>
    )
}
