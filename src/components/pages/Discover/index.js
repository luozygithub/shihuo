import React,{Component} from "react"
import "./index.scss"
import HeaderBanner from "./../../commons/HeaderBanner"
import AppFooter from "./../../commons/AppFooter"
class Discover extends Component{
    render(){
        return (
            <div>
                <HeaderBanner></HeaderBanner>
                <AppFooter/>
            </div>
        )
    }
}
export default Discover;