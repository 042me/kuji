const cards = [
  { name: "undameshi", imageUrl: "3.png" },
  { name: "undameshi", imageUrl: "4.png" },
  { name: "undameshi", imageUrl: "5.png" },
  { name: "undameshi", imageUrl: "6.png" },
  { name: "undameshi", imageUrl: "7.png" },
  { name: "undameshi", imageUrl: "8.png" },
  { name: "undameshi", imageUrl: "9.png" },
  { name: "undameshi", imageUrl: "10.png" },
  { name: "undameshi", imageUrl: "11.png" },
  { name: "undameshi", imageUrl: "12.png" }
];

window.onload = function() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  // カード画像を表示
  document.getElementById('card-image').src = selectedCard.imageUrl;
};
