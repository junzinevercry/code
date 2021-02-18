import React, { useState,useEffect } from 'react';
import { Button,Table, Radio, Divider,Tag, Space,Popconfirm, message,Modal} from 'antd';
import Talk from "./Talk"
import axios from "axios"
import store from "../../store/store"
import requestTableAsync from "../../store/actions"
//删除时确认的函数
function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
console.log(e);
message.error('Click on No');
}



const columns = [  //表头
  {
    title:"id",
    dataIndex:"id"
  },
  {
    title: '用户名',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '工作',
    dataIndex: 'work',
  },
  {
    title:"职位",
    dataIndex:"zhiwei"
  },
  {
      title:"操作",
      dataIndex:"action",
      render: (text, record) => {
        // console.log(record)
        return (<Space size="middle">
        <a><Talk user={record}></Talk></a>
        <Popconfirm
        title={`您确定删除${record.name}`}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
    >
        <a href="#" style={{color:"red"}}>删除</a>
    </Popconfirm>
      </Space>)
      }
        
      
  }
];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => {
    // console.log(record) //data中的每一条数据
    return {
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }},
};


const Tables = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [data,setData] = useState(store.getState())
  console.log(data)

  useEffect( async ()=>{
    // 
   
    await store.dispatch(requestTableAsync("http://127.0.0.1:9000/users"))  //异步的
    setData(store.getState())
    store.subscribe(async () => {
      await setData(store.getState())
    })


    
  },[])
  
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default Tables