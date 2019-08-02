import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import ico1 from "../../img/ai.png"
import ico2 from "../../img/jiaru.png"
import ico3 from "../../img/ping.png"
import ico4 from "../../img/zuozhe.png"
import ico5 from "../../img/fen.png"

let myUpload=[]

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
      ipt: '',
      textarea: '',
      usersName: ''

    }
  }
  config = {
    navigationBarTitleText: '创建新句集'
  }
  handleIpt(e) {
    this.setState({
      ipt: e.detail.value
    }, () => {
      // console.log(this.state.ipt)
    })
  }
  handleTxt(e) {
    this.setState({
      textarea: e.detail.value
    }, () => {
      // console.log(this.state.textarea)
    })

  }
  userInfoHandler(e) {//获取用户的信息
    this.setState({
      usersName: JSON.parse(e.detail.rawData).nickName
    }, () => {
      let obj = {
        info: this.state.ipt,//知乎还是《目送》
        content: this.state.textarea,//内容
        autor: this.state.usersName//发布者
      }
      myUpload.push(obj)
      Taro.reLaunch({
        url: "/pages/addmine/index?obj=" + JSON.stringify(obj)
      })
    })
  }
  handlePrev(){//返回
   Taro.reLaunch({
     url:"/pages/addmine/index"
   })
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        {/* 具体类型的页面 */}
        <View className='top_one'>
          <View>
            <Text className='iconfont icon-zuojiantou' onClick={this.handlePrev}></Text>
            <Text className='txt'>创建新句集</Text>
          </View>
          <View>
            <Text className='iconfont icon-sousuo'></Text>
            <Text className='iconfont icon-hao1'></Text>
          </View>
        </View>

        <View className='list'>
          <Input
            type="text"
            className='ipt'
            placeholder='句集的名称'
            value
            focus
            onInput={this.handleIpt} />
          <Textarea
            auto-focus
            className='textarea'
            placeholder='句集的描述：为这个加上简单的介绍'
            onInput={this.handleTxt}
            focus></Textarea>
          <View className='btn_one'>
            <Button
              className='btn'
              open-type="getUserInfo"
              onGetuserinfo={this.userInfoHandler}
            >发布</Button>
          </View>
        </View>
      </View>
    )
  }
}
