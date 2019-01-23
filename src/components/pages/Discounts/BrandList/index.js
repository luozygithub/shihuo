import React,{Component} from "react"
import "./index.scss"
import {Link} from "react-router-dom"
import GroupState from "./../../../../modules/groups"
const BrandItem = ({data})=>(
    <li className="brand-item">
        <Link to='/list/listdetail' href="">
            <img src={data.bgimg} alt="" className="brand-bg"/>
            <img src={data.logo} alt="" className="brand-logo"/>
            <div className="brand-tit">{data.brandTit}</div>
            <div className="brand-subtit">{data.brandSubtit}</div>
        </Link>
    </li>
)
class BrandList extends Component{
    componentWillMount(){
        // console.log(this.props.entranceList)
    }
    renderBrandList(){
        return this.props.entranceList.map((item,index)=>(
            <BrandItem  key={index} data={item}/>
        ))
    }
    render(){
        return (
            <ul className="brand-list">
                {this.renderBrandList()}
            </ul>
        )
    }
}
export default GroupState(BrandList,{
    reducer:"discounts",
    states:["entranceList"]
});