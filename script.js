// ===== X Content Studio v1 =====

// Elements
const postInput = document.getElementById("postInput");
const characterCount = document.getElementById("characterCount");
const analyzeButton = document.getElementById("analyzeButton");
const inputError = document.getElementById("inputError");
const resultsSection = document.getElementById("resultsSection");
const resetButton = document.getElementById("resetButton");
const copyButton = document.getElementById("copyButton");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");

// Character Counter
postInput.addEventListener("input", () => {
  characterCount.textContent = `${postInput.value.length} / 280`;
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀" : "☾";
});

// Toast
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
