Page({
  /**
   * 页面的初始数据
   */
  data: {
    region:'',
    address:'',
    height:'',
    houseNumber:'',
    phone:'',
    username:'',
    isCheck: true,
  },

  /**
   * 生命周期函数--监听页面加载console.log(options.back)
   */
  onLoad: function (options) {
    
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
  confirm() {
    var that = this
    wx.getLocation({//
      type:'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        wx.chooseLocation({
          success:function(res) {
            that.setData({
              address: res.address
            })
          }
        })
      }
    })
  },
  selcetRegion(e) {
    var region = '';
    e.detail.value.forEach(function(item,i) {
      if(i == 0) {
        region += item 
      } else {
        region += '-' +  item 
      }
    })
    this.setData({
      region: region
    })
    console.log(this.data.region)
  },
  bindKeyInput(e) {
    this.setData({
      houseNumber:e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
     phone:e.detail.value
    })
  },
  bindName(e){
    this.setData({
      username:e.detail.value
     })
  },
  checked(e) {
    this.setData({
      isCheck: e.detail.value
    })
  },
  save() {
    console.log('确定')
  }
})