import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios"
// import { request,requestAsync } from "../../store/actions" 

import "./role.css"
const Heads = (props) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
    // const [selectedRoleName, setSelectedRoleName] = useState("张三0")
    const { selectedRoleName } = props
    useEffect(() => {
      forceUpdate({});
    }, []);
  
    const onFinish = async (values) => {
      console.log('Finish:', values);
      
    };
  

    return (

    <>
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="角色名"
      >
        <Input placeholder="请输入角色名" />
      </Form.Item>
      
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            查询
          </Button>
        )}
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            htmlType="reset"
           
          >
            重置
          </Button>
        )}
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            添加
          </Button>
        )}
      </Form.Item>
      <div className="role-menu-tip">
        {selectedRoleName ? <span>当前角色权限：「{selectedRoleName}」</span> : <span>请在左侧列表中选择一个角色！</span>}
        <Button disabled={!selectedRoleName} type="primary">保存权限</Button>
     </div>
    </Form>
    
    </>
    )
}
export default Heads