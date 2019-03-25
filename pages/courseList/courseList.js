//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    collected: true,
    courseList: [
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
    ],
    mycollectionList:[
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
    
  },
  onShow:function(){
    this.changeCourseList();
  },

  //设置课程列表字段
  changeCourseList(){
    var courseList = this.data.courseList;
    var mycollectionList = this.data.mycollectionList;
    for(var i=0;i<courseList.length;i++){
      var cId=courseList[i].id;
      for(var j=0;j<mycollectionList.length;j++){
        var myId=mycollectionList[j].id;
        if(cId==myId){
          courseList[i].collected=true;
        }
      }
    }
    this.setData({
      courseList:courseList
    })
  },
  changePic(e){
    var id = e.currentTarget.dataset.id;
    var courseList = this.data.courseList;
    for(var i=0;i<courseList.length;i++){
      var cId = courseList[i].id;
      //收藏
      if (id == cId && typeof (courseList[i].collected) == 'undefined' || id == cId && courseList[i].collected==false){
        courseList[i].collected=true;
        wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 2000
    })
      }
      //取消收藏
      else if (id == cId && courseList[i].collected == true) {
        courseList[i].collected = false;
        wx.showToast({
        title: '取消收藏',
        icon: 'success',
        duration: 2000
    })
      }
    }
    this.setData({
      courseList: courseList
    })

    
    
  },
  goCourseDetail(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../courseDetail/courseDetail?id=' + id + ''
    });
  }


})
