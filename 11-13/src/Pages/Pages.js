import { BrowserRouter as Router,Link,Switch} from "react-router-dom";
import { renderRoutes } from "react-router-config";
function Pages({route}){
    console.log(route)
    return (
        <>
            <div>pages works</div>
            <Link to="/pages/news">news</Link><br/>
            <Link to="/pages/users">users</Link>
            <Switch>
                {
                    renderRoutes(route.routes)
                }
            </Switch>
        </>
    )
}
export default Pages;