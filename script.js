/* ========= Course Modal Data ========= */
const COURSE_DATA = {
  "applied-sciences": {
    title: "Applied-Sciences",
    UG: [
      "B.Sc. in Chemistry (Hons.)",
      "B.Sc. in Mathematics (Hons.)",
      "B.Sc. in Physics (Hons.)",
      "B.Sc. in Statistics (Hons.)",
      "B.Sc. in Industrial Nano Science",
    ],
    PG: [
      "M.Tech. in Nano Tech",
      "M.Sc. in Chemistry",
      "M.Sc. in Mathematics",
      "M.Sc. in Physics",
      "M.Sc. in Statistics",
    ],
    INTEGRATED: [
      "B.Tech + M.Tech in Biotechnology",
      "B.Tech + M.Tech in Nano Technology",
      "B.Tech + MBA in Biotechnology",
      "B.Tech + MBA in Nano Technology",
    ],
    PHD: [
      "Ph.D. in Chemistry",
      "Ph.D. in Mathematics",
      "Ph.D. in Physics",
      "Ph.D. in Nano Technology",
    ],
    topPrograms: [
      "B.Sc. in Chemistry (Hons.)",
      "B.Sc. in Mathematics (Hons.)",
      "B.Sc. in Physics (Hons.)",
    ],
  },

  "chemical-food": {
    title: "Chemical-Engineering-&-Food-Technology",
    UG: [
      "B.Tech. in Chemical Engineering",
      "B.Tech. in Dairy Technology",
      "B.Tech. in Agricultural Engineering",
      "B.Tech. in Petroleum Engineering",
    ],
    PG: [
      "M.Tech. in Chemical Engineering",
      "M.Tech. in Agricultural Engineering",
      "M.Tech. in Petroleum Engineering",
      "M.Tech. in Dairy Technology",
    ],
    INTEGRATED: [
      "B.Tech + M.Tech in Chemical Engineering",
      "B.Tech + M.Tech in Petroleum Engineering",
      "B.Tech + M.Tech in Dairy Technology",
      "B.Tech + M.Tech in Agricultural Engineering",
      "B.Tech + M.Tech in Energy and Power Engineering",
      "B.Tech + MBA in Agricultural Engineering",
      "B.Tech + MBA in Chemical Engineering",
      "B.Tech + MBA in Petroleum Engineering",
      "B.Tech + MBA in Dairy Technology",
    ],
    PHD: [
      "Ph.D. in Food Technology",
      "Ph.D. in Petroleum Engineering",
      "Ph.D. in Dairy Technology",
      "Ph.D. in Chemical Engineering",
      "Ph.D. in Agriculture Engineering",
      "Ph.D. in Hydrogen Technology",
    ],
    topPrograms: [
      "B.Tech. in Chemical Engineering",
      "Diploma in Petroleum Engineering",
    ],
    DIPLOMA: ["Diploma in Petroleum Engineering"],
  },

  "civil-engineering": {
    title: "Civil-Engineering",
    UG: ["B.Tech. in Civil Engineering"],
    PG: [
      "M.Tech. in Civil Engineering",
      "M.Tech. in Construction Management Engineering",
      "M.Tech. in Transportation Engineering",
      "M.Tech. in Structural Engineering",
      "M.Tech. in Geotechnical Engineering",
      "M.Tech. in Water Resources Engineering",
      "M.Tech. in Environmental Engineering",
    ],
    INTEGRATED: [
      "B.Tech + M.Tech in Civil Engineering",
      "B.Tech + MBA in Civil Engineering",
    ],
    PHD: ["Ph.D. in Civil Engineering"],
    DIPLOMA: ["Diploma in Civil Engineering"],
    topPrograms: [
      "B.Tech. in Civil Engineering",
      "M.Tech. in Civil Engineering",
    ],
  },

  "mech-aero": {
    title: "Mechanical-Engineering-&-Aerospace-Engineering",
    UG: [
      "B.Tech. in Aerospace Engineering",
      "B.Tech. in Automobile Engineering",
      "B.Tech. in Mechanical Engineering",
      "B.Tech. in Mechatronics Engineering",
    ],
    PG: [
      "M.Tech. in Aerospace Engineering",
      "M.Tech. in Automobile Engineering",
      "M.Tech. in Mechanical Engineering",
      "M.Tech. in Mechatronics Engineering",
    ],
    INTEGRATED: [
      "B.Tech + M.Tech in Aerospace Engineering",
      "B.Tech + M.Tech in Automobile Engineering",
      "B.Tech + M.Tech in Mechanical Engineering",
      "B.Tech + M.Tech in Mechatronics Engineering",
      "B.Tech + MBA in Aerospace Engineering",
      "B.Tech + MBA in Mechatronics Engineering",
      "B.Tech + MBA in Automobile Engineering",
      "B.Tech + MBA in Mechanical Engineering",
    ],
    PHD: [
      "Ph.D. in Mechanical Engineering",
      "Ph.D. in Automobile Engineering",
      "Ph.D. in Aerospace Engineering",
    ],
    DIPLOMA: [
      "Diploma in Automobile Engineering",
      "Diploma in Mechanical Engineering",
    ],
    topPrograms: [
      "B.Tech in Mechanical Engineering",
      "M.Tech. in Aerospace Engineering",
      "M.Tech. in Automobile Engineering",
    ],
  },

  "eee": {
    title: "Electronics-&-Electrical-Engineering",
    UG: [
      "B.Tech. in Electrical Engineering",
      "B.Tech. in Electronics and Communication Engineering",
      "B.Tech. in Electronics Instrumentation",
      "B.Tech. in Biomedical Engineering",
      "B.Tech. in Energy and Power Engineering",
      "B.Tech. in Instrumentation and Control Engineering",
    ],
    PG: [
      "M.Tech. in Electronics and Communication",
      "M.Tech. in Biomedical Engineering",
      "M.Tech. in Electrical Engineering",
      "M.Tech. in Electronics Instrumentation",
      "M.Tech. in Instrumentation and Control Engineering",
    ],
    INTEGRATED: [
      "B.Tech + M.Tech in Electrical Engineering",
      "B.Tech + M.Tech in Electronics & Communication Engineering",
      "B.Tech + M.Tech in Electronics Instrumentation",
      "B.Tech + M.Tech in Instrumentation & Control Engineering",
      "B.Tech + M.Tech in Energy & Power Engineering",
      "B.Tech + M.Tech in Biomedical Engineering",
      "B.Tech + MBA in Instrumentation & Control Engineering",
      "B.Tech + MBA in Electrical Engineering",
      "B.Tech + MBA in Electronics & Communication Engineering",
      "B.Tech + MBA in Electronics Instrumentation",
      "B.Tech + MBA in Energy & Power Engineering",
      "B.Tech + MBA in Biomedical Engineering",
    ],
    PHD: [
      "Ph.D. in Electronics and Communication Engineering",
      "Ph.D. in Instrumentation and Control Engineering",
    ],
    DIPLOMA: [
      "Diploma in Electrical Engineering",
      "Diploma in Electronics and Communication Engineering",
    ],
    topPrograms: [
      "B.Tech. in Electronics and Communication Engineering",
    ],
  },
};

