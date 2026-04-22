document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu li");
  const navLinks = document.querySelectorAll(".menu a");
  const cards = document.querySelectorAll(".card, .project-card");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const icon = item.querySelector("i");
      if (icon) {
        icon.style.transform = "scale(1.15)";
        setTimeout(() => {
          icon.style.transform = "scale(1)";
        }, 180);
      }
    });

    item.addEventListener("mouseenter", (e) => {
      const highlight = document.createElement("div");
      highlight.style.position = "absolute";
      highlight.style.inset = "0";
      highlight.style.borderRadius = "18px";
      highlight.style.pointerEvents = "none";
      highlight.style.opacity = "1";
      highlight.style.transition = "opacity 0.3s ease";
      highlight.style.background = `radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 72%)`;

      item.appendChild(highlight);

      setTimeout(() => {
        highlight.style.opacity = "0";
        setTimeout(() => {
          if (item.contains(highlight)) item.removeChild(highlight);
        }, 300);
      }, 280);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
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

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (y / rect.height - 0.5) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.12s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.45s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });

  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    if (current) {
      menuItems.forEach((item) => item.classList.remove("active"));
      const activeLink = document.querySelector(`.menu a[href="#${current}"]`);
      if (activeLink && activeLink.parentElement) {
        activeLink.parentElement.classList.add("active");
      }
    }
  });
});
