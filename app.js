// ============================================================
// ASSASSIN'S CREED — CINEMATIC SCROLL TIMELINE & DATABASE
// app.js
// ============================================================

// ── GAME DATA WITH LOCAL IMAGE ASSET PATHS ───────────────────────────────────
const GAMES = [
  {
    id: 'odyssey', seq: '01',
    subtitle: "ASSASSIN'S CREED", title: 'ODYSSEY',
    year: '431 BCE', era: 'Peloponnesian War',
    color: 0xd4a017, hex: '#d4a017',
    assassin: 'Kassandra', location: 'Ancient Greece',
    desc: 'Explore Peloponnesian War torn Greece. A mercenary of Spartan blood confronts the secretive Cult of Kosmos.',
    logo: 'assests/Images/logos/Ac_9_odyssey.png',
    charImage: 'assests/Images/characters_images/Ac_odessay/Assassins-Creed-PNG-Clipart.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(212, 160, 23, 0.2))'
  },
  {
    id: 'origins', seq: '02',
    subtitle: "ASSASSIN'S CREED", title: 'ORIGINS',
    year: '49 BCE', era: 'Ptolemaic Egypt',
    color: 0xb86000, hex: '#b86000',
    assassin: 'Bayek of Siwa', location: 'Ancient Egypt',
    desc: 'Unveil the origin story of the Brotherhood. Bayek hunts the Order of the Ancients across Ptolemaic Egypt.',
    logo: 'assests/Images/logos/AC_8_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac_origins/Bayek_Of_Siva_1.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(184, 96, 0, 0.18))'
  },
  {
    id: 'mirage', seq: '03',
    subtitle: "ASSASSIN'S CREED", title: 'MIRAGE',
    year: '861 CE', era: 'Islamic Golden Age',
    color: 0xe8a030, hex: '#e8a030',
    assassin: 'Basim Ibn Ishaq', location: 'Baghdad',
    desc: 'In golden age Baghdad, street thief Basim discovers his destiny with the Hidden Ones.',
    logo: 'assests/Images/logos/Ac_11.1_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac11_mirage/wich-basim-.webp',
    glowFilter: 'drop-shadow(0 0 15px rgba(232, 160, 48, 0.15))'
  },
  {
    id: 'valhalla', seq: '04',
    subtitle: "ASSASSIN'S CREED", title: 'VALHALLA',
    year: '873 CE', era: 'Viking Age',
    color: 0x00b48c, hex: '#00b48c',
    assassin: 'Eivor Wolf-Kissed', location: 'England & Norway',
    desc: 'A Viking raider leads their clan to the fractured kingdoms of England, colliding with the Hidden Ones.',
    logo: 'assests/Images/logos/AC_10_gold_Logo.png',
    charImage: 'assests/Images/characters_images/AC10_Valhalla/assassin_s_creed_valhalla_evior.png',
    glowFilter: 'drop-shadow(0 0 20px rgba(0, 180, 140, 0.3))'
  },
  {
    id: 'ac1', seq: '05',
    subtitle: "ASSASSIN'S", title: 'CREED',
    year: '1191 CE', era: 'Third Crusade',
    color: 0xc8d0e0, hex: '#c8d0e0',
    assassin: "Altaïr Ibn-La'Ahad", location: 'Holy Land',
    desc: 'Disgraced Master Assassin Altaïr hunts nine Templar targets during the Third Crusade.',
    logo: 'assests/Images/logos/Ac_1.png',
    charImage: 'assests/Images/characters_images/Ac1_Character/Altair1.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(200, 208, 224, 0.1))'
  },
  {
    id: 'ac2', seq: '06',
    subtitle: "ASSASSIN'S CREED", title: 'II',
    year: '1476 CE', era: 'Italian Renaissance',
    color: 0x4080d0, hex: '#4080d0',
    assassin: 'Ezio Auditore', location: 'Florence & Venice',
    desc: 'A nobleman’s son witnesses his family betrayed. Ezio Auditore transforms grief into purpose.',
    logo: 'assests/Images/logos/Ac_2.png',
    charImage: 'assests/Images/characters_images/Ac2/Ezio-Auditore_Ac_Brotherhood.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(64, 128, 208, 0.18))'
  },
  {
    id: 'brotherhood', seq: '07',
    subtitle: "ASSASSIN'S CREED", title: 'BROTHERHOOD',
    year: '1499 CE', era: 'Italian Renaissance',
    color: 0xcc3010, hex: '#cc3010',
    assassin: 'Ezio Auditore', location: 'Rome',
    desc: 'Ezio rebuilds the Brotherhood from its ruins to destroy Borgia Templar power in Rome.',
    logo: 'assests/Images/logos/Ac_2.png',
    charImage: 'assests/Images/characters_images/Ac2/AC_2.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(204, 48, 16, 0.18))'
  },
  {
    id: 'revelations', seq: '08',
    subtitle: "ASSASSIN'S CREED", title: 'REVELATIONS',
    year: '1511 CE', era: 'Ottoman Constantinople',
    color: 0xe06020, hex: '#e06020',
    assassin: 'Ezio Auditore', location: 'Constantinople',
    desc: 'An aging Ezio journeys to Constantinople to unlock secrets left by Altaïr.',
    logo: 'assests/Images/logos/Ac_3.1_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac2/Ezio-Auditore_Ac_Revelations.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(224, 96, 32, 0.18))'
  },
  {
    id: 'shadows', seq: '09',
    subtitle: "ASSASSIN'S CREED", title: 'SHADOWS',
    year: '1581 CE', era: 'Feudal Japan',
    color: 0xd03060, hex: '#d03060',
    assassin: 'Naoe & Yasuke', location: 'Feudal Japan',
    desc: 'Feudal Japan burns in chaos. A shinobi and a legendary samurai unite to vanquish the shadows.',
    logo: 'assests/Images/logos/AC15_Aniversary.avif',
    charImage: 'assests/Images/characters_images/AC_shadows/AC_Shadows_Naoe.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(208, 48, 96, 0.18))'
  },
  {
    id: 'blackflag', seq: '10',
    subtitle: "ASSASSIN'S CREED IV", title: 'BLACK FLAG',
    year: '1715 CE', era: 'Golden Age of Piracy',
    color: 0x208060, hex: '#208060',
    assassin: 'Edward Kenway', location: 'Caribbean Sea',
    desc: 'Welsh pirate Edward Kenway stumbles into the Assassin-Templar war while chasing Caribbean fortune.',
    logo: 'assests/Images/logos/Ac_4_BlackFlag1.png',
    charImage: 'assests/Images/characters_images/Ac4_BlackFlag/Edward_kenway_3.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 10px rgba(32, 128, 96, 0.1))'
  },
  {
    id: 'rogue', seq: '11',
    subtitle: "ASSASSIN'S CREED", title: 'ROGUE',
    year: '1752 CE', era: "Seven Years' War",
    color: 0x6090a0, hex: '#6090a0',
    assassin: 'Shay Patrick Cormac', location: 'North Atlantic',
    desc: 'Shay Cormac turns his blade against his former Brotherhood to become the most feared Assassin hunter.',
    logo: 'assests/Images/logos/AC_5_rogue.png',
    charImage: 'assests/Images/characters_images/AC5_Rouge/assassin_s_creed_rogue_render_cut_by_outlawninja_d7uh41g-pre.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(96, 144, 160, 0.08))'
  },
  {
    id: 'ac3', seq: '12',
    subtitle: "ASSASSIN'S CREED", title: 'III',
    year: '1754 CE', era: 'American Revolution',
    color: 0x1c4470, hex: '#1c4470',
    assassin: 'Connor Kenway', location: 'Colonial America',
    desc: 'Connor fights to protect his people’s lands during the fires of the American Revolution.',
    logo: 'assests/Images/logos/AC_3_America.png',
    charImage: 'assests/Images/characters_images/Ac3/Assassins-Creed_3_Cornor.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 10px rgba(28, 68, 112, 0.1))'
  },
  {
    id: 'unity', seq: '13',
    subtitle: "ASSASSIN'S CREED", title: 'UNITY',
    year: '1789 CE', era: 'French Revolution',
    color: 0x8050b0, hex: '#8050b0',
    assassin: 'Arno Dorian', location: 'Revolutionary Paris',
    desc: 'Paris bleeds. Arno Dorian joins the Brotherhood to uncover the true conspirators.',
    logo: 'assests/Images/logos/AC_6_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac6_Unity/Arno.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(128, 80, 176, 0.18))'
  },
  {
    id: 'syndicate', seq: '14',
    subtitle: "ASSASSIN'S CREED", title: 'SYNDICATE',
    year: '1868 CE', era: 'Victorian London',
    color: 0x782850, hex: '#782850',
    assassin: 'Jacob & Evie Frye', location: 'Victorian London',
    desc: 'Jacob and Evie Frye build a criminal gang to liberate London from Templar oppression.',
    logo: 'assests/Images/logos/AC_7_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac_Syndicate/male_chrac.png',
    glowFilter: 'drop-shadow(0 0 15px rgba(120, 40, 80, 0.18))'
  }
];

