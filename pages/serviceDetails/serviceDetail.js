const pickerArr = [
  '00:00-00:30',
  '00:30-01:00',
  '01:00-01:30',
  '01:30-02:00',
  '02:00-02:30',
  '02:30-03:00',
  '03:00-03:30',
  '03:30-04:00',
  '04:00-04:30',
  '04:30-05:00',
  '05:00-05:30',
  '05:30-06:00',
  '06:00-06:30',
  '06:30-07:00',
  '07:00-07:30',
  '07:30-08:00',
  '08:00-08:30',
  '08:30-09:00',
  '09:00-09:30',
  '09:30-10:00',
  '10:00-10:30',
  '10:30-11:00',
  '11:00-11:30',
  '11:30-12:00',
  '12:00-12:30',
  '12:30-13:00',
  '13:00-13:30',
  '13:30-14:00',
  '14:00-14:30',
  '14:30-15:00',
  '15:00-15:30',
  '15:30-16:00',
  '16:00-16:30',
  '16:30-17:00',
  '17:00-17:30',
  '17:30-18:00',
  '18:00-18:30',
  '18:30-19:00',
  '19:00-19:30',
  '19:30-20:00',
  '20:00-20:30',
  '20:30-21:00',
  '21:00-21:30',
  '21:30-22:00',
  '22:00-22:30',
  '22:30-23:00',
  '23:00-23:30',
  '23:30-00:00',
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    // 日期选择初始值
    value:[0,0],
    // 时间选择
    pickerNewArr: [],
    // 日期选择
    multiArray:[
      ["今天","明天","后天"],
      []
    ],
    // 选择完的时间
    pickerSelect:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 
    this.getTime()
    
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
  //
  getTime() {
    var that = this
    var timestamp = new Date()
    // 获取当前时间
    var newHour = timestamp.getHours();
    var item = 'multiArray['+1+']'
    // 拷贝数组
    for(var x = 0 ; x <pickerArr.length; x++) {
        that.data.pickerNewArr.push(pickerArr[x])
    }
    // 根据时间操作数组
    for(var a = 0 ; a < (newHour+1) * 2; a++ ) {
      that.data.pickerNewArr.splice(0,1)
    }
    that.data.pickerNewArr.unshift('尽快送达');
    that.setData({
      [item]:that.data.pickerNewArr
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  close() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show:isShow
    })

  },
  change() {},
  bindMuit(e) {
    // console.log(e.detail.value)
    // var selcetTime,hour;\
    // 根据选择输出选择日期和时间

    // 选择日期的value
    var selcetValue = e.detail.value[0]
    // 选择时间的value
    var selcetHour = e.detail.value[1]
    // 存储总日期时间的数组
    var allData = this.data.multiArray
    // 根据value找到的日期
    var selcetTime = allData[0][selcetValue]
    // 根据value找到的时间
    var hour = allData[1][selcetHour]
    // 设置日期和时间
    this.setData({
      pickerSelect: selcetTime + hour + ''
    })
    
  },
  bindScroll(e) {
    var that = this
    var selcet = e.detail
    // selcet.vaule 选择的value selcet.column 第几列
    if( selcet.value != 0 && selcet.column == 0 ) {
      var item1 = 'multiArray['+1+']'
      var setValue = 'value[' + 1 +']'
      // 不是第一列
      that.setData({
        [item1]: pickerArr,
      })
    } else if(selcet.value == 0 && selcet.column == 0) {
      // 第一列
      var item2 = 'multiArray['+1+']'
      that.setData({
        [item2]: that.data.pickerNewArr,
      })
    }
  }
})