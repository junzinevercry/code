import React, { useState,useEffect } from 'react';
import { Button,Table, Radio, Divider,Tag, Space,Popconfirm, message,Modal} from 'antd';
import axios from "axios"
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
    title: '名称',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
 
];
const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `张三 ${i}`,
    type: `用户管理`,
  });
}



// const rowSelection = {

//   onChange: (Key, selectedRows) => {
 
//     console.log(`selectedRowKeys: ${Key}`, 'selectedRows: ', selectedRows);
//   },
 
//   getCheckboxProps: (record) => {
//     console.log(record) //data中的每一条数据
//     return {
//       // indeterminate:true,
//       defaultChecked:true,
//     // disabled: true,
//     name: record.name,
//   }},
//   selections:true
// };


const RoleTab = (props) => {
  console.log(props)
  const { states,onChange } = props   //
  // 必须把权限分配的状态和onchang写在父组件上
  const [menus,setMenus] = useState([]) //定义一个初始状态 menus
  useEffect(async () => {
    const { data } = await axios.get("http://127.0.0.1:9000/menus")
    console.log(data)
    await setMenus(data) //异步的
  },[])
  
  return (
    <div>

      <Table
        
        rowSelection={{
          selectedRowKeys:states.selectedKeys,
          onChange,
        }}
        
        columns={columns}
        dataSource={menus}
        pagination={false}
      />
    </div>
  );
};
export default RoleTab