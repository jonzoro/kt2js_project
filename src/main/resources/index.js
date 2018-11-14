window.onload=function(){
    getKt();
    getService();
}

// 将【模块名.完整包名.函数名】存在变量里避免调用时冗长
// 如果在Kotlin中没有包名的时候直接用【模块名.函数名】调用即可
var kt = kt2js_project.com.jonz.demo;
function getKt() {

    kt.demo();

    var txt = kt2js_project.str;
    kt.strDemo(txt);

    var arr = ["A","B","C"];
    kt.arrayDemo_kand9s$(arr);

    kt.jsCodeDemo();

    // 相当于调用构造函数，要先实例化一个类
    var clazz = new kt.classDemo();
    clazz.longTest();
}

// 使用不同的包名
var serviceKt = kt2js_project.com.jonz.service;
function getService() {
    serviceKt.service();
}

// 测试Ajax
function jqAjax() {
    $("#button").click(function(){
        var url = kt2js_project.randomAddr();
        var data = {};
        $.ajax({
            type: "POST",
            dataType: "json", //预期服务器返回的数据类型
            url: url,//url
            data: JSON.stringify(data),
            contentType:"application/json",  //预期发送给服务器的数据类型
            success: function (result) {
                debugger
                alert(result);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                debugger
                alert("error");
            }
        });
    });
}