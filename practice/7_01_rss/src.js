// webサーバーが無いと動作を確認するのは厳しそう
$(document).ready(function(){
	var rssURL = "http://solidpanda.com/book/feed/";
	$.ajax({
        // url: 'samplefeed.xml'
		url: 'cdxml.php',
		type: 'GET',
		dataType: 'xml',
		data: {
            url: rssURL
		}
	})
	.done(function(data){
		// 取得できた場合の処理
		// 取得したデータからchannelタグの中のitemタグの要素を全て取得し、繰り返す
		$(data).find('channel item').each(function(){
			// itemタグの子要素としてtitleタグに囲まれたテキストをitemTitleに代入する
			var itemTitle = $(this).find('title').text();
			// itemタグの子要素としてlinkタグに囲まれたテキストをparmaLinkに代入する
			var parmaLink = $(this).find('link').text();

			// 更新日時を取得
			var pubText = $(this).find('pubDate').text();
			// Dateオブジェクトを作成
			var pubDate = new Date(pubText);
			// (年/月/日)の形に整形
			var dateString = '(' + pubDate.getFullYear() + '/' + (pubDate.getMonth() + 1) + '/' + pubDate.getDate() + ')';

			// ulがどこから付与されたかわからない
			// <ul id="latest"> *** </ul>になるらしい
			$('#latest').append(
				// ulの中にliタグを付与
					// liタグの中にaタグを付与
					// aタグにhref = parmaLink 属性を付与
					// aタグのテキストをitemTitleで挿入
					// 更新日時のテキストをliタグの後に追加
				$('<li></li>').append(
					$('<a></a>')
					.attr('href', parmaLink)
					.text(itemTitle)
				)
				.append(dateString)
			)
		});
		// 取得したデータの中身をコンソールで確認
		// console.log(data);
	})
	.fail(function(){
		window.alert('データの読み込みに失敗しました。');
	});
});