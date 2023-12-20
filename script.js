document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".ham.icon");
  const closeIcon = document.querySelector(".close.icon");
  const navList = document.querySelector(".list");

  hamburgerIcon.style.display = "none";

  hamburgerIcon.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      openNavList();
    }
  });

  closeIcon.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      closeNavList();
    }
  });

  document.addEventListener("click", function (event) {
    if (window.innerWidth < 768) {
      const isClickInsideNav =
        navList.contains(event.target) || hamburgerIcon.contains(event.target);

      if (!isClickInsideNav) {
        closeNavList();
      }
    }
  });

  function openNavList() {
    navList.style.display = "flex";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  }

  function closeNavList() {
    navList.style.display = "none";
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
