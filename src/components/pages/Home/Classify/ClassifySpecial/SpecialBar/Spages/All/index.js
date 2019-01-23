import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../../../modules/groups"
import { ListView } from 'antd-mobile';
import {NavLink} from "react-router-dom"
import qs from "qs"
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class All extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }
//   添加这条请求数据
  componentWillMount(){
        if(!this.props.all){
            this.props.getAll();
        }
    }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.all !== this.props.all) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.all),
      });
    }
  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let {all} = this.props
    if(!all) return ""
    let index = all.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = all.length - 1;
      }
      const obj = all[index--];
      return (
        <NavLink to={{
          pathname:"/home/detail",
          search:"?name=" + obj.title
        }} key={obj.img} className="all">
                        <div className="left">
                            <img  src={obj.img} alt=""/>
                        </div>
                        <div className="right">
                            <span className="title">{obj.title}</span>
                            <i className="txt">“{obj.intro}”</i>
                            <em className="price">
                                <strong className="red">
                                    {obj.merchant}
                                    <i>￥{obj.price}</i>
                                </strong>
                                <strong>
                                    看<i>{obj.hits}</i>
                                </strong>
                            </em>
                        </div>
                    </NavLink>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        // onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
export default GroupState(All,{
    reducer:"discover",
    states:["all"]
})