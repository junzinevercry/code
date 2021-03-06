

import React,{ Component } from 'react';

import {Input, Button, Form} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import Banner from './banner/index';
import './App.less';
export default class extends Component {
  state = {
      loading: false,
      message: '',
      isMount: false,
  };

  componentDidMount() {
      console.log(window.location);
      // 开发时方便测试，填写表单
      if (process.env.NODE_ENV === 'development') {
          this.form.setFieldsValue({userName: 'admin', password: '111'});
      }

      setTimeout(() => this.setState({isMount: true}), 300);
  }

  handleSubmit = (values) => {
      if (this.state.loading) return;

      const {userName, password} = values;
      const params = {
          userName,
          password,
      };

      // setLoginUser({
      //     id: params.userName,
      //     name: params.userName,
      // });
      // toHome();

    
  };

  render() {
      const {loading, message, isMount} = this.state;
      const formItemStyleName = isMount ? 'form-item active' : 'form-item';

      return (
          <div className="root login-bg" className="login-bg">
            
              <div className="left">
                <Banner/>
              </div>
              <div className="right">
                  <div className="box">
                      <Form
                          ref={form => this.form = form}
                          name="login"
                          className='inputLine'
                          onFinish={this.handleSubmit}
                      >
                          <div className={formItemStyleName}>
                              <div className="header">欢迎登录</div>
                          </div>
                          <div className={formItemStyleName}>
                              <Form.Item
                                  name="userName"
                                  rules={[{required: true, message: '请输入用户名'}]}
                              >
                                  <Input allowClear autoFocus prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                              </Form.Item>
                          </div>
                          <div className={formItemStyleName}>
                              <Form.Item
                                  name="password"
                                  rules={[{required: true, message: '请输入密码'}]}
                              >
                                  <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="密码"/>
                              </Form.Item>
                          </div>
                          <div className={formItemStyleName}>
                              <Form.Item shouldUpdate={true} style={{marginBottom: 0}}>
                                  {() => (
                                      <Button
                                          className="submit-btn"
                                          loading={loading}
                                          type="primary"
                                          htmlType="submit"
                                          disabled={
                                              !this.form?.isFieldsTouched(true) ||
                                              this.form?.getFieldsError().filter(({errors}) => errors.length).length
                                          }
                                      >
                                          登录
                                      </Button>
                                  )}
                              </Form.Item>
                          </div>
                      </Form>
                      <div className="error-tip">{message}</div>
                  </div>
              </div>
              <style>{`
               
              
              `}</style>
          </div>
      );
  }
}









































// import Icon,{ SearchOutlined,LeftOutlined} from '@ant-design/icons';
// import { Button } from 'antd';


// function App() {
//   const HeartSvg = () => (
//     <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
//       <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
//     </svg>
//   );
//   const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
//   return (
//     <>
//       <h3>hello web</h3>
//       <Button icon = {<SearchOutlined/>}>搜索</Button>
//       <LeftOutlined />
//       <HeartIcon style={{ color: 'hotpink' }} />
//     </>
//   );
// }

// export default App;

