(function () {

    /*关闭横幅*/
    try {
        document.querySelector(".Hero-close").click()
    } catch (error) { }

    /*屏蔽元素*/
    try {
        var selector = "div.footer,div#header-primary";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector2 = "ul.DiscussionList-discussions>li";
        var includeText2 = ["关于标题党问题公告", "由于小站经常被人恶意cc攻击", "求助帖不发到【求助】板块", "小站防失联平台【小站订阅系统】"];
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
        var insertStyle = document.createElement('style'); insertStyle.innerHTML = ".drawer-backdrop,.dropdown-backdrop{background:black;opacity:0.7 !important;} .Modal-body{background:white;} .modal-backdrop{background:none;}";
        document.head.appendChild(insertStyle);
    } catch (err) { }
})();