// ── THREE.JS GRAPHIC STATE ──────────────────────────────────────────────────
let scene, camera, renderer;
let dnaHelixGroup = null;
let activeChapter = -1;

let clock;
let elapsed = 0;

if (typeof THREE !== 'undefined') {
  clock = new THREE.Clock();
}

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// ── GSAP TIMELINE TRANSITIONS ────────────────────────────────────────────────
function transitionChapter(idx) {
  if (activeChapter === idx) return;
  activeChapter = idx;
  const game = GAMES[idx];

  // Update center DNA color dynamically to match active game theme
  const rgb = hexToRgb(game.hex);
  if (rgb) targetDnaColor = rgb;

  // Animate indicators and sidebar sync values
  const syncTxt = document.getElementById('hud-sync');
  if (syncTxt) {
    syncTxt.textContent = `SYNC_ACTIVE: [${game.year}]`;
    syncTxt.style.color = game.hex;
  }

  const sub = document.getElementById('chapter-subtitle');
  const tit = document.getElementById('chapter-title');
  const yr = document.getElementById('chapter-year');
  const bdy = document.getElementById('chapter-body');
  const sig = document.getElementById('sigil-label');
  const charImgEl = document.getElementById('chapter-char-image');
  const leftLogoEl = document.getElementById('chapter-left-logo');

  if (typeof gsap !== 'undefined') {
    // Fade out elements including the character image
    gsap.to([sig, sub, tit, yr, bdy, charImgEl], {
      y: -20,
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        // Swap content
        if (sub) sub.textContent = game.subtitle;
        if (tit) tit.textContent = game.title;
        if (yr) yr.textContent = game.year;
        if (bdy) bdy.textContent = game.desc;
        
        if (charImgEl) {
          // Fallback if there is no character image
          charImgEl.src = game.charImage || game.logo || 'assests/Images/logos/AC15_Aniversary.avif';
          
          // Apply individual custom glow filter
          charImgEl.style.filter = game.glowFilter;
        }

        if (leftLogoEl) {
          leftLogoEl.src = game.logo || 'assests/Images/logos/AC15_Aniversary.avif';
          // Apply dynamic themed drop-shadow glow to the left foreground logo
          leftLogoEl.style.filter = `drop-shadow(0 0 20px ${game.hex}88)`;
        }

        // Swap accent colors
        if (sub) sub.style.color = game.hex;

        // Update indicators
        updateTimelineIndicator(idx);

        // Remove Tailwind opacity-0 class before animating
        [sig, sub, tit, yr, bdy, charImgEl].forEach(el => {
          if (el) el.classList.remove('opacity-0');
        });

        // Stagger fade back in
        gsap.fromTo([sig, sub, tit, yr, bdy, charImgEl],
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: (i, target) => {
              if (target === charImgEl) {
                // On mobile, show image as a very light watermark in the background to ensure text is readable
                return window.innerWidth < 768 ? 0.15 : 0.95;
              }
              return 1;
            },
            duration: 0.38, 
            ease: 'power2.out', 
            stagger: 0.05
          }
        );
      }
    });
  } else {
    // Fallback if GSAP is blocked/offline
    if (sub) { sub.textContent = game.subtitle; sub.style.color = game.hex; sub.classList.remove('opacity-0'); }
    if (tit) { tit.textContent = game.title; tit.classList.remove('opacity-0'); }
    if (yr) { yr.textContent = game.year; yr.classList.remove('opacity-0'); }
    if (bdy) { bdy.textContent = game.desc; bdy.classList.remove('opacity-0'); }
    if (sig) { sig.classList.remove('opacity-0'); }
    if (charImgEl) {
      charImgEl.src = game.charImage || game.logo || 'assests/Images/logos/AC15_Aniversary.avif';
      charImgEl.classList.remove('opacity-0');
      charImgEl.style.opacity = window.innerWidth < 768 ? '0.15' : '0.95';
      charImgEl.style.filter = game.glowFilter;
    }
    if (leftLogoEl) {
      leftLogoEl.src = game.logo || 'assests/Images/logos/AC15_Aniversary.avif';
      leftLogoEl.style.filter = `drop-shadow(0 0 20px ${game.hex}88)`;
    }
    updateTimelineIndicator(idx);
  }
}

