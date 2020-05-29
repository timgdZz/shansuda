Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:[
      {name:'密码登录'},
      {name:'验证码登录'}
    ],
    currTab: 0,
    btntext:'获取验证码',
    type:'password'

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
  switch(e) {
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      currTab: e.currentTarget.dataset.index
    })
  },
  verification() { // 点击获取验证码
    //这里是要调api接口的，我这里就假装已经调成功了，返回200了
    var _this = this
    if (this.data.btntext == "获取验证码") {
      var coden = 60 // 定义60秒的倒计时
      var codeV = setInterval(function () {
        _this.setData({ // _this这里的作用域不同了
          btntext: '重新获取' + (--coden) + 's'
        })
        if (coden == -1) { // 清除setInterval倒计时，这里可以做很多操作，按钮变回原样等
          clearInterval(codeV)
          _this.setData({
            btntext: '获取验证码'
          })
        }
      }, 1000) //  1000是1秒
    }
  },
  register() {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  change() {
    if(this.data.type == "text") {
      this.setData({
        type: 'password'
      })
    } else {
      this.setData({
        type: 'text'
      })
    }
  }
})