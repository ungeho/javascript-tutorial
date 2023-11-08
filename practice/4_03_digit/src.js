var addZero = function(num, digit) {
    // 数値を文字列に変換
    var numString = String(num);
    // 設定された桁数に対して、足りない分だけ先頭に0をつける
    while(numString.length < digit) {
        numString = '0' + numString;
    }
    return numString;
}

var songs = [
    'Stella By Starlight',
    'Satin Doll',
    'Caravan',
    'Besame Mucho',
    'My Favorite Things',
    'Taking A Chance On Love',
    'Fly Me To The Moon',
    'Waltz For Debby',
    'Willow Weep For Me',
    'Bluesette'
];

songsListDigit = Math.floor((songs.length/10) + 1);

for (var i = 0; i < songs.length; i++) {
    // pタグを変数に代入
    var paragraph = document.createElement('p');
    // pタグの中身を0つきの番号 + 曲名にする。
    paragraph.textContent = addZero(i + 1, songsListDigit) + '. ' + songs[i];
    // id=listのタグの子要素としてparagraph変数を書き込む。
    document.getElementById('list').appendChild(paragraph);
}



// console.log(addZero(7, 3));