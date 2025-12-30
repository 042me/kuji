const randomPics = [
  "3.png", "4.png", "5.png", "6.png", "7.png",
  "8.png", "9.png", "10.png", "11.png", "12.png"
];

let showingRandom = false; // false: 2.png表示中 / true: ランダム表示中

function rerunFadeAnimation(img) {
  img.style.animation = "none";
  void img.offsetWidth; // reflow
  img.style.animation = "";
}

function setImageWithFade(img, src) {
  rerunFadeAnimation(img);
  img.src = src;
}

window.addEventListener("load", () => {
  const img = document.getElementById("card-image");
  if (!img) return;

  // 初期表示(2.png)もフェードさせる（不要ならこの1行を消してOK）
  setImageWithFade(img, "2.png");

  img.addEventListener("click", () => {
    if (!showingRandom) {
      const idx = Math.floor(Math.random() * randomPics.length);
      setImageWithFade(img, randomPics[idx]);
      showingRandom = true;
    } else {
      setImageWithFade(img, "2.png");
      showingRandom = false;
    }
  });
});
