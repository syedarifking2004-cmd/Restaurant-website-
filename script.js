// DARK / LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Keep user preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀";
}

// FORM SUBMISSION
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your table has been booked successfully 🍽");
  this.reset();
});

// SCROLL ANIMATION
const animatedItems = document.querySelectorAll("[data-animate]");

function showOnScroll() {
  animatedItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 50) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);