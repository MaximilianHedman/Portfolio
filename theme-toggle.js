const toggleThemeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  toggleThemeButton.textContent = "Change to Dark Mode";
} else {
  document.body.classList.remove("light-mode");
  toggleThemeButton.textContent = "Change to Light Mode";
}

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");

  toggleThemeButton.textContent = isLightMode
    ? "Change to Dark Mode"
    : "Change to Light Mode";

  localStorage.setItem("theme", isLightMode ? "light" : "light");
});