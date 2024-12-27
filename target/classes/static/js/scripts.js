// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeToggleButton.innerHTML = "Switch to Light Theme";
  } else {
    themeToggleButton.innerHTML = "Switch to Dark Theme";
  }
});
