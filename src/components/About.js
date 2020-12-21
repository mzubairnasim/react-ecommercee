import React from 'react'
import Fade from 'react-reveal'
export default function About({data,add}) {
    return (
        <div>
        <Fade bottom cascade>
            <div className='row text-center mt-4'>
            
                {data.map((value)=>{
                    return <div className='col-md-4'>
                        <p className='mt-2 text-capitalize'>{value.title}</p>
                        <img src={value.img}/>
                        <p className='mt-2 text-capitalize'>${value.price}</p>
                        <hr/>
                        <button onClick={()=>add(value)} className='btn btn-danger'>Add</button>
                    </div>
                })}
               
            </div>
            </Fade>
        </div>
    )
}
