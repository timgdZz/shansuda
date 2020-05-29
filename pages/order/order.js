Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:[
      {text:'全部'},
      {text:'待支付'},
      {text:'待接单'},
      {text:'待服务'},
      {text:'待评价'},
    ],
    currTab:0,
    height:''
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
  orderChoose(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      currTab: index
    })
  }
})