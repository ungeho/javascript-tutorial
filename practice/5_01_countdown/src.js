// due...期限,予定
var countdown = function(due) {
    // 日付の初期化
    var now = new Date();

    // (期限として指定された日時 - 現在の日時 ) として差分を取る
    // どちらも1970年1月1日0時0分からのミリ秒を取得しているのでミリ秒単位の時間
    var rest = due.getTime() - now.getTime();
    // 差分の秒数部分を取得
    // 1000で割る事により、ミリ秒単位を秒単位に変換し、秒数部分を取得する為、60で割った余りを取得する。
    var sec = Math.floor(rest / 1000) % 60;
    // 秒単位に変更したものを 60で割る事で分単位に変換、分の部分を取得する為、さらに60で割った余りを取得
    var min = Math.floor(rest / 1000 / 60) % 60;
    // 割ることで、ミリ秒->秒->分->時間と変換し、時間部分の取得の為24で割った余りを取得
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    // 同じように日数に変換、これ以上の単位を使わない為、余りの計算は行わない
    var days = Math.floor(rest / 1000 / 60 / 60 / 24);
    // 取得した日数,時間,分,秒をまとめる。
    var count = [days, hours, min, sec];

    return count;
}

// 1秒毎に再計算したい関数
var recalc = function() {
    var counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = counter[2];
    document.getElementById('sec').textContent = counter[3];


    // var time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
    // document.getElementById('timer').textContent = time;

    // 最後に1秒後にrecalc関数を再度呼び出してくれる関数を呼ぶ
    refresh();
}

var refresh = function() {
    // 1秒後（1000ミリ秒後）にrecalc関数を呼ぶ
    // ここで、recalc()とするとsetTimeoutが終わる前にrecalc関数が呼び出されてエラーになってしまう為
    // ()はつけずに呼び出す必要がある。
    setTimeout(recalc, 1000);
}

// 日時の初期化
// 2028年7月24日を指定、月は0から始まる事に注意
var goal = new Date(2028,6,24,0,0);
// 期限の日時を指定する
// goal.setHours(23);
// goal.setMinutes(59);
// goal.setSeconds(59);


recalc();