var enemy = 100;
var attack;
var count = 0;

window.alert('戦闘スタート！');
while(enemy > 0) {
    attack = Math.floor(Math.random() * 30) + 1;
    console.log('モンスターに' + attack + 'のダメージ！');
    enemy = enemy - attack;
    count++;
    if (enemy > 0){
        console.log('モンスターのHPは残り' + enemy + 'になった！');
    }
}
console.log(count + '回の攻撃でモンスターを倒した！');