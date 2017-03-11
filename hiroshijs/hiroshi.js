// ページ末からの距離を取得
function getScrollBottom() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var scrollTop = body.scrollTop || html.scrollTop;
    return html.scrollHeight - html.clientHeight - scrollTop;
}

// スクロール量の割合を取得
function getScrollRatio() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var scrollTop = body.scrollTop || html.scrollTop;
    return scrollTop / (html.scrollHeight - html.clientHeight);
}

// 発火
function forcedScroll(){
    $('html, body').animate({scrollTop:0},'slow'); //slow, fast, or NNN
}

// main
$(function(){
    $(window).scroll(function(){
        console.log(getScrollRatio());
        if ( getScrollRatio() > 0.8 ){
            forcedScroll();
        }
    });
});

