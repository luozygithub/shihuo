import React,{Component} from "react"
import "./index.scss"
import SearchToast from "./SearchToast"
class SearchInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow:false
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        return (
            <div className="search">
                <div className="homesearch">
                    <div className="searchtoast">
                        <span></span>
                        <input type="text" onClick={this.toggle} placeholder="搜索商品,品牌" />
                    </div>
                    <div className="user">
                        用户
                    </div>
                </div>
                {
                    
                    this.state.isShow?<SearchToast toggle={this.toggle}></SearchToast>:""
                }
                
            </div>
        )
    }
}

export default SearchInfo