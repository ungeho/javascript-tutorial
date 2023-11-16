// 私の環境では確認出来なかった（確認する為にはウェブサーバーにアップする必要があるらしい）


// Ajaxでのデータの送受信は同一オリジン（完全に同一のurl）に制限されている。


// HTMLが読み込まれたら関数を実行する。
$(document).ready(function(){
    // ファイルの読み込み
    // ファイル（data.json）の読み込みに成功した場合はdoneが実行され、失敗した場合はfailの部分が実行される。
    // ajaxはページを切り替えることなく、データの送受信を行い画面の一部のみを変更する事が出来る。
    // 読み込みたいデータとその形式を指定する。
    // jsonはJavaScriptの配列とオブジェクトの文法を取り入れたデータ形式

    $.ajax({url: 'data.json', dataType: 'json'})
    .done(function(data){
        // $()は配列なども指定できる。
        // 配列に含まれる項目をすべて取得する。
        // eachは取得したhtml要素や配列の項目一つ一つに対してfunctionを実行する
        $(data).each(function(){
            // オブジェクトのプロパティ値を読み取るのはjavascriptであるため、ここのthisは$()で括らない
            // crewdedプロパティの値が'yes'だった時
            if(this.crowded === 'yes') {
                // idプロパティ（id名を入れている）の先頭に#をつけてidNameに代入
                var idName = '#' + this.id;
                // idNameと一致するクラス名の要素（最初の繰り返しで該当した場合"js"）から
                // 子要素の中でclass="check"を見つけ出し、"crowded"クラスを追加する（class="check" -> class="check crowded"）
                $(idName).find('.check').addClass('crowded');
            }
        });
    })
    .fail(function(){
        window.alert('読み込みエラー');
    });

    // クリックされたら空き席状況を表示
    $('.check').on('click',function(){
        // クラス名に"crowded"がある場合、さらに"red"をクラス名として追加（CSSによって背景色を赤に）
        // クラス名に"crowded"がない場合、さらに"green"をクラス名として追加（CSSによって背景色を緑に）
        if($(this).hasClass('crowded')) {
            $(this).next('残席わずか').addClass('red');
        } else {
            $(this).next('お席あります').addClass('green');
        }
    });
});