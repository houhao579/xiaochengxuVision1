//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var self=this;

    // 登录
    wx.login({
      success: ress => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 获取用户信息
        wx.getSetting({
          success: res => {
            console.log(res)
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  self.globalData.userInfo = res.userInfo
                  console.log(res)
                  wx.request({
                    url:'https://api.hbwlife.com/v1/wx/checkIn.json',
                    method:'post',
                    data:{
                      iv:res.iv,
                      userCode: ress.code,
                      encryptedData: res.encryptedData
                    },
                    success:function(data){
                      console.log(data)
                      self.globalData.userInfo.openId = data.data.openId
                      wx.setStorageSync('openId', data.data.openId)
                    },
                  })
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (self.userInfoReadyCallback) {
                    self.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})