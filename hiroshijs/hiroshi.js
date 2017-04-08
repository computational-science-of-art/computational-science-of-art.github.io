$(function(){
    // AudioElement を作成
    var audio = new Audio('');

    // hiroshiの状態
    var isDead = Boolean(false);

    // hiroshiの画像と音声をプリロード（キャッシュに保存）
    preload();

    // hiroshiを設置
    initialize();
    
    // スクロールで発火するイベント
    $(window).scroll(function(){
        if ( getScrollRatio() > 0.8 && !isDead){
            forcedScroll();
        }
    });

    // プリロード（キャッシュに保存）する
    function preload() {
        // hiroshiの画像をプリロード
        $("<img>").attr("src", "./hiroshijs/hiroshi2.png");

        // プリロードする設定
        audio.preload = "auto";

        // パス指定（ここでプリロードされる）
        audio.src = "./hiroshijs/hiroshi.wav";
    }

    // hiroshiを設置
    function initialize() {
        // hiroshi挿入
        $('body').append('<div class="hiroshi"></div>')

        /*
          hiroshiの位置を固定
          bottom: ウィンドウ下からの位置, right: 右からの位置
        */
        $('.hiroshi').css({"position":"fixed","bottom":'100px',"right":"100px"});
        $('.hiroshi').html('<img src="./hiroshijs/hiroshi1.png" width="100">');
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
        isDead = Boolean(true);

        // hiroshiの画像を変更
        $('.hiroshi img').attr('src', './hiroshijs/hiroshi2.png');

        // 強制スクロール
        $('html, body').animate({scrollTop:0}, 400, 'swing', restore);

        // 音を流す
        scream();
    }

    // 復活
    function restore(){
        isDead = Boolean(false);
        setTimeout(function(){
            $('.hiroshi').html('<img src="./hiroshijs/hiroshi1.png" width="100">');
        }, 50);
    }

    // サウンド再生
    function scream() {
        // 再生を開始する
        audio.play();

        // オブジェクトを作りなおすと割り込みの再生ができる。他に方法があれば差し替える
        audio = new Audio('./hiroshijs/hiroshi.wav');
    }
});
