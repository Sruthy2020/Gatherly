// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  if (body.classList.contains("stormy")) {
    body.classList.replace("stormy", "cloud");
  } else if (body.classList.contains("cloud")) {
    body.classList.replace("cloud", "sunset");
  } else if (body.classList.contains("sunset")) {
    body.classList.replace("sunset", "evening");
  } else {
    body.classList.replace("evening", "stormy");
  }
});