// ── TIMELINE SCROLL TRIGGERS ──────────────────────────────────────────────────
function setupScrollTriggers() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Scroll fallback without ScrollTrigger: monitor standard scroll events
    window.addEventListener('scroll', () => {
      const docEl = document.documentElement;
      const scrollHeight = docEl.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      const rawIdx = Math.round(progress * (GAMES.length - 1));
      const idx = Math.max(0, Math.min(GAMES.length - 1, rawIdx));
      transitionChapter(idx);
    }, { passive: true });
    return;
  }

  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '#timeline-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      // Calculate active index based on vertical scroll progress
      const rawIdx = Math.round(progress * (GAMES.length - 1));
      const idx = Math.max(0, Math.min(GAMES.length - 1, rawIdx));
      
      transitionChapter(idx);
    }
  });
}

// Three.js DNA Helix background setup removed in favor of character images.

// ── DATABASE GRID BUILDER ─────────────────────────────────────────────────────
function buildDatabaseGrid() {
  const container = document.getElementById('archive-grid');
  const container2 = document.getElementById('archive-grid-2');
  if (!container) return;
  container.innerHTML = '';
  if (container2) container2.innerHTML = '';

  const total = GAMES.length;
  GAMES.forEach((game, i) => {
    // Custom logo graphic or default fallback
    const logoHtml = game.logo 
      ? `<img class="h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] mb-4" src="${game.logo}" alt="Logo">`
      : `<div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center font-cinzelDec text-cyan-400 mb-4">◈</div>`;

    // 2D Grid Card
    const card1 = document.createElement('div');
    card1.className = 'archive-card rounded-lg p-5 flex flex-col items-center text-center cursor-pointer';
    card1.onclick = () => openModal(i);
    card1.innerHTML = `
      ${logoHtml}
      <span class="font-orbitron text-[9px] tracking-wider" style="color: ${game.hex}">SEQ ${game.seq}</span>
      <h3 class="font-cinzel text-lg font-bold text-white tracking-widest mt-1">${game.title}</h3>
      <p class="font-orbitron text-[9px] text-slate-500 tracking-widest mt-0.5">${game.year}</p>
      <span class="text-[10px] text-slate-400 font-mono mt-3 uppercase tracking-wider">${game.assassin}</span>
    `;
    container.appendChild(card1);

    // 3D Carousel Card
    if (container2) {
      const card2 = document.createElement('div');
      card2.className = 'archive-card-3d';
      card2.style.setProperty('--position', i + 1);
      card2.style.setProperty('--quantity', total);
      card2.style.setProperty('--theme-color', game.hex);
      card2.onclick = () => openModal(i);
      card2.innerHTML = `
        ${logoHtml}
        <span class="font-orbitron text-[9px] tracking-wider" style="color: ${game.hex}">SEQ ${game.seq}</span>
        <h3 class="font-cinzel text-lg font-bold text-white tracking-widest mt-1">${game.title}</h3>
        <p class="font-orbitron text-[9px] text-slate-500 tracking-widest mt-0.5">${game.year}</p>
        <span class="text-[10px] text-slate-400 font-mono mt-3 uppercase tracking-wider">${game.assassin}</span>
      `;
      container2.appendChild(card2);
    }
  });
}

