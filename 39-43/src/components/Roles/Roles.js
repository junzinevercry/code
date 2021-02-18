import store from "../../store/store"
import React,{ useState,useEffect } from "react"
import axios from "axios"
let request = (data) => { //同步函数 
    // console.log(data)
    return {
        type:"increment",
        data
    }
}
let requestAsync = () => { //异步函数
    return (dispatch) => {
        // let t = setTimeout(() => {
        //     dispatch(request())
        // }, 2000);
        axios.get("http://127.0.0.1:9000/users")
        .then(res=>{
            console.log(res.data)
            dispatch(request(res.data))
        })
    }
    
}
let add = () => {  
    console.log(111)
    store.dispatch(requestAsync())
} 

function Roles(){
    
    let [num,setNum] = useState({count:[{name:""}]})
    console.log(num)
    useEffect(()=>{
        store.subscribe(()=>{
            
            setNum({count:store.getState()})
        })
        console.log(store.getState())
    },[])

    return (
        <div>
            <h3>
                角色管理的组件<span>{num.count[0].name}</span>
            </h3>
            <button onClick={add}>增加</button>
        </div>
    )
}
 export default Roles












// import React,{ useState,useEffect } from "react"
// import { createStore } from "redux"
// //第一步 定义 reducer
// let reducer = (state=0,action) => {
//     switch (action.type) {
//         case "increment":
//             return state = state+1;
//         case "decrement":
//             return state = state-1;
//         default:
//             return state;
//     }
// }
// // 第二步 定义shore
// let store = createStore(reducer)
// //第三步 定义add方法

// let add = () => {
//     store.dispatch({
//         type:"increment"
//     })
// }

// console.log(store)

// function Roles(){
//     let [num,setNum] = useState({count:store.getState()})
//     useEffect(()=>{
//         store.subscribe(()=>{
//             // console.log(store.getState())
//             setNum({count:store.getState()})
//         })
//     },[])

//     return (
//         <div>
//             <h3>
//                 角色管理的组件<span>{num.count}</span>
//             </h3>
//             <button onClick={add}>增加</button>
//         </div>
//     )
// }
//  export default Roles