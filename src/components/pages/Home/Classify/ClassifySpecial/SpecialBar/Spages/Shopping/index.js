import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../../../modules/groups"
class Shopping extends Component{
    componentDidMount(){
        
        if(!this.props.shopping){
            this.props.getShopping();
        }
    }
    renderData(){
        if(!this.props.shopping) return "";
        return this.props.shopping.map(item=>{
                return (
                    <div key={item.param_str} className="all">
                        <div className="left">
                            <img  src={item.img} alt=""/>
                        </div>
                        <div className="right">
                            <span className="title">{item.title}</span>
                            <i className="txt">{item.author_name}</i>
                            <em className="price">
                                <strong>
                                    <i>{item.column_name}</i>
                                </strong>
                                <strong>
                                    
                                </strong>
                            </em>
                        </div>
                    </div>
                )
            
        })
    }
    render(){
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}
export default GroupState(Shopping,{
    reducer:"discover",
    states:["shopping"]
})