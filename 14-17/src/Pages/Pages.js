import { BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../routes/routes"
import News from "../News/News";
import Users from "../Users/Users";

function Pages(props){
    console.log(props)
    return (
        <>
            <div>pages works</div>
            <Link to="/pages/news">news</Link><br/>
            <Link to="/pages/users">users</Link>
           
            <Switch>
               {renderRoutes(props.route.routess)}
            </Switch>
            
        </>
    )
}
export default Pages;