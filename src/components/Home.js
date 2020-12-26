import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from  'react-redux'
import About from './About'
import Cart from './Cart'
import firebase from '../config/firebase'
import {maindata, setcart} from '../store/action'
import { useHistory } from 'react-router-dom';
export default function Home() {
   
    const data = useSelector(state => state.data)
    const dispatch=useDispatch()
    const cart = useSelector(state => state.cart)
    const history=useHistory()



    const add=(p)=>{
       
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              let cartItems=cart
              let PiC=false
              cartItems.forEach(v=>{
                if(v.id===p.id){
                  v.count +=1
                  PiC=true
                }
              })
              if(!PiC){
                cartItems.push({...p,count:1})
              }
              dispatch(setcart(cartItems))
              
              firebase.database().ref('Data').push({
                nameItems:cartItems
              })
          } 
          else{
            history.push("/signin")
          }
        }); 
        
          }
        

    const dlt=(p)=>{
            const filter=cart.filter(a=>a.id!==p.id)
            dispatch(setcart(filter))
    }
     

    return (
        <div className='constainer'>
            <div className='row'>
                <div className='col-md-8'>
                    <About data={data} add={add}/>
                </div>
                <div className='col-md-4'>
                    <Cart cart={cart} dlt={dlt}/>
                </div>
            </div>
        </div>
    )
}
