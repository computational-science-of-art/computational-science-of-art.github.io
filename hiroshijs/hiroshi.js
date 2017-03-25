
// main
$(function(){
    // hiroshiの画像をプリロード（キャッシュに保存）する
    $("<img>").attr("src", "./hiroshijs/hiroshi2.png" );
    
    // hiroshi挿入
    $('body').append('<div class="hiroshi"></div>')

    /*
      hiroshiの位置を固定
      bottom: ウィンドウ下からの位置, right: 右からの位置
    */
    $('.hiroshi').css({"position":"fixed","bottom":'100px',"right":"100px"});
    $('.hiroshi').html('<img src="./hiroshijs/hiroshi1.png" width="100">');

    $(window).scroll(function(){
        if ( getScrollRatio() > 0.8 ){
            forcedScroll();
        }
        if ( getScrollRatio() == 0 ){
            $('html, body').stop();
            setTimeout(function(){
                $('.hiroshi').html('<img src="./hiroshijs/hiroshi1.png" width="100">');
            },200);
        }
    });
});

// スクロール量の割合を取得
function getScrollRatio() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var scrollTop = body.scrollTop || html.scrollTop;
    return scrollTop / (html.scrollHeight - html.clientHeight);
}

// 発火
function forcedScroll(){
    // ヒロシの画像を変更
    $('.hiroshi img').attr('src', './hiroshijs/hiroshi2.png');

    // 強制スクロール
    $('html, body').animate({scrollTop:0}, 400, 'swing'); //slow, fast, or NNN
}
