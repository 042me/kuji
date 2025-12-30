const cards = [
    { name: "daikichi", imageUrl: "img/daikichi.png" },
    { name: "chukichi", imageUrl: "img/chukichi.png" },
    { name: "chukichi", imageUrl: "img/chukichi.png" },
    { name: "chukichi", imageUrl: "img/chukichi.png" },
    { name: "chukichi", imageUrl: "img/chukichi.png" },
    { name: "shokichi", imageUrl: "img/shokichi.png" },
    { name: "shokichi", imageUrl: "img/shokichi.png" },
    { name: "shokichi", imageUrl: "img/shokichi.png" },
    { name: "shokichi", imageUrl: "img/shokichi.png" },
    { name: "kyou", imageUrl: "img/kyou.png" },
    // その他のカードを追加
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};
