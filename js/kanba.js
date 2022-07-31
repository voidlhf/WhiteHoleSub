// ==UserScript==
// @name         看吧动漫
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.k6dm.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    /*设置标题*/
    try {
        document.title = document.querySelector("body > div.fed-main-info.fed-min-width > div > div.fed-tabs-info.fed-rage-foot.fed-part-rows.fed-part-layout.fed-back-whits.fed-play-data").getAttribute("data-name") + document.querySelector("body > div.fed-main-info.fed-min-width > div > div.fed-tabs-info.fed-rage-foot.fed-part-rows.fed-part-layout.fed-back-whits.fed-play-data").getAttribute("data-nums");
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = ".fed-event.fed-text-black.fed-navs-code,div.fed-tabr-info.fed-back-whits.fed-min-width.fed-line-top.fed-hide-sm,div.fed-foot-info.fed-part-layout.fed-back-whits,div.fed-goto-info,body > div.fed-head-info.fed-back-whits.fed-min-width.fed-box-shadow > div > div.fed-navs-info > ul > li:nth-child(1) > a";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector = "div.fed-part-layout.fed-back-whits,li.fed-col-sm2,p,ul.fed-play-boxs.fed-padding.fed-part-rows.fed-col-xs12.fed-col-md6,li.fed-pull-left";
        var includeText = ["公告", "友情链接", "友情鏈接", "专题", "專題", "声优库", "聲優庫", "相关声优", "相關聲優", "相关热播", "相關熱播", "文库", "文庫", "动漫资讯", "動漫資訊", "美图", "美圖", "明星", "APP", "视频报错", "視頻報錯", "播放失败请先", "播放失敗請先", "重新刷新一下", "动漫交流群", "動漫交流群", "切换线路", "切換線路", "次元阁", "次元閣", "聊天室", "留言", "關聯視頻", "关联视频"];
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
        insertStyle.innerHTML = ".fed-head-info .fed-navs-right{right:10px;} .fed-drop-info .fed-drop-tops{border:none;} .fed-drop-info .fed-drop-head{border:none;} .fed-line-top:before{border:none;} .fed-line-bottom:after{background:white;} .icon-clock:before{color:#333;} .icon-search:before{color:#333;} .icon-moreunfold:before{color:#333;} .icon-close:before{color:#333;} .stui-header__menu > li .dropdown:before{left:70px;} body {background:white;} .fed-part-mask{background: white;} .fed-back-ashen {background-color: white !important;}";
        document.head.appendChild(insertStyle);

        setInterval(() => {
            try {
                document.querySelector("div.fed-swip-container.fed-part-rows.swiper-container-horizontal").style.display = "none";
            } catch (err) { }
        }, 100);

        try {
            document.querySelector("body > div.fed-tabr-advs.fed-part-zero.fed-back-whits > a").style.display = "none";
        } catch (err) { }

        try {
            document.querySelector("body > div.fed-part-mask.fed-back-ashen.fed-hide-sm.fed-show").style.cssText = "background:white !important;"
        } catch (err) { }

    } catch (err) { }
})();