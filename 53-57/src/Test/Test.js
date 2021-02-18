import E from "wangeditor"
import React,{ useState,useEffect } from "react"
const ref = React.createRef()
function  Test(params) {
    const [dom,setDom]=useState(null)
    useEffect(()=>{
        console.log(ref)
        let editor = new E(ref.current)
        editor.config.height = 500
        editor.create()
    })
    return (
        <div ref = { ref }>
            hello web
        </div>
    )
}


export default Test;