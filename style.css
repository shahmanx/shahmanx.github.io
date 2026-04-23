import * as THREE from "https://unpkg.com/three@0.128.0/build/three.module.js";

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

/* ── SHADER BACKGROUND ── */
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
camera.position.z = 1;

const canvas = document.getElementById("shader-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false
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
    float b = sin((i.x+1.0) * 12.9898 + i.y * 78.233 + 43758.5453) * 43758.5453;
    float c = sin(i.x * 12.9898 + (i.y+1.0) * 78.233 + 43758.5453) * 43758.5453;
    float d = sin((i.x+1.0) * 12.9898 + (i.y+1.0) * 78.233 + 43758.5453) * 43758.5453;
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

    float r = sin(pattern * 3.14159 * 2.0 + 0.0) * 0.5 + 0.5;
    float g = sin(pattern * 3.14159 * 2.0 + 2.094) * 0.5 + 0.5;
    float b = sin(pattern * 3.14159 * 2.0 + 4.188) * 0.5 + 0.5;

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
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = 1.0 - (e.clientY / window.innerHeight);
  uniforms.u_mouse.value.set(mouseX, mouseY);
});

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
});

let clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  uniforms.u_time.value += clock.getDelta();
  renderer.render(scene, camera);
}

animate();
