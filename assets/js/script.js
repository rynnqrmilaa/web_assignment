function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌕";
  } else {
    themeToggle.textContent = "🌙";
  }
});
