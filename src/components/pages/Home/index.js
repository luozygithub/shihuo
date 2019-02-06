import React,{Component} from "react"
import "./index.scss"
import Activity from "./Activity"
import SearchInfo from "../../../components/commons/SearchInfo"
import Banner from "../../commons/Banner"
import Classify from "./Classify"
import AppFooter from "./../../commons/AppFooter"
class Home extends Component{
    render(){
        return (
            <div className="home">
                {/* <HeaderBanner />  */}
                 
                <Banner></Banner>
                <SearchInfo></SearchInfo>
                <Classify></Classify>
                {/* <Route path="/home/luxury" component={Luxury} />
                <Route path="/home/news" component={News}/> */}
                <section className="hot-activity clearfix">
                    <h3 className="head-top">热门活动</h3>
                </section>
                <Activity/>
                <AppFooter/>
            </div>
        )
    }
}
export default Home;