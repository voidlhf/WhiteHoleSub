(function () {

	/*资源嗅探提示*/
	/*try {
		if (location.href.startsWith("https://cokemv.me/vodplay/")) {
			if (!document.querySelector("#newSearchButton1")) {
				var searchButton = document.createElement("h3");
				searchButton.setAttribute("id", "newSearchButton1");
				searchButton.innerText = "▷ 当前站点不支持资源嗅探";
				searchButton.style.cssText = "color:red;font-size:10pt;font-weight: normal;";
				var insertIndex = document.querySelector("div.module-info-heading");
				insertIndex.insertBefore(searchButton, insertIndex.firstElementChild);
			}
		}
	} catch (err) { }*/

	/*设置标题*/
	try {
		document.title = document.querySelector("body > div > span.vod_history.hide").getAttribute("data-name") + document.querySelector("body > div > span.vod_history.hide").getAttribute("data-part");
	} catch (err) { }

	/*屏蔽元素*/
	try {
		var selector = "div.fixedGroup,div.footer,div.module-player-handle-items,div.member_group,body > div > strong > div > div > div.search-box > div > form > div.searchbar > a";
		var elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.cssText = "display:none !important";
		}
	} catch (err) { }

	/*屏蔽包含某字符串的元素*/
	try {
		var selector2 = "li.swiper-slide.navbar-item,div.module";
		var includeText2 = ["APP", "留言板", "相关推荐", "今日更新", "热搜榜"];
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

	/*屏蔽包含某字符串的元素2*/
	try {
		if (location.href.startsWith("https://cokemv.me/voddetail/")||location.href.startsWith("https://cokemv.me/vodplay/")) {
			var selector2 = "div.module";
			var includeText2 = ["正在热映"];
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
		}
	} catch (err) { }

	/*自动关闭通知弹窗*/
	/*try {
		document.querySelector("div.popup-btn.close-pop").click();
	} catch (err) { }*/

	try {
		document.querySelector("div.sidebar > div.side-op").style.width = "85px";
	} catch (err) { }

	try {
		document.querySelector("div#popup").remove();
	} catch (err) { }

	try {
		document.querySelector("body > script:nth-child(5)").nextSibling.remove();
	} catch (err) { }

	/*改变主题*/
	try {
		var insertStyle = document.createElement('style'); insertStyle.innerHTML = "body{background:white;color:#333;} a{color:#333;} .module-tab-name{background:white;} .module-tab .module-tab-items{background:white;} .module-tab-item,.play-btn-o{background:#eee;} .module-tab-item{color:#333;}.border-bottom::after, .module-heading-tab::after, .module-tab-title::after, .module-class-items::after, .module-class-item::after, .module-info-introduction::after{background:white;} .header{background:white;} .navbar-item.active a,.module-heading-tab a.module-heading-tab-link{color:#333;} .navbar-item a{color:#333;} .icon-history-o:before,.icon-search:before,.module-heading-tab .module-heading-tab-link.active,.module-item-box a,.module-heading-tab-link{color:#333;} .sidebar-bg,.list .sidebar,.module-heading-tab,.module-class,.module-card-item,.module-card-item-footer{background:white;} .line{color:white;background:white;} .border::after, .btn-block-o::after, .play-btn-o::after, .module-heading-more::after, .module-tab-name::after, .module-class::after, .module-item-box a::after, .module-info-tag-link::after, .module-play-list-link::after,.module-card-item-footer a::before{border:none;} .module-card-item-class::after,.module-card-item-class{background:#eee;color:#333;} span.module-tab-item.m-tab-item.tab-item.active{color:#e50914;} .searchbar-main.open,.searchbar-main.open .searchbar, .searchbar:hover{background:white;} .module-heading-search{border:none;} .module-poster-bg::before,.module-info .module-main,.module-poster-bg .module-item-cover:before,.module-poster-bg:after,.module-list,.module-player-info{background:white;} .module-poster-bg:after{opacity:0;display:none;} .module-poster-bg{display:none;} .module-play-list-link{background:#eee;color:#333;} .module-player-info::after,.shadow, .module-ranking-tab-link, .module-paper-item, .module-list,.side-op,.module-info .module-main,.module-info-poster .module-item-cover{box-shadow:none;} .handle-btn:hover{background:#eee;} .module-play-list-link.active,.module-play-list-link:hover{background:#fff0ec !important;} .drop:hover .drop-content,.drop-item-title i,.drop-item-link::before,.border-top::after, .drop-item-link::after, .module-paper-item-main a::after, .module-info-footer::after, .popup-main p:last-child::after{background:white;} .btn-gray, .drop-item-op a{background:#eee;} .drop-item::after{border:none;}";
		document.head.appendChild(insertStyle);
	} catch (err) { }

})();