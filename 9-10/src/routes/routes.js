//统一管理路由
import Home from "../Home/Home"
import Login from "../Login/Login"
import Pages from "../Pages/Pages"
import News from "../News/News"
export default [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },
    {
        path:"/pages",
        component:Pages,
        exact:true,
        routes:[
            {
                path:"",
                component:News,
                exact:true
            },
            {
                path:"/pages/news",
                component:News,
                exact:true
            },
            {
                path:"/login",
                component:News,
                exact:true
            }
        ]
    }
]