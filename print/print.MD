### 用法
1. 调用window.print('元素选择器')
2. 或者调用 window.print(HTML元素)，传入原生dom对象
2. 或者调用 window.print(jQuery对象)，传入jQuery对象
3. 若不传入元素或传入的元素不存在，则打印整个页面

### 原理
>- 用css隐藏了其他所有元素，只显示指定的元素