// ── TIMELINE CONTROLS NAVIGATION ─────────────────────────────────────────────
function updateTimelineIndicator(idx) {
  const container = document.getElementById('hud-timeline-ticks');
  if (!container) return;
  const dots = container.querySelectorAll('.timeline-dot');
  dots.forEach((dot, dIdx) => {
    if (dIdx === idx) {
      dot.classList.add('bg-cyan-400', 'scale-125');
      dot.classList.remove('bg-slate-700');
      dot.style.boxShadow = `0 0 10px ${GAMES[idx].hex}`;
    } else {
      dot.classList.remove('bg-cyan-400', 'scale-125');
      dot.classList.add('bg-slate-700');
      dot.style.boxShadow = '';
    }
  });
}

function buildTimelineControls() {
  const container = document.getElementById('hud-timeline-ticks');
  if (!container) return;
  container.innerHTML = '';
  GAMES.forEach((game, i) => {
    const dot = document.createElement('button');
    dot.className = 'timeline-dot w-2 h-2 rounded-full bg-slate-700 transition-all duration-200 hover:bg-cyan-400';
    dot.title = `${game.title} (${game.year})`;
    dot.onclick = () => {
      // Smoothly scroll to the corresponding section range
      const scrollHeight = document.getElementById('timeline-container').scrollHeight;
      const progress = i / (GAMES.length - 1);
      window.scrollTo({
        top: progress * (scrollHeight - window.innerHeight),
        behavior: 'smooth'
      });
    };
    container.appendChild(dot);
  });
  updateTimelineIndicator(0);
}

