import { BrowserRouter as Router,Redirect,Switch } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Input, Button, Form,message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import Banner from "../components/banner"
import { useState,useEffect } from "react"
import "./login.less"
import axios from "axios"
import qs from "qs"
function Login(props) {
    console.log(props)
    function submit(values){
       console.log(values)
       let {userName,password} = values
        axios.post("http://localhost:9000/login",qs.stringify({userName,password}))
        .then(function (response) {
            console.log(response);
            window.localStorage.setItem("TOKEN",JSON.stringify(values))
            window.location.href="http://localhost:3000/home"
          })
        .catch(function (error) {
            console.log(error);
          });

    //   window.localStorage.setItem("loginstatus",JSON.stringify(values))
        //校验处理
        // window.location.href="http://localhost:3000/home"
      
    }

    const [states,setStates] = useState({isMount:false,loading:false})
    useEffect(()=>{
        setTimeout(() => setStates({...states,isMount:true}), 300);
    },[])
    //{isMount:true}
    const formItemStyleName = states.isMount ? 'form-item active' : 'form-item';
    return (
        <>
            <Helmet title="欢迎登陆"></Helmet>
            <div className="left">
                <Banner></Banner>
            </div>
            <div className="right">
                <div className="box">
                    <Form
                    name="login"
                    className=""
                    onFinish={submit}
                    >
                        <div className={formItemStyleName}>
                            <div className="header">欢迎登录</div>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item
                                name="userName"
                                rules={[{required: true, message: '请输入用户名'}]}
                            >
                                <Input allowClear prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
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
                            <Form.Item shouldUpdate={true}>
                                {() => (
                                    <Button
                                        className="submit-btn"
                                        loading={states.loading}
                                        type="primary"
                                        htmlType="submit"  
                                    >
                                        登录
                                    </Button>
                                )}
                             </Form.Item>   
                        </div>

                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;
























// function Login(props){
//     console.log(props)
//     function handleSubmit(){

//     }
//     const [states,setStates] = useState({
//             loading: false,
//             message: '',
//             isMount: false,
//             form:{user:"admin",pwd:"111"}
//     })
//     useEffect(function(){
//         setTimeout(() => setStates({...states,isMount:true}), 300);
//         console.log(states)
//     },[])

    // const formItemStyleName = states.isMount ? 'form-item active' : 'form-item';
//     return (
        
//         <div>
//             <Helmet title="欢迎登录"></Helmet>
//             <div className="left">
//                 <Banner/>
//             </div>
            // <div className="right">
            //         <div className="box">
            //             <Form
            //                 name="login"
            //                 className='inputLine' 
            //             >
            //                 <div className={formItemStyleName}>
            //                     <div className="header">欢迎登录</div>
            //                 </div>
            //                 <div className={formItemStyleName}>
            //                     <Form.Item
            //                         name="userName"
            //                         rules={[{required: true, message: '请输入用户名'}]}
            //                     >
            //                         <Input value={states.form.user} allowClear autoFocus prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
            //                     </Form.Item>
            //                 </div>
            //                 <div className={formItemStyleName}>
            //                     <Form.Item
            //                         name="password"
            //                         rules={[{required: true, message: '请输入密码'}]}
            //                     >
            //                         <Input.Password value={states.form.pwd} prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="密码"/>
            //                     </Form.Item>
            //                 </div>
            //                 <div className={formItemStyleName}>
            //                     <Form.Item shouldUpdate={true}>
            //                         {() => (
            //                             <Button
            //                                 className="submit-btn"
            //                                 loading={states.loading}
            //                                 type="primary"
            //                                 htmlType="submit"
                                            
            //                             >
            //                                 登录
            //                             </Button>
            //                         )}
            //                     </Form.Item>
            //                 </div>
            //             </Form>
            //             <div className="error-tip">{states.message}</div>
            //         </div>
            //    </div>
            
//         </div>
        
//     )
// }
// export default Login;