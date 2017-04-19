/**
 * Created by freya on 2017/4/19.
 */
//防抖动函数
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = tihs;
        var args = arguments;
        var later = function () {
            timeout = null;
            if(!immediate){
                func.apply(context,args);
            }
        };
        var callNow = immediate & !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow){
            func.apply(context.args)
        }
    }
}

var myEfficientFn = debounce(function () {
    //滚动中的真正的操作
},250);


//监听绑定
window.addEventListener('resize',myEfficientFn);

