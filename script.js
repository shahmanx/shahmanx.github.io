import * as THREE from "https://unpkg.com/three@0.128.0/build/three.module.js";

/* tabs */
const menuItems = document.querySelectorAll(".menu li");
const titleEl = document.getElementById("page-title");
const subtitleEl = document.getElementById("page-subtitle");
const contentBody = document.getElementById("content-body");

const tabContent = {
  overview: {
    title: "Digital marketing, web performance, and analytics",
    subtitle:
      "I work across paid media, website development, tracking, SEO, and automation to improve lead generation and digital performance.",
    html: `
      <div class="target-box">
        <h3>Target Roles</h3>
        <p>
          Focused on opportunities where digital marketing, performance tracking, website optimization,
          and team coordination come together.
        </p>

        <div class="target-role-list">
          <span class="role-pill">Digital Marketing Manager</span>
          <span class="role-pill">Performance Marketing Manager</span>
          <span class="role-pill">Growth Marketing Analyst</span>
          <span class="role-pill">Web & Marketing Operations</span>
        </div>

        <div class="cta-row">
          <a class="cta-button" href="./Shahman-Zainuddin-Resume-2025.pdf" download>
            <i class="fas fa-download"></i>
            Download Resume
          </a>
          <a class="secondary-button" href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noopener">
            <i class="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <strong>MYR 2M+</strong>
          <h3>Annual ad budget</h3>
          <p>Managed multi-platform advertising across Google Ads, Meta Ads, TikTok, and LinkedIn.</p>
        </div>

        <div class="stat-card">
          <strong>100+</strong>
          <h3>Landing pages</h3>
          <p>Created mobile-optimized landing pages for lead generation across institutions and academic programmes.</p>
        </div>

        <div class="stat-card">
          <strong>12+</strong>
          <h3>Websites managed</h3>
          <p>Developed and maintained WordPress websites with focus on performance, SEO, and security.</p>
        </div>
      </div>

      <div class="quick-grid">
        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-bullhorn"></i></div>
          <div class="quick-copy">
            <h3>Paid Media</h3>
            <p>Campaign planning, media buying, reporting, and optimization across major digital ad platforms.</p>
          </div>
        </div>

        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-chart-line"></i></div>
          <div class="quick-copy">
            <h3>Tracking & Analytics</h3>
            <p>GA4, Google Tag Manager, user behavior tracking, attribution setup, and performance reporting.</p>
          </div>
        </div>

        <div class="quick-card">
          <div class="quick-icon"><i class="fas fa-laptop-code"></i></div>
          <div class="quick-copy">
            <h3>Web & SEO</h3>
            <p>WordPress development, landing pages, technical SEO, Core Web Vitals, and site performance improvements.</p>
          </div>
        </div>
      </div>`
  },

  background: {
    title: "Background",
    subtitle:
      "A practical career path across design, digital marketing, website development, analytics, and team coordination.",
    html: `
      <div class="split-layout">
        <div class="panel">
          <h3>Profile</h3>
          <p>
            Shahman is a digital marketing and analytics professional based in Cyberjaya, Selangor,
            with more than 10 years of experience across marketing, web development, technical SEO,
            paid media, and performance tracking.
          </p>
          <p>
            His current work covers multi-platform campaign management, WordPress website development,
            landing page creation, analytics implementation, automation, and SEO improvements.
          </p>
          <p>
            He also has experience mentoring junior digital marketers, supporting hiring decisions,
            coordinating with stakeholders, and helping digital projects move from planning to delivery.
          </p>

          <p class="cert-title">Certifications</p>
          <div class="tag-list">
            <span class="tag">Google Ads Certification</span>
            <span class="tag">Google Digital Marketing & E-commerce</span>
            <span class="tag">Facebook Blueprint Media Buying</span>
            <span class="tag">SQL for Data Science</span>
          </div>
        </div>

        <div class="panel">
          <h3>Career Timeline</h3>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2022 – Present</span>
                <h3>Assistant Manager, Digital Marketing & Analyst</h3>
                <p>Cyberjaya Education Group Berhad · Cyberjaya, Selangor</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2021 – 2022</span>
                <h3>Digital Marketing Manager</h3>
                <p>2M World Sdn Bhd · Batu Caves, Selangor</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2019 – 2020</span>
                <h3>Digital Marketing Specialist</h3>
                <p>BioEZ Resources · Cyberjaya, Selangor</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2016 – 2018</span>
                <h3>Multimedia Designer</h3>
                <p>Dasar Jati Sdn Bhd · Bandar Baru Bangi, Selangor</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
  },

  expertise: {
    title: "Expertise",
    subtitle:
      "Core areas built from hands-on experience across campaigns, websites, tracking, SEO, and marketing systems.",
    html: `
      <div class="feature-list">

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-rectangle-ad"></i>
              <h3>Paid Media & Campaigns</h3>
            </div>
            <div class="feature-body">
              <p>Planning, managing, and optimizing campaigns across Google Ads, Meta Ads, TikTok, and LinkedIn with focus on lead generation, budget control, and performance reporting.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">Google Ads</span>
            <span class="tag">Meta Ads</span>
            <span class="tag">TikTok Ads</span>
            <span class="tag">LinkedIn Ads</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-globe"></i>
              <h3>Website Development</h3>
            </div>
            <div class="feature-body">
              <p>Developing and maintaining websites using modern CMS platforms, structured content systems, and performance-focused implementation.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">WordPress</span>
            <span class="tag">Shopify</span>
            <span class="tag">WooCommerce</span>
            <span class="tag">Elementor</span>
            <span class="tag">Oxygen</span>
            <span class="tag">Bricks</span>
            <span class="tag">Webflow</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-chart-pie"></i>
              <h3>Analytics & Tracking</h3>
            </div>
            <div class="feature-body">
              <p>Implementing tracking, event measurement, attribution setups, and reporting systems across websites and marketing campaigns.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">Google Analytics 4</span>
            <span class="tag">Google Tag Manager</span>
            <span class="tag">Looker Studio</span>
            <span class="tag">Google Search Console</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-magnifying-glass-chart"></i>
              <h3>Technical SEO</h3>
            </div>
            <div class="feature-body">
              <p>Conducting audits, resolving technical issues, and improving site health, performance, and search visibility.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">Screaming Frog</span>
            <span class="tag">Ahrefs</span>
            <span class="tag">SEMrush</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-code"></i>
              <h3>Web & Infrastructure</h3>
            </div>
            <div class="feature-body">
              <p>Managing hosting environments, performance layers, and front-end structure for stable and optimized website delivery.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">cPanel</span>
            <span class="tag">Cloudflare</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-envelope-open-text"></i>
              <h3>CRM & Automation</h3>
            </div>
            <div class="feature-body">
              <p>Supporting lead capture, nurture workflows, and marketing automation across email, CRM, and communication platforms.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">Mailchimp</span>
            <span class="tag">Constant Contact</span>
            <span class="tag">SleekFlow</span>
            <span class="tag">Salesforce</span>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-top">
            <div class="feature-title">
              <i class="fas fa-users-gear"></i>
              <h3>Collaboration & Design</h3>
            </div>
            <div class="feature-body">
              <p>Coordinating projects, supporting workflows, and working with design and development teams across digital initiatives.</p>
            </div>
          </div>
          <div class="tag-list feature-tags">
            <span class="tag">Jira</span>
            <span class="tag">Figma</span>
          </div>
        </div>

      </div>`
  },

  projects: {
    title: "Selected Work",
    subtitle:
      "Representative work areas based on real responsibilities across digital marketing, web platforms, tracking, and optimization.",
    html: `
      <div class="project-stack">
        <article class="project-item">
          <h3>Group Website Management</h3>
          <p>Developed and maintained more than 12 WordPress websites with attention to performance, security, technical SEO, and content structure.</p>
          <ul class="project-points">
            <li>Implemented Custom Post Types and Advanced Custom Fields</li>
            <li>Improved page speed, Core Web Vitals, and mobile responsiveness</li>
            <li>Maintained website structure for scalable content management</li>
          </ul>
        </article>

        <article class="project-item">
          <h3>Landing Page Production</h3>
          <p>Created over 100 mobile-optimized landing pages to support lead generation for institutions and academic programmes.</p>
          <ul class="project-points">
            <li>Built pages for paid traffic and campaign-specific journeys</li>
            <li>Focused on clearer information flow and conversion actions</li>
            <li>Supported lead capture through connected marketing systems</li>
          </ul>
        </article>

        <article class="project-item">
          <h3>Multi-Platform Paid Campaigns</h3>
          <p>Managed campaigns across Google Ads, Meta Ads, TikTok, and LinkedIn with an annual budget of more than MYR 2M.</p>
          <ul class="project-points">
            <li>Handled campaign setup, monitoring, and optimization</li>
            <li>Reviewed performance data for budget and targeting decisions</li>
            <li>Supported lead generation and brand awareness objectives</li>
          </ul>
        </article>

        <article class="project-item">
          <h3>Tracking & Reporting Implementation</h3>
          <p>Implemented GA4 and Google Tag Manager tracking across group websites to improve visibility into user behavior and campaign attribution.</p>
          <ul class="project-points">
            <li>Set up event and conversion tracking</li>
            <li>Improved marketing attribution and reporting accuracy</li>
            <li>Supported better decision-making through performance data</li>
          </ul>
        </article>

        <article class="project-item">
          <h3>Technical SEO & Site Performance</h3>
          <p>Conducted technical SEO audits and resolved website performance issues using tools such as Screaming Frog and Google Search Console.</p>
          <ul class="project-points">
            <li>Reviewed crawlability, indexing, and site structure issues</li>
            <li>Improved mobile usability and page speed</li>
            <li>Supported stronger search visibility through technical fixes</li>
          </ul>
        </article>
      </div>`
  },

  contact: {
    title: "Contact",
    subtitle:
      "Open to digital marketing, performance marketing, website, analytics, and growth-focused opportunities.",
    html: `
      <div class="contact-box">
        <h3>Let’s Connect</h3>
        <p>
          I’m open to roles and projects involving digital marketing, paid media,
          website development, analytics implementation, technical SEO, and marketing automation.
        </p>

        <p class="contact-line">Location:</p>
        <p>Based in Cyberjaya, Selangor · Open to full-time, hybrid, and remote opportunities.</p>

        <p class="contact-line">Email:</p>
        <a class="contact-link" href="mailto:shahmanzainuddin@gmail.com">shahmanzainuddin@gmail.com</a>

        <div class="cta-row">
          <a class="cta-button" href="./Shahman-Zainuddin-Resume-2025.pdf" download>
            <i class="fas fa-download"></i>
            Download Resume
          </a>
          <a class="secondary-button" href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noopener">
            <i class="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>

        <div class="tag-list">
          <span class="tag">Digital Marketing</span>
          <span class="tag">Paid Media</span>
          <span class="tag">WordPress</span>
          <span class="tag">GA4 / GTM</span>
          <span class="tag">Technical SEO</span>
          <span class="tag">Marketing Automation</span>
        </div>

        <p class="note-text">
          This portfolio was built as a lightweight, responsive web experience using HTML, CSS,
          JavaScript, and WebGL shader effects.
        </p>
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
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    renderTab(tabId);
  });
});

