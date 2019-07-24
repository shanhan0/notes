
let isDone:boolean = true;
let namea:string = "bob";
namea = "smith";
console.log(namea)

let arr:number[]=[1,2];
console.log(arr)
// 或者使用数组泛型
let arr1:Array<number> = [3,4];
console.log(arr1)

let arr2:[number,string]=[11111111,'222']
console.log(arr2)

let x: [string, number];
x=['444411111111',222]
console.log(x)//[ '444411111111', 222 ]


//枚举
enum color {red,blue,green};
//color可以不用写
let c:color=color.blue
console.log(c)//1


function hello(){
    alert("Hello Runoob");
}

