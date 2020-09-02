import $ from './lib/jquery.js';
import { cookie } from './lib/cookie.js';
import { product } from './lib/jquery-tab-product.js';

(function() {
    let id = location.search.split('=')[1]; // 获取id
    console.log(id)

    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            let title = JSON.parse(res.title);
            let pic = JSON.parse(res.picture);
            let materials = JSON.parse(res.materials);
            let template = `
            <div class="product-intro">
                <div class="product-preview">
                    <div class="preview">
                        <div class="preview-bigimage">
                            <div class="swiper-container" id="productImg">
                                <div class="swiper-wrapper" >
                                    <div class="swiper-slide" ><img src="${pic[0].src}"></div>
                                    <div class="swiper-slide" ><img src="${pic[1].src}"></div>
                                    <div class="swiper-slide swiper-slide-visible swiper-slide-active" ><img src="${pic[2].src}"></div>
                                    <div class="swiper-slide " ><img src="${pic[3].src}"></div>
                                </div>
                            </div>
                        </div>
                        <ul class="preview-list clearfix" id="swiperController">
                            <li class="preview-list-item">
                            <img src="${pic[0].src}" alt="">
                            </li>
                            <li class="preview-list-item">
                                 <img src="${pic[1].src}" alt="">
                            </li>
                            <li class="preview-list-item active" >
                                <img src="${pic[2].src}" alt="">
                            </li>
                            <li class="preview-list-item">
                            <img src="${pic[3].src}" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="product-info">
                    <div class="title">
                        <p class="title-name">${title[0].title}</p>
                        <p class="title-desc">${title[1].title1}</p>
                        <p class="title-point">${title[2].title2}</p>
                    </div>
                    <div class="price">

                        <div class="price-item price-sell-price">
                            <span class="price-label">售价</span>
                            <div class="sell-price" style="opacity: 1;">
                                ¥<span id="sellPrice" class="s-price">${res.price}</span>
                                <div class="discount-tag-list"></div>
                                <span class="original-price">市场价<s id="originalPrice">¥479</s></span>
                            </div>
                            <div class="sale-count">已售<span>${res.num}万</span>件</div>
                            <div class="price-item price-time" style="display: none;">
                                <span class="price-label">配送时间</span>
                                <div class="price-time-group"></div>
                            </div>
                        </div>
                        <div class="price-item price-discount">
                            <span class="price-label"></span>
                            <div class="discounts">
                                <div class="discounts-title">APP/微信专享价<span id="wxappPrice">¥401</span></div>
                                <div class="qr-dropdown">
                                    <a href="javascript:;">去APP购买<span class="icon icon-arrow-right"></span></a>
                                    <div class="qr-dropdown-box">
                                        <img src="//img02.hua.com/pc/pimg/app_qrcode.jpg" alt="">
                                        <p>新人专享100元大礼包</p>
                                    </div>
                                </div>
                                <div class="qr-dropdown">
                                    <a href="javascript:;">去微信购买<span class="icon icon-arrow-right"></span></a>
                                    <div class="qr-dropdown-box">
                                        <img id="wxmpQrCode" src="https://m.hua.com/wxapi/tempqrpic?pid=9012089&amp;userid=&amp;type=1&amp;sj=2020-8-31&amp;sign=b7d97cd619e9644c" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="huayu">
                        <div class="huayu-item">
                            <span class="huayu-label">花语</span>
                            <p class="huayu-content">${materials[0].title}李清照《一剪梅》</p>
                        </div>
                        <div class="huayu-item">
                            <span class="huayu-label">材料</span>
                            <p class="huayu-content">${materials[1].title1}</p>
                        </div>
                    </div>
                    <div class="delivery">
                        <div class="delivery-item delivery-range">
                            <span class="delivery-label">配送说明</span>
                            <div class="delivery-content delivery-range-detail" style="cursor: default;">
                                <p>全国</p><span class="icon icon-arrow" style="display: none;"></span></div>
                        </div>
                        <div id="deliItem" class="delivery-item delivery-addr">
                            <span class="delivery-label">配送至</span>
                            <div class="stock-address delivery-address  text-primary">
                                <a class="delivery-area" href="javascript:;"><span class="delivery-area-text active">请选择</span><span class="icon icon-deliarr"></span></a>
                                <div class="delivery-area-pop">
                                    <div class="content">
                                        <div class="address-select">
                                            <div class="stock-address-list">
                                                <div class="address-tab">
                                                    <ul class="tab">
                                                        <li class="current" data-index="0">请选择</li>
                                                        <li class="hide" data-index="1">请选择</li>
                                                        <li class="hide" data-index="2">请选择</li>
                                                    </ul>
                                                    <div class="tab-con">
                                                        <div class="item" data-level="0">
                                                            <li data-code="110000">北京</li>
                                                            <li data-code="310000">上海</li>
                                                            <li data-code="440000">广东</li>
                                                            <li data-code="320000">江苏</li>
                                                            <li data-code="330000">浙江</li>
                                                            <li data-code="510000">四川</li>
                                                            <li data-code="370000">山东</li>
                                                            <li data-code="420000">湖北</li>
                                                            <li data-code="430000">湖南</li>
                                                            <li data-code="350000">福建</li>
                                                            <li data-code="610000">陕西</li>
                                                            <li data-code="410000">河南</li>
                                                            <li data-code="130000">河北</li>
                                                            <li data-code="500000">重庆</li>
                                                            <li data-code="210000">辽宁</li>
                                                            <li data-code="340000">安徽</li>
                                                            <li data-code="120000">天津</li>
                                                            <li data-code="360000">江西</li>
                                                            <li data-code="230000">黑龙江</li>
                                                            <li data-code="140000">山西</li>
                                                            <li data-code="520000">贵州</li>
                                                            <li data-code="450000">广西</li>
                                                            <li data-code="530000">云南</li>
                                                            <li data-code="650000">新疆</li>
                                                            <li data-code="220000">吉林</li>
                                                            <li data-code="620000">甘肃</li>
                                                            <li data-code="150000">内蒙古</li>
                                                            <li data-code="460000">海南</li>
                                                            <li data-code="640000">宁夏</li>
                                                            <li data-code="630000">青海</li>
                                                            <li data-code="540000">西藏</li>
                                                            <li data-code="810000">香港</li>
                                                            <li data-code="710000">台湾</li>
                                                            <li data-code="820000">澳门</li>
                                                        </div>
                                                        <div class="item hide" data-level="1"></div>
                                                        <div class="item hide" data-level="2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="delivery_area_code" value="">
                                </div>
                            </div>
                            <p id="deliTips" class="delivery-content delivery-content-time"></p>
                        </div>
                        <div class="delivery-item sku-product" style="display: none;">
                            <span class="delivery-label">选择</span>
                            <div class="sku-list"></div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <a id="btnAddcart" class="btn-group-item btn-addcart" href="../html/login-shopping.html"><span class="icon icon-addcartbtn"></span>加入购物车</a>
                        <a id="btnSoonbuy" class="btn-group-item btn-soonbuy" href="javascript:;">立即购买</a>
                        <a id="btnOtherarea" class="btn-group-item btn-addcart" href="javascript:;" style="display:none;">查看该地区鲜花</a>
                        <span id="btnSoldout" class="btn-group-item btn-invalid" href="javascript:;" style="display:none;">售罄/下架</span>
                        <div class="btn-group-guanzhu">
                            <a id="btnGuanzhu" href="javascript:DoGuanZhu('9012089')"><span class="icon icon-collect"></span>收藏商品</a>
                        </div>
                    </div>
                    <div id="ajax_pricebox"></div>
                </div>
            </div>


            `;
            $('#home>.product-wrap').append(template).find('#btnAddcart').on('click', function() {
                addItem(res.id, res.price, 1)
            });;
            $('#product').append(res.details);
            product();


        }
    });



    function addItem(id, price, num) {
        console.log(id, price, num)
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            console.log(shop)
                // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);

            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();