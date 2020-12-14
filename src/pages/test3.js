/*
function F1() {
    this.a = 1;
    this.b = 2;
    console.log('f1');
}

F1();

var f1 = new F1();
var that;
F1.prototype.say = function () {
    that = this;
    console.log('say');
}
console.log(F1);
console.log(f1);
f1.say();
console.log(f1 === that);

class A {
    i = 0;
}

let a = new A();

Object.defineProperty(A, 'm', {
    value: 0,
    writable:true,
})
A.m = 2;
delete A.i;
console.log(A);

var b = {}
b.c = b=[]
console.log(b)

*/

/*
var obj = {
    name: 'object',
    pa1: [1, 2, 3],
    age: 19,
}

function deepCopy(newObj, oldObj) {
    for (var key in oldObj) {
        if (oldObj[key] instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], oldObj[key]);
        } else if (oldObj[key] instanceof Object) {
            newObj[key] = {};
            deepCopy(newObj[key], oldObj[key]);
        } else {
            newObj[key] = oldObj[key];
        }
    }
}

var obj2 = {};
deepCopy(obj2, obj);
obj.age = 22;
console.log(obj2);
*/

/*
var arr1 = [1, 3, 7, 9];
var arr2 = arr1.filter(item => {
    return item % 2 == 0;
});
console.log(arr2);
*/

/*
var reg1 = /123$/;
console.log(reg1.test('333123'));
*/


function Object1() {

}
let o1 = new Object1();
o1[Symbol.for('say')] = () => {
    console.log('111');
}
o1[Symbol.for('say')]();