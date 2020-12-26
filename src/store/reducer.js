import img1 from './img/a.jpg'
import img2 from './img/b.jpg'
import img3 from './img/c.jpg'
import img4 from './img/d.jpg'
import img5 from './img/e.jpg'
import img6 from './img/f.jpg'
import img7 from './img/g.jpg'
import img8 from './img/h.jpg'
const istate={
    data:[
        {
            id:1,
            title:"white shirt",
            img:img1,
            price:10
          },
          {
            id:2,
          title:"blue shirt",
          img:img2,
          price:20
          },
          {
            id:3,
            title:"black shirt",
            img:img3,
            price:30
          }, 
          {
            id:4,
            title:"Pink shirt",
            img:img4,
            price:40
          },
          {
            id:5,
            title:"Gray shirt",
            img:img5,
            price:100
          },
          {
            id:6,
            title:"GreyPink shirt",
            img:img6,
            price:90
          },
          {
            id:7,
            title:"Balck Pant",
            img:img7,
            price:140
          },
          {
            id:8,
            title:"Blue pent",
            img:img8,
            price:40
          }
    ],
    cart:[]
}

export const reducer=(state=istate,action)=>{
    switch (action.type) {
        case 'data':
         return{
             ...state,
             data:action.payload
         }    
         case 'cart':
             return{
                 ...state,
                 cart:[...action.payload]
             }
    }
    return state
} 
