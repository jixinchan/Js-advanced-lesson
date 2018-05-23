/*
	Created by JiXinchan on 2018.5.17
*/
// JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
// JSON.parse(text[, reviver])

var o=JSON.parse('{"s":4,}');

// 如果指定了 reviver 函数，则解析出的 JavaScript 值以及它所包含的所有属性，
// 会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）
// 分别的去调用 reviver 函数，在调用过程中，当前属性所属的对象会作为 this 值，
// 当前属性名和属性值会分别作为第一个和第二个参数传入 reviver 中。

var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
//124653
console.log(o8);