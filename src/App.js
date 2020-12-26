import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch,Link ,useHistory} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About'
import Cart from './components/Cart'
import Home from './components/Home'
import SIgnin from './components/SIgnin'
import SIgnup from './components/SIgnup'
import firebase from './config/firebase'
import {useDispatch, useSelector} from  'react-redux'
import './App.css'
export default function App() {
  const dispatch=useDispatch()
  const [email, setemail] = useState('')
  const history=useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
     if (user) {
         setemail(user.email)
     } 
     else{
      setemail(null);
    }

   });         
},[])
  const logout=()=>{
    firebase.auth().signOut()
    dispatch({type:"cart",payload:""})
  }
  return (
    
    <div className='container'>
    <div>
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <Link class="navbar-brand ml-4" to='/'>  <h1 className='head'>E-commerce App</h1></Link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul class="navbar-nav ml-auto ">
    {email?(
        <button onClick={logout} className='head btn btn-secondary m-2'>Signout</button>
      ):(
       
        <div class="d-flex">
        <li class="nav-item m-1 d-flex">
                  <Link to='/signup'><h2  className='head'>SignUp</h2></Link>
               </li>
               <li class="nav-item  m-1">
               <Link to='/signin'><h2  className='head'>SignIn</h2></Link>
               </li>
        </div>
      
      )}
        
               <h1 className='ml-4 mt-2 text-white mt-3'>{email&&<h6>Welcome : {email}</h6> } </h1>
    </ul>
  </div>
  
</nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route  path='/about' component={About}></Route>
          <Route  path='/cart' component={Cart}></Route>
          <Route  path='/signup' component={SIgnup}></Route>
           <Route  path='/signin' component={SIgnin}></Route>
        </Switch>
      </BrowserRouter>
   
    </div>
</div>
  )
}
