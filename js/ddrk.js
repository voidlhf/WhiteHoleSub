(function () {

    /*资源嗅探提示*/
    try {
        if (location.href.startsWith("https://ddrk.me/")) {
            if (!document.querySelector("#newSearchButton1")) {
                var searchButton = document.createElement("h3");
                searchButton.setAttribute("id", "newSearchButton1");
                searchButton.innerText = "▷ 当前站点资源嗅探可能导致无法显示字幕，如若出现该情况，请勿使用资源嗅探";
                searchButton.style.cssText = "color:red !important;font-size:10pt;font-weight: normal;";
                var insertIndex = document.querySelector("div.wp-playlist-tracks");
                insertIndex.insertBefore(searchButton, insertIndex.firstElementChild);
            }
        }
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = "div#afc_sidebar_2842,div#iaujwnefhw,#to_top_scrollup,#comments,nav.navigation.post-navigation,div.crp_related";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector2 = "div.myui-panel.myui-panel-bg.clearfix,ul.myui-header__menu.nav-menu>li,strong";
        var includeText2 = ["常用网站", "专题", "相似影片", "留言", "如有侵权"];
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

    /*改变主题*/
    try {
        var insertStyle = document.createElement('style'); insertStyle.innerHTML = "body,.single .post,.doulist-item .mod,#ql_nav_collapse{background: white !important;} .logo_container .ql_logo,#ql_nav_btn,span.chinaSrc-a,.post-title,h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6,div.page-links,span.outSrc-a{color: #333 !important;} .post-box-image{-webkit-box-shadow: none; box-shadow: none;border:1px solid #eee;} .is-menu path.search-icon-path{fill:#333 !important;} .pagination a, .pagination span{background:#eee;color:#333;border:none;} .pagination .current{background:#eee;} #jqueryslidemenu ul.nav > li > a{color:#2ebf8b;text-shadow: none;} .page-header,.wp-playlist,.wp-playlist-item{border:none !important;} input, textarea{color:#333;background:#eee;}";
        document.head.appendChild(insertStyle);
    } catch (err) { }

    try {
        document.querySelector("#sajdhfbjwhe").style.cssText = "width:5px !important;";
    } catch (error) {

    }

    try {
        document.querySelector("a.ql_logo").text = "首页";
    } catch (error) {

    }

    setInterval(() => {

        /*设置标题*/
        try {
            var title = document.querySelector("div.post-content > h1.post-title").innerText;
            if (title.indexOf(" (") != -1) {
                title = title.substring(0, title.indexOf(" ("));
            }
            var number = document.querySelector("div.wp-playlist-item.wp-playlist-playing > a.wp-playlist-caption").innerText;
            if (number.indexOf(".") != -1) {
                number = number.substring(number.indexOf(".") + 1);
            }
            if (title && number) {
                document.title = title + " " + number;
            }
        } catch (err) { }

        try {
            document.querySelector("#to_top_scrollup").remove();
        } catch (error) {

        }

        try {
            document.querySelector("#afc_sidebar_2842").remove();
        } catch (error) {

        }

        try {
            document.querySelector("#fh972w3h4g3y9g").removeAttribute("href");
        } catch (error) {

        }
    }, 100);
})();