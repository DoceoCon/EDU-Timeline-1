/* ---------- calendar data & helpers (unchanged) ---------------------- */
let activeMonth = null;

const calendarData = {
  "2025-08": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Summer holiday continues",
      "A-level Results Day – 14 Aug[1]",
      "GCSE Results Day – 21 Aug[1]",
      "Scottish schools return mid-August",
      "University clearing opens"
    ],
    tip: "Run awareness ads while staff plan next year and results create buzz"
  },
  "2025-09": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Schools return after summer break (England/Wales)",
      "New academic year begins",
      "Freshers' Week at universities",
      "Parent-teacher meetings scheduled",
      "Autumn term curriculum planning"
    ],
    tip: "Launch teacher CPD webinars before workload spikes"
  },
  "2025-10": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Half-term break (26-31 Oct)",
      "University application deadlines approach",
      "Black History Month celebrations",
      "Parent evenings peak season",
      "Winter term preparation"
    ],
    tip: "Focus on study skills and exam preparation resources"
  },
  "2025-11": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Schools & Academies Show – 19-20 Nov[23]",
      "Anti-Bullying Week (third week)",
      "Primary assessment planning period",
      "University UCAS applications peak",
      "Christmas preparations begin"
    ],
    tip: "Use event-themed content to drive qualified leads"
  },
  "2025-12": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Christmas holidays begin (mid-December)",
      "End of autumn term",
      "University winter break starts",
      "Year-end assessments complete",
      "Spring term planning"
    ],
    tip: "Engage with year-end reviews and New Year planning content"
  },
  "2026-01": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "BETT – 21-23 Jan 2026[3]",
      "University UCAS deadline 15 Jan",
      "Spring term restarts",
      "Mock exams begin",
      "New Year professional development"
    ],
    tip: "High-impact period for EdTech launches around BETT"
  },
  "2026-02": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Children's Mental Health Week – 9-15 Feb[10]",
      "Half term England/Wales (16-20 Feb)",
      "University reading week",
      "Exam preparation intensifies",
      "Easter planning begins"
    ],
    tip: "Focus on wellbeing resources and pilot programmes"
  },
  "2026-03": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "British Science Week",
      "World Book Day preparation",
      "University dissertations due",
      "Spring assessments begin",
      "Easter holiday planning"
    ],
    tip: "Leverage STEM and literacy themes for content marketing"
  },
  "2026-04": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Easter break (3-20 Apr)",
      "World Book Day – 23 Apr 2026[4]",
      "University Easter vacation",
      "Exam season preparation",
      "Summer term planning"
    ],
    tip: "Run reading-themed competitions for engagement"
  },
  "2026-05": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "SATs week for Year 6",
      "GCSE and A-level exams begin",
      "University final assessments",
      "Half term (26-30 May)",
      "Summer activities planning"
    ],
    tip: "Support exam stress management and revision techniques"
  },
  "2026-06": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "World Oceans Day – 8 Jun 2026[21]",
      "Exam season peak period",
      "Thank a Teacher Day – 18 Jun 2026[22]",
      "University graduation ceremonies",
      "Sports Day preparations"
    ],
    tip: "Leverage appreciation campaigns and CSR angles"
  },
  "2026-07": {
    phase: ["All"],
    region: ["UK-wide"],
    events: [
      "Summer holidays begin",
      "Exam results preparation",
      "University summer break starts",
      "Teacher training courses",
      "Next year planning begins"
    ],
    tip: "Ideal time for summer programmes and teacher development"
  }
};

const monthNames = {
  "2025-08": "August 2025",  "2025-09": "September 2025",
  "2025-10": "October 2025", "2025-11": "November 2025",
  "2025-12": "December 2025", "2026-01": "January 2026",
  "2026-02": "February 2026", "2026-03": "March 2026",
  "2026-04": "April 2026",    "2026-05": "May 2026",
  "2026-06": "June 2026",     "2026-07": "July 2026"
};

const monthAbbreviations = {
  "2025-08": "Aug", "2025-09": "Sep", "2025-10": "Oct",
  "2025-11": "Nov", "2025-12": "Dec", "2026-01": "Jan",
  "2026-02": "Feb", "2026-03": "Mar", "2026-04": "Apr",
  "2026-05": "May", "2026-06": "Jun", "2026-07": "Jul"
};

/* ---------- global state & DOM refs ---------------------------------- */
let currentMonth = null;
let scrollTimeout = null;
let isScrolling = false;
let programmaticScroll = false; // NEW: Flag to track intentional scrolls

const timelineTrack = document.getElementById("timeline-track");
const infoPanel = document.getElementById("info-panel");
const infoTitle = document.getElementById("info-title");
const infoEvents = document.getElementById("info-events");
const infoTip = document.getElementById("info-tip");
const phaseFilter = document.getElementById("phase-filter");
const regionFilter = document.getElementById("region-filter");
const modal = document.getElementById("lead-modal");
const leadForm = document.getElementById("lead-form");

