<script>
const images = [
  "/images/profile-ov.png",
  "/images/illust-ov.png",
  "/images/poem-ov.png",
  "/images/haiku-ov.png",
  "/common/images/bt-home-ov.png",
  "/common/images/bt-illust-ov.png",
  "/common/images/bt-poem-ov.png",
  "/common/images/bt-haiku-ov.png",
  "/common/images/top-ov.png",
  "/common/images/next-ov.png",
  "/common/images/prev-ov.png",
  "/haiku/images/all-ov.png",
  "/haiku/images/grazia-ov.png",
  "/haiku/images/calma-ov.png",
  "/common/images/forza-ov.png"
];

images.forEach(src => {
  const img = new Image();
  img.src = src;
});
</script>