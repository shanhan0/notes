import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import ico1 from "../../img/ai.png"
import ico2 from "../../img/jiaru.png"
import ico3 from "../../img/ping.png"
import ico4 from "../../img/zuozhe.png"
import ico5 from "../../img/fen.png"

//  let app=getApp();
// app.globalData.talkArr=[]
import img1 from "../../img/7.jpg";
import img2 from "../../img/8.jpg";
import img3 from "../../img/9.jpg";


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
      imgs:[img1,img2,img3],
      choseimg: '',
      objItem: {},
      index:0,
      flag:false
    }
  }
  config = {
    navigationBarTitleText: '加入我的句子集'
  }
  handleImg() {//选择图片
    const that = this;
    wx.chooseImage({
      size: 1,
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        that.setState({
          choseimg: tempFilePaths[0]
        }, () => {
          that.state.objItem.img = that.state.choseimg
          this.setState({
            objItem: that.state.objItem
          })
        })
      }
    })
  }
  handlePre() {//返回
    Taro.reLaunch({
      url: "/pages/types/index"
    })
  }
  handletalk(e) {//加入句子集合
    e.preventDefault();
    let strData = this.state.objItem.img && this.state.objItem.img ? JSON.stringify(this.state.objItem) : {}

    Taro.reLaunch({
      url: "/pages/selfaddmine/index?strData=" + strData
    })
  }
  handleJoin(e) {//我要上传
    Taro.reLaunch({
      url: "/pages/mine/index"
    })
  }
  handleMy(e) {//我的上传
    Taro.reLaunch({
      url: "/pages/tofile/index?objItem=" + JSON.stringify(this.state.objItem)
    })
    console.log(this.state.objItem)

  }
  componentWillMount() { }

  componentDidMount() {
    let objItem = JSON.parse(this.$router.params.obj)//点击的词句
    this.setState({
      objItem: objItem
    }, () => {
      console.log(this.state.objItem)
    })

    //获取传的新建句子参数
    let obj = JSON.parse(this.$router.params.obj)//点击的词句
    console.log(obj)

  }
  clicka(img,ind, e) {
    console.log(img)
    this.setState({
       choseimg: img,
       index:ind,
       flag:!this.state.flag
    },()=>{
      console.log( this.state.choseimg)
    })
  }
  close(){
    this.setState({
      flag:!this.state.flag
    })
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { icons, choseimg, objItem , imgs} = this.state;
    return (
      <View className='index'>
        {/* 加入自己的句集 */}
        <View className='top_one'>
          <View>
            <Text className='iconfont icon-zuojiantou' onClick={this.handlePre}></Text>
            <Text className='txt'>唯美句子</Text>
          </View>
          <View>
            <Text className='iconfont icon-sousuo'></Text>
            <Text className='iconfont icon-hao1'></Text>
          </View>
        </View>
        <View className='top'>
          <View className='list_con'>关于‘唯美’的句子本页收率的唯
            美句子根据受欢迎的程度为您推荐</View>
          <View>{objItem.content}</View>
        </View>
        <View className='section'>
          <View className='info_one'>
            <Text className='autor'>{objItem.autor}</Text>
            <Text>发布于15-03-30</Text>
          </View>
          <View className='imgs'>
            <View>
              <Image src={ico1}></Image>
              <Text onClick={this.handleImg.bind(this)}>喜欢的图</Text>
            </View>
            <View onClick={this.handletalk.bind(this)}>
              <Image src={ico2}></Image>
              <Text>加入句集</Text>
            </View>
            <View onClick={this.handleJoin.bind(this)}>
              <Image src={ico2}></Image>
              <Text>我要上传</Text>
            </View>
            <View onClick={this.handleMy.bind(this)}>
              <Image src={ico2}></Image>
              <Text>加入到我的上传</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>我选择的图片是 </Text>
          <View className='iminfo'>
            {
               imgs.map((item,i)=>(
               <Image  key={i} src={item} className={i===this.state.index?'on':null} onClick={this.clicka.bind(this, item,i)}></Image>

               ))
            }
          </View>
        { this.state.flag? (<View className='mask'>
            <View className='hh' onClick={this.close}>
               <Image src={choseimg} ></Image> 
             <Text className='close' onClick={this.close}>X</Text> 
            </View>
          </View>):null
          }
         
          
        </View>
      </View>
    )
  }
}
