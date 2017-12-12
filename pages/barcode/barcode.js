var app = getApp()
var barcode=""
var page = Page({
    data: {
        text: barcode
    },
    onScanBtnClick:function () {
        var that=this
        wx.scanCode({
            success: function (res) {
                console.log(res)
                barcode=res.result;

                that.setData({
                    text: barcode
                })
            }
        })
    }
})