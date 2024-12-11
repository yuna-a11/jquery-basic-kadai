// HTMLの読み込みが完了したら、「loadイベントが発生しました」と出力
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// スクロールしたら、「scrollイベントが発生しました」と出力
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
