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
        "chares/pic/10.png",
        "chares/pic/11.jpg",
        "chares/pic/12.jpg",
        "chares/pic/13.jpg",
        "chares/pic/14.jpg",
        "chares/pic/15.jpg",
        "chares/pic/20.png",
        "chares/pic/21.jpg",
        "chares/pic/22.jpg",
        "chares/pic/23.jpg",
        "chares/pic/24.jpg",
        "chares/pic/25.jpg",
        "chares/pic/26.jpg",
        "chares/pic/27.jpg",
        "chares/pic/28.jpg",
        "chares/pic/29.jpg",
        "chares/pic/30.png",
        "chares/pic/31.jpg",
        "chares/pic/32.jpg",
        "chares/pic/33.jpg",
        "chares/pic/34.jpg",
        "chares/pic/35.jpg",
        "chares/pic/36.jpg",
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
