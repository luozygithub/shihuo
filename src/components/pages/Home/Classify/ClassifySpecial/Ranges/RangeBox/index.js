import React,{Component} from "react"
import "./index.scss"
class RangeBox extends Component{
    renderBox(){
        if(!this.props) return ""
        let {data} = this.props
        return data.map(item=>{
            return (
                 <div key={item.id} className="range-box">
                    <div className="img-box">
                        <img width="100%" src={item.pic} alt=""/>
                    </div>
                    <div className="detail">
                        <div className="header">
                            <span className="name">{item.name}</span>
                            <span className="tag">包邮</span>
                        </div>
                        <p className="intro">{item.intro}</p>
                        <div className="price">
                            <span className="left">￥<i>{item.goodsPrice}</i>起</span>
                            <span className="hot"><i>热度</i>{item.hits}</span>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
               {this.renderBox()}
            </div>
        )
    }
}
export default RangeBox