/* ---------- app bootstrap -------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  generateTimeline();
  attachEventListeners();

  // initial focus
  setTimeout(() => {
    const firstMonth = Object.keys(calendarData)[0];
    focusMonth(firstMonth);
  }, 500);
});

/* ---------- timeline generation -------------------------------------- */
function generateTimeline() {
  const months = Object.keys(calendarData);

  months.forEach((monthKey, index) => {
    const circle = document.createElement("div");
    circle.className = "month-circle";
    circle.dataset.month = monthKey;
    circle.tabIndex = 0;
    circle.role = "button";
    circle.setAttribute("aria-label", `View ${monthNames[monthKey]} events`);

    const label = document.createElement("div");
    label.textContent = monthAbbreviations[monthKey];
    circle.appendChild(label);

    // click
    circle.addEventListener("click", () => focusMonth(monthKey));

    // keyboard nav
    circle.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        focusMonth(monthKey);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateMonth(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateMonth(index + 1);
      }
    });

    timelineTrack.appendChild(circle);
  });
}

/* ---------- navigation helpers --------------------------------------- */
function navigateMonth(index) {
  const months = Object.keys(calendarData);
  if (index >= 0 && index < months.length) {
    const monthKey = months[index];
    focusMonth(monthKey);

    // restore keyboard focus
    document.querySelectorAll(".month-circle")[index].focus();
  }
}

/* ---------- NEW helper: always centre a circle ----------------------- */
function centreCircle(circle) {
  if (!circle) return;

  const trackRect = timelineTrack.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();
  const centrePoint = trackRect.left + trackRect.width / 2;
  const delta = (circleRect.left + circleRect.width / 2) - centrePoint;

  // Set flag to prevent detectFocusedMonth from interfering
  programmaticScroll = true;
  timelineTrack.scrollBy({ left: delta, behavior: "smooth" });

  // Reset flag after scroll animation completes
  setTimeout(() => {
    programmaticScroll = false;
  }, 400);
}

/* ---------- FIXED focus logic ---------------------------------------- */
function focusMonth(monthKey) {
  if (currentMonth === monthKey) return;
  currentMonth = monthKey;

  // Set flag to prevent detectFocusedMonth from interfering
  isScrolling = true;
  clearTimeout(scrollTimeout);

  // update active circle
  document.querySelectorAll(".month-circle").forEach(c => c.classList.remove("active"));
  const activeCircle = document.querySelector(`[data-month="${monthKey}"]`);
  if (activeCircle) {
    activeCircle.classList.add("active");
    centreCircle(activeCircle);
  }

  updateInfoPanel(monthKey);
}

/* ---------- info panel ------------------------------------------------ */
function updateInfoPanel(monthKey) {
  const data = calendarData[monthKey];
  if (!data) return;

  const phaseOk = data.phase.includes(phaseFilter.value) || data.phase.includes("All");
  const regionOk = data.region.includes(regionFilter.value) || data.region.includes("UK-wide");
  const showData = phaseOk && regionOk;

  if (!showData) {
    infoTitle.textContent = `${monthNames[monthKey]} – no events match your filters`;
    infoEvents.innerHTML = "";
    infoTip.textContent = "";
    infoPanel.classList.add("show");
    return;
  }

  infoTitle.textContent = monthNames[monthKey];
  const eventsToShow = data.events.slice(0, 5);
  infoEvents.innerHTML = eventsToShow.map(ev => `<li>${ev}</li>`).join("");
  infoTip.textContent = data.tip;
  infoPanel.classList.add("show");
}

/* ---------- FIXED scroll detection ----------------------------------- */
function detectFocusedMonth() {
  // Don't run detection if we're in the middle of a programmatic scroll
  if (programmaticScroll) return;

  const circles = document.querySelectorAll(".month-circle");
  const trackRect = timelineTrack.getBoundingClientRect();
  const centre = trackRect.left + trackRect.width / 2;

  let closest = null;
  let minDist = Number.MAX_VALUE;

  circles.forEach(circle => {
    const rect = circle.getBoundingClientRect();
    const circleCentre = rect.left + rect.width / 2;
    const dist = Math.abs(circleCentre - centre);
    if (dist < minDist) {
      minDist = dist;
      closest = circle.dataset.month;
    }
  });

  if (closest) focusMonth(closest);
}

/* ---------- FIXED event listeners ------------------------------------ */
function attachEventListeners() {
  // filters
  phaseFilter.addEventListener("change", () => currentMonth && updateInfoPanel(currentMonth));
  regionFilter.addEventListener("change", () => currentMonth && updateInfoPanel(currentMonth));

  // FIXED track scroll - only run detection for user-initiated scrolls
  timelineTrack.addEventListener("scroll", () => {
    // Only run detection if this is NOT a programmatic scroll
    if (!programmaticScroll) {
      isScrolling = true;
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        detectFocusedMonth();
      }, 200);
    }
  });

  // resize
  window.addEventListener("resize", () => {
    if (currentMonth) {
      setTimeout(() => detectFocusedMonth(), 100);
    }
  });
}

/* ---------- optional modal handlers (unchanged) ---------------------- */
function openModal() { modal.classList.add("show"); }
function closeModal() { modal.classList.remove("show"); }
function handleFormSubmit(e) {
  e.preventDefault();
  // … submit logic …
  closeModal();
}

/* export helpers for inline handlers */
window.openModal = openModal;
window.closeModal = closeModal;
window.handleFormSubmit = handleFormSubmit;
