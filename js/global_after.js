(function () {
    /*网站变灰度*/
    try {
        var myDate = new Date();
        var myMonth = myDate.getMonth() + 1;
        var myDay = myDate.getDate();
        if (myMonth == 12 && myDay == 13) {
            var insertStyle = document.createElement('style');
            insertStyle.innerHTML = "html {filter: grayscale(100%);}";
            document.head.appendChild(insertStyle);
        }
    } catch (err) { }

    /*插入提示*/
    try {
        var arrays = ["voddetail", "detail", "project", "movie", "ddys.tv"];
        arrays.forEach(element => {
            if (location.href.indexOf(element) != -1) {
                if (!document.querySelector("#newSearchButton")) {
                    var searchButton = document.createElement("p");
                    searchButton.setAttribute("id", "newSearchButton");
                    searchButton.setAttribute("class", "title text-fff");
                    searchButton.innerHTML = "<p style='text-align:center;' id='tipsTitle'>小提示<br><span id='arrow'></span></p><p id='whiteholetips' style='display:none;'><span style='font-weight:bold;'>页面任意区域</span>：长按可刷新该页面<br><br><span style='font-weight:bold;'>底部标题区域</span>：点击可打开站点切换对话框(对话框列表可上下滑动展示更多站点，点击站点名可切换至对应站点)，长按可打开操作菜单<br><br><span style='font-weight:bold;'>底部标题文字</span>：小红点出现时表示资源嗅探可用，点击可调用夸克播放器播放视频，长按可调用第三方应用处理视频，当前页面无法播放视频时建议使用此功能<br><br><span style='font-weight:bold;'>站点无法正常打开时</span>：请关闭系统VPN代理或检查网络是否正常<br><br><span style='font-weight:bold;'>Android System WebView</span>：此应用为系统应用，版本过旧可能导致页面加载缓慢或者无法播放视频，请及时更新，更新后可使所有调用系统WebView的应用得到大幅度的性能提升(例如Via浏览器、X浏览器)&nbsp;&nbsp;可通过下方链接下载<br>链接：<a href=\"https://wsmyzl.lanzoui.com/b00fqdmxa\" style=\"color:green;\">点击此处跳转</a>&nbsp;&nbsp;提取码：<span style='color:red;'>6666</span><br>本应用并不支持文件下载(为了获得更好的广告拦截效果)，点击该链接跳转后长按底部标题区域，选择\"复制链接\"将链接复制到剪贴板，之后选择任意浏览器对该链接进行下载即可</p>";
                    searchButton.style.cssText = "color:#ddd;padding:12px;text-align:justify;font-size: 10pt;";
                    document.body.append(searchButton);
                }
            }
        });
        document.querySelector("#tipsTitle").onclick = function () {
            document.querySelector("#whiteholetips").style.cssText = "display: inherit;color:#aaa;";
            document.querySelector("#arrow").innerText = "▽";
            /*this.innerText = this.innerText.replace("(点击查看)", "");*/
            this.style.color = "#aaa";
            /*this.style.fontWeight ="bold";*/
        };
    } catch (err) { }
})();