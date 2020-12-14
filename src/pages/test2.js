export var a = 1;
export { a };
export { a as a1 };

//报错
//export 1;

//报错
//export a;

var b = 2;
export { a, b };
export { a as a1, b as b1 };


function f() {

}

//报错
//export f;

export function f2() {

}

export { f };


/**
import

// main.js
import {firstName, lastName, year} from './profile';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}

import { lastName as surname } from './profile';

 */







/*
module的整体加载

// circle.js。输出两个函数

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}


// main.js 加载在个模块

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));

//上面写法是逐一指定要加载的方法，整体加载的写法如下。
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
*/






/*
export default

// export-default.js
export default function () {
  console.log('foo');
}


其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

// import-default.js
import customName from './export-default';
customName(); // 'foo'

可以看出，使用export default时，import语句不用使用大括号。

*/


/*
因为require是运行时加载，所以import命令没有办法代替require的动态加载功能。
所以引入了import()函数。完成动态加载。
import(specifier)

specifier用来指定所要加载的模块的位置。import能接受什么参数，import()可以接受同样的参数。
import()返回一个Promise对象。

const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
*/





/*
import()函数适用场合
 1）按需加载：

button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
})
});

above： import模块在事件监听函数中，只有用户点击了按钮，才会加载这个模块。

 2）条件加载：

import()可以放在if...else语句中，实现条件加载。

if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}


*/