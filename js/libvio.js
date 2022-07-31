// ==UserScript==
// @name         LIBVIO
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.libvio.me/*
// @icon         https://www.google.com/s2/favicons?domain=libvio.com
// @grant        none
// ==/UserScript==

(function () {

    /*设置标题*/
    try {
        var title = document.title;
        document.title = title.replace("《", "").replace("》", "").replace("-1080P高清播放-LIBVIO", "");
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = "div.t-img-box,body > div:nth-child(3) > div.row > div > div > div > div.stui-content > div.stui-content__side,ul.stui_header__user > li:nth-child(5),.none,.inner-advertise,.clearfix.stui-foot,body > div:nth-child(3) > div.row > div > div > div > ul,div.stui-header__logo,div.stui-player__side > ul > li:nth-child(2),ul.stui_header__user > li:nth-child(4)";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }

    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector = ".stui-vodlist__head,div.stui-vodlist__head,ul.tab-top.play-tab.clearfix > li";
        var includeText = ["猜你喜欢", "网盘", "云盘"];
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            var tempStr1 = elements[i].innerText;
            for (var j = 0; j < includeText.length; j++) {
                var tempStr2 = includeText[j];
                if (tempStr1.indexOf(tempStr2) != -1) {
                    elements[i].style.cssText = "display:none !important";
                    elements[i].nextElementSibling.style.cssText = "display:none !important";
                }
            }
        }
    } catch (err) { }

    /*改变主题*/
    try {
        var insertStyle = document.createElement('style');
        insertStyle.innerHTML = ".row,body:after,.stui-player__side .tab li.active a:before,.stui-player__detail .more,.stui-player__side,.stui-player__detail {background:white;} .stui-vodlist__detail .title a,.pull-right,.stui_header__user > li > a .iconfont,.stui_header__user > li > span,body,.stui-page__item li a,.stui-player__detail .data,.stui-screen .head .text, .stui-screen .head .all,.stui-screen .head a,.stui-screen .item ul li a, .stui-screen .item ul li span,.stui-header__menu li a,.stui-vodlist__head p a,span.douban {color:#333;} .stui-vodlist__head h3, .stui-vodlist__head h3 a,.stui-page__item li a:hover,.stui-player__side .tab li.active a,.stui-play__list li a:hover,div.stui-vodlist__head>a.pull-right:hover,a.detail-more:hover,.stui-player__detail .more a:hover,.stui-screen .item ul li.active a, .stui-screen .item ul li a:hover,.stui-header__menu li a:hover, .stui-header__menu li.active a {color:#FF9900;} .stui-page__item li.active a, .stui-page__item li.active span,.stui-content__detail .play-btn a,.stui-play__list li.active a,.stui-header__menu li.active a:before{background:#FF9900;color:white;} .stui-content__detail .title{color:black;font-wight:bold;} .stui-content__playlist li a{color:#333;background:#eee;} p.data > a,.stui-vodlist__head h3, .stui-vodlist__head h3 a, .stui-page__item li a:hover, .stui-player__side .tab li.active a,.stui-player__side .item .head h3,#play-box > div.item.active > div.head.clearfix > a,a.detail-more{color:#333;} .stui-play__list li a,.stui-player__detail .more a,.stui-screen .item,.stui-screen .head,::-webkit-scrollbar,::-webkit-scrollbar-thumb {color:#333;background:#eee;} .stui-player__side .tab,.stui-screen .item ul,.dropdown.history li a{border:none;} .dropdown.history .head h5,#stui_history > p {color:white;} .stui-content__playlist li a:hover{color:#FF9900;}";
        document.head.appendChild(insertStyle);
        setInterval(() => {
            try {
                var selector = "div.stui-content__detail > p.data > a,div.stui-player__detail>div.data>a,div.stui-player__detail>div.data-more>button,div.stui-player__left > div.stui-player__detail > div.data-more > p > a,span.douban,#play-box h3 > a";
                var elements = document.querySelectorAll(selector);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.cssText = "color:#333 !important;";
                }
            } catch (err) { }
        }, 100);
    } catch (err) { }

    /*插入标题*/
    try {
        if (!document.querySelector("#newSearchButton1")) {
            var searchButton = document.createElement("a");
            searchButton.setAttribute("id", "newSearchButton1");
            searchButton.setAttribute("href", "https://www.libvio.me/");
            searchButton.innerText = "首页";
            //searchButton.style.cssText = "float:left;margin-top: 5px;margin-left: 10px;color:#333;font-size: 20px;";
            var insertStyle2 = document.createElement('style');
            insertStyle2.innerHTML = "a#newSearchButton1 {float:left;margin-top: 5px;margin-left: 10px;color:#333;font-size: 20px;} a#newSearchButton1:hover {color:#FF9900;}";
            document.head.appendChild(insertStyle2);
            var insertIndex = document.querySelector("ul.stui_header__user").parentElement;
            insertIndex.insertBefore(searchButton, insertIndex.firstElementChild);
        }
    } catch (err) { }

    try {
      closeclick();
    } catch (error) { }
})();