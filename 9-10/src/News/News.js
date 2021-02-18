import { Link } from "react-router-dom"

function News(){
    return (
        <>
            <div>news新闻</div>
            <Link to="/login">跳转到login组件</Link>
        </>
    )
}
export default News;