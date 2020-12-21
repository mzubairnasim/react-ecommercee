const istate={
    data:[],
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
