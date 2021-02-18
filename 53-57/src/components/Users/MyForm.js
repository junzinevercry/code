import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
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

const MyForm = (props) => {
    console.log(props)
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        return;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="note"
        label="用户名"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={props.formuser.name}/>
      </Form.Item>
      <Form.Item
        name="note"
        label="年龄"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={props.formuser.age}/>
      </Form.Item>
     


      <Form.Item
        name="work"
        label="工作"
      >
        <Select
          placeholder="Select a option and change input text above"
          
          allowClear
          defaultValue={props.formuser.work}
        >
          <Option value="male">前端开发</Option>
          <Option value="female">后台开发</Option>
         
        </Select>
      </Form.Item>
      <Form.Item
        name="work"
        label="职位"
      >
        <Select
          placeholder="Select a option and change input text above"
          
          allowClear
          defaultValue={props.formuser.zhiwei}
        >
          <Option value="male">员工</Option>
          <Option value="female">ceo</Option>
         
        </Select>
      </Form.Item>
      <Form.Item
        name="work"
        label="角色"
      >
        <Select
          placeholder="Select a option and change input text above"
          
          allowClear
          defaultValue="普通用户"
        >
          <Option value="male">管理员</Option>
          <Option value="female">普通用户</Option>
         
        </Select>
      </Form.Item>
      
    </Form>
  );
};

export default MyForm;