import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import ico1 from "../../img/ai.png"
import ico2 from "../../img/jiaru.png"
import ico3 from "../../img/ping.png"
import ico4 from "../../img/zuozhe.png"
import ico5 from "../../img/fen.png"



let data = []


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      icons: [{
        "icon": ico1,
        "type": "喜欢"
      }, {
        "icon": ico2,
        "type": "加入句集"
      }, {
        "icon": ico3,
        "type": "评论"
      }, {
        "icon": ico4,
        "type": "北小城"
      }, {
        "icon": ico5,
        "type": "分享"
      }],
      arr: []
    }
  }
  config = {
    navigationBarTitleText: '我的句子'
  }
  handlePrev() {
    Taro.reLaunch({
      url: "/pages/addmine/index"
    })
  }
  componentWillMount() { }

  componentDidMount() {
    let obj = JSON.parse(this.$router.params.strData)
    data.push(obj)
    this.setState({
      arr: data
    }, () => {
      let aa=this.state.arr
      wx.setStorage({
        key: "key",
        data: aa
      })
      // let app=getApp();
      // app.globalData.arr=this.state.arr;
      // console.log(app.globalData.arr)
    })

  }
  handleDelta(txt,e){
    Taro.navigateTo({
      url:"/pages/detail/index?txt="+txt
    })
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { icons, arr } = this.state;
    return (
      <View className='index'>
        {/* 加入自己的句集 */}
        <View className='top_one'>
          <View>
            <Text className='iconfont icon-zuojiantou' onClick={this.handlePrev}></Text>
            <Text className='txt'>唯美句子</Text>
          </View>
          <View>
            <Text className='iconfont icon-sousuo'></Text>
            <Text className='iconfont icon-hao1'></Text>
          </View>
        </View>
        <View className='top'>
          <View className='top_onea'>关于‘唯美’的句子本页收率的唯
            美句子根据受欢迎的程度为您推荐</View>
        </View>
        {
          arr.map((item, i) => (
            <View className='section' key={i}>
              <View className='info_one' onClick={this.handleDelta.bind(this,item.content)}>
               <View className='fs'> 
                <Image className='imgs' src={item.img}></Image>
                </View>
                <View className='info_twoa'>
                  <Text> {item.content}</Text>
                  <Text className='infoa'>《{item.info}》</Text>
                </View>
                <View className='fs03'>
                  <Text className='autor'>{item.autor}</Text>
                  <Text className='time'>发布于15-03-30</Text>
              </View>

              </View>

            </View>

          ))
        }

      </View>
    )
  }
}
