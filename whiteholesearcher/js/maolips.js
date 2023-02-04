(function () {

    /*屏蔽元素*/
    try {
        var selector = "div#app>div[style=\"padding-top: 5%;\"]>div.van-row:nth-child(3),div#app>div[style=\"padding-top: 5%;\"]+div,div.van-row>div.van-col.van-col--24>div.van-dropdown-menu>div.van-dropdown-menu__bar>div:nth-child(1)";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某关键词文本的元素*/
    try {
        var selector2 = "div.van-row";
        var includeText2 = ["资源提交", "随机阅读", "请认真阅读以下说明"];
        var elements2 = document.querySelectorAll(selector2);
        for (var i1 = 0; i1 < elements2.length; i1++) {
            var tempStr1 = elements2[i1].innerText;
            for (var j = 0; j < includeText2.length; j++) {
                var tempStr2 = includeText2[j];
                if (tempStr1.indexOf(tempStr2) != -1) {
                    elements2[i1].style.cssText = "display:none !important";
                }
            }
        }
    } catch (err) { }
})();