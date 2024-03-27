//handle open menu
const LinkList = document.querySelector(".linksList");
const MenuButton = document.querySelector(`#menuButton`);
MenuButton.addEventListener("click", (e) => {
  LinkList.classList.toggle("show");
  console.log("hi");
});

//handle active nav link
const navLinks = Array.from(document.getElementsByClassName("navLink"));
console.log(navLinks);
navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    // Remove "activeLink" class from all links
    navLinks.forEach((link) => {
      link.classList.remove("activeLink");
    });
    // Add "activeLink" class to the clicked link
    element.classList.add("activeLink");
    console.log("hello");
  });
});
