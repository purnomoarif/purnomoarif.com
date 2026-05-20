// ==========================================
// 1. LOGIKA MODE GELAP (DARK MODE)
// ==========================================
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Cek preferensi sebelumnya di LocalStorage
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

// Event Listener untuk Tombol Toggle
themeToggleBtn.addEventListener("click", function () {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});

// ==========================================
// 2. EFEK SALJU (SNOW EFFECT)
// ==========================================
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Karakter salju (bisa diganti dengan titik '.' atau '❅')
  snowflake.innerHTML = "❄";

  // Posisi horizontal acak (0vw hingga 100vw)
  snowflake.style.left = Math.random() * 100 + "vw";

  // Durasi jatuh acak (antara 3 sampai 8 detik)
  snowflake.style.animationDuration = Math.random() * 5 + 3 + "s";

  // Ukuran acak (antara 10px sampai 24px)
  snowflake.style.fontSize = Math.random() * 14 + 10 + "px";

  // Opasitas acak agar terlihat lebih realistis
  snowflake.style.opacity = Math.random() * 0.5 + 0.3;

  document.body.appendChild(snowflake);

  // Hapus elemen setelah selesai animasi agar RAM tidak bocor
  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

// Buat salju baru setiap 300 milidetik
setInterval(createSnowflake, 300);
