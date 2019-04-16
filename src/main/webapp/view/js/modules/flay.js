//商品轮播图注册
function goodPics(){
    //轮播图注册
    carouselPicture('csa-carousel',
        ['view/img/img1.jpg','view/img/img2.jpg','view/img/img3.jpg','view/img/img4.jpg','view/img/img5.jpg']);
}

window.onload=function(){
    //defaultFuction();
    //goodPics();
}

//自己定义一个模块:flay
/**
 * 方法：layui.define([mods], callback)
 *
 * 通过该方法可定义一个 Layui模块。参数mods是可选的，用于声明该模块所依赖的模块。callback即为模块加载完毕的回调函数，
 * 它返回一个exports参数，用于输出该模块的接口。
 */
layui.define(function(exports){
    var obj={
        loadWay:function(){
            defaultFuction();
            goodPics();
        }
    }
    //输出接口
    //exports是一个函数，它接受两个参数，第一个参数为模块名，第二个参数为模块接口，当你声明了上述的一个模块后，你就可以在外部使用了，flay就会注册到layui对象下，即可通过 layui.flay() 去执行该模块的接口。
    //相当于将obj对象赋给了flay模块对象
    exports('flay',obj);
});