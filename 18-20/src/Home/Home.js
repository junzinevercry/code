import { BrowserRouter as Router,Redirect } from "react-router-dom";
import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import {Input, Button, Form} from 'antd';
import {Helmet} from 'react-helmet';
// -------

import { Layout, Menu,Breadcrumb,Button} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  AntDesignOutlined
} from '@ant-design/icons';
import "./home.less"
import logo from '../components/banner/logo.png';
const { Header, Sider, Content } = Layout;
// ----
// import { Menu, Button } from 'antd';
// import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons';

const { SubMenu } = Menu;

// import {LockOutlined, UserOutlined} from '@ant-design/icons';


function Home(props){
    console.log(props)
    const [states,setStates] = useState({
        collapsed: false,
        h1:null
    })
    let toggle = () => {
        setStates({
          collapsed: !states.collapsed,
        });
        console.dir(states.h1)
        states.collapsed?states.h1.style.display="block":states.h1.style.display="none"
      };
   
    useEffect(()=>{
        
    })
    return (
       <>
         <Helmet title="首页"/>
         <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={states.collapsed}>
            <div className="logo">
                    <img src={logo}></img>
                    <h1 ref={(h1)=>{states.h1=h1}}>React Admin</h1>
                </div>
            <Menu theme="" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item>
                
                </Menu.Item>
                <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0,background:'#2F54EB' }} className="clear">
                {React.createElement(states.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
                })}
                <Breadcrumb>
                    
                    <Breadcrumb.Item href="" className="home">
                        <HomeOutlined />
                        <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="" className="ant">
                        <AntDesignOutlined />
                        <span>Ant Design官网</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                Content
            </Content>
            </Layout>
        </Layout>
       </>
    )
}
export default Home;