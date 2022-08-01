(function () {

    /*关闭横幅*/
    try {
        document.querySelector(".Hero-close").click()
    } catch (error) { }

    /*屏蔽元素*/
    try {
        var selector = "div.footer,div#header-primary,div.davwheat-ad.davwheat-ad-header";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    setInterval(() => {
        /*try {
            var selector2 = "ul.DiscussionList-discussions>li,div.davwheat-ad.davwheat-ad-header";
            var includeText2 = ["关于标题党问题公告", "由于小站经常被人恶意cc攻击", "求助帖不发到【求助】板块", "小站防失联平台【小站订阅系统】", "软件游戏破解|尺度更大更开放的搞机平台"];
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
        } catch (err) { }*/

        try {
            document.querySelector("div.btn-close--2vCRo").click();
        } catch (error) { }

        try {
            document.querySelector("div.download-app--21E6F").remove();
        } catch (error) { }

    }, 100);

    /*改变主题*/
    try {
        var insertStyle = document.createElement('style'); insertStyle.innerHTML = ".drawer-backdrop,.dropdown-backdrop{background:black;} .Modal-body{background:white;} .modal-backdrop{background:none;} .open .dropdown-backdrop,.drawer-backdrop.in{opacity:0.7;} .banner-wrap--1xSCA {-webkit-box-shadow:none !important;box-shadow:none !important;}";
        document.head.appendChild(insertStyle);
    } catch (err) { }
})();