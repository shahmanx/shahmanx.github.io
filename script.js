const menuItems = document.querySelectorAll(".menu li");
const tabs = document.querySelectorAll(".tab");

menuItems.forEach(item => {
  item.addEventListener("click", () => {

    // remove active
    menuItems.forEach(i => i.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    // activate
    item.classList.add("active");
    document.getElementById(item.dataset.tab).classList.add("active");
  });
});
