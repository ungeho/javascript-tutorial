// onchangeイベントは内容が変わった時に発生する
// テキストフィールドの場合、入力内容。プルダウンメニューの場合、選択項目など
// プルタウンメニューのイベントはselectに発生するので、formの子要素のselectのonchangeイベントを取得するように指定
// onchangeイベントが発生した時、function以降の処理が実行される。
document.getElementById('form').select.onchange = function() {
    // プルダウンメニューの場合、optionの親要素であるselectのvalue属性を読み取る
    // locationオブジェクトのhrefプロパティは表示しているページのURLを表す。
    // これを変更する事でブラウザは即座にページを移動する
    location.href = document.getElementById('form').select.value;
}


// htmlタグのlang情報を読み取る
// querySelectorはCSSのセレクターのように要素を選択出来る。
// ただし、複数の要素にマッチするセレクタを指定した場合、一番上の要素のみが選択される。
var lang = document.querySelector('html').lang;

// htmlタグのlang情報によって、同様のoptionタグにselected属性を付与する。
// selected属性を付与することで、初めから選択された状態になる。
var opt;
if(lang === 'ja') {
    opt = document.querySelector('option[value="index.html"]');
} else if(lang === 'en') {
    opt = document.querySelector('option[value="index-en.html"]');
} else if(lang === 'zh') {
    opt = document.querySelector('option[value="index-zh.html"]')
}
opt.selected = true;