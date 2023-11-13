// querySelectorはクエリに複数該当する場合、一番上の一つだけそ取得したが
// querySelectorAllはクエリに該当するものを全て取得する。
var thumbs = document.querySelectorAll('.thumb');
// 取得した中身を見る事が出来る。
console.log(thumbs);

// 取得したクエリを全て対象にする
for(var i = 0; i < thumbs.length; i++) {
    // for文の中に関数を定義できる
    // こうすることで、対象のクエリの全てがonclick属性が発生した時に関数内の処理が実行される。
    thumbs[i].onclick = function() {
        // this -> onclickが発生した時の要素
        // console.log(thumbs);で確認した中身から、thisで対象の要素->dataset->imageと辿ると同様のものが格納されている。
        // また、htmlでdata-****のように属性を設定した****の部分は、dataset.****のような形で確認出来る。
        console.log(this.dataset.image);

        // id=bigimg の src属性の値を、this.dataset.imageで上書きする。
        document.getElementById('bigimg').src = this.dataset.image;
    };
}