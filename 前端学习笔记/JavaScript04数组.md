JavaScript04 数组

数组也是一个对象

创建数组常用语法`var arr = [];`

`var arr = new Array();`

创建时初始化数组

`var arr = [1，2，3，4];`

forEach方法，需要一个函数作为参数，浏览器调用这个函数（ie9才支持）

`forEach(function(a){  });`传入回调函数（最好是匿名的），浏览器会将遍历的元素传进来，第一个参数：当前属性 第二个元素：当前索引 第三个元素：整个数组 后面的参数：

`concat();`可以连接两个数组，并将新数组返回，不影响原来数组
`arr.concat(arr2);`
`arr.concat(arr2,arr3);`也可以加元素

`arr.join();`把数组转换为字符串并返回
传入参数作为元素和元素之间的连接符，若不指定则默认为逗号

`push()`向数组的末尾添加一个或多个元素，并返回新长度

`pop()`删除数组的最后一个元素，并将删除的元素返回

`unshift()`向数组开头添加一个或多个元素，并返回新长度

`shift()`可以删除数组的第一个元素，并返回被删除的元素

`slice()`用来从数组提取指定元素，参数1截取开始索引，参数2截取结束的索引，不改变原数组

`splice()`删除指定元素，会影响到原数组，返回被删除的元素，第三个参数以后可以填写新元素，自动插入到开始位置前面