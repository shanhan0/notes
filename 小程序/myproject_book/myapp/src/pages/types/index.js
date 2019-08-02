import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import ico1 from "../../img/ai.png"
import ico2 from "../../img/jiaru.png"
import ico3 from "../../img/ping.png"
import ico4 from "../../img/zuozhe.png"
import ico5 from "../../img/fen.png"


import pt1 from "../../img/shoucang.png"
import pt2 from "../../img/v2catealb.png"
import pt3 from "../../img/v2catemei.png"
import pt4 from "../../img/v2catemin.png"
import pt5 from "../../img/v2catere.png"
import pt6 from "../../img/v2cateyan.png"

import commentCom from "../../components/commentCom/index"

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
      listData: [{
        "content": "任何没有计划的学习，都只是作秀而已，任何没有走心的努力，都只是假装很努力",
        "info": "知乎",
        "love": 300,
        "comment": 200,
        "autor": "梅殿涵西",
        "id": 0,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]
      }, {
        "content": "没有横空出世的好运气，所谓的好运气，不过是因为他们时刻准备着，那些苟且的，艰苦的时光不是他们没经历过，知识你不知道",
        "info": "李尚龙",
        "love": 300,
        "comment": 200,
        "autor": "吴为我唉",
        "id": 1,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]

      }, {
        "content": "世界上的人有太多的孤独，害怕踏出第一步",
        "info": "《绿皮书》",
        "love": 700,
        "comment": 100,
        "autor": "艾友媛",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]

      }, {
        "content": "属于你的人生之路就在眼前展开，只需要迈开步伐，完全不用浪费在效仿他人的这件事情上",
        "info": "《子不语》",
        "love": 700,
        "comment": 100,
        "autor": "房东的喵",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]

      }, {
        "content": "世界以痛吻我，要我报之以歌",
        "info": "————泰戈尔《飞鸟集》",
        "love": 700,
        "comment": 100,
        "autor": "原来是飞鸟",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]

      }, {
        "content": "幸运不肯招手，我要艰苦奋斗",
        "info": "————张国荣",
        "love": 700,
        "comment": 100,
        "autor": "原来是飞鸟",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]

      }, {
        "content": "尘世俗事，一醉皆可休。",
        "info": "————《三生三世十里桃花》",
        "love": 700,
        "comment": 100,
        "autor": "企鹅蛞四",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]
      }, {
        "content": "如果能避开猛烈的欢喜，定然不会有痛苦来袭。",
        "info": "————《人间失格》",
        "love": 700,
        "comment": 100,
        "autor": "企过嗯蛞四",
        "id": 2,
        "flag": false,
        "pinCon": [{
          "img": pt1,
          "autor": "一路有我I",
          "content": "不全是这样吧"
        }, {
          "img": pt2,
          "autor": "哎，不是我",
          "content": "没有计划的学习，是盲目的学习，根本没效率"
        }, {
          "img": pt3,
          "autor": "鬼怪哈哈，",
          "content": "学习是什么？？？"
        }]
      }],//每条诗句
      item: {},
      newArr: [],
      offset: 4,//页码
      content: "",//评论的内容
      usersName: ""//用户名字
      //  limit:4//每页显示条数

    }
  }
  config = {
    navigationBarTitleText: '诗句类型',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"

  }
  handlePre() {//返回上一个历史
    console.log(11)
    Taro.reLaunch({
      url: "/pages/index/index"
    })
  }
  handleInfo(index, id, e) {//点击icon做具体的操作
    //index代表操作的类型
    //id代表数组的哪一个操作
    e.preventDefault()
    e.stopPropagation()
    const that = this;
    if (index === 0) {
      //喜欢
      this.setState(prevState => {
        listData: prevState.listData[id].love++
      })
      return
    }
    if (index === 2) {
      //评论
      // this.setState(prevState => {
      //   listData: prevState.listData[id].comment++
      // })
      this.state.listData[id].flag = !this.state.listData[id].flag
      this.setState({
        listData: this.state.listData
      }, () => {
        console.log(this.state.listData)

      })
    }

    if (index === 3) {//进入作者主页
      // let autora=this.state.listData[id]["autor"]
      // console.log(autora)      // 
      let obj = JSON.stringify(this.state.listData[id])
      Taro.reLaunch({
        url: "/pages/loginahome/index?obj=" + obj
      })

    }
    if (index === 1) {//加入聚集
      let obj = JSON.stringify(this.state.listData[id])
      Taro.reLaunch({
        url: "/pages/addmine/index?obj=" + obj
      })
    }
    if (index === 4) {//分享
      this.setState({
        item: this.state.listData[id]
      })
      this.onShareAppMessage()
    }
  }
  // handleBtn(i,e) {//点击评论
  //   this.state.listData[i].pinCon.push({
  //     "img":pt2,
  //     "content":this.state.content,
  //     "autor":this.state.usersName
  //   })
  //   this.setState({
  //     listData:this.state.listData
  //   },()=>{

  //   })
  // }
  blurTxt(e) {//评论框失去焦点
    this.setState({
      content: e.detail.value
    })
    console.log(e.detail.value)
  }
  userInfoHandler(i,e) {//用户名
    console.log(e)
    this.setState({
      usersName: JSON.parse(e.detail.rawData).nickName
    }, () => {
      this.state.listData[i].pinCon.push({
        "img": pt2,
        "content": this.state.content,
        "autor": this.state.usersName
      })
      this.setState({
        listData: this.state.listData
      }, () => {

      })
    })
  }
  hidea(i,e){//隐藏评论
   this.state.listData[i].flag= !this.state.listData[i].flag
  this.setState({
    listData:this.state.listData
  })
  }
  onReachBottom() {//上拉加载
    // wx.startPullDownRefresh();
    // if (this.state.offset <= this.state.listData.length) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 300)


    this.setState({
      offset: this.state.offset + 2,
      newArr: this.state.listData.slice(0, this.state.offset)
    }, () => {
      console.log(this.state.offset)
    })
  }
  onPullDownRefresh() {//下拉刷新
    this.setState({
      offset: 4
    })
  }
  onPageScroll() {

  }
  // onShareAppMessage() {
  //   // if (res.from === 'button') { }
  //     return {
  //       title: '关于唯美的句子',
  //       path: '/pages/tofile/index',
  //       imageUrl: this.state.item.img,
  //       success: (res) => {
  //           console.log(res)

  //         // wx.showToast({
  //         //   title: "分享成功",
  //         //   icon: 'success',
  //         //   duration: 2000
  //         // })
  //       }

  //     }
  // }

  componentWillMount() { }

  componentDidMount() {
    this.setState({
      newArr: this.state.listData.slice(0, this.state.offset)
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { icons, listData, newArr } = this.state;
    return (
      <View className='index'>
        {/* 具体类型的页面 */}
        <View className='top_one'>
          <View className='topa'>
            <Text className='iconfont icon-zuojiantou' onClick={this.handlePre}></Text>
            <Text className='txt'>唯美句子</Text>
          </View>
          <View>
            <Text className='iconfont icon-sousuo'></Text>
            <Text className='iconfont icon-hao1'></Text>
          </View>
        </View>
        <View className='top'>
          <View>关于‘唯美’的句子</View>
          <Text>本页收率的唯美句子根据受欢迎的程度为您推荐</Text>
        </View>
        <View className='list'>
          <ScrollView
            scroll-y
          >
            {
              newArr.map((item, i) => {
                return <View className='list_one' key={i}>
                  <View className='info'>
                    <View>{item.content}</View>
                    <Text>{item.info}</Text>
                  </View>
                  <View className='fs01'>
                    <View onClick={this.handleInfo.bind(this, 0, i)}>
                      <Image src={ico1} className='move'></Image>
                      <Text className='love'>喜欢({item.love})</Text>
                    </View>
                    <View onClick={this.handleInfo.bind(this, 1, i)}>
                      <Image src={ico2}></Image>
                      <Text>加入句集</Text>
                    </View>
                    <View onClick={this.handleInfo.bind(this, 2, i)}>
                      <Image src={ico3}></Image>
                      <Text>评论({item.comment})</Text>
                    </View>
                    <View onClick={this.handleInfo.bind(this, 3, i)}>
                      <Image src={ico4}></Image>
                      <Text>{item.autor}</Text>
                    </View>
                    <View onClick={this.handleInfo.bind(this, 4, i)} className='sha'>
                      <Image src={ico5}></Image>
                      <Text>分享</Text>
                      {/* <Button open-type="share" className='share'>分享</Button>  */}
                    </View>
                  </View>

                  <View className={`textarea  ${item.flag ? 'show' : null}`} >
                    <Text className='iconfont icon-cuowu' onClick={this.hidea.bind(this,i)}></Text>
                    <Textarea auto-focus className='txt' auto-focus onBlur={this.blurTxt} placeholder-style='placeholderStyle' />
                    <View className='button'>
                      <Button
                        onGetuserinfo={this.userInfoHandler.bind(this,i)}
                        open-type="getUserInfo"
                        className='btn'>评论</Button>
                    </View>
                    <View className='box'>
                      {
                        item.pinCon.map((v) => (
                          <View className='box'>
                            <View className='box_info'>
                              <View className='ha'>
                                <Image src={pt1}></Image>
                                <View className='box_one'>
                                  <Text className='autora'>{v.autor}</Text>
                                  <Text>{v.content}</Text>
                                </View>
                              </View>
                              <View className='times'>2019-2-2</View>
                            </View>
                          </View>
                        ))
                      }
                      <Text className='iconfont icon-xiala on' onClick={this.hidea.bind(this,i)}></Text>
                    </View>


                    {/* 
                    <View className='textarea'>
                      <commentCom></commentCom>
                    </View> */}

                  </View>
                </View>
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
