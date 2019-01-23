import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/groups"
class HeaderBar extends Component{
    componentWillMount(){
        this.props.getSpecial();
    }
    renderBar(){
        let {special} = this.props;
        if(!special) return ""
        return special.map(item=>{
            return (
                <div key={item.id} className="item">
                    <img src={item.img} alt=""/>
                    <span>{item.title}</span>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="headerbar">
                {this.renderBar()}
            </div>
        )
    }
}
export default GroupState(HeaderBar,{
    reducer:"discover",
    states:["special"]
})