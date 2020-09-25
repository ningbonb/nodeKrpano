// Krpano 初始化
embedpano({
    xml: "tour.xml",
    target: 'pano', // 父元素 id
    html5: "only",
    basepath: '/vtour/', // 配置基础路径
    consolelog: true,
    initvars,
    onready() {
        console.log('ready');
    },
    onerror(e) {
        console.log(e);
    }
});

// 获取 Krpano 实例
const krpano = document.getElementById("krpanoSWFObject");

// javascript 调用 xml 中 action 方法
krpano.call("gotoscene(scene_name)");