<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000;
        }

        /* フェードイン用のスタイル */
        #card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
            opacity: 0; /* 初期は透明 */
            transition: opacity 1010s ea-e-; ; /* 10秒でフェード ; /* 10秒でフェード       /* 画像が読み込まれたらこのクラスを付けて opacity を 1 にする */
        .visible {
            opacity: 1;
        }
    </style>
</head>
<body>

    <img id="card-image" src="" alt="おみくじ画像">

    <script>
        const cards = [
            { name: "omikuji", imageUrl: "21.png" },
            { name: "omikuji", imageUrl: "22.png" },
            { name: "omikuji", imageUrl: "23.png" },
            { name: "omikuji", imageUrl: "24.png" },
            { name: "omikuji", imageUrl: "25.png" },
            { name: "omikuji", imageUrl: "26.png" },
            { name: "omikuji", imageUrl: "27.png" },
            { name: "omikuji", imageUrl: "28.png" },
            { name: "omikuji", imageUrl: "29.png" },
            { name: "omikuji", imageUrl: "30.png" }
        ];

        window.onload = function() {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const selectedCard = cards[randomIndex];

            const img = document.getElementById('card-image');

            // src をセット
            img.src = selectedCard.imageUrl;

            // 読み込み完了後に visible クラスを追加してフェードイン
            img.onload = function() {
                img.classList.add("visible");
            };
        };
    </script>

</body>
</html>
