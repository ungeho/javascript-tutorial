// 現在の日時を取得してnowに代入。
// Dateオブジェクトは複数生成する事が出来る為、newで初期化する。
var now = new Date();
// 代入した日時の中から年の部分を抽出して代入
var year = now.getFullYear();
// 代入した日時の中から月の部分を抽出して代入
// 0から始まる事に注意（1月は0）
var month = now.getMonth();
// 代入した日時の中から日の部分を抽出して代入
var date = now.getDate();
// 代入した日時の中から時の部分を抽出して代入
var hour = now.getHours();
// 代入した日時の中から分の部分を抽出して代入
var min = now.getMinutes();

if(hour < 12) {
    ampm = 'a.m.'
} else {
    ampm = 'p.m.'
}


// 出力したい文字列に整形する
var output = year + '/' + (month + 1) + '/' + date + ' ' + (hour%12) + ':' + min + ampm;

// id=time の部分のタグの中身をoutputで上書きする
document.getElementById('time').textContent = output;
