// オブジェクト
var jsbook = {title: 'javascript入門', price: 2500, stock: 3};


document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;



// pにはプロパティ名が入る
// オブジェクトは配列と違い、必ず順序が守られるとは限らない。
for(var p in jsbook) {
    console.log(p + '=' + jsbook[p]);
}



// オブジェクトに格納された内容が出力される。
// console.log(jsbook);
// オブジェクトのプロパティを指定すると内容が出力される。
// console.log(jsbook.title);
// 連想配列のみたいな指定の方法も可能
// console.log(jsbook['price']);
// プロパティを指定して、中身の書き換えも可能
// jsbook.stock = 10;
// console.log(jsbook.stock);


