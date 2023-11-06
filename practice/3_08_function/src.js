// 税込み価格を計算する関数の定義
var total = function(price) {
    var tax = 0.08;
    return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円（税込）です。');

// 指定されたIDのタグの内容を書き換える。
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円（税込）です。';
document.getElementById('output2').textContent = 'コーヒーメーカーの値段は' + total(200) + '円（税込）です。';
document.getElementById('output3').textContent = 'コーヒーメーカーの値段は' + total(1000) + '円（税込）です。';
