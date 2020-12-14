console.log('test1');

//数组解构：
let arr = [5, 6, 7, 8, 9];
let [a, b, c, d, e] = arr;
console.log('a:', a, " b:", b, " c:", c, " d:", d, " e:", e);

//用空格占位
let [a1, , , d1] = arr;
console.log('a1:', a1, " d1:", d1);

//...c表示剩余的内容全都被c接收
let [a2, b2, ...c2] = arr;
console.log('a2:', a2, " b2:", b2, " c2:", c2);


//对象解构：
let obj = {
    oa: 100,
    ob: 200,
    oc: 300
}

let { x, y, z } = obj;
console.log("x:", x, " y:", y, " z:", z);

//从这个例子可以看出，对象的解构所用的变量要和对象的属性名一样才能拿到相应的值。
let { oa, ob, oc } = obj;
console.log("oa:", oa, " ob:", ob, " oc:", oc);

//对象解构同时重命名
let { oa: oa1, ob: ob1, oc: oc1 } = obj;
console.log("oa1:", oa1, " ob1:", ob1, " oc1:", oc1);


const data = {
    a: 100,
    b: [
        {
            c: 200,
            d: [],
            a: 300
        },
        {
            c: 1200,
            d: [1],
            a: 300
        },
    ],
    c: 500
}

var { a: m, b: [{ a: n }, { a: n1 }] } = data;
console.log(m, n, n1);