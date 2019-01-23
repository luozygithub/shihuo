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
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1822/44e9e12f311e9fa1fbdf83ec082e9723.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: '太平鸟 男装军绿色刺绣飞行夹克',
    des: '多功能袖袋 后背刺绣',
    price:"499"
  },
  {
    id:5,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzI3OTMyODcwNy9PMUNOMDFRVU1JTm0yRUJyMk44d0sxRl8hITI3OTMyODcwNy5qcGc?imageView2/0/w/600/h/600/interlace/1',
    title: 'viishow  拼接直筒裤   KC1212191',
    des: '不规则撞拼休闲裤，宽松舒适',
    price:"170"
  },
  {
    id:6,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1822/b47eed274f16a248d5470fefe4b6630e.png?imageView2/0/w/600/h/600/interlace/1',
    title: 'Casio/卡西欧 胶带指针经典学生手表',
    des: '轻巧大方 简约时尚',
    price:"129"
  },
  {
    id:7,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1900/daa94952a390eb58f2df6b8e92d0a98a.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Aape MA1飞行夹克',
    des: '迷彩印花连帽可拆卸',
    price:"2229"
  },
  {
    id:8,
    img: 'http://shihuo.hupucdn.com/def/20181220/9cbbdd160b22516b92731c077c1716e91545295415.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Nike Air Zoom Pegasus 34',
    des: '冰蓝配色，呼应夏季的搭配。',
    price:"258"
  },
  {
    id:9,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1901/dcbb1b84d8b0224f5138290ebef49869.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Nike Air Max Dia SE 粉紫',
    des: '简约利落外观，展现轻盈美学',
    price:"799"
  },
  {
    id:10,
    img: 'http://shihuo.hupucdn.com/def/20181228/b4e3227453f44999386a36f59f36986e1545976192.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Air Jordan 1',
    des: '“万物之源”，经典主场配色',
    price:"3429"
  }

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
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
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
