
let activeMonth = null;
// Calendar Data
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
        tip: "Ideal time for summer programs and teacher development"
    }
};

// Month names mapping
const monthNames = {
    "2025-08": "August 2025",
    "2025-09": "September 2025",
    "2025-10": "October 2025",
    "2025-11": "November 2025",
    "2025-12": "December 2025",
    "2026-01": "January 2026",
    "2026-02": "February 2026",
    "2026-03": "March 2026",
    "2026-04": "April 2026",
    "2026-05": "May 2026",
    "2026-06": "June 2026",
    "2026-07": "July 2026"
};

const monthAbbreviations = {
    "2025-08": "Aug",
    "2025-09": "Sep",
    "2025-10": "Oct",
    "2025-11": "Nov",
    "2025-12": "Dec",
    "2026-01": "Jan",
    "2026-02": "Feb",
    "2026-03": "Mar",
    "2026-04": "Apr",
    "2026-05": "May",
    "2026-06": "Jun",
    "2026-07": "Jul"
};

// Global variables
let currentMonth = null;
let scrollTimeout = null;
let isScrolling = false;

// DOM elements
const timelineTrack = document.getElementById('timeline-track');
const infoPanel = document.getElementById('info-panel');
const infoTitle = document.getElementById('info-title');
const infoEvents = document.getElementById('info-events');
const infoTip = document.getElementById('info-tip');
const phaseFilter = document.getElementById('phase-filter');
const regionFilter = document.getElementById('region-filter');
const modal = document.getElementById('lead-modal');
const leadForm = document.getElementById('lead-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    generateTimeline();
    attachEventListeners();
    
    // Set initial focus to first month
    setTimeout(() => {
        const firstMonth = Object.keys(calendarData)[0];
        focusMonth(firstMonth);
    }, 500);
});

// Generate timeline circles
function generateTimeline() {
    const months = Object.keys(calendarData);
    
    months.forEach((monthKey, index) => {
        const circle = document.createElement('div');
        circle.className = 'month-circle';
        circle.setAttribute('data-month', monthKey);
        circle.setAttribute('tabindex', '0');
        circle.setAttribute('role', 'button');
        circle.setAttribute('aria-label', `View ${monthNames[monthKey]} events`);
        
        const monthText = document.createElement('div');
        monthText.textContent = monthAbbreviations[monthKey];
        circle.appendChild(monthText);
        
        // Add click event
        circle.addEventListener('click', () => focusMonth(monthKey));
        
        // Add keyboard navigation
        circle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                focusMonth(monthKey);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigateMonth(index - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigateMonth(index + 1);
            }
        });
        
        timelineTrack.appendChild(circle);
    });
}

// Navigate to specific month index
function navigateMonth(index) {
    const months = Object.keys(calendarData);
    if (index >= 0 && index < months.length) {
        const monthKey = months[index];
        focusMonth(monthKey);
        
        // Focus the element for keyboard navigation
        const circles = document.querySelectorAll('.month-circle');
        circles[index].focus();
    }
}

// Focus on a specific month
function focusMonth(monthKey) {
    if (currentMonth === monthKey) return;
    
    currentMonth = monthKey;
    
    // Update active circle
    document.querySelectorAll('.month-circle').forEach(circle => {
        circle.classList.remove('active');
    });
    
    const activeCircle = document.querySelector(`[data-month="${monthKey}"]`);
    if (activeCircle) {
        activeCircle.classList.add('active');
        
        // Smooth scroll to center the active circle
        setTimeout(() => {
            activeCircle.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }, 100);
    }
    
    // Update info panel
    updateInfoPanel(monthKey);
}

