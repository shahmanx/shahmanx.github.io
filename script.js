document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".hero h1 .word");

  words.forEach((word) => {
    const text = word.textContent;
    word.innerHTML = "";

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.classList.add("char");
      span.textContent = char;
      word.appendChild(span);
    });
  });

  const cursor = document.getElementById("cursor");
  const magneticElements = document.querySelectorAll(".magnetic");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    if (cursor) {
      cursorX = lerp(cursorX, mouseX, 0.15);
      cursorY = lerp(cursorY, mouseY, 0.15);
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    }
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = 0.22;

      const moveX = (e.clientX - centerX) * dist;
      const moveY = (e.clientY - centerY) * dist;

      el.style.transform = `translate(${moveX}px, ${moveY}px)`;

      if (cursor) cursor.classList.add("magnet");
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
      if (cursor) cursor.classList.remove("magnet");
    });
  });

  const nav = document.querySelector(".brutal-nav");
  let isScrolled = false;

  window.addEventListener("scroll", () => {
    if (!nav) return;

    if (window.scrollY > 100) {
      if (!isScrolled) {
        nav.classList.add("scrolled");
        isScrolled = true;
      }
    } else {
      if (isScrolled) {
        nav.classList.remove("scrolled");
        nav.style.transform = "";
        isScrolled = false;
      }
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (!nav || !isScrolled) return;

    const cx = window.innerWidth / 2;
    const cy = 100;

    const rx = (e.clientY - cy) * 0.02;
    const ry = (e.clientX - cx) * 0.02;

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    nav.style.transform =
      `translateX(-50%) perspective(1000px) ` +
      `rotateX(${-clamp(rx, -8, 8)}deg) ` +
      `rotateY(${clamp(ry, -8, 8)}deg)`;
  });

  const content = document.getElementById("scroll-content");
  let skew = 0;
  let lastScrollTop = window.scrollY;

  function scrollLoop() {
    const scrollTop = window.scrollY;
    const velocity = scrollTop - lastScrollTop;
    lastScrollTop = scrollTop;

    const maxSkew = 4;
    const speed = Math.min(Math.max(velocity * 0.08, -maxSkew), maxSkew);
    skew = lerp(skew, speed, 0.1);

    if (content) {
      if (Math.abs(skew) > 0.01) {
        content.style.transform = `skewY(${skew}deg)`;
      } else {
        content.style.transform = "skewY(0deg)";
      }
    }

    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();

  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  document.querySelectorAll("[data-text]").forEach((link) => {
    link.addEventListener("mouseenter", (event) => {
      let iter = 0;
      const target = event.currentTarget;
      const original = target.dataset.text;

      clearInterval(target.interval);

      target.interval = setInterval(() => {
        target.innerText = original
          .split("")
          .map((letter, index) => {
            if (index < iter) return original[index];
            return alpha[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iter >= original.length) {
          clearInterval(target.interval);
        }

        iter += 1 / 3;
      }, 30);
    });

    link.addEventListener("mouseleave", (event) => {
      const target = event.currentTarget;
      clearInterval(target.interval);
      target.innerText = target.dataset.text;
    });
  });
});
