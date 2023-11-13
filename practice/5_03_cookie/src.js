// !!! 正常には動作しない：ローカルだとクッキー動かないので確認するにはwebサーバーにアップする必要があるらしい

// id='form'のonsubmitアクションが動作した時に関数を実行する
document.getElementById('form').onsubmit = function() {
    // クッキー'answerd'を取得し、値が'yes'だった場合、回答済みと出力し、falseを返す事でページ移動をキャンセルする。
    if(Cookies.get('answered') === 'yes') {
        window.alert('回答ずみです。アンケートの回答は１回しかできません。');
        return false;
    } else {
        // クッキーを設定する。以下の場合 answered='yes' のように設定される。
        // expiresは有効期限であり、{expires:7}の場合、7日間有効
        // 無期限を指定する事は出来ない。無期限に近い状態にしたい場合、20年間有効のように長い期間有効にする。
        Cookies.set('answered', 'yes', {expires: 7});
    }
};

// id='remove'のonclickアクションが動作した時に関数を実行する。
// inputタグのsubmitはonsubmitだが、buttonタグがクリックされる時はonclick
document.getElementById('remove').onclick = function() {
    Cookies.remove('answered');
};

