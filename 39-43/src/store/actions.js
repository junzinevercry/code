import axios from "axios"
// 同步向store获取state的
let requestTable = (data) => {  //派发action
    console.log(data)
    return {   //action
      type:"ajaxTable",
      data
    }
  }
  
  //异步请求
  let requestTableAsync = (url) => {  //发送ajax请求
    return async (dispatch) => {
      // 异步代码
      let { data } = await axios.get(url)
      dispatch(requestTable(data))
    }
  }

  export default requestTableAsync;