// ── DOSSIER MODALS ────────────────────────────────────────────────────────────
function openModal(idx) {
  const game = GAMES[idx];
  document.getElementById('modal-seq').textContent = `◈ DATABASE RECORD: STACK ${game.seq}`;
  document.getElementById('modal-seq').style.color = game.hex;
  document.getElementById('modal-title').textContent = game.title;
  document.getElementById('modal-subtitle').textContent = game.subtitle;
  document.getElementById('modal-year').textContent = game.year;
  document.getElementById('modal-year').style.color = game.hex;
  document.getElementById('modal-era').textContent = game.era;
  document.getElementById('modal-assassin').textContent = game.assassin;
  document.getElementById('modal-location').textContent = game.location;
  document.getElementById('modal-desc').textContent = game.desc;

  // Portrait loading
  const imgEl = document.getElementById('modal-char-image');
  if (game.charImage) {
    imgEl.src = game.charImage;
    imgEl.classList.remove('hidden');
  } else {
    imgEl.classList.add('hidden');
  }

  // Display frame
  const modal = document.getElementById('details-modal');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('details-modal').classList.add('hidden');
}

// Make globally accessible
window.closeModal = closeModal;

// ── INTERACTIVE 3D DNA HELIX & CARD CONNECTION CANVAS ────────────────────────
let dnaColor = { r: 0, g: 240, b: 255 }; // Current color
let targetDnaColor = { r: 0, g: 240, b: 255 };
let dnaSpeed = 0.02;
let targetDnaSpeed = 0.02;
let rotationAngle = 0;
let mouseX = 0, mouseY = 0;

let stageRotation = 0; // Stage rotation angle (Y-axis) in radians
let isSliderHovered = false;
let hoveredCardIndex = -1;

