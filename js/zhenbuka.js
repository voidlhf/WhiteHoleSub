(function () {

    /*设置标题*/
    try {
        document.title = vod_name + vod_part;
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = "#hth616,div.marquee_outer,div.stui-pannel_hd[style],p.text-muted.text-center.visible-xs,span.more.text-muted.pull-right,ul.stui-vodlist__bd.clearfix,a[href*=\"https://www.ybvip1879.vip\"],a#ad_a,div.stui-header__logo,div.stui-foot.clearfix,a[href=\"/voddetail/74109\"],div.col-lg-wide-75.col-xs-1 > hr,div.stui-pannel-box.clearfix:nth-child(3),ul.stui-extra.clearfix,iframe[style=\"height: 5px; width: 5px;\"],div#layui-layer1,div#layui-layer-shade1,font[color=\"blue\"],div.jq-toast-wrap,iframe#buffer";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    try {
      document.querySelector("#layui-layer1 > div.layui-layer-btn.layui-layer-btn- > a").click();
    } catch (error) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector = "div.stui-pannel.stui-pannel-bg.clearfix,h3.title,body > div.container > div > div.stui-pannel.stui-pannel-bg.hidden-sm.hidden-xs.clearfix";
        var includeText = ["热播专题", "豆瓣专题", "为你推荐", "友情链接", "播放提示"];
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            var tempStr1 = elements[i].innerText;
            for (var j = 0; j < includeText.length; j++) {
                var tempStr2 = includeText[j];
                if (tempStr1.indexOf(tempStr2) != -1) {
                    elements[i].style.cssText = "display:none !important";
                }
            }
        }
    } catch (err) { }

    /*改变主题*/
    try {
        var insertStyle = document.createElement('style');
        insertStyle.innerHTML = ".stui-banner__pic {top: 0px;} #header-top{background:white;} .stui-header__menu {left: -10px;} .stui-header__menu>li>a {color: #333;} .stui-header__top{background: white;} .icon-clock:before{color:#333;} .icon-search:before{color:#333;} .icon-moreunfold:before{color:#333;} .icon-close:before{color:#333;} .stui-header__menu > li .dropdown:before{left:70px;} .bottom-line:after{border: none;}";
        document.head.appendChild(insertStyle);
        try {
            var selector = "h3.title";
            var inText = ["[推荐]"];
            if (selector.length == 0) return;
            if (inText.length == 0) inText = ["需要屏蔽的文本"];
            var a = document.querySelectorAll(selector);
            if (a.length == 0) return;
            for (var i = 0; i < a.length; i++) {
                var str1 = a[i].innerText;
                for (var j = 0; j < inText.length; j++) {
                    var str2 = inText[j];
                    if (str2.length == 0) break;
                    if (str1.indexOf(str2) != -1) {
                        a[i].style.color = "#FF9900";
                    }
                }
            }
        } catch (error) { }

        try {
            var a = document.querySelectorAll(".stui-header__menu > li .dropdown");
            for (var i = 0; i < a.length; i++) {
                a[i].style.left = "-60px";
            }
        } catch (error) { }

        try {
            var a = document.querySelectorAll("body");
            for (var i = 0; i < a.length; i++) {
                var currentUrl = window.location.href;
                if (currentUrl.indexOf("www.zhenbuka3.com/vodplay") != -1, currentUrl.indexOf("www.zhenbuka3.com/voddetail") != -1) {
                    a[i].style.cssText = "background-color:#FFFFFF;";
                }
            }
        } catch (error) { }

        try {
            var selector2 = "img#nice_u_know_img,img[width=\"100%\"]";
            if (selector2.length == 0) return;
            var a = document.querySelectorAll(selector2);
            if (a.length == 0) return;
            for (var i = 0; i < a.length; i++) {
                a[i].style.cssText = "width:1px !important;height:1px !important;";
            }
        } catch (error) { }

    } catch (err) { }

    /*计时器 */
    setInterval(() => {
        try {
            document.querySelector("div.stui-header__logo").remove();
        } catch (error) { }

        try {
            var url = location.href;
            if (url == ("https://www.zhenbuka5.com/") || url.startsWith("https://www.zhenbuka5.com/?btwaf")) {
                var headerHeight = document.querySelector("#header-top").clientHeight;
                document.querySelector("div.flickity-slider").style.top = headerHeight + "px";
                try {
                    var picHeiht = document.querySelector("div.flickity-slider > div.item.stui-banner__item").clientHeight;
                    if (picHeiht) {
                        var height = picHeiht + headerHeight;
                        document.querySelector("div.flickity-viewport").style.height = height + "px";
                    }
                } catch (error) { }
            }
        } catch (error) { }
    }, 100);
})();