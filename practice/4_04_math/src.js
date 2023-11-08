var point = function(num, digit) {
    // 10^digitをtimenに代入
    var time = Math.pow(10, digit);
    // numの桁を指定された分だけ引き上げた後に床関数で小数点を切り捨て、再度指定された桁数だけ引き下げる
    return Math.floor(num * time) / time;
}


document.getElementById('pi').textContent = Math.PI;
document.getElementById('piRoundDown').textContent = Math.floor(Math.PI);
document.getElementById('output').textContent = point(Math.PI, 2);