import { BrowserRouter as Router,Redirect } from "react-router-dom";
import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import {Input, Button, Form} from 'antd';
import {Helmet} from 'react-helmet';
// -------
// import { Tabs, Button } from 'antd';

// const { TabPane } = Tabs;
import { Layout, Menu,Breadcrumb,Button,Tabs} from 'antd';
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
const { TabPane } = Tabs;
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
    // console.log(props)
    const [states,setStates] = useState({
        collapsed: false,
        h1:null
    })
    // ----
    let newTabIndex = 0;
    const panes = [
        { title: '首页', content: 'Content of Tab Pane 1', key: '4' },
        { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '5' },
      ];
    
    const [panesstate,setPanesstate] = useState({
        activeKey: panes[0].key,
        panes
    })
    let onChange = activeKey => {
        console.log(activeKey)
        setPanesstate({...panesstate,activeKey})
    }

    let toggle = () => {
        setStates({
          collapsed: !states.collapsed,
        });
        console.dir(states.h1)
        states.collapsed?states.h1.style.display="block":states.h1.style.display="none"
        // states.collapsed?states.h1.style.visibility="visible":states.h1.style.visibility="hidden"
      };
    // 增加tab  
    let add = (key) => {
        const { panes } = panesstate;
        let iskey = panes.find((item,index)=>{
            console.log(item)
            return item.key === key
        })
        if(iskey){  //存在设置为激活状态
            const activeKey = key;
            setPanesstate({ panes, activeKey });
        }else{//不存在 直接添加且设置为激活状态
            const activeKey = key;
            panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
            setPanesstate({ panes, activeKey });
        }
        
    }
    useEffect(()=>{
        
    })
    let fn = ({ item, key, keyPath, domEvent })=>{
        console.log(item,key,keyPath)
        add(key)
    }
    let remove = targetKey => {
        console.log("------")
        let { activeKey } = panesstate;
        console.log(activeKey)
        if(activeKey==="1")return;
        let lastIndex;
        panesstate.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = panesstate.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        setPanesstate({ panes, activeKey });
      };
      let onEdit = (targetKey, action) => {
          console.log(targetKey, action)
          remove(targetKey)
      };
    return (
       <>
         <Helmet title="首页"/>
         <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={states.collapsed}>
            <div className="logo">
                    <img src={logo}></img>
                    <h1 ref={(h1)=>{states.h1=h1}}>React Admin</h1>
                </div>
            <Menu theme="" mode="inline" defaultSelectedKeys={['1']} onClick={fn}>
                
                <Menu.Item key="1" icon={<UserOutlined />}>
                首页
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                用户管理
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                角色管理
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
                <Tabs
                hideAdd
                onChange={()=>{onChange()}}
                activeKey={panesstate.activeKey}
                type="editable-card"
                onEdit={onEdit}
                >
                {panesstate.panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key}>
                    {pane.content}
                    </TabPane>
                ))}
                </Tabs>
            </Content>
            </Layout>
        </Layout>
       </>
    )
}
export default Home;