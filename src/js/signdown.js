import $ from "./lib/jquery.js";
import './lib/jquerymd5.js';
$(function() {
    let reg = {
        email: /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,
        phonePassWord: /^[A-Za-z0-9\W]{6,16}$/,
    };

    // console.log($(".phone input"))
    $(".phone input").each(function(index, elm) {
        // console.log(elm)
        if ($(elm).attr("id") === "checkpass") return;
        $(elm).on("input", function() {
            if (reg[$(elm).attr("id")].test($(elm).val())) {
                $(elm).css({
                    border: "1px solid green",
                });
                $(this).attr("data-pass", true);
            } else {
                $(elm).css({
                    border: "1px solid red",
                });
                $(this).attr("data-pass", false);
            }
            check();
        });

    });
    // $("#phonePassWord").on("input", function() {
    //     if ($(this).val() === $("#phonePassWord").val()) {
    //         $(this).css({
    //             border: "1px solid green",
    //         });
    //         $(this).attr("data-pass", true);
    //     } else {
    //         $(this).css({
    //             border: "1px solid red",
    //         });
    //         $(this).attr("data-pass", false);
    //     }
    //     check();
    // });

    /*   if ($("#gx").attr("checked")) {
      console.log("a");
    } else if ($("#gx").attr("checked", false)) {
      console.log("ss");
    } */
    function check() {
        if ($("[data-pass=true]").length == 2) {
            $("#checkpass").removeAttr("disabled");
        } else {
            $("#checkpass").attr("disabled", "disabled");
        }
    }
});