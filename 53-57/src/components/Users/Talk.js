import { Modal, Button } from 'antd';
import React from "react"
import MyForm from "./MyForm"
const Talk = (props) => {
//   console.log(props)
  const [visible, setVisible] = React.useState(false); //觉得modal的消失和显示
  const [confirmLoading, setConfirmLoading] = React.useState(false); //决定的就是确认按钮的laoding状态
//   const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (props) => {
   
    console.log(props)
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <span onClick={showModal}>编辑</span>
      <Modal
        title="修改用户"
        visible={visible}
        footer={
           [
               <Button type="primary" onClick={handleOk} loading={confirmLoading}>保存</Button>,
               <Button onClick={handleCancel}>重置</Button>
           ]
        }
      >
        <p><MyForm formuser={props.user}></MyForm></p>
      </Modal>
    </>
  );
};

export default Talk;