// Close background nav
let navItems = document.querySelectorAll(".navigation__link");
 
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".navigation__checkbox").click();
    })
})


// Smooth Scroll
const links = document.querySelectorAll(".navigation__nav ul a, .footer__navigation ul a, .btn-text");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
