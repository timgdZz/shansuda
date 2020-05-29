Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'',
    back:"",
    list:[
      {adress:'上海还好好',name:'daidai',phone:'1231231231231'},
      {adress:'上海还好好1',name:'daidai1',phone:'1231231231231'},
      {adress:'上海还好好2',name:'daidai2',phone:'1231231231231'},
      {adress:'上海还好好3',name:'daidai3',phone:'1231231231231'},
      {adress:'上海还好好4',name:'daidai4',phone:'1231231231231'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.isBack)
    if(options.isBack) {
      this.setData({
        back: 'back'
      })
    }
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
  goAdress(e) {
    if(this.data.back == 'back') {
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      console.log(prevPage)
      prevPage.setData({
        adress: e.currentTarget.dataset.item
      })
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.navigateTo({
        url: '../pickAdress/pickAdress',
      })
    }
    
  }
})