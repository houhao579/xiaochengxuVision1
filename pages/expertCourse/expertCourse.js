//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    "courseList": [
      {
        "id": 1,
        "clImgs": "../../images/defaultImg1.png",
        "clTxts": [{
          "courseName": "健康保障课程",
          "teacherName": "赵理想",
          "time": "近期推出"
        }]
      },
      {
        "id": 2,
        "clImgs": "../../images/defaultImg2.png",
        "clTxts": [{
          "courseName": "中医养生课程",
          "teacherName": "李某某",
          "time": "近期推出"
        }]
      },
      {
        "id": 3,
        "clImgs": "../../images/defaultImg3.png",
        "clTxts": [{
          "courseName": "食品安全课程",
          "teacherName": "徐某某",
          "time": "2019年5月2日"
        }]
      }
    ]
  },
  onLoad: function () {
    // wx.setNavigationBarTitle({
    //   title: '课程列表',
    // })
  },
  goCourseDetail(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../courseDetail/courseDetail?id=' + id + ''
    });
  }
})
