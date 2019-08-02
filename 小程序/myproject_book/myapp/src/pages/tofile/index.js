import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css';
import img from "../../img/ban2.png";

let arr=[{
autor: "梅殿涵西",
comment: 200,
img:img,
content: "任何没有计划的学习，都只是作秀而已，任何没有走心的努力，都只是假装很努力",
flag: false,
id: 0,
info: "知乎",
love: 300}]
export default class Index extends Component {
constructor(){
  super(...arguments)
  this.state={
    newArr:[]
  }
}
  config = {
    navigationBarTitleText: '我的上传'
  }

  componentWillMount() { }

  componentDidMount() {
    let obj=JSON.parse(this.$router.params.objItem);
    arr.push(obj)
    this.setState({
     newArr:arr
   },()=>{
    console.log(this.state.newArr)

   })
    // wx.setStorage({
    //   key: "key",
    //   success: (res) => {
    //    console.log(res)
    //   }
    // })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='top'>我上传的优美句子</View>
        <View className='section'>
         {
           this.state.newArr.map((item,i)=>(
             <View key={i} className='info'>
               <Image src={item.img} className='img'></Image>
               <View className='fs01'>
                    <Text>{item.content}</Text>
                    <Text className='inlist'>{item.info}</Text>
               </View>
               <View className='fs02'>
                <Text className='autor'>{item.autor}</Text> 
                <Text className='time'>2019-10-6</Text>
               </View>

             </View>
           ))
         }
      </View>
      </View>
    )
  }
}
