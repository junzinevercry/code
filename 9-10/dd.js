// import { BrowserRouter } from "react-router-dom"
var { BrowserRouter } = require("react-router-dom")
// import routes from "./src/router/routes"
var routes = require("./src/router/routes")
var { renderRoutes } = require("react-router-config");
var as = renderRoutes(routes)
console.log(as)
