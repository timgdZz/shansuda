Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'',
    listMenu:[
      {image:'../../static/image/need2.png',text:'需求管理',url:'../need/need'},
      {image:'../../static/image/adress.png',text:'地址管理',url:'../adress/adress'},
      {image:'../../static/image/shang.png',text:'成为商户',url:'../merchant/merchant'},
      {image:'../../static/image/user.png',text:'用户协议',url:'../user/user'},
      {image:'../../static/image/clock.png',text:'隐私协议',url:'../lock/lock'},
      {image:'../../static/image/password.png',text:'修改密码',url:'../modify/modify'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phoneHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      height: phoneHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  goNext(e) {
    // console.log(e.currentTarget.dataset.url)
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
    })
  },
  goOrder() {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  goMoney() {
    wx.navigateTo({
      url: '../money/money',
    })
  },
  goColl() {
    wx.navigateTo({
      url: '../collec/collec',
    })
  },
  goMyInfo() {
    wx.navigateTo({
      url: '../myInfo/myInfo',
    })
  }
})