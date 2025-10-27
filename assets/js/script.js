// Typed.js Effect
const typed = new Typed("#typed", {
  strings: ["Welcome to My CV Website!", "Hye, I'm Rynna Qarmila", "Information Technology Student"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Back to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

