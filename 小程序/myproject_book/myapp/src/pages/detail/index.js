import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import ico1 from "../../img/banner.jpg"

export default class Index extends Component {
  constructor(){
    super(...arguments)
    this.state={
      txt:''
    }
  }
  config = {
    navigationBarTitleText: '句子详情'
  }

  componentWillMount () { }

  componentDidMount () { 
    this.setState({
      txt:this.$router.params.txt
    })
    console.log(this.$router.params.txt)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* 点击谋句进入详情页 */}
        <View className='ban'>
           <Image src={ico1}></Image>
           <View>{this.state.txt}</View>
        </View>
      </View>
    )
  }
}
