


export const maindata=()=>{
    return(dispatch)=>{
        fetch("http://localhost:8000/products")
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
           dispatch({type:"data",payload:data})
       })
    }
}

export const setcart=(da)=>{
    return (dispatch)=>{
        dispatch({type:"cart",payload:da})
    }
}