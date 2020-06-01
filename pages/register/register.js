const app = getApp()
const api = app.globalData.api
const url = app.globalData.url
let that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: [{
        name: '密码登录'
      },
      {
        name: '验证码登录'
      }
    ],
    currTab: 0,
    btntext: '获取验证码',
    type: 'password',
    btnNum: '',
    phoneNumber: '',
    code: '',
    password: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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
  switch (e) {
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      currTab: e.currentTarget.dataset.index
    })
  },
  async verification() { // 点击获取验证码
    //这里是要调api接口的，我这里就假装已经调成功了，返回200了
    var _this = this
    if (_this.data.btntext == "获取验证码") {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
      if (_this.data.phoneNumber == '') {
        wx.showToast({
          title: '请输入手机号',
          icon: 'none',
          duration: 1500
        })
        return false;
      } else if (_this.data.phoneNumber.length != 11) {
        wx.showToast({
          title: '手机号长度有误',
          icon: 'none',
          duration: 1500
        })
        return false;
      } else if (!myreg.test(_this.data.phoneNumber)) {
        wx.showToast({
          title: '手机号有误',
          icon: 'none',
          duration: 1500
        })
        return false;
      } else {
        await that.getCode()
        var coden = 60 // 定义60秒的倒计时
        var codeV = setInterval(function () {
          _this.setData({ // _this这里的作用域不同了
            btnNum: '重新获取' + (--coden) + 's',
            btntext: ''
          })
          if (coden == -1) { // 清除setInterval倒计时，这里可以做很多操作，按钮变回原样等
            clearInterval(codeV)
            _this.setData({
              btnNum: '',
              btntext: '获取验证码'
            })
          }
        }, 1000) //  1000是1秒
      }
    }
  },
  getCode: async () => {
    await api.postData(url + 'sign/getMsgCode', {
        phoneNumber: that.data.phoneNumber + ''
      })
      .then((res) => {
        console.log(res)
        if (res.code != 200) {
          wx.showToast({
            title: res.message,
            icon: 'none',
            duration: 1500
          })
        }
      })
  },
 encryption() {
   api.getData(url+'user/RSATest?doType=0&testStr=' + that.data.password)
    .then((res) => {
      // console.log(res.data)
      that.setData({
        password: res.data
      })
      // console.log(that.data.password)
      that.register()
    })
  },
  change() {
    if (this.data.type == "text") {
      this.setData({
        type: 'password'
      })
    } else {
      this.setData({
        type: 'text'
      })
    }
  },
  phoneInput(e) {
    that.setData({
      phoneNumber: e.detail.value
    })
  },
  codeInput(e) {
    that.setData({
      code: e.detail.value
    })
  },
  passInput(e) {
    that.setData({
      password: e.detail.value
    })
  },
  register() {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.phoneNumber == '') {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (that.data.phoneNumber.length != 11) {
      wx.showToast({
        title: '手机号长度有误',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.phoneNumber)) {
      wx.showToast({
        title: '手机号有误',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else if (that.data.password == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1500
      })
    } else if (that.data.code == '') {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1500
      })
    } else {
      api.postData(url+'sign/register',{
        "msgCode": that.data.code,
        "password": that.data.password,
        "phoneNumber": that.data.phoneNumber,
        "registerType":'0',
        "userType": '0'
      })
      .then((res) => {
        console.log(res)
        if(res.code == 200) {
          wx.navigateBack({ changed: true });
        } else {
          wx.showToast({
            title: res.message,
            icon: 'none'
          })
        }
      })
    }
  }
})