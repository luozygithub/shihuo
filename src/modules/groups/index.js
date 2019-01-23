import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "./actionCreators"
//GroupState(Banner,{
//   reducer: "home",
//   states:["banners"]
// });
const GroupState = (UIcomponent, options) =>{
    return connect(state=>{
        if(!options) return state;//所有数据
        let {states} = options;
        if(!states) return state[options.reducer];
        let _state={}
        states.forEach(s=>{
            _state[s] = state[options.reducer][s]; //把 对应reducer下的 数据拿出来

        })
        return _state;
    },dispatch=>{
        if(!options || !options.reducer){
            let actions = {}
            for(var key in actionCreators){
                actions = {...actionCreators[key]};
            }
            return bindActionCreators(actions,dispatch)
        }
        return bindActionCreators(actionCreators[options.reducer],dispatch)
    })(UIcomponent)
}
export default  GroupState;