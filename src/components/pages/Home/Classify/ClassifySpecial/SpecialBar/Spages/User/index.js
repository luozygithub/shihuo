import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../../../modules/groups"
class User extends Component{
    componentDidMount(){
        
        if(!this.props.user){
            this.props.getUser();
        }
    }
    renderData(){
        if(!this.props.user) return "";
        return this.props.user.map(item=>{
                return (
                    <div key={item.param_str} className="all">
                        <div className="left">
                            <img width="100%" src={item.img} alt=""/>
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
export default GroupState(User,{
    reducer:"discover",
    states:["user"]
})