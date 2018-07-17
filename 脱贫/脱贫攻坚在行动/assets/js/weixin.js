var weixin = {
    config: oe_wxconfig,
    init:function(){
        var userAgent = window.navigator.userAgent.toLowerCase();
        if(userAgent.match(/MicroMessenger/i) == 'micromessenger'){
            weixin.setConfig()
        }
    },
    getConfig:function(){
        return {
            title: "上帝想听摇滚了.....",
            desc: "南都轻新闻，时刻在现场",
            link: "http://nfdsb.oeeee.com/h5/plugins/news/chester/index.html",
            imgUrl: "http://nfdsb.oeeee.com/h5/plugins/news/chester/images/chares/icon.jpg",
            type: '',
            dataUrl: '',
            success: function () {},
            cancel: function () {}
        }
    },
    setConfig:function(){
        wx.config({
            debug: false,
            appId: weixin.config.appId,
            timestamp: weixin.config.timestamp,
            nonceStr: weixin.config.nonceStr,
            signature: weixin.config.signature,
            jsApiList: [
                'onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo'
            ]
        });
        weixin.ready()
    },
    ready:function(){
        wx.ready(function () {
            wx.onMenuShareAppMessage(weixin.getConfig());
            wx.onMenuShareTimeline(weixin.getConfig());
            wx.onMenuShareQQ(weixin.getConfig());
            wx.onMenuShareWeibo(weixin.getConfig());
        });
    }
}

weixin.init()
