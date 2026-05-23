const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const themeToggleBtn = document.getElementById("theme-toggle");

// Mengecek tema saat halaman pertama kali dimuat
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeToggleDarkIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  themeToggleLightIcon.classList.remove("hidden");
}

// Logika saat tombol toggle ditekan
themeToggleBtn.addEventListener("click", function () {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // Jika tema sebelumnya adalah dark mode
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    // Jika tema sebelumnya adalah light mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});
