import React,{Component} from "react"
import "./index.scss"
import HeaderBanner from "./../../commons/HeaderBanner"
import AppFooter from "./../../commons/AppFooter"
import Bannerarea from "./Bannerarea"
import EquipmentC from "./Equipment"
import Recommend from "./Recommend"
class Equipment extends Component{
    render(){
        return (
            <div>
                <HeaderBanner></HeaderBanner>
                <Bannerarea></Bannerarea>
                <EquipmentC></EquipmentC>
                <Recommend></Recommend>
                <AppFooter/>
            </div>
        )
    }
}
export default Equipment;