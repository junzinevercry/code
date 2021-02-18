import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';








function Users(){
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
  
    // To disable submit button at the beginning.
    useEffect(() => {
      forceUpdate({});
    }, []);
  
    const onFinish = (values: any) => {
      console.log('Finish:', values);
    };
    return (
        <>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="请输入名称"
                label="名称"
                rules={[{ required: false, message: '请输入名称' }]}
            >   
                <Input placeholder="请输入名称" />
            </Form.Item>
            <Form.Item
                name="password"
                label="职位"
                rules={[{ required: false, message: '请输入职位' }]}
            >
                <Input
                placeholder="请输入职位"
                />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                <Button
                    type="primary"
                    htmlType="submit"
                    
                >
                    提交
                </Button>
                )}
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                <Button>
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
            <Form.Item shouldUpdate={true}>
                {() => (
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                >
                    删除
                </Button>
                )}
            </Form.Item>
            
    </Form>
    <div>
        hello 用户
    </div>
    </>
    )
}
 export default Users