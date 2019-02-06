import React from "react"
import { ListView } from 'antd-mobile';

const data = [
  {
    id:1,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1822/f25550cdb3a95ce903c7555c251fbaf2.png?imageView2/0/w/600/h/600/interlace/1',
    title: '优衣库 V领吸水T恤(九分袖)',
    des: '深V领九分袖保温T恤',
    price:"99"
  },
  {
    id:2,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzExMjM3NzUwODAvTzFDTjAxM1V4bUZ3MW5PZ1ZVcFR0ZERfISExMTIzNzc1MDgwLmpwZw?imageView2/0/w/600/h/600/interlace/1',
    title: '七号宇宙 双标立体束脚裤',
    des: '哈伦束脚裤，双标立体剪裁',
    price:"138"
  },
  {
    id:3,
    img: 'http://shihuo.hupucdn.com/def/20181107/54850ba64cf88c0ab987768edee4dc3a1541561975.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Nike Air Force 1',
    des: '白色鞋面简洁百搭',
    price:"689"
  },
  {
    id:4,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzQ1MDM0Mzk4Ni9PMUNOMDExZkpkQmRFM0U3cnlHVHZfISE0NTAzNDM5ODYuanBn?imageView2/0/w/300/h/300/interlace/1',
    title: 'Roaringwild 卡其斜纹灯芯绒锥形长裤 011820614-04',
    des: '轻薄灯芯绒面料极具质感',
    price:"588"
  },
  {
    id:5,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE5MDEvMjkxNC81ZWE1ODYzMzJjOGFjY2IxMjZmYWI5ZGQ3OTE1ZWJiOC5wbmc?imageView2/0/w/300/h/300/interlace/1',
    title: '暴龙 金属板材光学镜 BJ6031',
    des: '线条经典撞色,可调节鼻托，双层防滑',
    price:"538"
  },
  {
    id:6,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzY3MDQzOTc2My9PMUNOMDFCRWlTODQyTHpWR2JUMnFZMl8hITY3MDQzOTc2My5qcGc?imageView2/0/w/300/h/300/interlace/1',
    title: 'NOTHOMME 中长款连帽拼接工装厚棉衣 18M013',
    des: '棉服配备户外立体贴袋',
    price:"398"
  },
  {
    id:7,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzE2MDExNDUyNzUvVEIyMzRiWUU0R1lCdU5qeTBGblhYWDVscFhhLTE2MDExNDUyNzUuanBn?imageView2/0/w/300/h/300/interlace/1',
    title: 'A21 套头连帽字母卫衣 4831310008',
    des: '纯色基础款，把大男孩的气质展现出来',
    price:"149"
  },
  {
    id:8,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzE2OTUzMDA5MjcvVEIySS5yR1huSWx5S0pqU1pGTVhYWHZWWFhhLTE2OTUzMDA5MjcuanBn?imageView2/0/w/300/h/300/interlace/1',
    title: 'lacoste 棉质长袖毛衫 AH7901K2',
    des: '颈部加厚保暖处理，优惠价903元',
    price:"903"
  },
  {
    id:9,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE5MDEvMjkxMy9kZTNlZDFjNzJiNjBlYTg4Mjk4MDg5ZTZkZmQwMzRmNC5wbmc?imageView2/0/w/300/h/300/interlace/1',
    title: 'Casio/卡西欧 BABY-G防水女士手表 : BGA-190-9BPR',
    des: '糖果配色，彰显你的少女心',
    price:"1299"
  },
  {
    id:10,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzE2OTUzMDA5MjcvVEIyU19JQnBWWFhYWGFzWEZYWFhYWFhYWFhYXyEhMTY5NTMwMDkyNy5qcGc?imageView2/0/w/300/h/300/interlace/1',
    title: 'lacoste 短袖POLO衫 PH4979J1',
    des: '“蓝灰翻领修身衬衫，优惠价834元',
    price:"834"
  }
//   {                                          
//     id:8,
//     img: '',
//     title: 'Casio/卡西欧 胶带指针经典学生手表',
//     des: '轻巧大方 简约时尚',
//     price:"129"
//   }
];
const NUM_ROWS = 10;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Activity extends React.Component {
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
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
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
          height: 9,
          borderTop: '1px solid #e6e6e6',
          borderBottom: '1px solid #e6e6e6',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
                fontSize: 14,
                color:" #333",
                fontWeight: 400,
                maxHeight:" 1.12rem",
                overflow: "hidden",
                wordBreak: "breakAll",
                lineHeight: ".56rem",
                marginLeft:"2.5rem",
                marginTop:'40px'
            }}
          >{obj.title}</div>
          <div style={{display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '2.13rem',width:"2.13rem", marginRight: '15px',marginTop:'-42px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div style={{color:'red'}}><span style={{ fontSize: '30px', color: 'orange' }}>¥</span>{obj.price}</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
export default Activity;
