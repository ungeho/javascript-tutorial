var todo = ['デザインカンプ生成', 'データ整理', '勉強会申し込み', '牛乳買う'];

// 配列の最後に項目を追加
todo.push('歯医者に行く');

for(var i = 0; i < todo.length; i++) {
    // console.log(todo[i]);
    // リストタグを作成する
    var li = document.createElement('li');
    // リストタグの内容を入れる
    li.textContent = todo[i];
    // id=listの子に変数li（タグ:li 内容:todo[i]）を追加
    document.getElementById('list').appendChild(li);
}