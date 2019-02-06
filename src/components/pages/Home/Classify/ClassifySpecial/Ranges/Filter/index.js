import React,{Component} from "react"
import "./index.scss"
import Item from "./Item"
import Item1 from "./Item1"
import Item2 from "./Item2"
class Filter extends Component{
    constructor(props){
        super(props)
        this.state={
            txt:null,
            isShow:false,
            content:null
        }
        this.jump = this.jump.bind(this)
    }
    componentWillMount(){

    }
    componentWillReceiveProps(props){
        console.log(props)
    }
    jump(e){
        if(!this.props) return ""
        let filter = this.props.data
        let txt =  e.target.innerText
        switch (txt){
            case "特价优惠":
                this.setState({
                    txt:"特价优惠",
                    content:filter.tag_type
                })
                break;
            case "人气最高":
                this.setState({
                    txt:"人气最高",
                    content:[
                        {id:0,txt:"人气最高"},
                        {id:0,txt:"新品上架"},
                        {id:0,txt:"价格由低到高"},
                        {id:0,txt:"价格由高到低"},
                    ]
                })
                break;
            case "全部价格":
                this.setState({
                    txt:"全部价格",
                    content:filter.prices
                })
                break;
            default:
                break;
        }
        if(this.state.txt === txt){
            this.setState({
                isShow:!this.state.isShow
            })
        }
        
    }
    render(){
        // console.log(this.state.content)
        return (
            <div>
                <div className="pull-down">
                    <div onClick={this.jump}  className='tag_type'>特价优惠</div>
                    <div onClick={this.jump}  className='tag_type'>人气最高</div>
                    <div onClick={this.jump}  className='tag_type'>全部价格</div>
                    {/* {this.state.txt!=="特价优惠"?"":<Item data={this.state.content} ></Item>}
                    {this.state.txt!=="人气最高"?"":<Item1 data={this.state.content}></Item1>}
                    {this.state.txt!=="全部价格"?"":<Item2 data={this.state.content}></Item2>} */}
                </div>
            </div>
        )
    }
}
export default Filter