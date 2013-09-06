(function(){
    console.log('in main.js');
    var d = document;
    var c = {
        // 1 有各种各样的Cocos2D配置，如激活框架调试功能，是否引用库文件(Box2D库)等等。
        menuType:'canvas',
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:true,
        tag:'gameCanvas',

        //2这里是你应该指定源文件的目录及文件名
        engineDir:'./Platform/HTML5/cocos2d',
        appFiles:[
            './Src/resource.js',
            './Src/MainLayer.js',
            './Src/main.js'
        ]
    };

    // 3 这仅仅是一些Cocos2D框架运行的入口模板
    window.assEventListener('DOMContentLoaded',function(){
        var s = d.createElement('script');

        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        } else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'platform/jsloader.js';
        } else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
    });
});