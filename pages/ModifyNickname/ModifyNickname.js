Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '呆呆111'
  },

  /**
   * 生命周期函数--监听页面加载
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
  save() {
    var that = this
    wx.showToast({
      icon: 'none',
      title: '保存成功',
      duration: 1000,
      success: function () {
        setTimeout(function () {
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2];
          console.log(prevPage)
          prevPage.setData({
            nickname: that.data.value
          })
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
      }
    })
  }
})