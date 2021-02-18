
// let Caidan = () => {
//     return (
//         <div>
//             <h3>菜单</h3>
//         </div>
//     )
// }

// export default Caidan

import { useEffect,useState } from "react"
import { Menu, Switch} from 'antd';
import { Link } from "react-router-dom"
import axios from "axios"
import {
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';


 
  
    
let Caidan = () => {

    let add = () => {}
    let [ menus,setMenus ] = useState([1,2])
    useEffect(async ()=>{
        await axios.get("http://localhost:3004/roles?id=1")
        .then(res => {
            console.log(res)
            setMenus(res.data[0].auth)
            // 
        })
        console.log(menus)
    },[])

    
    return (
        <Menu theme="" mode="inline" defaultSelectedKeys={['1']} onClick={add}>    
            {
                menus.map((item,index)=>{
                 return (<Menu.Item key={`${index}`} icon={<UserOutlined />}>
                 <Link to="/home/first">{item}</Link>
             </Menu.Item>)   
                })
            }
           
             
        </Menu>
    )
}

export default Caidan;