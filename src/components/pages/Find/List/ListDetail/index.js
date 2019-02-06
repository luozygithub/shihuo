import React,{Component} from "react"
import "./index.scss"
import {NavBar,Icon} from "antd-mobile"
import 'antd-mobile/dist/antd-mobile.css';
import qs from "qs"
class ListDetail extends Component{
    render(){
        console.log(this.props)
        let content = this.props.location.search.replace("?","");
        let obj = qs.parse(content)
        return (
            <div>
               <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{this.props.history.push("/find")}}
                    
                    >{obj.title}</NavBar> 
                    <img width="100%" src={obj.url} alt=""/>
                    <p>
                        {obj.introduce}
                    </p>
            </div>
        )
    }
}
export default ListDetail;