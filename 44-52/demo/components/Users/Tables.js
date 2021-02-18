import React, { useState } from 'react';
import { Table, Radio, Divider,Space,Popconfirm, message  } from 'antd';

let edit = () => {
  console.log("editor")
}
let delet = (a) => {
  console.log(a)
}

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
const columns = [
  {
      title:"id",
      dataIndex:"key"
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
    title: '职位',
    dataIndex: 'working',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) =>{
      // console.log(text,record)
      let key = text.key
      return (
        <Space size="middle">
          <a onClick={()=>{edit()}}>编辑</a>
         
          <Popconfirm
            title={`你确定删除${text.name}`}
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" style={{color:"red"}}>删除</a>
          </Popconfirm>
        </Space>
      )
    },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    id:i,
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    work: `London Park no. ${i}`,
  });
}
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     work: 'New York No. 1 Lake Park',
//     delete:["操作","删除"]
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     work: 'London No. 1 Lake Park',
//     delete:["操作","删除"]
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     work: 'Sidney No. 1 Lake Park',
//     delete:["操作","删除"]
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     age: 99,
//     work: 'Sidney No. 1 Lake Park',
//     delete:["操作","删除"]
//   },
// ]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Tables = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      

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