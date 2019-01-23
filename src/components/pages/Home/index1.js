import React,{Component} from "react"
import  "./index.scss"

import HeaderBanner from "../../commons/HeaderBanner"
class Home extends Component{
    
    render(){
        return (
            <div style={{textAlign:"center"}} >
                <HeaderBanner></HeaderBanner>
                <h2>识货APP</h2>
               <img style={{display:"inline-block"}} src="http://sh1.hoopchina.com.cn/apple-touch-icon.png" alt=""/>
                <img width="100%" src="http://shihuo.hupucdn.com/appHome/201901/1723/d90c945dc16e335704090195c1e9aded.jpg?imageView2/2/w/1550/interlace/1%7cimageMogr2/format/jpg" alt=""/>
            </div>
        )
    }
}
export default Home;