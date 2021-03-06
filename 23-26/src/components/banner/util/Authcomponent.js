import React from "react"
import { BrowserRouter as Router,Route,Redirect, Switch } from "react-router-dom"
import routes from "../routes/routes"
import Login from "../Login/Login"

function Authcomponent(props){
    // console.log(props)
    const pathname = props.location.pathname;
    const targetRouter = routes.find((item,index)=>{
        return pathname.search(item.path) !== -1
    })
    console.log(targetRouter)
    const isLogin = JSON.parse(window.localStorage.getItem("loginStatus"))
    if(pathname == "/"){
        return <Redirect to="/login"></Redirect>
    }
    if(!targetRouter){ //非法路由
        return <Redirect to = "/404"></Redirect>
    }
    if(isLogin){ //有登录状态了
        if(pathname === "/login"){
            return <Redirect to="/home"></Redirect>
        }else{
            return (
                <Route path={pathname} component={targetRouter.component}/>
            )
        }
    }else{ //没有登录状态
        if(targetRouter.auth){ //该页面是否要权限
            return <Redirect exact to="/login"/>
        }else{
            return (
                <Switch>
                 <Route path={pathname} component={targetRouter.component} routes={targetRouter.routes}/>
                </Switch>
            )
        }
    }
}

export default Authcomponent;