import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css';
import img from "../../img/006.jpg";
import img1 from "../../img/111.jpg";
import img2 from "../../img/112.jpg";
import img3 from "../../img/113.jpg";
import img4 from "../../img/ban.jpg";
import f from "../../img/f.jpg";


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      newArr: [],
      autor: ''
    }
  }
  config = {
    navigationBarTitleText: '作者主页'
  }
handlePrev(){
  Taro.reLaunch({
    url:"/pages/types/index"
  })
}
  componentWillMount() { }

  componentDidMount() {
    let obj = JSON.parse(this.$router.params.obj)
    this.setState({
      autor: obj.autor
    }, () => {
      console.log(this.state.autor)
    })


  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='box'>
          <View className='tit'>
              <Text className='iconfont icon-zuojiantou' onClick={this.handlePrev}></Text>
            我的基本资料</View>
          <View className='info'>
            <Image src={img} className='img'></Image>
            <View className='fs01'>
              <View>
                {/* <Text>哈哈哈</Text> */}
                 <Text>{this.state.autor}</Text> 
                <Text className='hui'>(编辑资料)</Text>
              </View>
              <View>
                <Text>北京</Text>
                <Text className='hei'>00后的金女座男生</Text>
              </View>
              <View className='hui ju'>回得了过去，回不了当初</View>
              <View className='fs02'>
                <View>
                  <Text>关注</Text>
                  <Text className='hei'>4</Text>
                </View>
                <View>
                  <Text>粉丝</Text>
                  <Text className='hei'>11</Text>
                </View>
              </View>

            </View>

          </View>
          <View className='section'>
            <Image src={f} className='imgss'></Image>
            <View className='list0'>
              <View>
                <Text>句子</Text>
                <Text className='hei'>7</Text>
              </View>
              <View>
                <Text>原创</Text>
                <Text className='hei'>0</Text>
              </View>
            </View>
             <View className='list1'>
              <View>
                <Text>句集</Text>
                <Text className='hui'>2</Text>
              </View>
              <View>
                <Text>评论</Text>
                <Text className='hui'>3</Text>
              </View>
            </View>

            <View className='im'>
              <Image src={img1}></Image>
              <Image src={img2}></Image>
              <Image src={img3}></Image>
            </View>

          </View>


        </View>



      </View>
    )
  }
}
