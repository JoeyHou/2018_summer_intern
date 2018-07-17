let preload = null;

// 将需要加载的images目录下的图片加入数组
//document ready
$(function(){
    if (preload != null) { preload.close(); }// If there is an open preload queue, close it.
    var manifest = [
        "loading.gif",
        "cover.png",
        "end.jpg",
        "jiantou.png",
        "tishi.png",
        "tuopin.png",
        "chares/pic/antian4/1.jpg",
        "chares/pic/antian4/2.jpg",
        "chares/pic/antian4/3.jpg",
        "chares/pic/antian4/4.jpg",
        "chares/pic/antian4/antian.png",
        "chares/pic/guilin2/1.jpg",
        "chares/pic/guilin2/2.jpg",
        "chares/pic/guilin2/guilin.png",
        "chares/pic/lintan3/1.jpg",
        "chares/pic/lintan3/2.jpg",
        "chares/pic/lintan3/lintan.png",
        "chares/pic/xinlou1/1.jpg",
        "chares/pic/xinlou1/2.jpg",
        "chares/pic/xinlou1/3.jpg",
        "chares/pic/xinlou1/4.jpg",
        "chares/pic/xinlou1/xinlou.png",
        "chares/001.jpg",
        "chares/002.jpg",
        // "chares/003.png",
        // "video_bg.jpg",
        // "weixinCover.jpg",

    ];
    // 创建一个下载实例
    preload = new createjs.LoadQueue(false, "./images/");

    // Use this instead to use tag loading
    preload.on("complete", handleComplete);//下载完成处理函数
    preload.on("fileload", handleFileLoad);//单个文件下载完成处理函数
    preload.on("progress", handleProgress);//下载过程处理函数
    preload.on("error", handleFileError);//下载出错处理函数
    preload.setMaxConnections(5);//最大下载线程
    preload.loadManifest(manifest);//开始下载

});

function handleComplete(event) {
    //去掉所有监听器
    preload.off("complete", handleComplete);
    preload.off("fileload", handleFileLoad);
    preload.off("progress", handleProgress);
    preload.off("error", handleFileError);

    //延迟0.5秒后loading消失，开始初始化
    $('#loadingContainer').delay(500).queue(function(next){
        $(this).hide();
    });

}

// File complete handler
function handleFileLoad(event) {}

// Overall progress handler
function handleProgress(event) {

    var pencent = parseInt(preload.progress * 100);
    $('.loadingText').html(`${pencent}%`)
}

// An error happened on a file
function handleFileError(event) {
    //alert("preload error");
}
