// 모바일 내비게이션 토글
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
  });

  // 링크 클릭 시 자동 닫기 (모바일 UX)
  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      navLinks.classList.remove("nav__links--open");
    }
  });
}