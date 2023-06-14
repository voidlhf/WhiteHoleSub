function removeElements(selector, texts) {
	/*用于屏蔽包含某字符串的元素*/
	var elements = document.querySelectorAll(selector);
	for (var i = 0; i < elements.length; i++) {
		var tempStr = elements[i].innerText;
		for (var j = 0; j < texts.length; j++) {
			var tempStr2 = texts[j];
			if (tempStr.indexOf(tempStr2) != -1) {
				elements[i].style.cssText = "display:none !important";
			}
		}
	}
}

(function () {
	/*设置标题*/
	try {
		var title = document.title;
		document.title = title.replace("完整版免费在线观看-555电影", "");
	} catch (err) { }

	/*屏蔽元素*/
	try {
		var selector = "div#popup,div.fixedGroup,div.footer,div.module-player-handle-items,a.pcbdmap,div.tz,div.logo,div.member_group,div[class^=\"is_\"] > a > img[referrerpolicy=\"no-referrer\"][src*=\"a.yximgs.com\"],div[class^=\"is_\"] > a > img[referrerpolicy=\"no-referrer\"][src*=\"bytednsdoc.com\"],div[class^=\"is_\"] > a > img[referrerpolicy=\"no-referrer\"][src*=\"cms.qq.com\"],div[class^=\"is_\"] > a > img[referrerpolicy=\"no-referrer\"][src*=\"p0.meituan.net\"],document.querySelector("div[style=\"margin:-27px 0 12px 0;\"]")";
		var elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.cssText = "display:none !important";
		}
	} catch (err) { }

	try {
		removeElements("div.homepage > div.main > div.content > div.module", ["本月最佳电影", "本周最佳电影", "Netflix奈飞蓝光4K剧", "555独家专题", "影视资讯", "每周热门"]);
	} catch (err) { }

	try {
		removeElements("ul.navbar-items.swiper-wrapper>li", ["Netflix", "福利", "追剧周表", "专题列表", "排行榜", "今日更新", "留言求片", "APP", "回家地址"]);
	} catch (err) { }

	try {
		removeElements("div.page.view > div.main > div.content > div.module", ["相关推荐"]);
	} catch (err) { }

	try {
		removeElements("div.page.player > div.main > div.content > div.module", ["相关推荐"]);
	} catch (err) { }

	try {
		removeElements("a.mac_ulog.btn-large.btn-collect", ["收藏"]);
	} catch (err) { }
	/*自动关闭通知弹窗*/
	/*try {
		document.querySelector("div.popup-footer>div.popup-btn.close-pop").click();
	} catch (err) { }*/

	try {
		document.querySelector("div.sidebar > div.side-op").style.width = "85px";
	} catch (err) { }

	/*改变主题*/
	try {
		var insertStyle = document.createElement('style'); insertStyle.innerHTML = "body{background:white;color:#333;} a{color:#333;} .module-tab-name{background:white;} .module-tab .module-tab-items,.searchbar-main.open::after{background:white;} .module-tab-item,.play-btn-o{background:#eee;} .module-tab-item{color:#333;}.border-bottom::after, .module-heading-tab::after, .module-tab-title::after, .module-class-items::after, .module-class-item::after, .module-info-introduction::after{background:white;} .header{background:white;} .navbar-item.active a,.module-heading-tab a.module-heading-tab-link{color:#333;} .navbar-item a{color:#333;} .icon-history-o:before,.icon-search:before,.module-heading-tab .module-heading-tab-link.active,.module-item-box a,.module-heading-tab-link{color:#333;} .sidebar-bg,.list .sidebar,.module-heading-tab,.module-class,.module-card-item,.module-card-item-footer{background:white;} .line{color:white;background:white;} .border::after, .btn-block-o::after, .play-btn-o::after, .module-heading-more::after, .module-tab-name::after, .module-class::after, .module-item-box a::after, .module-info-tag-link::after, .module-play-list-link::after,.module-card-item-footer a::before{border:none;} .module-card-item-class::after,.module-card-item-class{background:#eee;color:#333;} span.module-tab-item.m-tab-item.tab-item.active{color:#e50914;} .searchbar-main.open,.searchbar-main.open .searchbar, .searchbar:hover{background:white;} .module-heading-search{border:none;} .module-poster-bg::before,.module-info .module-main,.module-poster-bg .module-item-cover:before,.module-poster-bg:after,.module-list,.module-player-info{background:white;} .module-poster-bg:after{opacity:0;display:none;} .module-poster-bg{display:none;} .module-play-list-link{background:#eee;color:#333;} .module-player-info::after,.shadow, .module-ranking-tab-link, .module-paper-item, .module-list,.side-op,.module-info-poster .module-item-cover,.module-info .module-main{box-shadow:none;} .handle-btn:hover{background:#eee;} .module-play-list-link.active,.module-play-list-link:hover{background:#fff0ec !important;} .drop:hover .drop-content,.drop-item-title i,.drop-item-link::before,.border-top::after, .drop-item-link::after, .module-paper-item-main a::after, .module-info-footer::after, .popup-main p:last-child::after{background:white;} .btn-gray, .drop-item-op a{background:#eee;} .drop-item::after{border:none;} a, h1, h2, h3, h4, h5, h6{color:#333;} .module-poster-items-small .module-poster-item,.module-topic-items-small .module-poster-item{background:white;} .search-box{top:0;} .content{} .header{height:175px;}";
		document.head.appendChild(insertStyle);
	} catch (err) { }

	/*移除懒加载*/
	/*try {
			var selector = "img.lazy.lazyload";
			var elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++) {
					elements[i].src = elements[i].getAttribute("data-original");
			}
	} catch (err) { }*/
})();