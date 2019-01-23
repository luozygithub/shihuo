import React,{Component} from "react"
import "./index.scss"
import HeaderBanner from "./../../commons/HeaderBanner"
import {Link} from "react-router-dom"
import AppFooter from "./../../commons/AppFooter"
class More extends Component{
    render(){
        return (
            <div className="flexibile-model">
                <div className="mainBox">
                    <div className="banner_block">
                        <div className="userface">
                            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt=""/>
                           
                        </div>
                        <div className="login-register">
                            <p><Link to="/login" className="login">登陆</Link>
                            <Link to="/register" className="register">注册</Link></p>
                            <p className="jinbi">金币 0</p>
                        </div>
                    </div>
                    <div className="menu_list">
                        <div className="tit"><span>我的识货</span></div>
                        <ul>
                            <li>
                                <Link to="/detail"><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt="" /><p>我的收藏</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/detail">
                                <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt="" />
                                <p>我的晒物</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/detail"><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt="" /><p>我的礼品</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu_list">
                        <div className="tit"><span>我的海淘</span></div>
                        <ul>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/cart.png" alt=""/><p>购物车</p></a></li>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_order.png" alt=""/><p>海淘订单</p></a></li>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_kefu.png" alt=""/><p>海淘客服</p></a></li>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_address.png" alt=""/><p>地址管理</p></a></li>
                        </ul>
                    </div>
                    <div className="menu_list">
                        <div className="tit"><span>识货必备</span></div>
                        <ul>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt=""/><p>推荐店铺</p></a></li>
                            <li><a href=""><img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt=""/><p>黑科技选鞋</p></a></li>
                        </ul>
                    </div>
                </div>
            <AppFooter/>
        </div>
        )
    }
}
export default More;