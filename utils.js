// minNum 求任意多数中的 最小值
function minNum() {
    var minNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i]
        }
    }
    return minNum;
}

// maxNum函数求任意多数中的最大值
function maxNum() {
    var maxNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i]
        }
    }
    return maxNum;
}

// 封装任意区间的随机数
function randomNum(min, max) {
    // 如果min > max的时候
    if (min > max) {
        return parseInt(Math.random() * (min - max + 1)) + max
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}

/* 
    bindEvent() 事件绑定的函数
    参数1：事件源（dom元素）
    参数2：事件类型（click,onmousedowm...）
    参数3：回调函数（需要传一个函数）
*/
function bindEvent(ele, type, callback) {
    if (ele.addEventListener) {
        ele.addEventListener(type, callback);
    } else {
        ele.attrachEvent('on' + type, callback)
    }
}

// 获取非内联样式样式
function getStyle(ele, attr) {
    var style;
    if (window.getComputedStyle) {
        // attr 是一个 字符串 对象[字符串]
        style = window.getComputedStyle(ele)[attr];
    } else {
        style = ele.currentStyle[attr];
    }
    return style;
}