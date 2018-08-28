/**
 * 打印指定元素
 * @author srp
 * @since 2018/8/28
 */
(function ($, win) {

    var _print = window.print;

    var cls = 'section-to-print';

    win.print = function (ele) {

        //先移除所有此类
        $('.' + cls).removeClass(cls);

        //若存在元素，用css控制只显示指定元素的内容，再打印
        if (ele) {

            if (typeof ele == 'string') {
                ele = $(ele);
            }

            if (ele instanceof HTMLElement) {
                ele = $(ele);
            }

            if (ele instanceof $) {
                ele.addClass(cls);
            }
        }

        //若不存在元素，则打印整个页面
        _print();
    }
})(jQuery, window);