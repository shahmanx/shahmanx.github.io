/* ── TAB CONTENT ── */
const menuItems = document.querySelectorAll(".menu li");
const titleEl = document.getElementById("page-title");
const subtitleEl = document.getElementById("page-subtitle");
const contentBody = document.getElementById("content-body");

const tabContent = {
  overview: {
    title: "Performance marketing built for conversion",
    subtitle:
      "I help brands grow through paid ads, website optimization, conversion tracking, and automation systems.",
    html: `
      <div class="quick-grid">
        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-bullhorn"></i></div>
          <div class="quick-copy">
            <h3>Paid Ads</h3>
            <p>Campaign setup, testing, and optimization focused on real results.</p>
          </div>
        </div>
        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-chart-line"></i></div>
          <div class="quick-copy">
            <h3>Tracking</h3>
            <p>Lead conversion tracking setup for better performance decisions.</p>
          </div>
        </div>
        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-laptop-code"></i></div>
          <div class="quick-copy">
            <h3>Web Editing</h3>
            <p>WordPress, Oxygen, and Elementor optimization for better user flow.</p>
          </div>
        </div>
      </div>`
  },

  background: {
    title: "Background",
    subtitle:
      "A mix of performance marketing, website work, and marketing systems across different projects and roles.",
    html: `
      <div class="split-layout">
        <div class="panel">
          <h3>What I Do</h3>
          <p>My work sits at the intersection of paid media, website optimization,
          conversion tracking, and lead generation systems. I focus on helping
          brands improve results through stronger campaign execution and better digital journeys.</p>
        </div>
        <div class="panel">
          <h3>Tools & Platforms</h3>
          <p>I work with WordPress, Oxygen, Elementor, lead conversion tracking,
          automated email flows, and SleekFlow chat automation.</p>
          <div class="tag-list">
            <span class="tag">WordPress</span>
            <span class="tag">Oxygen</span>
            <span class="tag">Elementor</span>
            <span class="tag">Lead Tracking</span>
            <span class="tag">Email Flows</span>
            <span class="tag">SleekFlow</span>
          </div>
        </div>
      </div>`
  },

  expertise: {
    title: "Expertise",
    subtitle: "Core areas I focus on across marketing, websites, and automation.",
    html: `
      <div class="feature-list">
        <div class="feature-row">
          <div class="feature-title"><i class="fas fa-rectangle-ad"></i><h3>Paid Ads</h3></div>
          <div class="feature-body"><p>Campaign strategy, testing, and optimization focused on performance and ROI.</p></div>
        </div>
        <div class="feature-row">
          <div class="feature-title"><i class="fas fa-globe"></i><h3>Website Editing</h3></div>
          <div class="feature-body"><p>Landing page improvements and front-end edits using WordPress, Oxygen, and Elementor.</p></div>
        </div>
        <div class="feature-row">
          <div class="feature-title"><i class="fas fa-chart-pie"></i><h3>Conversion Tracking</h3></div>
          <div class="feature-body"><p>Lead tracking setup for better attribution and decision making.</p></div>
        </div>
        <div class="feature-row">
          <div class="feature-title"><i class="fas fa-envelope-open-text"></i><h3>Email Automation</h3></div>
          <div class="feature-body"><p>Structured email flows to support lead nurture and follow-up.</p></div>
        </div>
        <div class="feature-row">
          <div class="feature-title"><i class="fas fa-comments"></i><h3>Chat Automation</h3></div>
          <div class="feature-body"><p>Automated lead conversations and routing using SleekFlow.</p></div>
        </div>
      </div>`
  },

  projects: {
    title: "Projects",
    subtitle: "Selected work across campaigns, websites, and marketing systems.",
    html: `
      <div class="project-stack">
        <article class="project-item">
          <h3>Lead Generation Campaign</h3>
          <p>Improved campaign structure and targeting for better lead quality.</p>
          <ul class="project-points">
            <li>Sharper targeting direction</li>
            <li>Improved messaging alignment</li>
            <li>Better campaign structure for optimization</li>
          </ul>
        </article>
        <article class="project-item">
          <h3>Landing Page Optimization</h3>
          <p>Enhanced layout and content flow to increase conversion rates.</p>
          <ul class="project-points">
            <li>Cleaner information hierarchy</li>
            <li>Stronger CTA placement</li>
            <li>Improved user journey on-page</li>
          </ul>
        </article>
        <article class="project-item">
          <h3>Tracking Implementation</h3>
          <p>Set up lead tracking systems for clearer performance insights.</p>
          <ul class="project-points">
            <li>Lead event tracking</li>
            <li>Improved attribution clarity</li>
            <li>Better reporting structure</li>
          </ul>
        </article>
        <article class="project-item">
          <h3>Email Flow Setup</h3>
          <p>Built automated email sequences to improve follow-up consistency.</p>
          <ul class="project-points">
            <li>Follow-up automation logic</li>
            <li>Clear nurture stages</li>
            <li>More consistent lead communication</li>
          </ul>
        </article>
      </div>`
  },

  contact: {
    title: "Contact",
    subtitle: "Open to freelance work, collaborations, and opportunities.",
    html: `
      <div class="contact-box">
        <h3>Let's Work Together</h3>
        <p>I'm available for paid ads, website optimization, tracking, and automation projects.</p>
        <p class="contact-line">Email: your@email.com</p>
      </div>`
  }
};

function renderTab(tabId) {
  const data = tabContent[tabId];
  if (!data) return;
  titleEl.textContent = data.title;
  subtitleEl.textContent = data.subtitle;
  contentBody.innerHTML = data.html;
}

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = item.dataset.tab;
    if (!tabId) return;
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    renderTab(tabId);
  });
});

renderTab("overview");
/* ── MOUSE TRAIL ── */
const svg    = document.getElementById('trail-svg');
const p0     = svg.querySelector('path');
const nPaths = 180;
const paths  = [];
const pts    = [];
const m      = { x: innerWidth / 2, y: innerHeight + nPaths };

const xTo = gsap.quickTo(m, "x", { duration: 0.3 });
const yTo = gsap.quickTo(m, "y", { duration: 0.3 });

for (let i = 0; i < nPaths; i++) {
  const path = p0.cloneNode();
  path.setAttribute("data-stroke-width", gsap.utils.wrapYoyo(1, nPaths / 2, i));
  path.setAttribute("data-speed", 0.25);
  svg.prepend(path);
  paths.push(path);
  pts.push({ x: innerWidth * Math.random(), y: (1 - i / nPaths) * innerHeight });
}

window.addEventListener("pointermove", (e) => {
  xTo(e.x);
  yTo(e.y);
});

gsap.ticker.add(() => {
  let next = { x: m.x, y: m.y };
  pts.forEach((pt, i) => {
    pt.x += (next.x - pt.x) / 3;
    pt.y += (next.y - pt.y) / 3;
    if (i > 0) {
      const prev = pts[i - 1];
      const dist = Math.hypot(prev.x - pt.x, prev.y - pt.y);
      gsap.set(paths[i], {
        attr: {
          d: 'M' + prev.x + ',' + prev.y + ' L' + pt.x + ',' + pt.y,
          stroke: 'hsl(' + (200 + i) + ', 80%, 60%)',
          'stroke-width': paths[i].dataset.strokeWidth * gsap.utils.clamp(0, 1, dist)
        }
      });
    }
    next = pt;
  });
});
