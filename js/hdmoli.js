(function () {

  /**关闭弹窗 */
  try {
    document.querySelector("#layui-layer1 > span.layui-layer-setwin > a").click()
  } catch (error) { }

  /*资源嗅探提示*/
  try {
    if (location.href.startsWith("https://www.hdmoli.com/play/")) {
      if (!document.querySelector("#newSearchButton1")) {
        var searchButton = document.createElement("h3");
        searchButton.setAttribute("id", "newSearchButton1");
        searchButton.innerText = "▷ 当前站点资源嗅探可能导致无法显示字幕，如若出现该情况，请勿使用资源嗅探";
        searchButton.style.cssText = "color:red;font-size:10pt;font-weight: normal;";
        var insertIndex = document.querySelector("div.col-pd.clearfix");
        insertIndex.insertBefore(searchButton, insertIndex.firstElementChild);
      }
    }
  } catch (err) { }

  /*设置标题*/
  try {
    document.title = document.title.replace(" - HDmoli", "");
    var name = document.querySelector("span.vod_history.hide").getAttribute("data-name");
    var part = document.querySelector("span.vod_history.hide").getAttribute("data-part");
    if (name && part) {
      document.title = name + " " + part;
    }
  } catch (err) { }

  /*屏蔽元素*/
  try {
    var selector = "ul.myui-extra.clearfix,div.myui-foot.clearfix,div.tips.close-box,div.myui-ra-container.container,div#playlist1>p.text-muted.col-pd,div.clearfix.myui-panel-bg.myui-panel:nth-of-type(2),div.myui-content__detail > div.operate.clearfix > a.btn.btn-lg.btn-primary";
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.cssText = "display:none !important";
    }
  } catch (err) { }

  /*屏蔽包含某字符串的元素*/
  try {
    var selector2 = "div.myui-panel.myui-panel-bg.clearfix,ul.myui-header__menu.nav-menu>li";
    var includeText2 = ["常用网站", "专题", "相似影片", "留言", "重磅福利"];
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

  /*屏蔽包含某字符串的元素*/
  try {
    var selector2 = "p.text-muted.col-pd";
    var includeText2 = ["广告", "贴士", "推荐："];
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
    var insertStyle = document.createElement('style'); insertStyle.innerHTML = "body, body.active{padding-bottom: 0px;} body,.myui-topbg,.myui-header__top,div#player-sidebar{background: white;} .myui-panel-bg, .myui-panel-bg2{box-shadow: none;} .text-fff,.myui-header__menu > li > a,.myui-header__user > li > a, .myui-header__user > li > a .fa{color: #333;} .top-line:before, .bottom-line:after, .top-line-dot:before, .bottom-line-dot:before{border-color: white;} .myui-header__user > li .dropdown-box{margin-right: 0px;}";
    document.head.appendChild(insertStyle);
  } catch (err) { }

  setInterval(() => {
    try {
      if (document.querySelector("#cciframe").contentDocument.querySelector("div#player > iframe").contentDocument.querySelector("div#ad")) {
        document.querySelector("#cciframe").contentDocument.querySelector("div#player > iframe").contentWindow.dpclose = null;
        document.querySelector("#cciframe").contentDocument.querySelector("div#player > iframe").contentDocument.querySelector("div#ad").remove();
      }
    } catch (error) { }
  }, 100);
})();