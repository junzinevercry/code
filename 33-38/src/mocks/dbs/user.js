//用户管理的接口

let data = []
for(let i = 0;i<100;i++){
    data.push({
        id:`${i}`,
        key:`${i}`,
        name:`张三${i}`,
        age:"22",
        work:"web工程师",
        zhiwei:"技工"
    })
}
module.exports={
    users:data
}