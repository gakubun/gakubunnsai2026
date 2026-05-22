// JavaScript内の条件分岐（開催中の部分）を書き換え
if (now >= startDate && now <= endDate) {
    statusWrapper.innerHTML = "✨<br><strong>本日開催中！</strong>"; // 改行を入れて縦にボリュームを出す
    statusWrapper.style.color = "#fff";
}

// 1. 現在の時刻を取得
function updateCountdown() {
        const now = new Date();
    
        // 開始日: 5月21日 00:00:00
        const startDate = new Date('2026/05/21 00:00:00');
        // 終了日: 5月24日 23:59:59 (この時間まで「開催中」とする)
        const endDate = new Date('2026/05/24 23:59:59');
    
        const statusWrapper = document.getElementById('countdown-status');
        const daysElement = document.getElementById('countdown-days');

        if (now < startDate) {
            // 【開催前】あと何日か計算
            // 5/21 00:00ちょうどを基準に、端数を切り上げて計算
            const diff = startDate - now;
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            daysElement.textContent = days;
        } 
        else if (now >= startDate && now <= endDate) {
            // 【期間中】5/21〜5/24の間
            // ★「✨」もすべてstrongの中に入れることで、一塊のデータとして縮小・改行防止されます
            statusWrapper.innerHTML = "<strong class='active-flash'>✨ 学文祭 本日開催中！ ✨</strong>";
            statusWrapper.style.color = "#227924"; 
            
            // 親要素自体の改行も念のため禁止しておく
            statusWrapper.style.whiteSpace = "nowrap";
        }
        else {
            // 【終了後】5/25以降
            statusWrapper.textContent = "学文祭は無事終了しました。ご来場ありがとうございました！";
            statusWrapper.style.color = "#666";
        }
    }

    // ページを読み込んだ時に実行
    updateCountdown();
