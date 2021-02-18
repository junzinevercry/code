import store from "../../store/store"
import React,{ useState,useEffect } from "react"
import { useDispatch } from "react-redux"


let request = () => {
    return {
        type:"increment"
    }
}
let requestasync = () => {  //异步方法
    console.log("---===--")
    return dispatch => {
        console.log("111")
        setTimeout(() => {
            dispatch(request())
        }, 2000);
    }
}
let add = () => {
    
    store.dispatch(requestasync())
    
} 
function Roles(){
    const dispatch = useDispatch()
    console.log(dispatch)
    let [num,setNum] = useState({count:store.getState()})
    useEffect(()=>{
        store.subscribe(()=>{
            // console.log(store.getState())
            setNum({count:store.getState()})
        })
    },[])

    return (
        <div>
            <h3>
                角色管理的组件<span>{num.count}</span>
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