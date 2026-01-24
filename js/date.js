window.onload = function () {
    var today = new Date();

    // 曜日の配列（日曜=0）
    const day = ["日", "月", "火", "水", "木", "金", "土"];

    document.getElementById('year').textContent =
        today.getFullYear() + "年";

    document.getElementById('date').textContent =
        (today.getMonth() + 1) + "月" +
        today.getDate() + "日" +
        "(" + day[today.getDay()] + ")";
};
