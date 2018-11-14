// Kotlin中包名和路径名没有关系
package com.jonz.demo

// 直接声明顶层函数就行
// external 修饰符，对编译器起作用
// dynamic 参考教程里的动态类型
external fun require(module: String) : dynamic

// 如果存在main函数的话js运行时会默认调用
fun main(args: Array<String>) {
    val message = "Hello JavaScript!"
    println(message)
}

fun demo() {
    println("demo")
}

// 可能存在重载函数导致命名重复，所以需要加上注解来命名，
// 默认的生成规则会在后面加上一些乱码作为后缀
@JsName("strDemo")
fun strDemo(str: String) {
    println(str)
}

fun arrayDemo(args: Array<String>) {
    println(args)
}

// Kotlin中直接使用js代码
fun jsCodeDemo() {
    js("alert('Hello');")
}

@JsName("randomAddr")
fun randomAddr(): String {
    return "125.77.198.206:3000/api/mini/queryOverdue"
}

// 这边声明的变量可以在js中被获取到
var str = "123"
var num = 0
var num2 = 1.2

// 这边声明的类可以在js中被获取到
class classDemo {
    @JsName("longTest")
    fun longTest(){
        println("long")
    }
}