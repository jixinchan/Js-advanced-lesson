/*
	Created by JiXinchan on 2018.4.19
*/
//新创建的对象默认是可扩展的
    var empty = {};
    console.log(Object.isExtensible(empty));//true
    empty.a = 1;//添加成功

    //将其变为不可扩展对象
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));//false

    //使用传统方式为不可扩展对象添加属性
    empty.b = 2;//静默失败,不抛出错误
    empty["c"] = 3;//静默失败,不抛出错误

    //在严格模式中,为不可扩展对象添加属性将抛出错误
    (function fail(){
        "use strict";
        empty.d = "4";//throws a TypeError
    })();

//如果对象不可扩展，且所有属性的可配置特性为false，则该对象为密封的对象
    var empty = {};
    console.log(Object.isSealed(empty));//false

    //如果把一个空对象变得不可扩展,则它同时也会变成个密封对象.
    Object.preventExtensions(empty);
    console.log(Object.isSealed(empty));//true

    //但如果这个对象不是空对象,则它不会变成密封对象,因为密封对象的所有自身属性必须是不可配置的.
    var hasProp = {fee : "fie foe fum"};
    Object.preventExtensions(hasProp);
    console.log(Object.isSealed(hasProp));//false

    //如果把这个属性变得不可配置,则这个对象也就成了密封对象.
    Object.defineProperty(hasProp,"fee",{configurable : false});
    console.log(Object.isSealed(hasProp));//true

//如果对象不可扩展，所有属性的可配置特性为false，
//且所有属性的可写特性为false则该对象为密封的对象