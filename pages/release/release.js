// const constants = require('../../utils/shop.js');
const RIGHT_ITEM_HEIGHT = 70
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rId:0,
    constants:{},
    title:[
      {name:'家政服务', id: '0'},
      {name:'商务服务', id: '1'},
      {name:'汽车服务', id: '2'},
      {name:'装修建材', id: '3'},
      {name:'教育培训', id: '4'},
      {name:'婚庆摄影', id: '5'},
      {name:'宠物服务', id: '6'},
      {name:'批发采购', id: '7'},
      {name:'丽人美容', id: '8'}
    ],
    selectTab: 0 ,
    rigId:'',
    rightText:[
      {title:"热门分类",hot:[
        {name:'保姆',id: '1'},
        {name:'搬家',id: '2'},
        {name:'保洁清洗',id: '3'},
        {name:'家电维修',id: '4'},
        {name:'租车',id: '5'},
        {name:'工商注册',id: '6'},
        {name:'房屋维修',id: '7'},
        {name:'管道疏通',id: '8'},
        {name:'家装服务',id: '9'},
      ]},
      {title:"热门分类1",hot:[
        {name:'保姆1',id: '10'},
        {name:'搬家1',id: '11'},
        {name:'保洁清洗1',id: '12'},
        {name:'家电维修1',id: '13'},
        {name:'租车1',id: '14'},
        {name:'工商注册1',id: '15'},
        {name:'房屋维修1',id: '16'},
        {name:'管道疏通1',id: '17'},
        {name:'家装服务1',id: '18'},
      ]},
      {title:"热门分类2",hot:[
        {name:'保姆2'},
        {name:'搬家2'},
        {name:'保洁清洗2'},
        {name:'家电维修2'},
        {name:'租车2'},
        {name:'工商注册2'},
        {name:'房屋维修2'},
        {name:'管道疏通2'},
        {name:'家装服务2'},
      ]},
      {title:"热门分类3",hot:[
        {name:'保姆3'},
        {name:'搬家3'},
        {name:'保洁清洗3'},
        {name:'家电维修3'},
        {name:'租车3'},
        {name:'工商注册3'},
      ]},
    
  ],
  rightHeight:[]
    
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var heightArr = []
    that.data.rightText.forEach(function(item,i) {
      console.log(item)
      heightArr[i] = item.hot.length * RIGHT_ITEM_HEIGHT / 3 
    })
    console.log(heightArr)
    console.log(this.data.selectTab, this.data.rId)
   
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
    let index = e.currentTarget.dataset.index
    var l_id = e.currentTarget.dataset.id;
    this.setData({
      selectTab: index,
      rId: l_id
    })
  },
  scroll: function(e) {
    // var that = this
    // var scrollTop = e.detail.scrollTop
    // // h = 0,
    // // classfiySelect;
    // console.log(scrollTop)
    // if( scrollTop >=210 ) {
    //   this.setData({
    //     selectTab: this.data.selectTab + 1,
    //     rId: this.data.rId + 1
    //   })
    // }
    
  }
})