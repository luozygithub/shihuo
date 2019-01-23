import React, { Component } from 'react';

//引入组件
import Home from "./components/pages/Home";
import Discounts from "./components/pages/Discounts";
import Discover from "./components/pages/Discover";
import Equipment from "./components/pages/Equipment";
import More from "./components/pages/More";
import Login from "./components/pages/More/Login"
import Register from "./components/pages/More/Register"
// import AppFooter from "./components/commons/AppFooter"
import ClassifySpecial from "./components/pages/Home/Classify/ClassifySpecial"
import Detail from "./components/pages/Home/Classify/ClassifySpecial/Detail"
import Find from "./components/pages/Find"
//引入路由
import { Route, withRouter, Switch} from "react-router-dom";
class App extends Component {
  componentWillMount(){
    // console.log(this.props)
    this.props.history.replace("/home")
  }
  renderRoute(){
    let {routes} = this.props;
    return (
      <Switch>
      {
        routes.map(item=>
          <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
        )
      }
    </Switch>
  )
  }
  render() {
    return (
      <div className="App">
          {this.renderRoute()}
          {/* <AppFooter/> */}
      </div>
    );
  }

}
App.defaultProps = {
  routes: [
    {id:1, path:"/home/detail", component:Detail, exact:false},
    {id:2, path:"/home/classifyspecial", component:ClassifySpecial, exact:false},
    { id: 3, path: "/home", component: Home, exact: false },
    { id: 4, path: "/discounts", component: Discounts, exact: false},
    { id: 5, path: "/find", component: Find, exact: false },
    { id: 6, path: "/equipment", component: Equipment, exact: false },
    { id: 7, path: "/more", component: More, exact: false},
    { id: 8, path: "/login", component: Login, exact: false},
    { id: 9, path: "/register", component: Register, exact: false},
  ]
}
export default withRouter(App);
