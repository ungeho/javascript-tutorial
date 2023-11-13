// スライドに表示したい画像
var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

// 現在のスライド番号
var current = 0;

// スライド番号の表示
var pageNum = function() {
    // 現在のスライド番号/スライドの総数
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
};

// スライドの移動
var changeImage = function(num) {
    // 前へ（num = -1）や次へ（num = 1）が与えられた時、（前/次）へのページが存在する場合にページ移動の処理を行う。
    if(current + num >= 0 && current +num < images.length) {
        // スライド番号を（前/次）のものに更新
        current += num;
        // 指定されたスライド番号（前/次）へ移動。
        document.getElementById('main_image').src = images[current];
        // 表示するスライド番号を更新する。
        pageNum();
    }
};

// 前へ移動
document.getElementById('prev').onclick = function() {
    changeImage(-1);
};

// 次へ移動
document.getElementById('next').onclick = function() {
    changeImage(1);
};

// ブラウザを開いた時に表示するスライド番号。
pageNum();