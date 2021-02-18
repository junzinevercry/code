import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography, Spin } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const [isLoading,setIsLoading] = useState(false)
  const onFinish = (values) => {
    console.log('Finish:', values);
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
        onCancel()
    }, 2000);
  };

  const onOk = () => {
    form.submit();
   
    // console.log(a)
    
  };

  return (
   
    <Modal title="添加角色" visible={visible} onOk={onOk} onCancel={onCancel}>
     <Spin spinning={isLoading}>
      <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="角色名"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="key"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="describle"
          label="描述"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      </Spin>
    </Modal>
    
  );
};

const RoleForm = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  
  return (
    <>
    <Button
    htmlType="button"
    style={{
    margin: '0 8px',
    }}
    onClick={showUserModal}
    type="primary"
    >
    添加
    </Button>
    <ModalForm visible={visible} onCancel={hideUserModal}/>
    
    </>
  );
};

export default RoleForm;