Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    historyArr: [],
    test: [0, 1, 2]
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
    var that = this
    wx.getStorage({
      key: 'searchArr',
      success(res) {
        if (res.data != '' && res.data != null) {
          that.setData({
            historyArr: res.data
          })
        }
      },
      fail(err) {
        console.log(err.errMsg)
        if (err.errMsg == 'getStorage:fail data not found') {
          that.data.historyArr = []
        }
      }
    })
  },
  bindKeyInput(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },
  clear() {
    var that = this
    wx.removeStorage({
      key: 'historyArr',
      success(res) {
        that.setData({
          historyArr: []
        })
        wx.showToast({
          title: '清除成功',
          icon: 'none'
        })
      }
    })
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
  goDeatils() {
    wx.navigateTo({
      url: '../serviceDetails/serviceDetail',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  code() {
    if (this.data.searchValue != '') {
      var arr = this.data.historyArr
      if (arr[arr.length - 1] == this.data.searchValue) {
        console.log('daidai')
        wx.navigateTo({
          url: '../serviceDetails/serviceDetail',
        })
      } else {
        arr.unshift(this.data.searchValue)
        wx.setStorage({
          key: 'searchArr',
          data: arr
        })
        this.setData({
          historyArr: arr
        })
        wx.navigateTo({
          url: '../serviceDetails/serviceDetail',
        })
      }
    } else {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
    }

  },
  // code1() {
  //   var obj = {
  //     phoneNumber: '13055541336'
  //   }
  //   var url = 'https://www.api.huyussd.cn/ssd/sign/getMsgCode'
  //   console.log(obj.phoneNumber)
  //   wx.request({
  //     url: url,
  //     method: 'POST',
  //     data: obj,
  //     header: {
  //       'content-type': 'application/json',
  //     },
  //     success(res) {
  //       console.log(res.data.code)
  //       if(res.data.code !== 200) {
  //         wx.showToast({
  //           title: res.data.message,
  //           icon: 'none',
  //           duration: 2000
  //         })
  //       } else {
  //         wx.showToast({
  //           title: '发送成功',
  //         })
  //       }
  //     },
  //   })
  // }
})