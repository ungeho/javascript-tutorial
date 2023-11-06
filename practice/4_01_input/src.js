
// formの検索ボタンがクリックされたらconsoleに'クリックされました。'と表示する。
// submitボタンのinputタグではなく、その親要素のformタグを指定して、onsubmitのアクションを取得する事に注意
document.getElementById('form').onsubmit = function() {
    // console.log('クリックされました。');

    // id=formの中のwordの値（value）をsearchに代入し、id=outputの内容を編集する。
    var search = document.getElementById('form').word.value;
    document.getElementById('output').textContent = '『' + search + '』の検索中...'

    // formの基本動作、データ送信とページ移動をキャンセル
    return false;
};