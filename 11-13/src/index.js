import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.css';
import App from './App';
import API from "./config.js"
// require('dotenv').config()
console.log(process.env)
ReactDOM.render(<ConfigProvider locale={zhCN}>
  <App/>
</ConfigProvider>,
document.getElementById('root'));



// import { renderRoutes } from "react-router-config";
// import { BrowserRouter,Prompt } from "react-router-dom"
// import routes from "./router/routes"
// var as = renderRoutes(routes)
// console.log("----",as)

// ReactDOM.render(<ConfigProvider locale={zhCN}>
//   <App/>
// </ConfigProvider>,
// document.getElementById('root'));
// ReactDOM.render(
//   <BrowserRouter 
//   // getUserConfirmation={(message)=>{
//   //   const a = window.confirm("hello")
//   //   console.log(a)
//   // }}
//   >
//     <Prompt message="走吗？"/>
//   <ConfigProvider locale={zhCN}>
//     {renderRoutes(routes)}
//   </ConfigProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
