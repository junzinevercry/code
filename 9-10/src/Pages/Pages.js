import { Link } from "react-router-dom"
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
function Pages({route}){
    console.log(route)
    return (
        <>
            <Router>
            <div>pages内容</div>
            <Link to="/home">跳转到home组件</Link><br/>
            <Link to="pages/news">打开新闻组件</Link>
            {
                renderRoutes(route.routes)
            }
            </Router>
        </>
    )
}
export default Pages;