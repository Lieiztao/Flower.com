import $ from './lib/jquery.js';
class IndexRender {
    constructor() {

    }
    init() {

    }
    renderFn() {
        $.ajax({
            type: "GET",
            url: "http://localhost/item/flower.com/php/.php",
            dataType: "json",
            success: function(response) {
                console.log(respnse);
                // [
                //     {
                //         title:'玫瑰花',
                //         price:'100',
                //         sallnum:'2000',
                img： 'asdasdas',
                    imgArr: 'asjkdhakjshf,kjhfkjasfha,jakshfdkjashdka,'
                    //     },
                    //     {
                    //         title:'玫瑰花',
                    //         price:'100',
                    //         sallnum:'2000'
                    //     },
                    //     {
                    //         title:'玫瑰花',
                    //         price:'100',
                    //         sallnum:'2000'
                    //     },
                    //     {
                    //         title:'玫瑰花',
                    //         price:'100',
                    //         sallnum:'2000'
                    //     },
                    // ]
                let data = JSON.parse(response)
                let str = ''
                $.each(data, (index, value) => {
                    str += `
                <a href="javascript:;">
                <img class="lazy" data-original="${value.img}">
                <p>${value.title}</p>
            </a>
                `
                })
                $('.wrap').html(str)
            }
        });
    }
}
export default new IndexRender()