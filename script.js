const cards = [
    { name: "mioshie", imageUrl: "3.png" },
    { name: "mioshie", imageUrl: "4.png" },
    { name: "mioshie", imageUrl: "5.png" },
    { name: "mioshie", imageUrl: "6.png" },
    { name: "mioshie", imageUrl: "7.png" },
    { name: "mioshie", imageUrl: "8.png" },
    { name: "mioshie", imageUrl: "9.png" },
    { name: "mioshie", imageUrl: "10.png" },
    { name: "mioshie", imageUrl: "11.png" },
    { name: "mioshie", imageUrl: "12.png" },
    // その他のカードを追加
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};
