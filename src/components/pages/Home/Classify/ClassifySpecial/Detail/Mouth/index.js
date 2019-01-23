import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../../modules/groups"

class Mouth extends Component{
    componentWillMount(){
        this.props.getMouth();
    }
    renderitem(){
        let {mouth} = this.props
        if(!mouth) return ""
        let {tags} = mouth
        return tags.map(item=>{
            return (
                <span key={item.id}>{item.title}</span>
            )
        })
    } 
    renderpic(){
        let {mouth} = this.props
        if(!mouth) return ""
        let {comments} = mouth
        return comments.map(item=>{
            return item.img_attr.map(every=>{
                return (
                    <img key={every} width="100" height="100" src={every} alt=""/>
                )
            })
            
        })
    }
    
    renderComments(){
        let {mouth} = this.props
        if(!mouth) return ""
        let {comments} = mouth
        return comments.map(item=>{
            return (
                <div key={item.product_id} className="comments">
                    <div className="who">
                        <span className="name">{item.author_name}</span>
                        <span className="date">{item.date}</span>
                    </div>
                    <div className="txt">
                        {item.intro}
                    </div>
                    <div className="pic">
                        {
                            item.img_attr.map(every=>{
                                    return (
                                        <img key={every} width="100" height="100" src={every} alt=""/>
                                    )
                            }) 
                        }
                    </div>
                </div>
            )
        })
    }

   
    render(){
        return (
            <div className="detail">
                <div className="top">
                    <span>全网口碑（8620)</span>
                    <span>></span>
                </div>
                <div className="tagitems">
                    {this.renderitem()}
                </div>
                {this.renderComments()}
            </div>
        )
    }
}
export default GroupState(Mouth,{
    reducer:"discover",
    states:["mouth"]
})