var app = getApp()

Page({
    onAjaxClick:function () {
        wx.request({
            type:'get',
            url: 'https://api.app.rvcts.com/wx/mock/users',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
            }
        })
    }
})