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
})();