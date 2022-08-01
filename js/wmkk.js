(function () {

    /*设置标题*/
    try {
        document.title = vod_name + vod_part;
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = "center,ul.stui-extra.clearfix,div.stui-foot.clearfix.html5plus-hide,span.more.text-muted.pull-right,div.stui-header__logo.html5plus-hide,div#banner";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector2 = "div.stui-pannel-box,ul.more-btn>li";
        var includeText2 = ["猜你喜欢", "报错"];
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

    /*自动关闭通知弹窗*/
    try {
        closeGlobalAd();
    } catch (err) { }

    try {
        document.querySelector("body > script:nth-child(5)").nextSibling.remove();
    } catch (err) { }

    /*改变主题*/
    try {
        var insertStyle = document.createElement('style'); insertStyle.innerHTML = ".stui-header__top,.stui-header__top.headroom--not-top{background: white !important;} .stui-header__user > li > a, .stui-header__user > li > a .icon,.stui-header__menu > li > a,.stui-header__search .search-close{color: #333 !important;} .bottom-line:after{border: none !important;} .stui-header__menu > li .dropdown:before{left: 70px !important;} .stui-header__menu > li .dropdown{left: -70px !important;}";
        document.head.appendChild(insertStyle);
    } catch (err) { }

    try {
        if (location.href == "https://www.wanmeikk.me/") {
            document.querySelector("body").style.paddingTop = "50px";
        }
    } catch (err) { }

    try {
        var elements = document.querySelectorAll("h1.title,h2.title,h3.title");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = elements[i].innerHTML.replace("完美看看", "");
        }
    } catch (err) { }

    setInterval(() => {
        try {
            document.querySelector("div.stui-header__logo.html5plus-hide").remove();
        } catch (error) {
        }
    }, 100);

})();