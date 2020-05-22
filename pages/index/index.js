//index.js
//获取应用实例
import API from "../../utils/api.js";
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    // 图标
    icon: [
      {path:'../../static/image/disinfect.png',title:"消毒杀菌",url:"../disinfect/disinfect"},
      {path:'../../static/image/phone.png',title:"手机维修",url:"../phone/phone"},
      {path:'../../static/image/nenny.png',title:"保姆",url:"../nenny/nenny"},
      {path:'../../static/image/cleaning.png',title:"保洁清洗",url:"../cleaning/cleaning"},
      {path:'../../static/image/Conduit.png',title:"管道疏通",url:"../Conduit/Conduit"},
      {path:'../../static/image/moving.png',title:"搬家服务",url:"../moving/moving"},
      {path:'../../static/image/plumber.png',title:"水电工",url:"../plumber/plumber"},
      {path:'../../static/image/hourlyWork.png',title:"钟点工",url:"../hourlyWork/hourlyWork"},
      {path:'../../static/image/laundry.png',title:"洗衣修鞋",url:"../laundry/laundry"},
      {path:'../../static/image/more.png',title:"更多",url:"../more/more"}
    ],
    // 服务
    tabarTitle: [
      {title:'服务',isAcitve: true},
      {title:'活动',isAcitve: false},
      {title:'口碑',isAcitve: false},
      {title:'品牌',isAcitve: false},
    ],
    // 服务索引
    currentTab: 0,
    // 热门服务
    hotText: [
      {text:'接送孩子',color:'#fffae2'},
      {text:'带孩子',color:'#fce9db'},
      {text:'临时小时工',color:'#e4f1fa'},
      {text:'陪护老人',color:'#daf1e1'},
      {text:'小型搬家',color:'#e2f3fb'},
      {text:'空调维修',color:'#eee6f5'},
      {text:'水管水龙头',color:'#fbf7d4'},
      {text:'油烟机清洗',color:'#feeaeb'},
      {text:'开荒保洁',color:'#eae4fe'},
      {text:'跑腿服务',color:'#e4f8dc'},
      {text:'月子中心',color:'#e0f9f6'},
      {text:'应聘家政',color:'#f8f3cd'}
    ],
    // 个人服务
    sevTitle: [
      {title:'个人服务',isAcitve: true},
      {title:'商家服务',isAcitve: false},
      {title:'附近服务',isAcitve: false},
    ],
    // 个人服务索引
    sevTab: 0,
    // 公告
    noticeList:[
      {content: '家政服务'},
      {content: '保洁打扫'},
      {content: '保姆'},
      {content: '求导购'},
    ]
  },
  //事件处理函数
  onLoad: function() {
    // console.group(API.getClickNum)
    // app.fetch(API.getClickNum,'post',{},(err,data) => {
    //   console.log(data)
    // })
  },
  tabbarActive(e) {
    var that = this
 
    var index = e.currentTarget.dataset.active
    if(index == that.data.currentTab) {
      return false
    } else {
      that.setData({
        currentTab: index
      })
      var tabarTitle = that.data.tabarTitle
      tabarTitle.forEach(function(item,index) {
        if( that.data.currentTab == index) {
          that.setData({
            ['tabarTitle['+ index + '].isAcitve']: true
          })
        } else {
          that.setData({
            ['tabarTitle['+ index + '].isAcitve']: false
          })
        }
      });
      
      
    }

  },
  sevActive(e) {
    var that = this
    var sevIndex = e.currentTarget.dataset.active
    if(sevIndex == that.data.sevTab) {
      return false
    } else {
      that.setData({
        sevTab: sevIndex
      })
      var sevTitle = that.data.sevTitle
      sevTitle.forEach(function(item,index) {
        if( that.data.sevTab == index ) {
          that.setData({
            ['sevTitle['+ index + '].isAcitve']: true
          })
        } else {
          that.setData({
            ['sevTitle['+ index + '].isAcitve']: false
          })
        }
      });
    }
  },
  stopTouchMove() {
    return false;
  }

})