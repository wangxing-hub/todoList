window.addEventListener('load', function () {
    var newTaskInput = this.document.querySelector('.new-task input');
    var todoList = this.document.querySelector('.todo-list');
    var doneList = this.document.querySelector('.done-list');
    // 获取模板
    var todoItem = this.document.querySelector('.todo-item');
    var date = null;

    // 添加任务
    newTaskInput.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            // 克隆任务条款
            var todo_item = todoItem.cloneNode(true);
            // 更改任务条款里的文本
            todo_item.children[1].children[0].innerHTML = newTaskInput.value;


            // 实现 刷新页面后不会消失
            // // 获取 时间戳
            // date = Date.now();
            // // 存储数据 (存储任务条款)
            // localStorage.setItem(date,todo_item);

            // 把更改 value 后的 新 任务条款添加至最前面(第一个前面)
            todoList.insertBefore(todo_item, todoList.children[0]);
            // 获取circle圆圈
            var circle = todoList.children[0].querySelector('.icon-circle');
            // 获取 小星星
            var star = todoList.children[0].querySelector('.icon-xingxing1');

            // circle圆圈 和 小星星 设置 行高和高 为父元素的高 (padding+content) 最后需要减去 padding
            circle.style.lineHeight = circle.parentNode.clientHeight - 20 + 'px';
            circle.style.height = circle.parentNode.clientHeight - 20 + 'px';
            star.style.lineHeight = star.parentNode.clientHeight - 20 + 'px';
            star.style.height = star.parentNode.clientHeight - 20 + 'px';

            // 为circle注册点击事件 删除所在item
            circle.addEventListener('click', function () {
                if (circle.className == 'iconfont icon-circle') {
                    // 如果在 todo-list 则加入 done-list
                    // 更改circle字体图标
                    circle.className = 'iconfont icon-check-circle';
                    // 把更改后的 item 添加至 done-list 从 todo-list 中移除
                    doneList.insertBefore(this.parentNode, doneList.children[0]);
                } else {
                    // 如果在 done-list 则加入 todo-list
                    // 更改circle字体图标
                    circle.className = 'iconfont icon-circle';
                    // 把更改后的 item 添加至 todo-list 从 done-lsit 中移除
                    todoList.insertBefore(this.parentNode, todoList.children[0]);
                }
            })
            // 为 star 绑定点击事件 标为重要 或 不重要
            star.addEventListener('click', function () {
                if (star.className == 'iconfont icon-xingxing1') {
                    // 如果是 空心 则改为实心
                    star.className = 'iconfont icon-xingxing';
                } else {
                    // 如果是 实心 则改为空心
                    star.className = 'iconfont icon-xingxing1';
                }
            })
            // 表单 value 置空
            newTaskInput.value = '';
        }
    })
})
// window.addEventListener('load',function() {
//     var newTaskInput = this.document.querySelector('.new-task input');
//     var todoList = this.document.querySelector('.todo-list');
//     var doneList = this.document.querySelector('.done-list');
//     // 获取模板
//     var todoItem = this.document.querySelector('.todo-item');

//     for(var i=0;i<this.localStorage.length;i++) {
//         if(this.localStorage.getItem(this.localStorage.key(i)).parentNode == todoList) {
//             todoList.appendChild(this.localStorage.getItem(this.localStorage.key(i)),todoList.children[0]);
//         } else {
//             // doneList.appendChild(this.localStorage.getItem(this.localStorage.key(i)),doneList.children[0]);

//         }
//     }
// })