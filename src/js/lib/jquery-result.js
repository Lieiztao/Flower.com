import $ from './jquery.js';
import { cookie } from './cookie.js';
import addItem from '../lib/jquery.cookie.js';
let result = function() {
    $('.form-control').on('input', function() {
        let price1 = $(this).parents('.order-list').children('.order-price').children('.price-num').html();
        // $('.total').html($(this).val() * price1)
        let index = $(this).parents('.order-list').attr('class').split(' ')[1].charAt(1);
        $(`.total${index}`).html('￥' + $(this).val() * price1 + '.00');
        let that = this;
        yuan();
        console.log(price1)
        addItem(index, price1, $(that).val());
    })
}

let no = function() {
    $(`.input-num>.no`).on('click', function() {
        let index = $(this).parents('.order-list').attr('class').split(' ')[1].charAt(1);
        // $(`int${index}`).html($(this).val() --);
        let price = 0;
        let num1 = $(`.int${index}`).val();

        if (num1 <= 1) {
            num1 = 1;
            $(`.int${index}`).val(num1);
        } else {
            num1--;
            $(`.int${index}`).val(num1);
        }
        getPrice().each((i, item) => {
            if ($(item).parents('.order-list').attr('class').split(' ')[1].charAt(1) == index) {
                price = $(item).html()
            }
        })

        $(`.int${index}`).val(num1);
        $(`.total${index}`).html(`￥${(num1 * price)}.00`);
        addItem(index, $(`.int${index}`).val(), num1);
        yuan();


    })
}

let getPrice = function() {
    return $('.form-control').parents('.order-list').children('.order-price').children('.price-num');
}

let add = function() {
        $(`.input-num>.add`).on('click', function() {
            let index = $(this).parents('.order-list').attr('class').split(' ')[1].charAt(1);
            // $(`int${index}`).html($(this).val() --);
            let price = 0;
            let num = $(`.int${index}`).val();

            num++;
            getPrice().each((i, item) => {
                    if ($(item).parents('.order-list').attr('class').split(' ')[1].charAt(1) == index) {
                        price = $(item).html();
                    }
                })
                // console.log(price)


            $(`.int${index}`).val(num);
            $(`.total${index}`).html(`￥${num*price}.00`);
            addItem(index, $(`.int${index}`).val(), num);
            yuan();

        })
    }
    //删除元素及cookie
let removeCookie = function() {
    let shop = cookie.get('shop');
    shop = JSON.parse(shop);
    $('.selecter .icon-select').each((i, elm) => {
        // elm.on('click', function() {
        $(elm).on('click', function() {
            if ($(this).prop("checked") == true) {
                let index = $(this).parents('.order-list').attr('class').split(' ')[1].charAt(1);
                $(`.delBtn${index}`).on('click', function() {
                    if ($(elm).prop("checked") == true) {
                        $(`.box${index}`).remove();
                        $(`.box1${index}`).remove();
                        let num = shop.forEach((val, i) => {
                            if (index == val.id) {
                                return shop.indexOf(val);
                            }
                        })
                        shop.splice(num, 1);
                        let str = JSON.stringify(shop);
                        cookie.set('shop', str, 1);
                        yuan();
                    }
                })
            }
        })
    })
}


let allbtn = function() {
    let allbtn = $('.all-bar .btn')[2];
    $(allbtn).on('click', function() {
        if ($('.selecter .icon-select').prop("checked") == true) {
            $('.selecter .icon-select').attr("checked", false);
        } else {
            $('.selecter .icon-select').attr("checked", true);
        }
    })
}


let removebtn = function() {
    let removebtn = $('.all-bar .btn')[1];
    $('.selecter .icon-select').attr("checked", false);
    $(removebtn).on('click', function() {
        $('.selecter .icon-select').each((i, val) => {
            let index = $(val).parents('.order-list').attr('class').split(' ')[1].charAt(1);
            if ($(val).prop("checked") == true) {
                let shop = cookie.get('shop');
                shop = JSON.parse(shop);
                let num = shop.forEach((val, i) => {
                    if (index == val.id) {
                        return shop.indexOf(val);
                    }
                })
                shop.splice(num, 1);
                let str = JSON.stringify(shop);
                cookie.set('shop', str, 1);
                $($(val).parents('.container')).remove();
                $(`.box1${index}`).remove();
                yuan();
            }
        })
    })

}

let yuan = function() {
    let num = 0;
    $('.course').each((i, val) => {
            num += parseInt($(val).html().split("￥")[1]);
        })
        // console.log(num)
    $('#total').html('￥' + num + '.00');
}
export { result, add, no, removeCookie, allbtn, removebtn, yuan };