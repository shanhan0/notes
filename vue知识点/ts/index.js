var isDone = true;
var namea = "bob";
namea = "smith";
console.log(namea);
var arr = [1, 2];
console.log(arr);
// 或者使用数组泛型
var arr1 = [3, 4];
console.log(arr1);
var arr2 = [11111111, '222'];
console.log(arr2);
var x;
x = ['444411111111', 222];
console.log(x); //[ '444411111111', 222 ]
//枚举
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
;
//color可以不用写
var c = color.blue;
console.log(c); //1
function hello() {
    alert("Hello Runoob");
}
