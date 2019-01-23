import React from "react"
import { ListView } from 'antd-mobile';
import GroupState from "../../../../modules/groups"
import "./index.scss"
import {NavLink} from "react-router-dom"
const data = [
  {
    id:1,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/2222/1889afd849bccc01e24e87e7d0c1181b.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'adidas 男子针织圆领卫衣 DU1129  黑',
    des: '下单价269',
    price:"淘宝网"
  },
  {
    id:2,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/2222/341987be88e6594bc5b4c77982e52760.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Staple 满版花卉鸽子T恤',
    des: '优惠价268元',
    price:"天猫"
  },
  {
    id:3,
    img: 'http://shihuo.hupucdn.com/def/20181107/54850ba64cf88c0ab987768edee4dc3a1541561975.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Nike Air Force 1',
    des: '白色鞋面简洁百搭',
    price:"天猫"
  },
  {
    id:4,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1822/44e9e12f311e9fa1fbdf83ec082e9723.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: '太平鸟 男装军绿色刺绣飞行夹克',
    des: '多功能袖袋 后背刺绣',
    price:"淘宝网"
  },
  {
    id:5,
    img: 'http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzI3OTMyODcwNy9PMUNOMDFRVU1JTm0yRUJyMk44d0sxRl8hITI3OTMyODcwNy5qcGc?imageView2/0/w/600/h/600/interlace/1',
    title: 'viishow  拼接直筒裤   KC1212191',
    des: '不规则撞拼休闲裤，宽松舒适',
    price:"京东商城"
  },
  {
    id:6,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1822/b47eed274f16a248d5470fefe4b6630e.png?imageView2/0/w/600/h/600/interlace/1',
    title: 'Casio/卡西欧 胶带指针经典学生手表',
    des: '轻巧大方 简约时尚',
    price:"京东商城"
  },
  {
    id:7,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/1900/daa94952a390eb58f2df6b8e92d0a98a.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Aape MA1飞行夹克',
    des: '迷彩印花连帽可拆卸',
    price:"京东商城"
  },
  {
    id:8,
    img: 'http://shihuo.hupucdn.com/def/20181220/9cbbdd160b22516b92731c077c1716e91545295415.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'Nike Air Zoom Pegasus 34',
    des: '冰蓝配色，呼应夏季的搭配。',
    price:"淘宝网"
  },
  {
    id:9,
    img: 'http://shihuo.hupucdn.com/news/crawler/7f0c07fd105816.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: '罗技 G613 键盘',
    des: '特价469下单立抢',
    price:"淘宝网"
  },
  {
    id:10,
    img: 'http://shihuo.hupucdn.com/newsIndex11/201901/2222/f6d596447feebeb7862f6b504cad1fda.jpg?imageView2/0/w/600/h/600/interlace/1',
    title: 'iPhone 8',
    des: '特价3998下单立抢',
    price:"淘宝网"
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
  componentWillMount(){
    // setTimeout(()=>{
    //   this.props.update_list(()=>{
    //     console.log(this.props)
    //     //xiugaishuju
    //     let {youhuilist} = this.props;
    //     if(youhuilist){
    //       data.push({
    //         id:youhuilist.id,
    //         img:youhuilist.img,
    //         title:youhuilist.title,
    //         des:youhuilist.subtitle,
    //         price:""
    //       })
    //     }
    //   })
    // },200)
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
            <NavLink to={{
                  pathname:"/home/detail",
                  search:"?name="+'Nike LeBron 15'
              }}  className="zone0">
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
              <div id="price" >{obj.price}</div>

            </div>
          </div>
          </NavLink>
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
export default GroupState(Activity,{
  reducer:"discounts",
  states:["youhuilist"]
});
