import $ from './jquery.js';


$.fn.extend({
    tabs: function(options) {
        let defaults = {
            ev: 'hover',
            btn: 'active',
            content: 'show'
        }

        $.extend(defaults, options); //合并对象

        let btns = this.children('ul').children('li');
        let divs = this.children('div');
        console.log(this.children('.swiper-slide'))
        btns.on(defaults.ev, function() {
            let index = btns.index(this);
            $(this).addClass(defaults.btn).siblings().removeClass(defaults.btn);
            divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
        });
    }
});