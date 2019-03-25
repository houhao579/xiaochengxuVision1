// pages/expertList/expertList.js
Page({
  data: {
    collected: false,
    expertList:[
      {
        "id": 1,
        "nickPic": "../../images/touxiang1.png",
        "expertName":"于魁智",
        "courseName": "浅谈京剧",
        "courseTxt": "京剧是小众艺术。现在我们要让它走向大众化。",
        "coursePic": "../../images/pic1.png",
        "startTime": "2019-3-25" 
      },
      {
        "id": 2,
        "nickPic": "",
        "expertName": "李教授",
        "courseName": "健康保障课堂",
        "courseTxt": "针对健康生活热点话题的知识服务体系",
        "coursePic": "",
        "startTime": "将于4月中旬播出"
      },
      {
        "id": 3,
        "nickPic": "",
        "expertName": "李教授",
        "courseName": "健康保障课堂",
        "courseTxt": "针对健康生活热点话题的知识服务体系",
        "coursePic": "",
        "startTime": "2019-3-25"
      },
      {
        "id": 4,
        "nickPic": "",
        "expertName": "李教授",
        "courseName": "健康保障课堂",
        "courseTxt": "针对健康生活热点话题的知识服务体系",
        "coursePic": "",
        "startTime": "2019-3-25"
      },
      {
        "id": 5,
        "nickPic": "",
        "expertName": "李教授",
        "courseName": "健康保障课堂",
        "courseTxt": "针对健康生活热点话题的知识服务体系",
        "coursePic": "",
        "startTime": "2019-3-25"
      },
      {
        "id": 6,
        "nickPic": "",
        "expertName": "李教授",
        "courseName": "健康保障课堂",
        "courseTxt": "针对健康生活热点话题的知识服务体系",
        "coursePic": "",
        "startTime": "2019-3-25"
      },
    ]
  },
  onShow: function () {
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
  },
  goExpertCourse(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../expertCourse/expertCourse?id='+id
    });
  },
  changePic(e) {
    this.setData({
      collected: true
    })
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })
  }

})

  