import React,{Component} from "react"
import "./index.scss"
import {Link} from "react-router-dom"
import GroupeState from "../../../../modules/groups"
const EntranceItem = ({data})=>(
    <li className="entrance-item">
        <Link to='/list/listdetail'>
            <img className="item-img" src={data.img} alt=""/>
            <div className="item-tit">
                {data.title}
            </div>
        </Link>
    </li>
)
class EntranceList extends Component{
    componentWillMount(){
        // console.log(this.props.entranceList2)
    }
    renderEntranceList(){
        return (
            <ul className="entrance-list">
                {this.props.entranceList2.map((item,index)=>(
                    <EntranceItem data={item} key={index}/>
                ))}
            </ul> 
        )
    }
    render(){
        return (
            this.renderEntranceList()
        )
    }
}
export default GroupeState(EntranceList,{
    reducer:"discounts",
    states:["entranceList2"]
});