import { Table,Layout,Spin } from 'antd';
import { Component } from 'react';
import RoleHead from "./RoleHead"
import RoleTable from "./RoleTable"
import RoleTab from "./RoleTab"
import { useState,useEffect } from "react"
// import PageComponent from "../PageComponent/PageComponent"
import axios from "axios"

const { Sider, Content } = Layout;

function Role() {
 const [isLoading,setIsLoading] = useState(true)
 const [ states,setStates ] = useState({selectedKeys:["首页","文档"]}) // 所有被选中的 row 的 key 值
 const [ roles,setRoles ] = useState([])
//  let t = setTimeout(async ()=>{
//         if(isLoading){
//           await setIsLoading(false)
//           return
//         }
//         return 
//     },2000)
  useEffect(async () => {
    let { data } = await axios.get("http://127.0.0.1:9000/roles")
    console.log(data)
    await setRoles(data)
    await setIsLoading(false)

    
  },[])

  let onChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys,selectedRows)
    setStates({selectedKeys:selectedRowKeys})
  }  
  let getMenus = async (id) => {
    console.log(id)
    let { data } = await axios.get(`http://127.0.0.1:9000/roles?id=${id}`)
    console.log(data[0].menu)
    await setStates({selectedKeys:data[0].menu})
    await setIsLoading(false)
  }
    return (
        <Spin spinning={isLoading}>
          <Layout>
              <Sider width="60%">
                <RoleTable isLoading={isLoading} setIsLoading={setIsLoading} roles = {roles} getMenus = {getMenus}></RoleTable>
              </Sider>
              
              <Content style={{width:'30%'}}>
                <RoleTab states={states} onChange={onChange}></RoleTab>
              </Content>
          </Layout>
          </Spin>
    )
}
  
export default Role;