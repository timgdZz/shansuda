
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: 'iQOO',
        children: [
          {
            child_id: 1,
            name1: 'iQOO Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥2399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/99/10001399_1566458712423_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
        ]
      },
      {
        cate_id: 2,
        cate_name: ' NEX',
        children: [
          {
            child_id: 1,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
          {
            child_id: 2,
            name1: 'X30 Pro 5G版',
            name2: '海风青 超广角后置AI三摄',
            name3: '￥4399.00',
            image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png"
          },
        ]
      },
      {
        cate_id: 3,
        cate_name: 'X系列'
      },
      {
        cate_id: 4,
        cate_name: 'S系列'
      },
      {
        cate_id: 5,
        cate_name: 'Z系列'
      },
      {
        cate_id: 6,
        cate_name: 'U系列'
      },
      {
        cate_id: 7,
        cate_name: 'Y系列'
      },
      {
        cate_id: 8,
        cate_name: '充电'
      },
      {
        cate_id: 9,
        cate_name: '音乐'
      },
      {
        cate_id: 10,
        cate_name: '配件'
      },
      {
        cate_id: 11,
        cate_name: '智能'
      },
      {
        cate_id: 12,
        cate_name: '摄影'
      },
      {
        cate_id: 13,
        cate_name: '生活'
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  //左侧导航栏索引
  switchRightTab: function (e) {
    let id = e.target.dataset.id, index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
 
})