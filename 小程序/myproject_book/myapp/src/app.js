import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }



class App extends Component {

  config = {
    pages: [
      'pages/index/index',      
      'pages/types/index',
      'pages/mine/index',
      "pages/addmine/index",
      'pages/detail/index',
      'pages/selfaddmine/index',
      'pages/tofile/index',
      'pages/loginahome/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
  
    tabBar: {
      position: 'bottom',
      color: "#333",
      selectedColor: "#1296db",
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: "./icons/sy.png",
          selectedIconPath: "./icons/sy1.png"
        },
        {
          pagePath: 'pages/selfaddmine/index',
          text: '我的句集',
          iconPath: "./icons/sc.png",
          selectedIconPath: "./icons/sc1.png"
        },
        {
          pagePath: 'pages/tofile/index',
          text: '我的上传',
          iconPath: "./icons/s.png",
          selectedIconPath: "./icons/s1.png"
        }
      ]
    }

  }
   
  // globalData(){
  //    return {arr:[]}
  // }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
