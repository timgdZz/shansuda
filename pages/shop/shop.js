//index.js
// 使用 async await 
const app = getApp()
const api = app.globalData.api
const constants = require('../../utils/shop.js');
const url = app.globalData.url
// end
const RIGHT_BAR_HEIGHT = 50; // 右侧每一类的 bar 的高度（固定）
const RIGHT_ITEM_HEIGHT = [1405, 1336, 216, 814, 216, 216, 216, 216, 216, 240, 0]; // 右侧每个子类的高度（固定）
const LEFT_ITEM_HEIGHT = 45 // 左侧每个类的高度（固定）
Page({
  data: {
    constants: [], // 数据
    toView: null, // 左 => 右联动 右scroll-into-view 所需的id
    currentLeftSelect: null, // 当前左侧选择的
    eachRightItemToTop: [], // 右侧每类数据到顶部的距离（用来与 右 => 左 联动时监听右侧滚动到顶部的距离比较）
    leftToTop: 0
  },
  onLoad: function (options) {
    // let that = this
    // const query = wx.createSelectorQuery()
    // query.select('.box').boundingClientRect(function(rect) {
    //   console.log(rect)
    // }).exec()

    wx.getSystemInfo({
      success(res) {
        console.log(res.screenHeight)
        console.log(res.screenWidth)
        let phoneH = res.screenHeight / 667
        for (let a = 0; a < RIGHT_ITEM_HEIGHT.length; a++) {
          RIGHT_ITEM_HEIGHT[a] = Math.round(RIGHT_ITEM_HEIGHT[a] * phoneH)
        }
      }
    })
    console.log(RIGHT_ITEM_HEIGHT)
    this.setData({
      constants: constants,
      currentLeftSelect: constants[0].id,
      eachRightItemToTop: this.getEachRightItemToTop()
    })
  },
  onShow() {


  },
  async init() {
    await this.getCode()
  },
  getCode: async () => {
      await api.postData(url+ '',{phoneNumber: '13055541336'})
      .then((res) => {
        console.log(res)
      })
  },
  getEachRightItemToTop: function () { // 获取每个右侧的 bar 到顶部的距离，用来做后面的计算。
    var obj = {};
    var totop = 0;
    obj[constants[0].id] = totop // 右侧第一类肯定是到顶部的距离为 0
    for (let i = 1; i < (constants.length + 1); i++) { // 循环来计算每个子类到顶部的高度
      totop += RIGHT_ITEM_HEIGHT[i - 1]
      // console.log(totop)
      obj[constants[i] ? constants[i].id : 'last'] = totop // 这个的目的是 例如有两类，最后需要 0-1 1-2 2-3 的数据，所以需要一个不存在的 'last' 项，此项即为第一类加上第二类的高度。
      // console.log(constants[i-1].id)
    }
    return obj
  },
  rightScroll: function (e) { // 监听右侧的滚动事件与 eachRightItemToTop 的循环作对比 从而判断当前可视区域为第几类，从而渲染左侧的对应类。
    for (let i = 0; i < this.data.constants.length; i++) {
      let left = this.data.eachRightItemToTop[this.data.constants[i].id]
      let right = this.data.eachRightItemToTop[this.data.constants[i + 1] ? this.data.constants[i + 1].id : 'last']
      if (e.detail.scrollTop < right && (e.detail.scrollTop + 50 >= left)) {
        console.log(i)
        this.setData({
          currentLeftSelect: this.data.constants[i].id,
          leftToTop: LEFT_ITEM_HEIGHT * i
        })
      }
    }
  },
  jumpTo: function (e) {
    // 左侧类的点击事件，点击时，右侧会滚动到对应分类
    // if(e.target.id || e.target.dataset.id == this.data.currentLeftSelect) 
    this.setData({
      toView: e.target.id || e.target.dataset.id,
      currentLeftSelect: e.target.id || e.target.dataset.id
    })
  }
})