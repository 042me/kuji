// おみくじ画像リスト（3〜12.png）
const omikujiPics = [
  "3.png", "4.png", "5.png", "6.png", "7.png",
  "8.png", "9.png", "10.png", "11.png", "12.png"
];

let isOmikuji = false;
const img = document.getElementById("card-image");

/* フェード付きで画像を切り替える */
function changeImageWithFade(src) {
  // 初期化（キャッシュ対策）
  img.classList.remove("visible");
  img.style.opacity = "0";

  // 読み込み完了後にフェードイン
  img.onload = () => {
    requestAnimationFrame(() => {
      img.classList.add("visible");
    });
  };

  img.src = src;
}

/* 初期表示もフェードさせる */
window.addEventListener("load", () => {
  changeImageWithFade("2.png");
});

/* クリック処理 */
img.addEventListener("click", () => {
  if (!isOmikuji) {
    const idx = Math.floor(Math.random() * omikujiPics.length);
    changeImageWithFade(omikujiPics[idx]);
    isOmikuji = true;
  } else {
    changeImageWithFade("2.png");
    isOmikuji = false;
  }
});
