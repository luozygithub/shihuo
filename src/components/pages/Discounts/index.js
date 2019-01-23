import React,{Component} from "react"
import "./index.scss"
import Search from "./Search"
import HeaderBanner from "./../../commons/HeaderBanner"
import BrandList from "./BrandList"
import EntranceList from "./EntranceList"
import Jiukjiu from "./Jiukjiu"
import Activity from "./Activity"
import {Link} from "react-router-dom";
import AppFooter from "./../../commons/AppFooter"
class Dscounts extends Component{
    render(){
        return (
            <div className="discounts">
                <HeaderBanner></HeaderBanner>
                <Search></Search>
                <div className="yhq">
                    已收集&nbsp;
                    <span>10350</span>
                    &nbsp;张优惠券
                    <Link to='/list/listdetail' className="zn fr" href="//m.shihuo.cn/app/html/shihuoMobile/souquan.html">&nbsp;</Link>
                </div>
                <div className="shihuo1111-temai">
                    <div className="tit-block">
                        <b>品牌特卖</b>
                        <div className="fr">
                            <span>
                                更多品牌&nbsp;<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" alt=""/>
                            </span>
                        </div>
                    </div>
                    {/* 种类 入口 列表 */}
                    <EntranceList></EntranceList>
                    {/* 商标 品牌列表 */}
                    <BrandList></BrandList>
                    {/* 九块九优惠 */}
                    <Jiukjiu></Jiukjiu>
                    {/* 广告图 */}
                    <div className="advert-radius">
                        <Link to="/detail">
                            <img src="http://shihuo.hupucdn.com/appHome/201812/2716/32ccdb36ecc82e478830868a4c79d549.png" alt=""/>
                        </Link>
                    </div>
                    {/* 优惠列表 */}
                    <Activity></Activity>
                </div>
                <AppFooter/>
            </div>
        )
    }
}
export default Dscounts;    