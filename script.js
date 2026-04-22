document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("main section[id]");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetId = item.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();

        menuItems.forEach((link) => link.classList.remove("active"));
        item.classList.add("active");

        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  const hoverCards = document.querySelectorAll(".card, .project-card, .panel");

  hoverCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (y / rect.height - 0.5) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    if (current) {
      menuItems.forEach((item) => item.classList.remove("active"));
      const active = document.querySelector(`.menu-item[href="#${current}"]`);
      if (active) active.classList.add("active");
    }
  });
});
