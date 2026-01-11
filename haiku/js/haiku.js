const haikus = document.querySelectorAll('.haiku');

/* 全表示 */
function showAll() {
  haikus.forEach(h => h.classList.remove('none'));
}

/* カテゴリ表示 */
document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // まず全て隠す
    haikus.forEach(h => h.classList.add('none'));

    // 対象だけ表示
    document.querySelectorAll(`.${target}`).forEach(h => {
      h.classList.remove('none');
    });
  });
});

/* All ボタン */
document.getElementById('show-all').addEventListener('click', showAll);

document.querySelectorAll('.icon-img').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});