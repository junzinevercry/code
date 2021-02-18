import { BrowserRouter as Router,Redirect } from "react-router-dom";
import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import {Input, Button, Form} from 'antd';
import {Helmet} from 'react-helmet';
// -------
// import { , Button } from 'antd';
// const { TabPane } = Tabs;
import { Layout, Menu,Breadcrumb,Button,Tabs,Dropdown} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  AntDesignOutlined,
  DownOutlined
} from '@ant-design/icons';
import "./home.less"
import logo from '../components/banner/logo.png';
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
// ----


const { SubMenu } = Menu;

// import {LockOutlined, UserOutlined} from '@ant-design/icons';
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function Home(props){
    console.log(props)
    const [states,setStates] = useState({
        collapsed: false,
        h1:null
    })
    // ----
  //  处理tabs
  const panes = [
    { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '4' },
    { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '5' },
  ];
  const [tabsstate,setTabsstate] = useState({
    activeKey: panes[0].key,
    panes
  })
  // 修改激活状态
  let onChange = activeKey => {
    setTabsstate({...tabsstate,activeKey });
  };
  //增加tab
  let add = ({item,key}) => {
    // console.log(item,key)
    const { panes } = tabsstate; //必须使用组件中的panes 这个状态
    let activeitem = panes.find((item,i)=>{
      return item.key === key  //相等代表在状态值中存在 返回这一项对象 false 代表没有 返回的是undefined
    })
    const activeKey = key; //唯一的
    if(!activeitem){
      panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    }
    setTabsstate({ panes, activeKey });
    // if(activeitem){ //代表的是在 状态值中存在
    //   const activeKey = key; //唯一的
    //   setTabsstate({ panes, activeKey });
    // }else{ //代表的是在状态值中不存在
    //   const activeKey = key; //唯一的
    //   panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    //   setTabsstate({ panes, activeKey });
    // }
    
  };
  //删除tab
  let remove = targetKey => {
    let { activeKey } = tabsstate;
    let lastIndex;
    // if(activeKey==="1")return;   //保证首页是不会删除的
    tabsstate.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = tabsstate.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    setTabsstate({ panes, activeKey });
  };
  let onEdit = (targetKey, action) => {
    // console.log(targetKey,action)
    remove(targetKey)
  };

  // -----

    let toggle = () => {
        setStates({
          collapsed: !states.collapsed
        });
        // console.log(states.h1)
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
            <Menu theme="" mode="inline" defaultSelectedKeys={['1']} onClick={add}>
                
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
                    onChange={onChange}
                    activeKey={tabsstate.activeKey}
                    type="editable-card"
                    onEdit={onEdit}
                  >
                    {tabsstate.panes.map(pane => (
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