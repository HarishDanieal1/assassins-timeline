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
    charImage: 'assests/Images/characters_images/Ac_odessay/Assassins-Creed-PNG-Clipart.png'
  },
  {
    id: 'origins', seq: '02',
    subtitle: "ASSASSIN'S CREED", title: 'ORIGINS',
    year: '49 BCE', era: 'Ptolemaic Egypt',
    color: 0xb86000, hex: '#b86000',
    assassin: 'Bayek of Siwa', location: 'Ancient Egypt',
    desc: 'Unveil the origin story of the Brotherhood. Bayek hunts the Order of the Ancients across Ptolemaic Egypt.',
    logo: 'assests/Images/logos/AC_8_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac_origins/Bayek_Of_Siva_1.png'
  },
  {
    id: 'mirage', seq: '03',
    subtitle: "ASSASSIN'S CREED", title: 'MIRAGE',
    year: '861 CE', era: 'Islamic Golden Age',
    color: 0xe8a030, hex: '#e8a030',
    assassin: 'Basim Ibn Ishaq', location: 'Baghdad',
    desc: 'In golden age Baghdad, street thief Basim discovers his destiny with the Hidden Ones.',
    logo: 'assests/Images/logos/Ac_11.1_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac11_mirage/wich-basim-.webp'
  },
  {
    id: 'valhalla', seq: '04',
    subtitle: "ASSASSIN'S CREED", title: 'VALHALLA',
    year: '873 CE', era: 'Viking Age',
    color: 0x5080c0, hex: '#5080c0',
    assassin: 'Eivor Wolf-Kissed', location: 'England & Norway',
    desc: 'A Viking raider leads their clan to the fractured kingdoms of England, colliding with the Hidden Ones.',
    logo: 'assests/Images/logos/AC_10_gold_Logo.png',
    charImage: 'assests/Images/characters_images/AC10_Valhalla/assassin_s_creed_valhalla_evior.png'
  },
  {
    id: 'ac1', seq: '05',
    subtitle: "ASSASSIN'S", title: 'CREED',
    year: '1191 CE', era: 'Third Crusade',
    color: 0xc8d0e0, hex: '#c8d0e0',
    assassin: "Altaïr Ibn-La'Ahad", location: 'Holy Land',
    desc: 'Disgraced Master Assassin Altaïr hunts nine Templar targets during the Third Crusade.',
    logo: 'assests/Images/logos/Ac_1.png',
    charImage: 'assests/Images/characters_images/Ac1_Character/Altair1.png'
  },
  {
    id: 'ac2', seq: '06',
    subtitle: "ASSASSIN'S CREED", title: 'II',
    year: '1476 CE', era: 'Italian Renaissance',
    color: 0x4080d0, hex: '#4080d0',
    assassin: 'Ezio Auditore', location: 'Florence & Venice',
    desc: 'A nobleman’s son witnesses his family betrayed. Ezio Auditore transforms grief into purpose.',
    logo: 'assests/Images/logos/Ac_2.png',
    charImage: 'assests/Images/characters_images/Ac2/Ezio-Auditore_Ac_Brotherhood.png'
  },
  {
    id: 'brotherhood', seq: '07',
    subtitle: "ASSASSIN'S CREED", title: 'BROTHERHOOD',
    year: '1499 CE', era: 'Italian Renaissance',
    color: 0xcc3010, hex: '#cc3010',
    assassin: 'Ezio Auditore', location: 'Rome',
    desc: 'Ezio rebuilds the Brotherhood from its ruins to destroy Borgia Templar power in Rome.',
    logo: 'assests/Images/logos/Ac_2.png',
    charImage: 'assests/Images/characters_images/Ac2/AC_2.png'
  },
  {
    id: 'revelations', seq: '08',
    subtitle: "ASSASSIN'S CREED", title: 'REVELATIONS',
    year: '1511 CE', era: 'Ottoman Constantinople',
    color: 0xe06020, hex: '#e06020',
    assassin: 'Ezio Auditore', location: 'Constantinople',
    desc: 'An aging Ezio journeys to Constantinople to unlock secrets left by Altaïr.',
    logo: 'assests/Images/logos/Ac_3.1_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac2/Ezio-Auditore_Ac_Revelations.png'
  },
  {
    id: 'shadows', seq: '09',
    subtitle: "ASSASSIN'S CREED", title: 'SHADOWS',
    year: '1581 CE', era: 'Feudal Japan',
    color: 0xb03030, hex: '#b03030',
    assassin: 'Naoe & Yasuke', location: 'Feudal Japan',
    desc: 'Feudal Japan burns in chaos. A shinobi and a legendary samurai unite to vanquish the shadows.',
    logo: 'assests/Images/logos/AC15_Aniversary.avif',
    charImage: 'assests/Images/characters_images/AC_shadows/AC_Shadows_Naoe.png'
  },
  {
    id: 'blackflag', seq: '10',
    subtitle: "ASSASSIN'S CREED IV", title: 'BLACK FLAG',
    year: '1715 CE', era: 'Golden Age of Piracy',
    color: 0x208060, hex: '#208060',
    assassin: 'Edward Kenway', location: 'Caribbean Sea',
    desc: 'Welsh pirate Edward Kenway stumbles into the Assassin-Templar war while chasing Caribbean fortune.',
    logo: 'assests/Images/logos/Ac_4_BlackFlag1.png',
    charImage: 'assests/Images/characters_images/Ac4_BlackFlag/Edward_kenway_3.png'
  },
  {
    id: 'rogue', seq: '11',
    subtitle: "ASSASSIN'S CREED", title: 'ROGUE',
    year: '1752 CE', era: "Seven Years' War",
    color: 0x909aaa, hex: '#909aaa',
    assassin: 'Shay Patrick Cormac', location: 'North Atlantic',
    desc: 'Shay Cormac turns his blade against his former Brotherhood to become the most feared Assassin hunter.',
    logo: 'assests/Images/logos/AC_5_rogue.png',
    charImage: 'assests/Images/characters_images/AC5_Rouge/assassin_s_creed_rogue_render_cut_by_outlawninja_d7uh41g-pre.png'
  },
  {
    id: 'ac3', seq: '12',
    subtitle: "ASSASSIN'S CREED", title: 'III',
    year: '1754 CE', era: 'American Revolution',
    color: 0x3060a0, hex: '#3060a0',
    assassin: 'Connor Kenway', location: 'Colonial America',
    desc: 'Connor fights to protect his people’s lands during the fires of the American Revolution.',
    logo: 'assests/Images/logos/AC_3_America.png',
    charImage: 'assests/Images/characters_images/Ac3/Assassins-Creed_3_Cornor.png'
  },
  {
    id: 'unity', seq: '13',
    subtitle: "ASSASSIN'S CREED", title: 'UNITY',
    year: '1789 CE', era: 'French Revolution',
    color: 0x8050b0, hex: '#8050b0',
    assassin: 'Arno Dorian', location: 'Revolutionary Paris',
    desc: 'Paris bleeds. Arno Dorian joins the Brotherhood to uncover the true conspirators.',
    logo: 'assests/Images/logos/AC_6_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac6_Unity/Arno.png'
  },
  {
    id: 'syndicate', seq: '14',
    subtitle: "ASSASSIN'S CREED", title: 'SYNDICATE',
    year: '1868 CE', era: 'Victorian London',
    color: 0xa05020, hex: '#a05020',
    assassin: 'Jacob & Evie Frye', location: 'Victorian London',
    desc: 'Jacob and Evie Frye build a criminal gang to liberate London from Templar oppression.',
    logo: 'assests/Images/logos/AC_7_gold_Logo.png',
    charImage: 'assests/Images/characters_images/Ac_Syndicate/male_chrac.png'
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

// ── GSAP TIMELINE TRANSITIONS ────────────────────────────────────────────────
function transitionChapter(idx) {
  if (activeChapter === idx) return;
  activeChapter = idx;
  const game = GAMES[idx];

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
          
          // Disable colored glow for games with white/grey clothes (Altair, Black Flag, Rogue, AC3)
          const noGlowGames = ['ac1', 'blackflag', 'rogue', 'ac3'];
          if (noGlowGames.includes(game.id)) {
            charImgEl.style.filter = 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.75))';
          } else {
            charImgEl.style.filter = `drop-shadow(0 0 30px ${game.hex}55)`;
          }
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
      
      const noGlowGames = ['ac1', 'blackflag', 'rogue', 'ac3'];
      if (noGlowGames.includes(game.id)) {
        charImgEl.style.filter = 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.75))';
      } else {
        charImgEl.style.filter = `drop-shadow(0 0 30px ${game.hex}55)`;
      }
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
  if (!container) return;
  container.innerHTML = '';

  GAMES.forEach((game, i) => {
    const card = document.createElement('div');
    card.className = 'archive-card rounded-lg p-5 flex flex-col items-center text-center cursor-pointer';
    card.onclick = () => openModal(i);

    // Determine custom logo graphic or default fallback
    const logoHtml = game.logo 
      ? `<img class="h-16 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] mb-4" src="${game.logo}" alt="Logo">`
      : `<div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center font-cinzelDec text-cyan-400 mb-4">◈</div>`;

    card.innerHTML = `
      ${logoHtml}
      <span class="font-orbitron text-[9px] tracking-wider" style="color: ${game.hex}">SEQ ${game.seq}</span>
      <h3 class="font-cinzel text-lg font-bold text-white tracking-widest mt-1">${game.title}</h3>
      <p class="font-orbitron text-[9px] text-slate-500 tracking-widest mt-0.5">${game.year}</p>
      <span class="text-[10px] text-slate-400 font-mono mt-3 uppercase tracking-wider">${game.assassin}</span>
    `;
    container.appendChild(card);
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

// ── WINDOW ENTRY ──────────────────────────────────────────────────────────────
function init() {
  buildTimelineControls();
  buildDatabaseGrid();
  setupScrollTriggers();
  
  // Initialize first slide values
  transitionChapter(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