/* ========= Helpers ========= */
function fillList(elId, items){
  const ul = document.getElementById(elId);
  if (!ul) return;
  ul.innerHTML = "";
  (items || []).forEach(text=>{
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}

/* ========= Course Modal Logic ========= */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.openCourseModal').forEach(el=>{
    el.addEventListener('click', ()=>{
      const key = el.dataset.course;
      const data = COURSE_DATA[key];

      if(!data){
        document.getElementById('modalCourseName').textContent = "Programs";
        ["col-left-ug","col-left-int","col-right-pg","col-right-phd"]
          .forEach(id=>document.getElementById(id).innerHTML="");
        new bootstrap.Modal(document.getElementById('courseModal')).show();
        return;
      }

      document.getElementById('modalCourseName').textContent = data.title;

      fillList("col-left-ug",   data.UG);
      fillList("col-left-int",  data.INTEGRATED);
      fillList("col-right-pg",  data.PG);
      fillList("col-right-phd", data.PHD);

      new bootstrap.Modal(document.getElementById('courseModal')).show();
    });
  });
});

/* ========= Inline Video Tiles (Section 2 & 3) ========= */
// YouTube API client registry
const players = new Map();

function playInTile(card){
  const videoId = card.dataset.ytid;
  const start = parseInt(card.dataset.start || "0", 10);
  const host = card.querySelector('.player-host');

  // Stop other players
  players.forEach((p, el) => {
    if (el !== card && p?.stopVideo) p.stopVideo();
    if (el !== card) resetTile(el);
  });

  // Already created?
  if (players.has(card) && players.get(card)?.playVideo){
    card.classList.add('playing');
    players.get(card).seekTo(start, true);
    players.get(card).playVideo();
    return;
  }

  // Create player
  const holder = document.createElement('div');
  host.appendChild(holder);

  const player = new YT.Player(holder, {
    videoId,
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      autoplay: 1,
      start: start,
      rel: 0,
      playsinline: 1,
      modestbranding: 1,
      controls: 1,
      fs: 1,
      disablekb: 0
    },
    events: {
      onReady: () => {
        card.classList.add('playing');
        try { player.playVideo(); } catch(_){}
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) { resetTile(card); }
        if (e.data === YT.PlayerState.PAUSED) { card.classList.remove('playing'); }
        if (e.data === YT.PlayerState.PLAYING) { card.classList.add('playing'); }
      },
      onError: () => {
        resetTile(card);
        const url = `https://www.youtube.com/watch?v=${videoId}` + (start ? `&t=${start}s` : "");
        window.open(url, '_blank');
      }
    }
  });

  players.set(card, player);
}

