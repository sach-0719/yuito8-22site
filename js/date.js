window.onload = function () {
    var today = new Date();
    const startDate = new Date(2021, 10, 14); // 2021年11月14日

    // 年の差
    let years = today.getFullYear() - startDate.getFullYear();
    if (
        today.getMonth() < startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
    ) {
        years--;
    }

    // 曜日
    const day = ["日", "月", "火", "水", "木", "金", "土"];

    // 年を表示
    document.getElementById('year').textContent = "今日は" + today.getFullYear() + "年";

    // 日付を表示
    document.getElementById('date').textContent =
        (today.getMonth() + 1) + "月" +
        today.getDate() + "日" +
        "(" + day[today.getDay()] + ")";

    // 経過年数を表示
    document.getElementById('syunen').textContent =
        "今年でYUITO8-22のアカウント開設から、" + (years+1) + "周年となりました。これからもよろしくお願いします。";

    // 11月14日だけカードを表示
    if (today.getMonth() === 10 && today.getDate() === 14) { // 11月は10
        document.getElementById("thankyou").style.display = "flex";
    } else {
        document.getElementById("thankyou").style.display = "none";
    }
};
