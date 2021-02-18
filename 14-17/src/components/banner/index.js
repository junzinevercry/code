import React, { useState,useEffect } from 'react';
import './style.less';// 全局样式
import logo from './logo.png';
import star from './star.png';

function Banner(){
    const [states,setStates] = useState({isMount:false})//
    useEffect(()=>{
        setStates({isMount:true})
    },[])
    return (
        <div className={states.isMount ? 'root active' : 'root'}>
                <div className="star">
                    <img src={star} alt="星星"/>
                </div>
                <div className="logo">
                    <img src={logo} alt="图标"/>
                    <span>React Admin</span>
                </div>

        </div>
    )
}

export default Banner;







// export default class index extends Component {
//     state = {
//         isMount: false,
//     };

//     componentDidMount() {
//         this.setState({isMount: true});
//     }


//     render() {
//         const {isMount} = this.state;

//         return (
//             <div className={isMount ? 'root active' : 'root'}>
//                 <div className="star">
//                     <img src={star} alt="星星"/>
//                 </div>
//                 <div className="logo">
//                     <img src={logo} alt="图标"/>
//                     <span>React Admin</span>
//                 </div>
//             </div>
//         );
//     }
// }
