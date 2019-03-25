//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    "courseList": [
      {
        "id": 1,
        "elImgs": "../../images/defaultImg1.png",
        "elTxts": [{
          "teacherName": "赵理想",
          "courseName": "健康保障课程",
          "time": "近期推出"
        }]
      },
      {
        "id": 2,
        "elImgs": "../../images/defaultImg2.png",
        "elTxts": [{
          "teacherName": "赵理想",
          "courseName": "中医养生课程",
          "time": "近期推出"
        }]
      },
      {
        "id": 3,
        "elImgs": "../../images/defaultImg3.png",
        "elTxts": [{
          "teacherName": "赵理想",
          "courseName": "食品安全课程",
          "time": "2019年5月2日"
        }]
      }
    ]
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '专家列表',
    })
  },
  goExpertDetail(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../expertDetail/expertDetail?id='+id+''
    });
  }
})
