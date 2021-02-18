import { Table,Layout,Spin,Divider } from 'antd';
import { Component } from 'react';
import RoleHead from "./RoleHead"
import RoleTable from "./RoleTable"
import RoleTab from "./RoleTab"
import { useState,useEffect } from "react"
// import PageComponent from "../PageComponent/PageComponent"
import axios from "axios"

const { Sider, Content,Header } = Layout;

function Role() {
 const [isLoading,setIsLoading] = useState(true)
 const [ states,setStates ] = useState({selectedKeys:["首页","文档"]}) // 所有被选中的 row 的 key 值
 const [ roles,setRoles ] = useState([])
 const [ selectedRoleName,setSelectedRoleName] = useState("admin") // 状态值是头部的角色人员

  useEffect(async () => {
    console.log("========")
    let { data } = await axios.get("http://127.0.0.1:9000/roles")
    console.log(data)
    await setRoles(data)
    await setIsLoading(false)
    },[])
  let ajaxRole = async () => {
    setIsLoading(true)
    let { data } = await axios.get("http://127.0.0.1:9000/roles")
    console.log(data)
    await setRoles(data)
    await setIsLoading(false)
  }
  let getMenus = async (id,name) => { //用于获取单个角色的权限
    console.log(id)
    let { data } = await axios.get(`http://127.0.0.1:9000/roles?id=${id}`) //分配的权限
    console.log(typeof data[0].menu)
    typeof data[0].menu === "string"?await setStates({selectedKeys:JSON.parse(data[0].menu)}):await setStates({selectedKeys:data[0].menu})
    
    await setSelectedRoleName(name)
    await setIsLoading(false)  //加载状态
  }
  //收集分配给角色的权限
  let onChange = (selectedRowKeys, selectedRows) => {
    // console.log(selectedRowKeys,selectedRows)
    setStates({selectedKeys:selectedRowKeys})
  }  
  
    return (
        <Spin spinning={isLoading}>
          <RoleHead selectedRoleName = {selectedRoleName} roles = {roles} states={states} ajaxRole={ajaxRole} setIsLoading={setIsLoading}></RoleHead>
          <Divider></Divider>
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