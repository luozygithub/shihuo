import React,{Component} from "react"
import "./index.scss"
class Equiment extends Component{
    render(){
        return (
            <div>
                <div className="top_bar">
                    <input className="input" type="text" placeholder="搜索全网低价好券"/>
                    <div>...</div>
                </div>
                <div className="menu">
                    <li className="classify"><i className="fa fa-star-o fa-2x"></i><p>热销排行</p></li>
                    <li className="classify"><i className="fa fa-tags fa-2x"></i><p>好价精选</p></li>
                    <li className="classify"><i className="fa fa-plus fa-2x"></i><p>当季新款</p></li>  
                </div>
            </div>
        )
    }
}


export default Equiment;