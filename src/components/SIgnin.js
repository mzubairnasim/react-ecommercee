import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../config/firebase'
import './../App.css'
export default function SIgnin() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const history=useHistory()


    const signin=()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
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
        <div className='container'>
     
        <div className='row'>
        
            <div className='col-md-10 one'>
            <div class="form-group two">
            <h2 className='text-center head mb-4'>SignIn</h2>
            <input type='text' value={email} onChange={e=>setemail(e.target.value)}
            placeholder='Type Email Here'
             className='form-control' /><br/>
            <input type='text' value={password} onChange={e=>setpassword(e.target.value)}
              placeholder='Type Password Here'
             className='form-control' /><br/>
            <button onClick={signin} className='btn btn-info text-capitalize'>signin</button><br/>
           <Link to='/signup'><h4 className='mt-2 text-capitalize'>new user click here</h4></Link>
            </div>
         
            </div>
        </div>
          
        </div>
    )
}
