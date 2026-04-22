const menuItems = document.querySelectorAll(".menu li");
const interactiveEls = document.querySelectorAll(".menu li, .profile, .card, .logo");
const particlesWrap = document.getElementById("particles");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

interactiveEls.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    el.style.setProperty("--mx", `${percentX}%`);
    el.style.setProperty("--my", `${percentY}%`);

    if (el.classList.contains("card")) {
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }
  });

  el.addEventListener("mouseleave", () => {
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
    if (el.classList.contains("card")) {
      el.style.transform = "";
    }
  });
});

function createParticle() {
  const p = document.createElement("span");
  p.className = "particle";

  const size = Math.random() * 10 + 6;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.bottom = `-20px`;
  p.style.animationDuration = `${Math.random() * 10 + 10}s`;
  p.style.animationDelay = `${Math.random() * 3}s`;
  p.style.opacity = `${Math.random() * 0.25 + 0.1}`;

  particlesWrap.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 20000);
}

for (let i = 0; i < 14; i++) {
  setTimeout(createParticle, i * 300);
}

setInterval(createParticle, 1200);
