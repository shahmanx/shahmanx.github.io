const menuItems = document.querySelectorAll(".menu li");
const interactiveEls = document.querySelectorAll(".interactive, .card, .project-card, .hero, .glass");
const particlesWrap = document.getElementById("particles");

// active menu
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// hover glow + 3d tilt
interactiveEls.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    el.style.setProperty("--mx", `${percentX}%`);
    el.style.setProperty("--my", `${percentY}%`);

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  el.addEventListener("mouseenter", () => {
    el.classList.add("shine");
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
    setTimeout(() => el.classList.remove("shine"), 300);
  });
});

// particles
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

for (let i = 0; i < 18; i++) {
  setTimeout(createParticle, i * 350);
}

setInterval(createParticle, 900);

// Apple-like button press feel
document.querySelectorAll(".cta-btn, .menu a").forEach((el) => {
  el.addEventListener("mousedown", () => {
    el.style.transform = "scale(0.97)";
  });

  el.addEventListener("mouseup", () => {
    el.style.transform = "";
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});