// Update info panel with filtered events
function updateInfoPanel(monthKey) {
    const data = calendarData[monthKey];
    if (!data) return;
    
    const selectedPhase = phaseFilter.value;
    const selectedRegion = regionFilter.value;
    
    // Filter events based on selection
    const shouldShow = (data.phase.includes(selectedPhase) || data.phase.includes('All')) &&
                      (data.region.includes(selectedRegion) || data.region.includes('UK-wide'));
    
    if (!shouldShow) {
        infoTitle.textContent = `${monthNames[monthKey]} - No events match your filters`;
        infoEvents.innerHTML = '';
        infoTip.textContent = '';
        infoPanel.classList.add('show');
        return;
    }
    
    // Update title
    infoTitle.textContent = monthNames[monthKey];
    
    // Update events (max 5)
    const eventsToShow = data.events.slice(0, 5);
    infoEvents.innerHTML = eventsToShow.map(event => `<li>${event}</li>`).join('');
    
    // Update tip
    infoTip.textContent = `Key Tip: ${data.tip}`;
    
    // Show panel with animation
    infoPanel.classList.add('show');
}

// Auto-detect focused month during scroll
function detectFocusedMonth() {
    if (isScrolling) return;
    
    const trackRect = timelineTrack.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;
    
    let closestCircle = null;
    let closestDistance = Infinity;
    
    document.querySelectorAll('.month-circle').forEach(circle => {
        const rect = circle.getBoundingClientRect();
        const circleCenter = rect.left + rect.width / 2;
        const distance = Math.abs(circleCenter - centerX);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestCircle = circle;
        }
    });
    
    if (closestCircle) {
        const monthKey = closestCircle.getAttribute('data-month');
        if (monthKey !== currentMonth) {
            focusMonth(monthKey);
        }
    }
}

// Attach event listeners
function attachEventListeners() {
    // Filter change events
    phaseFilter.addEventListener('change', () => {
        if (currentMonth) {
            updateInfoPanel(currentMonth);
        }
    });
    
    regionFilter.addEventListener('change', () => {
        if (currentMonth) {
            updateInfoPanel(currentMonth);
        }
    });
    
    // Scroll detection for auto-focus
    timelineTrack.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
            detectFocusedMonth();
        }, 500);
    });
    
    // Touch/drag detection for mobile
    let startX = 0;
    let isDragging = false;
    
    timelineTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    timelineTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 10) {
            isScrolling = true;
            clearTimeout(scrollTimeout);
        }
    });
    
    timelineTrack.addEventListener('touchend', () => {
        isDragging = false;
        
        if (isScrolling) {
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                detectFocusedMonth();
            }, 500);
        }
    });
    
    // Modal close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Modal functions
function openModal() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus first input
    setTimeout(() => {
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 150);
    
    // Trap focus within modal
    trapFocus(modal);
}

function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    
    // Reset form
    leadForm.reset();
    
    // Remove focus trap
    removeFocusTrap();
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(leadForm);
    const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        timestamp: new Date().toISOString()
    };
    
    // Client-side validation
    if (!payload.name || !payload.email || !payload.company) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message with payload (placeholder for webhook)
    alert(`Thank you! Your information has been submitted:\n\n${JSON.stringify(payload, null, 2)}`);
    
    // Close modal
    closeModal();
}

// Focus trap for modal accessibility
let focusableElements = [];
let firstFocusableElement = null;
let lastFocusableElement = null;

function trapFocus(element) {
    focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    document.addEventListener('keydown', handleFocusTrap);
}

function handleFocusTrap(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
        }
    }
}

function removeFocusTrap() {
    document.removeEventListener('keydown', handleFocusTrap);
    focusableElements = [];
    firstFocusableElement = null;
    lastFocusableElement = null;
}

// Utility functions for responsive behavior
function handleResize() {
    // Re-detect focused month on resize
    if (currentMonth) {
        setTimeout(() => {
            detectFocusedMonth();
        }, 100);
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Performance optimization: use requestAnimationFrame for smooth animations
function smoothScrollToMonth(monthKey) {
    const circle = document.querySelector(`[data-month="${monthKey}"]`);
    if (!circle) return;
    
    const trackRect = timelineTrack.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;
    const circleCenter = circleRect.left + circleRect.width / 2;
    const scrollAmount = circleCenter - centerX;
    
    timelineTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.handleFormSubmit = handleFormSubmit;