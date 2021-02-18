import { Spin } from "antd"
import { useState } from "react"
import "./page.css"


const PageComponent = (props) => {
    console.log(props)
    const [isLoading,setIsLoading] = useState(true)
    return (
        <>
        <div 
        className="load" 
        style={{
            display: isLoading ? 'block' : 'none',
            
        }}
        >
            
            <div>
                {props.children}
            </div>
            
        </div>
        
        </>
    )
}
export default PageComponent