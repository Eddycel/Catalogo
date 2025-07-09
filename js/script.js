document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");

  if (!banner) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      banner.classList.add("shrink");
    } else {
      banner.classList.remove("shrink");
    }
  });
});