function resetTile(card){
  card.classList.remove('playing');
  const host = card.querySelector('.player-host');
  host.innerHTML = '';
  if (players.has(card)) {
    try { players.get(card).destroy(); } catch (_) {}
    players.delete(card);
  }
}

// YouTube API callback (required in global scope)
window.onYouTubeIframeAPIReady = function(){ /* players are created on demand */ };

// Bind click for inline cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => playInTile(card));
  });
});

// Pause when tab hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) players.forEach(p => { try{ p.pauseVideo(); }catch(_){ } });
});



/* ========= Student Experiences: main player + strip ========= */
document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    { id: "u202wS5PoJ4", thumb: "https://img.youtube.com/vi/u202wS5PoJ4/mqdefault.jpg", label: "Pratiksha Singh – BJMC", caption: "Pratiksha Singh, a Journalism & Mass Communication student — Explore NIMS University Rajasthan." },
    { id: "WYStijGTA_E", thumb: "https://img.youtube.com/vi/WYStijGTA_E/mqdefault.jpg", label: "Anisha – B.Sc. Nutrition", caption: "Anisha’s Journey | B.Sc. Nutrition & Dietetics at Axel Pries Institute, Nims University Rajasthan." },
    { id: "3n6-ycOmBOs", thumb: "https://img.youtube.com/vi/3n6-ycOmBOs/mqdefault.jpg", label: "Divya – BBA Student", caption: "Hear from Divya Kumari, a BBA student at NIMS University." },
    { id: "_GOXqioyvrI", thumb: "https://img.youtube.com/vi/_GOXqioyvrI/mqdefault.jpg", label: "Jasmeen – AI/ML", caption: "Meet Jasmeen Kaur, Student AI/ML, sharing her incredible journey at NIMS University!" },
    { id: "IsBcXSO27cY", thumb: "https://img.youtube.com/vi/IsBcXSO27cY/mqdefault.jpg", label: "Aastha – School of Law", caption: "Aastha Kamboj, a student at NIMS School of Law, shares her inspiring journey and experiences." }
  ];

  const mainVideo = document.getElementById("mainVideo");
  const overlayCaption = document.getElementById("overlayCaption");
  const strip = document.getElementById("thumbStrip");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  if (!mainVideo || !strip) return;

  let currentIndex = 0;
  let userInteracted = false; // track whether user has interacted

  // Build thumb cards (only once)
  videos.forEach((v, idx) => {
    const card = document.createElement("div");
    card.className = "video-thumb";
    card.dataset.index = idx;

    const img = document.createElement("img");
    img.src = v.thumb; img.alt = v.label;

    const p = document.createElement("p");
    p.textContent = v.label;

    card.appendChild(img); card.appendChild(p);
    strip.appendChild(card);
  });

  // Query thumbs after adding them
  const thumbs = Array.from(strip.querySelectorAll(".video-thumb"));

  function setSelected(i){
    thumbs.forEach(t => t.classList.remove("selected"));
    const el = strip.querySelector(`.video-thumb[data-index="${i}"]`);
    if (el) el.classList.add("selected");
  }

  /**
   * playAt(index, {scroll = true, autoplay = true})
   * - scroll: whether to scroll the thumbnail into view (default true)
   * - autoplay: whether to set autoplay on the iframe src (default true)
   */
  function playAt(i, opts = {scroll: true, autoplay: true}){
    currentIndex = (i + videos.length) % videos.length;
    const v = videos[currentIndex];

    // Set src: include autoplay param only if opts.autoplay === true
    const autoplayPart = opts.autoplay ? "?autoplay=1&controls=1" : "?controls=1";
    mainVideo.src = `https://www.youtube.com/embed/${v.id}${autoplayPart}`;
    overlayCaption.textContent = v.caption;
    setSelected(currentIndex);

    // Only scroll if explicitly allowed (we'll skip on init)
    if (opts.scroll) {
      const el = strip.querySelector(`.video-thumb[data-index="${currentIndex}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }

  // Initialize WITHOUT causing a scroll or autoplay on page load
  const initIndex = videos.findIndex(v => v.id === "3n6-ycOmBOs");
  playAt(initIndex >= 0 ? initIndex : 0, { scroll: false, autoplay: false });

  // Click handlers: these count as user interaction and will allow scroll/autoplay afterwards
  thumbs.forEach(t => {
    t.addEventListener("click", () => {
      userInteracted = true;
      const i = parseInt(t.dataset.index, 10);
      playAt(i, { scroll: true, autoplay: true });
      // optional: if you had a delayed auto-scroll, you could enable it here
    });
  });

  // Prev/Next
  btnPrev?.addEventListener("click", () => { userInteracted = true; playAt(currentIndex - 1, { scroll: true, autoplay: true }); });
  btnNext?.addEventListener("click", () => { userInteracted = true; playAt(currentIndex + 1, { scroll: true, autoplay: true }); });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { userInteracted = true; playAt(currentIndex - 1, { scroll: true, autoplay: true }); }
    if (e.key === "ArrowRight"){ userInteracted = true; playAt(currentIndex + 1, { scroll: true, autoplay: true }); }
  });

  // If you want automatic advancing only AFTER user interacts, you can do that:
  // let autoAdvanceInterval = null;
  // function startAutoAdvance() {
  //   if (autoAdvanceInterval) return;
  //   autoAdvanceInterval = setInterval(() => playAt(currentIndex + 1, { scroll: true, autoplay: true }), 6000);
  // }
  // // Example: startAutoAdvance after first user click
  // strip.addEventListener('click', () => { if (!autoAdvanceInterval) startAutoAdvance(); }, { once: true });
});

/* ===== Student Review vertical scroller (the part that was auto-scrolling every 3s) ===== */
/* Replace the previous automatic setInterval with a user-driven or interaction-driven start.
   Below: do NOT start auto-scroll on page load. Start only after user interacts (e.g. hover or click).
*/
(function(){
  const scrollBox = document.getElementById("sliderList");
  if (!scrollBox) return;
  const scrollItems = Array.from(scrollBox.querySelectorAll(".scroll-item"));
  if (!scrollItems.length) return;

  let scrollIndex = 0;
  let autoTimer = null;

  function scrollToIndex(idx, withHighlight = true){
    const current = scrollItems[(idx + scrollItems.length) % scrollItems.length];
    scrollBox.scrollTop = current.offsetTop - scrollBox.offsetTop;
    if (withHighlight) {
      scrollItems.forEach(i => i.classList.remove("active"));
      current.classList.add("active");
    }
    const img = current.getAttribute("data-img");
    if (img) {
      const imgEl = document.getElementById("activeImage");
      if (imgEl) imgEl.src = img;
    }
    scrollIndex = (idx + scrollItems.length) % scrollItems.length;
  }

  function nextItem(){
    scrollToIndex(scrollIndex + 1);
  }

  // Do NOT auto-start. If you want auto-scroll only after user interacts:
  function startAutoScroll() {
    if (autoTimer) return;
    autoTimer = setInterval(nextItem, 3000);
  }

  function stopAutoScroll() {
    if (!autoTimer) return;
    clearInterval(autoTimer);
    autoTimer = null;
  }

  // Start auto-scroll after user hovers the scroller or clicks any item (so it won't run on refresh)
  scrollBox.addEventListener('mouseenter', () => startAutoScroll());
  scrollBox.addEventListener('mouseleave', () => stopAutoScroll());
  scrollBox.addEventListener('click', () => startAutoScroll(), { once: true });

  // Initialize first item but don't auto-scroll
  scrollToIndex(0, true);
})();




/* ========= Student Experiences: main player + strip ========= */
// document.addEventListener("DOMContentLoaded", () => {
//   const videos = [
//     {
//       id: "u202wS5PoJ4",
//       thumb: "https://img.youtube.com/vi/u202wS5PoJ4/mqdefault.jpg",
//       label: "Pratiksha Singh – BJMC",
//       caption: "Pratiksha Singh, a Journalism & Mass Communication student — Explore NIMS University Rajasthan."
//     },
//     {
//       id: "WYStijGTA_E",
//       thumb: "https://img.youtube.com/vi/WYStijGTA_E/mqdefault.jpg",
//       label: "Anisha – B.Sc. Nutrition",
//       caption: "Anisha’s Journey | B.Sc. Nutrition & Dietetics at Axel Pries Institute, Nims University Rajasthan."
//     },
//     {
//       id: "3n6-ycOmBOs",
//       thumb: "https://img.youtube.com/vi/3n6-ycOmBOs/mqdefault.jpg",
//       label: "Divya – BBA Student",
//       caption: "Hear from Divya Kumari, a BBA student at NIMS University."
//     },
//     {
//       id: "_GOXqioyvrI",
//       thumb: "https://img.youtube.com/vi/_GOXqioyvrI/mqdefault.jpg",
//       label: "Jasmeen – AI/ML",
//       caption: "Meet Jasmeen Kaur, Student AI/ML, sharing her incredible journey at NIMS University!"
//     },
//     {
//       id: "IsBcXSO27cY",
//       thumb: "https://img.youtube.com/vi/IsBcXSO27cY/mqdefault.jpg",
//       label: "Aastha – School of Law",
//       caption: "Aastha Kamboj, a student at NIMS School of Law, shares her inspiring journey and experiences."
//     }
//   ];

//   const mainVideo = document.getElementById("mainVideo");
//   const overlayCaption = document.getElementById("overlayCaption");
//   const strip = document.getElementById("thumbStrip");
//   const btnPrev = document.getElementById("btnPrev");
//   const btnNext = document.getElementById("btnNext");

//   let currentIndex = 0;

//   // Build thumb cards
//   videos.forEach((v, idx) => {
//     const card = document.createElement("div");
//     card.className = "video-thumb";
//     card.dataset.index = idx;

//     const img = document.createElement("img");
//     img.src = v.thumb; img.alt = v.label;

//     const p = document.createElement("p");
//     p.textContent = v.label;

//     card.appendChild(img); card.appendChild(p);
//     strip.appendChild(card);
//   });

//   const thumbs = Array.from(document.querySelectorAll(".video-thumb"));

//   function setSelected(i){
//     thumbs.forEach(t => t.classList.remove("selected"));
//     const el = document.querySelector(`.video-thumb[data-index="${i}"]`);
//     if (el) el.classList.add("selected");
//   }

//   function playAt(i){
//     currentIndex = (i + videos.length) % videos.length;
//     const v = videos[currentIndex];
//     mainVideo.src = `https://www.youtube.com/embed/${v.id}?autoplay=1&controls=1`;
//     overlayCaption.textContent = v.caption;
//     setSelected(currentIndex);
//     document.querySelector(`.video-thumb[data-index="${currentIndex}"]`)?.scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest"
//     });
//   }

//   // Init with Divya's video
//   const initIndex = videos.findIndex(v => v.id === "3n6-ycOmBOs");
//   playAt(initIndex >= 0 ? initIndex : 0);

//   // Click handlers
//   thumbs.forEach(t => {
//     t.addEventListener("click", () => {
//       const i = parseInt(t.dataset.index, 10);
//       playAt(i);
//     });
//   });

//   // Prev/Next
//   btnPrev.addEventListener("click", () => playAt(currentIndex - 1));
//   btnNext.addEventListener("click", () => playAt(currentIndex + 1));

//   // Keyboard
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowLeft") playAt(currentIndex - 1);
//     if (e.key === "ArrowRight") playAt(currentIndex + 1);
//   });
// });


/* ===== Cutting-Edge: scroll one card per click ===== */
document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('labScroller');
  const prevBtn  = document.querySelector('.lab-nav.prev');
  const nextBtn  = document.querySelector('.lab-nav.next');
  if (!scroller || !prevBtn || !nextBtn) return;

  // Compute one-card step (robust across breakpoints)
  function oneStep() {
    const first = scroller.querySelector('.lab-tile');
    if (!first) return scroller.clientWidth; // fallback
    const rect = first.getBoundingClientRect();
    // include gap by checking distance to next tile (if present)
    const second = first.nextElementSibling;
    if (second) {
      const rect2 = second.getBoundingClientRect();
      const gap = Math.max(0, rect2.left - rect.right);
      return rect.width + gap;
    }
    return rect.width;
  }

  function scrollByStep(dir = 1) {
    scroller.scrollBy({ left: oneStep() * dir, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => scrollByStep(-1));
  nextBtn.addEventListener('click', () => scrollByStep(1));

  // Keyboard support when scroller is focused
  scroller.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1); }
    if (e.key === 'ArrowRight'){ e.preventDefault(); scrollByStep(1);  }
  });

  // Optional: snap to nearest card on resize
  let resizeTO;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      scroller.scrollTo({ left: Math.round(scroller.scrollLeft / oneStep()) * oneStep(), behavior: 'instant' });
    }, 150);
  });
});


  const scrollBox = document.getElementById("sliderList");
  const scrollItems = scrollBox.querySelectorAll(".scroll-item");
  let scrollIndex = 0;
  function scrollToNextItem() {
  const current = scrollItems[scrollIndex];

    // Scroll to current item
    scrollBox.scrollTop = current.offsetTop - scrollBox.offsetTop;

    // Highlight current item
    scrollItems.forEach(i => i.classList.remove("active"));
    current.classList.add("active");

    // Change left image
    document.getElementById("activeImage").src = current.getAttribute("data-img");

    // Move to next
    scrollIndex++;
    if (scrollIndex >= scrollItems.length) {
      scrollIndex = 0; // loop back to top
    }
  }

  // Auto-scroll every 3 seconds
  setInterval(scrollToNextItem, 3000);


  /**
 * Seamless infinite scroller
 * - Clones the slide set once to allow wrap-around
 * - Calculates travel distance & duration from content width
 * - Recomputes on resize (debounced)
 */
