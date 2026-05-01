// JavaScript内の条件分岐（開催中の部分）を書き換え
if (now >= startDate && now <= endDate) {
    statusWrapper.innerHTML = "✨<br><strong>本日開催中！</strong>"; // 改行を入れて縦にボリュームを出す
    statusWrapper.style.color = "#fff";
}
