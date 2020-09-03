import $ from './lib/jquery.js';
import { cookie } from './lib/cookie.js';
import addItem from './lib/jquery.cookie.js';
import { result, no, add, removeCookie, allbtn, removebtn, yuan } from './lib/jquery-result.js';

(function() {
    let shop = cookie.get('shop');

    if (shop) {
        shop = JSON.parse(shop); //  有cookie数据 才转JSON

        let idList = shop.map(elm => elm.id).join(); // 获取所有id

        $.ajax({
            type: "get",
            url: "../../interface/getitems.php",
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                var template = '';
                var str = '';
                res.forEach((elm, i) => {

                    let picture = JSON.parse(elm.picture);
                    let title = JSON.parse(elm.title);
                    // console.log(elm.num)
                    let arr = shop.filter(val => val.id == elm.id);
                    console.log(arr[0])
                    template += `
                    <div class="container box${elm.id}">
                    <div class="shop">
                    <div class="hd">
                        <ul>
                            <li class="two">商品名称</li>
                            <li>市场价</li>
                            <li>订购价</li>
                            <li>数量</li>
                            <li class="one">操作</li>
                        </ul>
    
                    </div>
                    <div class="shop-box">
                        <ul class="order-list l${elm.id}" id="1073285">
                            <li class="selecter">
                                <input type="checkbox" class="icon-select check${elm.id}">
                            </li>
                            <li class="img-box">
                                <a href="javascript:;"><img src="${picture[0].src}"></a>
                            </li>
                            <li class="product">
                                <a href="javascript:;" >
                                    <span class="product-title" style="">${title[0].title} ${title[1].title1} ${title[2].title2}</span>
                                    <span class="feature">顺丰陆运深圳发货</span>
                                </a>
                            </li>
                            <li class="market-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">
                                    759
                                </span>
                            </li>
                            <li class="order-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num price${elm.id}">
                                    ${elm.price}
                                </span>
                                <input type="hidden" name="jrPrice" value="659">
                            </li>
                            <li class="num">
                                <div class="input-num ">
                                    <a href="javascript:;" class="btn btn-default no "><i class="ico ico-minus"></i></a>
                                    <input type="number" class="form-control input-sm int${elm.id}" name="cpsl " value="${arr[0].num}" maxlength="3" min="1">
                                    <a href="javascript:" class="btn btn-default add"><i class="ico ico-add"></i></a>
                                </div>
                            </li>
                            <li class="operate"><a href="javascript:" class="delBtn${elm.id}">删除</a><br><a href="javascript:;" class="collectBtn">移到我的收藏</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="set-bar box1${elm.id}">
                <div class="result">
                    <div class="bar-box">
                        <a href="../html/login-index.html">
                            <span class="ico ico-back"></span> 继续选购
                        </a>
                        <p>应付金额:<span class="total${elm.id} course">￥${(elm.price*arr[0].num).toFixed(2)}</span></p>
                    </div>
                </div>
                <button class="btn">去结算</button>
            </div>
                `;
                });

                $('.all-bar').before(template);
                yuan();
                add();
                no();
                result();
                removeCookie();
                allbtn();
                removebtn();
            }
        });

    }
})();