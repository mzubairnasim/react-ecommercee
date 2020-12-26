



export const setcart=(da)=>{
    return (dispatch)=>{
        dispatch({type:"cart",payload:da})
    }
}