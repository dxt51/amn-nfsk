const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
  }
});