import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem } from 'antd-mobile';

class Register extends Component{
    render(){
        return (
            <div className="Register">
            {/* 导航 */}  
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push("/more")}
                rightContent={[
                 
                ]}
                >注册</NavBar>
           
        </div>
        )
    }
}
export default Register;