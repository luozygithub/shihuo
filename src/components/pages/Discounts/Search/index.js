import React,{Component} from "react"
import "./index.scss"
class Search extends Component{
    render(){
        return (
            <div>
                <div className="searchBox">
                    <form id="searchform" action="#">
                        <div className="search">
                            <input type="search" className="input" name="search" placeholder="搜索全网低价好券" id="searchVal" />
                            <input type="reset" className="reset" style={{display: 'none'}}/>
                        </div>
                    </form>
                <a href="javascript:void(0);" className="cancel" style={{display: 'none'}}>取消</a>
                </div>
            </div>
        )
    }
}
export default Search;