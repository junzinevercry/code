import { BrowserRouter as Router,Redirect } from "react-router-dom";
import React,{ useEffect, useState } from "react"
import { Link,Switch } from "react-router-dom";
// import {Input, Button, Form} from 'antd';
import {Helmet} from 'react-helmet';
import routes from "../routes/routes"
import { renderRoutes,matchRoutes } from "react-router-config";

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
import MyMenu from "../components/MyMenu/MyMenu"
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
// ----


const { SubMenu } = Menu;



function Home(props){
    // console.log(props)
    let arr = matchRoutes(routes,props.location.pathname)

    const [states,setStates] = useState({
        collapsed: false,
        h1:null
    })
    // ----
  //  处理tabs
  const panes = [
    
  ];
  const [tabsstate,setTabsstate] = useState({
    activeKey: 0,
    panes
  })
  // 修改激活状态
  let onChange = activeKey => {
    console.log("===========")
    setTabsstate({...tabsstate,activeKey });
    console.log(activeKey,props)
    let pathname = ""
    switch (activeKey) {
      case "1":
        pathname = "/home/first";
        break;
      case "2":
        pathname = "/home/users";
        break; 
      case "3":
        pathname = "/home/roles";
        break;   
      default:
        pathname = "/home/first"
        break;
    }
    props.history.push(pathname)
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
            <MyMenu tabsstate={tabsstate} setTabsstate={setTabsstate}></MyMenu>
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
                    {tabsstate.panes.map((pane,index) => (
                      
                      <TabPane tab={pane.title} key={pane.key}>
                       
                          <Switch>
                          {renderRoutes(arr[0].route.routes)}
                         </Switch>
                        
                       
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