Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
  usernameinput:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login:function(e){
    if(this.data.username.length == 0 || this.data.password.length == 0){
      wx.showToast({
        title: '不能为空',
        duration:1000
      })
    }else{
      if(this.data.username == "ft" && this.data.password == "123"){
        wx.showToast({
          title: '登陆成功',
          icon:"success",
          duration:1000
        })
        wx.navigateTo({
          url: '../hello/hello',
        })
      }else{
        wx.showToast({
          title: '不正确',
          duration:1000
        })
      }
    }
  }
})