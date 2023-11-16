// jqueryの記法は()や{}が多い

// 1.イベントを設定したい要素を取得 $(CSSセレクタ)
// 2.その要素にイベントを設定 .xxx(yyy,)
// 3.イベントが発生した時の処理を実行 function(){}の中身
// $()の中身のCSSセレクタはdocument.querySelectorAllと同様（該当するものが複数ある場合、全てに適用）

// $(document) HTMLが
// .ready 読み込まれたら
// functionの中身を実行する
$(document).ready(function(){
    // 見出しがクリックされた時に、サブメニューの表示/非表示を切り替えたいので
    // submenuクラスの子にあるh3タグを取得し
    // on はイベントを設定するjQueryのメソッド、パラメーターが二つある
    // 一つ目はイベント名で、onclickイベントなら'click'、onsubmitイベントなら'submit'のように先頭のonを取ったものを指定
    // 二つ目はファンクション（イベントが発生した時の処理）
    $('.submenu h3').on('click', function(){
        // thisはイベントが発生した要素（ $()でhtml要素のthisをjQueryオブジェクトに変換 ）
        // nextはjQueryメソッドの一つで、弟要素を指す。今回の場合h3のすぐ次にあるulが取得される。
        // toggleクラスメソッドは、指定した要素に()内で指定されたクラス名がついていなければ追加、ついていれば削除する。
        // ulタグについたclass="hidden"がclass=""とトグル式で切り替わる
        $(this).next().toggleClass('hidden');
    })
});