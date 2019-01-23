import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem } from 'antd-mobile';

import GroupState from "../../../../modules/groups"

class Login extends Component{

    render(){
      
        return (
            <div className="login">
                {/* 导航 */}  
                  <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.push("/more")}
                    rightContent={[
                     
                    ]}
                    >登陆</NavBar>
               
            </div>
        )
    }
}
export default GroupState(Login);