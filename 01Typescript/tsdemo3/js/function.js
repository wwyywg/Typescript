"use strict";
// 3.1、函数的定义
//es5定义函数的方法
/*
 //函数声明法
     function run(){

         return 'run';
     }
 //匿名函数
     var run2=function(){

         return 'run2';
     }
*/
//ts中定义函数的方法
function getInfo(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
// alert(getInfo('zhangsan'));  /*正确*/
// alert(getInfo(123));  错误
// alert(getInfo('zhangsan',20));
// 3.6、箭头函数  es6  
//this指向的问题    箭头函数里面的this指向上下文
// setTimeout(function(){
//     alert('run')
// },1000)
setTimeout(function () {
    alert('run');
}, 1000);
