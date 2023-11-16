// htmlが読み込まれたら関数を実行
$(document).ready(function(){
    // id='box_btn'（menu）がクリックされたら関数を実行
    $('#box_btn').on('click', function(){
        // id='box'をトグル式でid='box'とid=''を切り替える
        // ToggleClassと違い、sideToggleは縦方向にスライドするアニメーションが入る
        // 'fast','slow',ミリ秒単位などでアニメーションの速度を指定できる。
        $('#box').slideToggle(500);
    });
});