(function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;

  const track = slider.querySelector('.slide-track');
  if(!track) return;

  // 1) Clone once for seamless loop (only if not already cloned)
  if(!track.dataset.cloned){
    const originalSlides = Array.from(track.children);
    const clones = originalSlides.map(n => n.cloneNode(true));
    track.append(...clones);
    track.dataset.cloned = 'true';
  }

  // 2) Compute distance (half of total width, i.e., width of one set)
  const setVars = () => {
    // Force layout update after images load
    const distance = track.scrollWidth / 2; // one set width
    // Speed: pixels per second (tweak to taste)
    const SPEED_PX_PER_S = 120; // ~120px/s feels smooth for logos
    const duration = distance / SPEED_PX_PER_S;

    track.style.setProperty('--nims-distance', distance + 'px');
    track.style.setProperty('--nims-duration', duration + 's');
  };

  // 3) Recalculate after images load
  const imgs = track.querySelectorAll('img');
  let pending = imgs.length;
  if(pending === 0){
    setVars();
  } else {
    imgs.forEach(img => {
      if(img.complete){
        if(--pending === 0) setVars();
      } else {
        img.addEventListener('load', () => { if(--pending === 0) setVars(); }, { once:true });
        img.addEventListener('error', () => { if(--pending === 0) setVars(); }, { once:true });
      }
    });
  }

  // 4) Recalculate on resize (debounced)
  let raf, lastW = window.innerWidth;
  const onResize = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      if(Math.abs(window.innerWidth - lastW) > 10){
        lastW = window.innerWidth;
        setVars();
      }
    });
  };
  window.addEventListener('resize', onResize, { passive:true });

  // 5) Allow manual re-init if content changes dynamically
  window.NIMS_LOGO_SCROLLER_REFRESH = setVars;
})();

 (function () {
    const track = document.getElementById('facultyTrack');
    const left = document.getElementById('scrollLeft');
    const right = document.getElementById('scrollRight');

    if (!track) return;

    // calculate card width + gap
    function getCardStep() {
      const card = track.querySelector('.faculty-card');
      if (!card) return Math.round(track.clientWidth * 0.8);
      const gap = parseFloat(getComputedStyle(track).gap) || 16;
      return Math.round(card.getBoundingClientRect().width + gap);
    }

    // safe smooth scroll wrapper with a tiny debounce to avoid overlapping calls
    let isScrolling = false;
    function safeScrollBy(px) {
      if (isScrolling) return;
      isScrolling = true;
      track.scrollBy({ left: px, behavior: 'smooth' });
      // estimate when smooth scroll will finish (approx): distance / 1000ms per 100px -> use 500ms min
      const wait = Math.max(500, Math.abs(px) * 3); // conservative
      setTimeout(() => { isScrolling = false; }, wait);
    }

    // auto-slide logic
    let autoId = null;
    const AUTO_INTERVAL =2000;
    const RESUME_AFTER_MANUAL = 2000; // resume auto-slide this many ms after manual action

    function autoSlideOnce() {
      const step = getCardStep();
      // if we're at (or very near) the end -> jump to start
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' });
      }
    }

    function startAuto() {
      stopAuto(); // ensure only one interval
      autoId = setInterval(autoSlideOnce, AUTO_INTERVAL);
    }

    function stopAuto() {
      if (autoId) {
        clearInterval(autoId);
        autoId = null;
      }
    }

    // restart (used after manual navigation) - waits RESUME_AFTER_MANUAL ms before starting
    let resumeTimeout = null;
    function restartAutoDelayed() {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      stopAuto();
      resumeTimeout = setTimeout(() => {
        startAuto();
        resumeTimeout = null;
      }, RESUME_AFTER_MANUAL);
    }

    // Arrow handlers (stop auto, scroll, then restart auto after a delay)
    function onLeftClick(e) {
      e.preventDefault();
      stopAuto();
      safeScrollBy(-getCardStep());
      restartAutoDelayed();
    }
    function onRightClick(e) {
      e.preventDefault();
      stopAuto();
      safeScrollBy(getCardStep());
      restartAutoDelayed();
    }

    left && left.addEventListener('click', onLeftClick);
    right && right.addEventListener('click', onRightClick);

    // Pause on hover / touch to improve UX
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', restartAutoDelayed);

    // For touch users: pause auto on touchstart, resume after touchend
    track.addEventListener('touchstart', stopAuto, { passive: true });
    track.addEventListener('touchend', restartAutoDelayed, { passive: true });

    // start initially
    startAuto();

    // Optional: adapt arrows visibility on resize (keeps your earlier behavior)
    function updateArrows() {
      if (!left || !right) return;
      if (window.innerWidth < 576) { left.style.display = 'none'; right.style.display = 'none'; }
      else { left.style.display = ''; right.style.display = ''; }
    }
    updateArrows();
    window.addEventListener('resize', updateArrows);

  })();

    (function() {
      // Remove any autoplay query param from iframe SRCs
      function stripAutoplay(url) {
        if(!url) return url;
        try {
          const u = new URL(url, location.href);
          if (u.searchParams.has('autoplay')) { u.searchParams.delete('autoplay'); }
          return u.toString();
        } catch (e) {
          // fallback string replace (safer for data: or relative)
          return url.replace(/([?&])autoplay=(?:1|0)(&?)/i, function(_, a, b){
            return a === '?' && b ? '?' : (b ? a : '');
          }).replace(/\?$/, '');
        }
      }

      document.addEventListener('DOMContentLoaded', function() {
        // normalize existing iframes
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          const src = iframe.getAttribute('src');
          if (src && src.indexOf('autoplay=1') !== -1) {
            iframe.setAttribute('src', stripAutoplay(src));
          }
        });

        // ensure mainVideo starts empty (no autoplay)
        const mainVideo = document.getElementById('mainVideo');
        if(mainVideo && mainVideo.getAttribute('src')) {
          mainVideo.setAttribute('src', stripAutoplay(mainVideo.getAttribute('src')));
        }
      });

      // Helper to load a video into the big player (call this from your script when thumbnail clicked)
      window.loadVideoIntoMain = function(src, caption) {
        if(!src) return;
        const clean = stripAutoplay(src);
        const mainVideo = document.getElementById('mainVideo');
        const overlay = document.getElementById('overlayCaption');
        if(mainVideo) {
          mainVideo.setAttribute('src', clean);
        }
        if(overlay && caption) { overlay.textContent = caption; }
      };
    })();