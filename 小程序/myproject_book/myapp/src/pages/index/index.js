import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import img from "../../img/ban2.png";
import img1 from "../../img/7.jpg";
import img2 from "../../img/8.jpg";
import img3 from "../../img/9.jpg";

import pt1 from "../../img/shoucang.png"
import pt2 from "../../img/v2catealb.png"
import pt3 from "../../img/v2catemei.png"
import pt4 from "../../img/v2catemin.png"
import pt5 from "../../img/v2catere.png"
import pt6 from "../../img/v2cateyan.png"


import pht1 from "../../img/v2catej1.jpg"
import pht2 from "../../img/v2catej3.jpg"
import pht3 from "../../img/v2catej4.jpg"
import pht4 from "../../img/v2catej5.jpg"


import Comm from "../../components/commentCom/index"


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      data: [img, img1, img2, img3],
      typeData: [{
        "img": pt1,
        "text": "经典语录"
      }, {
        "img": pt2,
        "text": "名人名言"
      }, {
        "img": pt3,
        "text": "热门名人"
      }, {
        "img": pt4,
        "text": "原创句子"
      }, {
        "img": pt5,
        "text": "精选句子"
      }, {
        "img": pt6,
        "text": "美图美句"
      }],
      imgData: [pht1, pht2, pht3, pht4],
      top: 0,
      flag: false
    }
  }
  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
    // usingComponents: {
    //      Comm: "../../components/commentCom/index"
    // }
  }
  handleClick() {//点击句子类型，跳转对应句集

    Taro.reLaunch({//跳转到这类型的页面
      url: "/pages/types/index"
    })

  }
  componentWillMount() { }

  componentDidMount() {
    const that = this;
    //获取元素的高度
    const query = wx.createSelectorQuery();
    console.log(query)
    query.select('.top').boundingClientRect()
    query.exec(function (res) {
      //res就是 所有标签为scrollview的元素的信息 的数组
      //取高度
      that.setState({
        top: res[0].height //元素距离顶部的高度
      })
    })
    // console.log(Comm)

  }
  onPageScroll(e) {
    if (this.state.top < e.scrollTop) {
      this.setState({
        flag: !this.state.flag
      })
    }
    console.log(e.scrollTop)
  }
  aa(e){
    console.log(e)
  }


  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { data, typeData, imgData } = this.state;
    return (
      <View className='index'>
        {/* handle是子组件传给父组件的
        item是父组件传给子组件的 */}
      < Comm item="111" handle={this.aa}></Comm>

        <View className={`top ${this.state.flag ? 'fix' : null}`}>
          <View className='info_top'>
            <Text className='iconfont icon-sousuo'></Text>
            <Input type="text" />
          </View>
        </View>
        <View className='swiper'>
          <Swiper
            className='list'
            circular
            autoplay
            indicator-dots
          >
            {
              data.map((item, i) => (
                <SwiperItem key={i} className='info'>
                  <Image src={item}></Image>
                </SwiperItem>
              ))
            }
          </Swiper>
        </View>
        <View class='info_type'>
          句子类型
        </View>
        <View className='fs01'>
          {
            typeData.map((v, index) => (
              <View className='fs01_one' key={index} onClick={this.handleClick}>
                <Image src={v.img}></Image>
                <Text>{v.text}</Text>
              </View>
            ))
          }
        </View>
        <View class='imgs'>
          <View>精选</View>
        </View>
        <View className='img_type'>
          {
            imgData.map((v, i) => (
              <View key={i} className='img_list'>
                <Image src={v}></Image>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
