import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/groups"
import RangeBox from "./RangeBox"
import Filter from "./Filter"
import qs  from "qs"
class Ranges extends Component{
    constructor(props){
        super(props)
        this.state={
            p:1
        }
    }
    componentWillMount(){
        let content = this.props.location.search.replace("?","")
        let obj = qs.parse(content)
        let range = obj.range
        let brand = obj.brand
        this.props.getRange(range, brand, this.state.p)
    }
    render(){
        if(!this.props.range) return ""
        let {info} = this.props.range
        let {filter} = this.props.range
        return (
            <div>
                <Filter data={filter}></Filter>
                <RangeBox data={info}></RangeBox>
            </div>
        )
    }
}
export default GroupState(Ranges,{
    reducer:"discover",
    states:["range"]
})