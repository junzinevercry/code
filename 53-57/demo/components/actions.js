import axios from "axios"

export let request = (data) => { //同步函数 
    // console.log(data)
    return {
        type:"increment",
        data
    }
  }
export let requestAsync =  (url) => { //异步函数
    return async (dispatch) => {
        let { data } = await axios.get(url)
        dispatch(request(data))
    }  
  }