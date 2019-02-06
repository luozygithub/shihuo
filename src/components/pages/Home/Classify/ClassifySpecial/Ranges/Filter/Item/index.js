import React,{Component} from "react"
import "./index.scss"
class Item extends Component{
    
    render(){
        // console.log(this.props)
        return (
            <div className="show">
                <span>团购</span>
                <span>优惠</span>
            </div>
        )
    }
}
export default Item