function removeElements(selector, texts) {
    /*用于屏蔽包含某字符串的元素*/
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        var tempStr = elements[i].innerText;
        for (var j = 0; j < texts.length; j++) {
            var tempStr2 = texts[j];
            if (tempStr.indexOf(tempStr2) != -1) {
                elements[i].style.cssText = "display:none !important";
            }
        }
    }
}

(function () {
    /*设置标题*/
    /*try {
      document.title = vod_name + vod_part;
    } catch (err) { }*/

    /*屏蔽元素*/
    try {
        var selector = "div#page-wrap>div.mobile-nav,div#page-wrap>div.mobile-container>div.mobile-main>div.banner,#outer-container > div:nth-child(2) > div.bm-menu-wrap > div.bm-menu > nav > div > div:nth-child(2)";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    try {
        removeElements("div.card.border-shadow", ["茶杯狐最新地址", "微信关注", "相关推荐"]);
    } catch (err) { }

    /*自动关闭通知弹窗*/
    try {
        document.querySelector("span.icon-close").click();
    } catch (err) { }


    setInterval(() => {
        try {
            removeElements("div.card.border-shadow", ["相关推荐"]);
        } catch (err) { }
    }, 100);
})();