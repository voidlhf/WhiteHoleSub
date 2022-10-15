(function () {

    /*设置标题*/
    try {
        var title = document.title;
        document.title = title.replace(" _ 厂长资源", "");
    } catch (err) { }

    /*屏蔽元素*/
    try {
        var selector = "div.mi_paly_box>div.mi_ne_kd>div.ypxingq_t,section.comments > div.mi_ne_kd > h1,div#respond,div#minigonggaop,div.ad.footerad,div.mi_btcon.ad,div.ad,div.right_btn,div.footer,div.shuoming,div.mi_down_dy,div.dytop,div.mi_tag,mikd,a.updlbox,div.top_hdp,div#danmu";
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "display:none !important";
        }
    } catch (err) { }

    /*屏蔽包含某字符串的元素*/
    try {
        var selector2 = "div.mikd,div.mi_ne_kd";
        var includeText2 = ["猜您还喜欢", "评论"];
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
        var insertStyle = document.createElement('style'); insertStyle.innerHTML = "body.custom-background,.mi_cont,.nav,.dyxingq,.mi_paly_box,.comments,.comment-head:hover,.juji_box{background:white;} .bt_tit a,.dytit a,.moviedteail_tt,.moviedteail_list li,.ypxingq_t,.ypxingq_t span,.comments .content,.jujiinfo h3{color:#333;} .pagenavi_txt a,.soiput,#commentnavi span, #commentnavi a{background:#eee;} .mi_btcon{border:none;} .bt_tit a.moreb{border:none;background:#eee;} div.nab > svg > path{fill:#333;} .flaticon-cancel30:before,.ptit a,.paycon,.paycon p,.ttmtiart a{color:#333;} .liange{overflow: hidden;} .nav{box-shadow: none;} .moviedteail_list li a,.moviedteail_list li span,.navlist li.current-menu-item a, .navlist li.current_page_item a,.navlist a:hover,.name,.qbpltxt a{color: #09aaf5;} .paly_list_btn a,.juji_list a{color:#333;background:#eee;} .comment-head{background:white;box-shadow:none;} .juji_list a.pbplay{color:white;} .pagenavi_txt span.current, .pagenavi_txt a.current,.pagenavi_txt a:hover,#commentnavi span.current,#commentnavi a:hover{background:#09aaf5;} .paly_list_btn a:hover,.juji_list a.pbplay,.juji_list a:hover{color:white;background:#09aaf5;} .xiluxue,.xilubg{background:white;border:none;} img.lazy{background:none;}";
        document.head.appendChild(insertStyle);
        setInterval(() => {
            try {
                document.querySelector("div.comment-head > div.post-reply").remove();
            } catch (error) { }
        }, 100);
    } catch (err) { }

    try {
        document.querySelector("#dplayer > div.dplayer-video-wrap > video").removeAttribute("poster");
    } catch (err) { }

    try {
        document.querySelector("div.nab").innerHTML = "<img src='https://raw.iqiq.io/voidlhf/WhiteHoleSub/master/img/schedule.svg' style='width:28px;vertical-align: middle;'>";
    } catch (error) { }

    try {
        document.querySelector("div.liange").innerHTML = "<img src='https://raw.iqiq.io/voidlhf/WhiteHoleSub/master/img/menu.svg' style='width:30px;vertical-align: middle;'>";
    } catch (error) { }

    try {
        document.querySelector("div.chage").innerHTML = "<img src='https://raw.iqiq.io/voidlhf/WhiteHoleSub/master/img/close.svg' style='width:30px;vertical-align: middle;'>";
    } catch (error) { }

    try {
        document.cookie = "myannoun=1";
    } catch (error) { }

    /*修改样式*/
    try {
        var selector2 = "div.mi_cont";
        var includeText2 = ["厂长推荐"];
        var elements2 = document.querySelectorAll(selector2);
        for (var i1 = 0; i1 < elements2.length; i1++) {
            var tempStr1 = elements2[i1].innerText;
            for (var j = 0; j < includeText2.length; j++) {
                var tempStr2 = includeText2[j];
                if (tempStr1.indexOf(tempStr2) != -1) {
                    elements2[i1].style.cssText = "margin-top:50px;";
                }
            }
        }
    } catch (err) { }
})();