function setupInteractiveDNA() {
  const canvas = document.getElementById('dna-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const wrapper = canvas.parentElement;
  const slider = document.getElementById('archive-grid-2');
  
  // Track client dimensions dynamically
  function resizeCanvas() {
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Track slider mouse states to pause rotation
  if (slider) {
    slider.addEventListener('mouseenter', () => { isSliderHovered = true; });
    slider.addEventListener('mouseleave', () => { 
      isSliderHovered = false; 
      hoveredCardIndex = -1;
    });
  }

  // Hover tilt interaction on center core area
  const coreGlow = document.querySelector('.animus-core-hologram');
  if (coreGlow) {
    coreGlow.addEventListener('mousemove', (e) => {
      const rect = coreGlow.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetDnaSpeed = 0.05;
      mouseX = x * 0.005;
      mouseY = y * 0.005;
    });
    coreGlow.addEventListener('mouseleave', () => {
      targetDnaSpeed = 0.02;
      mouseX = 0;
      mouseY = 0;
    });
  }

  // Monitor card hover enter/leave dynamically to update colors and highlighted line
  const cards3d = document.querySelectorAll('.archive-card-3d');
  cards3d.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      hoveredCardIndex = index;
      const themeColor = card.style.getPropertyValue('--theme-color') || '#00f0ff';
      const rgb = hexToRgb(themeColor);
      if (rgb) targetDnaColor = rgb;
    });

    card.addEventListener('mouseleave', () => {
      hoveredCardIndex = -1;
      // Revert back to active sequence color
      if (activeChapter >= 0 && GAMES[activeChapter]) {
        const rgb = hexToRgb(GAMES[activeChapter].hex);
        if (rgb) targetDnaColor = rgb;
      } else {
        targetDnaColor = { r: 0, g: 240, b: 255 };
      }
    });
  });

  // DNA configuration parameters (Enlarged)
  const numNodes = 20;
  const radius = 52;
  const nodeHeight = 10;
  const totalCards = GAMES.length;
  const cardRadius = 480; // Radial distance from center to cards on tilted floor
  const tiltAngle = 72 * Math.PI / 180; // 72 degree tilt in radians
  const particles = []; // Floating particles for Black Flag constellation network

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Smooth color blending
    dnaColor.r += (targetDnaColor.r - dnaColor.r) * 0.1;
    dnaColor.g += (targetDnaColor.g - dnaColor.g) * 0.1;
    dnaColor.b += (targetDnaColor.b - dnaColor.b) * 0.1;

    // Smooth speed interpolation
    dnaSpeed += (targetDnaSpeed - dnaSpeed) * 0.05;
    rotationAngle += dnaSpeed;

    // Rotate 3D stage in JS (clockwise rotation)
    if (!isSliderHovered) {
      stageRotation -= 0.0022; 
    }
    if (slider) {
      slider.style.transform = `rotateX(72deg) rotateY(${stageRotation * (180 / Math.PI)}deg)`;
    }

    const rotY = rotationAngle + mouseX;
    const rotX = 0.45 + mouseY; 

    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const nodes = [];

    // ── ANIMUS PARTICLE CONSTELLATION NETWORK (Black Flag style) ─────────────────
    // Emit floating cybernetic sparks
    if (particles.length < 50 && Math.random() < 0.3) {
      particles.push({
        x: center.x + (Math.random() - 0.5) * 160,
        y: center.y + (Math.random() - 0.5) * 320,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -0.5 - Math.random() * 1.2, // Drifting upwards
        alpha: 0,
        life: 0,
        decaySpeed: 0.004 + Math.random() * 0.006,
        size: 1 + Math.random() * 2.2
      });
    }

    // Update positions & lifespan
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life += p.decaySpeed;
      if (p.life >= 1.0) {
        particles.splice(i, 1);
        continue;
      }
      p.alpha = Math.sin(p.life * Math.PI); // Fade in and out
    }

    // Draw connection lines between nearby particles
    const maxDist = 70;
    ctx.lineWidth = 0.7;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.15 * Math.min(p1.alpha, p2.alpha);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${Math.round(dnaColor.r)}, ${Math.round(dnaColor.g)}, ${Math.round(dnaColor.b)}, ${lineAlpha})`;
          ctx.stroke();
        }
      }
    }

    // Draw individual particle nodes
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.round(dnaColor.r)}, ${Math.round(dnaColor.g)}, ${Math.round(dnaColor.b)}, ${p.alpha * 0.7})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = `rgb(${Math.round(dnaColor.r)}, ${Math.round(dnaColor.g)}, ${Math.round(dnaColor.b)})`;
      ctx.fill();
    });
    ctx.shadowBlur = 0; // reset shadowBlur

    // Calculate 3D coordinates for DNA Double Helix
    for (let i = 0; i < numNodes; i++) {
      const theta = i * 0.38 + rotY;
      const yVal = (i - numNodes / 2) * nodeHeight;

      // Unrotated strand offsets
      const x1 = radius * Math.cos(theta);
      const z1 = radius * Math.sin(theta);
      const x2 = radius * Math.cos(theta + Math.PI);
      const z2 = radius * Math.sin(theta + Math.PI);

      // Rotate around tilted X-axis
      const ry1 = yVal * Math.cos(rotX) - z1 * Math.sin(rotX);
      const rz1 = yVal * Math.sin(rotX) + z1 * Math.cos(rotX);
      const ry2 = yVal * Math.cos(rotX) - z2 * Math.sin(rotX);
      const rz2 = yVal * Math.sin(rotX) + z2 * Math.cos(rotX);

      nodes.push({
        id: i,
        x1: x1 * Math.cos(rotY) - z1 * Math.sin(rotY),
        y1: ry1,
        z1: rz1,
        x2: x2 * Math.cos(rotY) - z2 * Math.sin(rotY),
        y2: ry2,
        z2: rz2
      });
    }

    // ── DRAW CARD CONNECTION LINES FIRST (Under DNA) ─────────────────────────
    for (let i = 0; i < totalCards; i++) {
      const game = GAMES[i];
      // Compute the card's current angle in 3D orbit (factoring in the Y-axis stageRotation)
      const angle = (i * (2 * Math.PI / totalCards)) + stageRotation;
      
      // Card coordinates on the X-Z turntable plane
      const cardX = cardRadius * Math.sin(angle);
      const cardZ = cardRadius * Math.cos(angle);
      
      // Project the 3D position onto the tilted screen coordinates
      const cx = center.x + cardX;
      const cy = center.y - cardZ * Math.sin(tiltAngle);

      // Connect all cards to the single central point of the DNA Helix
      const dx = center.x;
      const dy = center.y;

      ctx.beginPath();
      ctx.moveTo(dx, dy);
      ctx.lineTo(cx, cy);

      const isActive = (hoveredCardIndex === i);
      if (isActive) {
        // Highlighted dotted connection
        ctx.setLineDash([3, 7]);
        ctx.strokeStyle = game.hex;
        ctx.lineWidth = 2.2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = game.hex;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset shadow

        // Drawing a flowing scanner pulse along the connection line
        const pulseProgress = (Date.now() % 1000) / 1000;
        const px = dx + (cx - dx) * pulseProgress;
        const py = dy + (cy - dy) * pulseProgress;
        
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = game.hex;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Idle faint dashed sci-fi connection
        ctx.setLineDash([3, 7]);
        ctx.strokeStyle = `rgba(${hexToRgb(game.hex).r}, ${hexToRgb(game.hex).g}, ${hexToRgb(game.hex).b}, 0.12)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    ctx.setLineDash([]); // Reset line dash state

    // ── DRAW DNA HELIX (Depth-Sorted) ────────────────────────────────────────
    // Sort DNA nodes by depth (average Z values)
    nodes.sort((a, b) => ((a.z1 + a.z2) / 2) - ((b.z1 + b.z2) / 2));

    nodes.forEach(node => {
      const colorStr = `rgba(${Math.round(dnaColor.r)}, ${Math.round(dnaColor.g)}, ${Math.round(dnaColor.b)}, `;
      
      const scale1 = (node.z1 + 100) / 130;
      const scale2 = (node.z2 + 100) / 130;
      const alpha1 = Math.max(0.2, Math.min(1, scale1));
      const alpha2 = Math.max(0.2, Math.min(1, scale2));

      // 1. Draw rung connection
      ctx.beginPath();
      ctx.moveTo(center.x + node.x1, center.y + node.y1);
      ctx.lineTo(center.x + node.x2, center.y + node.y2);
      ctx.strokeStyle = colorStr + '0.25)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // 2. Draw strand endpoint 1
      const size1 = Math.max(2, 4.5 * scale1);
      ctx.beginPath();
      ctx.arc(center.x + node.x1, center.y + node.y1, size1, 0, Math.PI * 2);
      ctx.fillStyle = colorStr + alpha1 + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgb(${dnaColor.r}, ${dnaColor.g}, ${dnaColor.b})`;
      ctx.fill();

      // 3. Draw strand endpoint 2
      const size2 = Math.max(2, 4.5 * scale2);
      ctx.beginPath();
      ctx.arc(center.x + node.x2, center.y + node.y2, size2, 0, Math.PI * 2);
      ctx.fillStyle = colorStr + alpha2 + ')';
      ctx.fill();
      
      ctx.shadowBlur = 0; // reset
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ── WINDOW ENTRY ──────────────────────────────────────────────────────────────
function init() {
  buildTimelineControls();
  buildDatabaseGrid();
  setupScrollTriggers();
  setupInteractiveDNA();
  
  // Initialize first slide values
  transitionChapter(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
