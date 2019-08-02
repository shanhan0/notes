import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '评论'
  }
  handleBtn() {
   this.props.handle({"name":11})
  }
  componentWillMount() { }

  componentDidMount() { 
    console.log(this.props.item)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        {/* <Text className='iconfont icon-cuowu'></Text>
        <Textarea auto-focus className='txt' /> */}
        <View>  hhdsfhhsdhfdhshhdfhds</View>
         <Button onClick={this.handleBtn}>评论22222</Button> 
      </View>
    )
  }
}
