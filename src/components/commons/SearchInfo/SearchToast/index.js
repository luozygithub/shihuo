import React,{Component} from "react"
import "./index.scss"
import { SearchBar } from 'antd-mobile';
class SearchToast extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
  }
  toggle(){
    this.props.toggle();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div className="subsearch">
      <SearchBar
        placeholder="搜索商品，品牌"
        // onSubmit={value => console.log(value, 'onSubmit')}
        // onClear={value => console.log(value, 'onClear')}
        // onFocus={() => console.log('onFocus')}
        // onBlur={() => console.log('onBlur')}
        onCancel={this.toggle}
        showCancelButton
        onChange={this.onChange}
      />
      <div className="bottom">
        <p>热门搜索</p>
        <div>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
          <span>AJ11</span>
        </div>
      </div>
    </div>);
  }
}

export default SearchToast