renderTab("overview");

/* shader */
const canvas = document.getElementById("shader-canvas");
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const uniforms = {
  u_time: { value: 0 },
  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
  u_color1: { value: new THREE.Vector3(0.2, 0.8, 0.6) },
  u_color2: { value: new THREE.Vector3(0.4, 0.2, 0.7) },
  u_color3: { value: new THREE.Vector3(0.1, 0.5, 0.9) },
  u_speed: { value: 0.5 },
  u_brightness: { value: 1.0 },
  u_contrast: { value: 1.0 }
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform float u_speed;
uniform float u_brightness;
uniform float u_contrast;
varying vec2 vUv;

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = sin(i.x * 12.9898 + i.y * 78.233 + 43758.5453) * 43758.5453;
  float b = sin((i.x + 1.0) * 12.9898 + i.y * 78.233 + 43758.5453) * 43758.5453;
  float c = sin(i.x * 12.9898 + (i.y + 1.0) * 78.233 + 43758.5453) * 43758.5453;
  float d = sin((i.x + 1.0) * 12.9898 + (i.y + 1.0) * 78.233 + 43758.5453) * 43758.5453;
  return mix(mix(fract(a), fract(b), u.x), mix(fract(c), fract(d), u.x), u.y);
}

void main() {
  vec2 st = vUv;
  float aspect = u_resolution.x / u_resolution.y;
  st.x *= aspect;

  vec2 mouse = u_mouse;
  vec2 mouseSt = vec2(mouse.x * aspect, mouse.y);
  vec2 toMouse = st - mouseSt;
  float mouseInfluence = 1.0 - smoothstep(0.0, 0.75, length(toMouse));

  float time = u_time * u_speed;

  float wave1 = sin(st.x * 3.2 + time) * cos(st.y * 2.8 - time * 0.65);
  float wave2 = sin(st.y * 4.5 + time * 0.85) * 0.65;
  float wave3 = sin((st.x * 2.2 - st.y * 1.7) * 1.9 + time * 0.55) * 0.55;
  float flow = wave1 + wave2 + wave3;

  vec2 noiseCoord = st * 3.8 + u_time * 0.18 * u_speed;
  float detail = smoothNoise(noiseCoord);
  detail += smoothNoise(noiseCoord * 2.6) * 0.45;
  detail *= 0.55;

  vec2 center = vec2(aspect * 0.5, 0.5);
  float radial = sin(length(st - center) * 7.2 - u_time * 0.9 * u_speed) * 0.28;

  float pattern = flow * 0.62 + detail * 0.28 + radial * 0.1;
  pattern += mouseInfluence * 0.45 * sin(u_time * 3.2 * u_speed - length(toMouse) * 14.0);
  pattern = pattern * 0.8 + 0.5;
  pattern = clamp(pattern, 0.0, 1.0);

  float r = sin(pattern * 6.28318 + 0.0) * 0.5 + 0.5;
  float g = sin(pattern * 6.28318 + 2.094) * 0.5 + 0.5;
  float b = sin(pattern * 6.28318 + 4.188) * 0.5 + 0.5;

  vec3 color = vec3(0.0);
  color += u_color1 * r;
  color += u_color2 * g;
  color += u_color3 * b;

  color = color / (r + g + b + 0.001);
  color += sin(u_time * 0.6 * u_speed) * 0.025;
  color += cos(u_time * 0.8 * u_speed) * 0.018;

  float vignette = 1.0 - length(st - center) * 0.38;
  color *= clamp(vignette, 0.68, 1.0);

  color = color * u_brightness;
  color = (color - 0.5) * u_contrast + 0.5;
  color = clamp(color, 0.0, 1.0);
  color = pow(color, vec3(1.0 / 1.08));

  gl_FragColor = vec4(color, 1.0);
}
`;

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader
});

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
scene.add(mesh);

window.addEventListener("mousemove", (e) => {
  uniforms.u_mouse.value.set(
    e.clientX / window.innerWidth,
    1.0 - e.clientY / window.innerHeight
  );
});

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  uniforms.u_time.value += clock.getDelta();
  renderer.render(scene, camera);
}

animate();
