import React,{useState} from 'react'
import {useDispatch, useSelector} from  'react-redux'
import Fade from 'react-reveal'
import firebase from '../config/firebase'
import { useHistory } from 'react-router-dom'
export default function Cart({dlt}) {
    const cart = useSelector(state => state.cart)
    const dispatch=useDispatch()
    const history=useHistory()

    const [contact, setcontact] = useState(false)
        
   const open=()=>{
    setcontact(!contact)
    dispatch({type:"cart",payload:""})
    alert(`Your has been placed and your order number is ${Math.floor(Math.random()*100)}`)
    firebase.auth().signOut()
    history.push('/signin')
}

    return (
        <div>
            <div className='mt-4'>
                {cart.length===0?"EMPTY CART":<h5>YOU HAVE {cart.length} ITEMS IN CART</h5>}
            </div>
            <div>
            <Fade left cascade>
                {cart.length>0&&
                <div>
                
                    {cart.map((value)=>{
                        return <div>
                       
                        <img src={value.img} style={{width:50,height:50,marginRight:10}} /> 
                        <span><b>{value.title}</b></span>
                        <span className='ml-4'><i>${value.price}</i></span>
                        <div style={{marginLeft:300}} className='d-flex'>
                        <p className='m-2'>{value.count}={value.count*value.price}</p> 
                        <button onClick={()=>dlt(value)} className='btn btn-info'> Dlt</button>
                        </div>
                       
                        </div>  
                    })}
                 <h2>TOTAL:{cart.reduce((a,c)=>(a+c.price*c.count),0)}</h2>
                 <button className='btn btn-primary'  onClick={open}>Proceed</button>
                </div>
                
                }
                </Fade>
            </div>
        </div>
    )
}
