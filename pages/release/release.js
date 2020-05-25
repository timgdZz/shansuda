Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:[
      {name:'家政服务'},
      {name:'商务服务'},
      {name:'汽车服务'},
      {name:'装修建材'},
      {name:'教育培训'},
      {name:'婚庆摄影'},
      {name:'宠物服务'},
      {name:'批发采购'},
      {name:'丽人美容'}
    ],
    selectTab: 0 
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
    // console.log(1)
    // this.setData({
    //   selectTab: this.data.selectTab + 1
    // })
    // console.log(this.data.selectTab)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  selectTitle(e){
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.setData({
      selectTab: index
    })
    console.log(this.data.selectTab)
  }
})