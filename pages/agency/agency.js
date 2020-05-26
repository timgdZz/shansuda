Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../static/image/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  // regionchange(e) {
  //   console.log(e.type)
  // },
  // markertap(e) {
  //   console.log(e.detail.markerId)
  // },
  // controltap(e) {
  //   console.log(e)
  //   console.log(e.detail.controlId)
  // },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "地图1"
    })
    wx.getLocation({
      type: 'wgs84',
      success: (res)=> {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        this.setData({ latitude: latitude, longitude: longitude})
        // wx.showModal({
        //   title: '当前位置',
        //   content: '经度' + res.longitude+ '纬度'+res.latitude,
        // })
        this.setData({
          longitude:longitude,
          latitude:latitude
        })
      }
 
    })
  }
})