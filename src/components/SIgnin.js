import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../config/firebase'
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
            <input type='text' value={email} onChange={e=>setemail(e.target.value)} className='form-control' /><br/>
            <input type='text' value={password} onChange={e=>setpassword(e.target.value)} className='form-control' /><br/>
            <button onClick={signin} className='btn btn-info text-capitalize'>signin</button><br/>
           <Link to='/signup'><h4 className='mt-2 text-capitalize'>new user click here</h4></Link>
            </div>
         
            </div>
        </div>
          
        </div>
    )
}
// import React from 'react'
// import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
// import Home from './componentsAuth/Home'
// import SIgnin from './componentsAuth/SIgnin'
// import SIgnup from './componentsAuth/SIgnup'

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <h1><Link to='/signup'>SignUp</Link></h1>
//       <h1><Link to='/signin'>SignIn</Link></h1>
//         <Switch>
//           <Route exact path='/' component={Home}></Route>
//           <Route  path='/signup' component={SIgnup}></Route>
//           <Route  path='/signin' component={SIgnin}></Route>
         
//         </Switch>
//       </BrowserRouter>
//     </div>
//   )
// }