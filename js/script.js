document.addEventListener("DOMContentLoaded", function () {

  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("current-year");
  yearElement.textContent = currentYear;

  const toggleButtons = document.querySelectorAll(".toggle-button");
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const allSections = document.querySelectorAll(".toggle-section");
        allSections.forEach(function (section) {
          if (section !== targetSection) {
            section.style.display = "none";
          }
        });

        if (targetSection.style.display === "none" || targetSection.style.display === "") {
          targetSection.style.display = "block";
        } else {
          targetSection.style.display = "none";
        }
      }
    });
  });

  document.querySelector(".close-button").addEventListener("click", function () {
    const allSections = document.querySelectorAll(".toggle-section");
    allSections.forEach(function (section) {
      section.style.display = "none";
    });
  });

});
