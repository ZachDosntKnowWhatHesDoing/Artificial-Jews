// site name variable, include this on every page
const siteName = "Jew Intelegence";

document.addEventListener("DOMContentLoaded", () => {
  document.title = siteName;
  document.querySelectorAll("[data-site-name]").forEach(el => {
    el.textContent = siteName;
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.1});

  document.querySelectorAll('.fade-section').forEach(section => observer.observe(section));
});
