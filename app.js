// Education Marketing Calendar Application
class EducationCalendar {
    constructor() {
        this.currentMonth = null;
        this.currentIndex = 0;
        this.monthCircles = [];
        this.calendarData = {
            "2025-08": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Summer holiday continues",
                    "A-level Results Day – 14 Aug",
                    "GCSE Results Day – 21 Aug",
                    "Scottish schools return mid-August",
                    "University clearing opens",
                    "Teacher training begins",
                    "Back-to-school campaigns peak",
                    "Year 13 university applications",
                    "School supply procurement",
                    "Exam results analysis period"
                ],
                "tip": "Run awareness ads while staff plan next year and results create buzz"
            },
            "2025-09": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Schools return after summer break",
                    "New academic year begins",
                    "Freshers' Week at universities",
                    "Parent-teacher meetings scheduled",
                    "Autumn term curriculum planning",
                    "New starter orientation",
                    "Textbook ordering deadline",
                    "After-school clubs recruitment",
                    "Primary school settling period",
                    "University societies fair"
                ],
                "tip": "Launch teacher CPD webinars before workload spikes"
            },
            "2025-10": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Half-term break (26-31 Oct)",
                    "University application deadlines approach",
                    "Black History Month celebrations",
                    "Parent evenings peak season",
                    "Winter term preparation",
                    "Halloween educational themes",
                    "Autumn assessments begin",
                    "School photography sessions",
                    "Harvest festival celebrations",
                    "Educational visits planning"
                ],
                "tip": "Focus on study skills and exam preparation resources"
            },
            "2025-11": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Schools & Academies Show – 19-20 Nov",
                    "Anti-Bullying Week (10-14 Nov)",
                    "Primary assessment planning period",
                    "University UCAS applications peak",
                    "Christmas preparations begin",
                    "Remembrance Day activities",
                    "Mock exam scheduling",
                    "Winter sports seasons begin",
                    "Educational technology showcase",
                    "Teacher recruitment fairs"
                ],
                "tip": "Use event-themed content to drive qualified leads"
            },
            "2025-12": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Christmas holidays begin (mid-December)",
                    "End of autumn term",
                    "University winter break starts",
                    "Year-end assessments complete",
                    "Spring term planning",
                    "Christmas performances",
                    "Winter graduation ceremonies",
                    "Holiday learning programmes",
                    "Next year budget planning",
                    "Professional development booking"
                ],
                "tip": "Engage with year-end reviews and New Year planning content"
            },
            "2026-01": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "BETT – 21-23 Jan 2026",
                    "University UCAS deadline – 15 Jan",
                    "Spring term restarts",
                    "Mock exams begin",
                    "New Year professional development",
                    "Educational technology launches",
                    "Winter sports competitions",
                    "Apprenticeship applications open",
                    "Career guidance intensifies",
                    "Teaching job applications"
                ],
                "tip": "High-impact period for EdTech launches around BETT"
            },
            "2026-02": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Children's Mental Health Week – 9-15 Feb",
                    "Half term England/Wales (16-20 Feb)",
                    "University reading week",
                    "Exam preparation intensifies",
                    "Easter planning begins",
                    "Valentine's literacy themes",
                    "STEM careers week",
                    "University open days",
                    "Apprenticeship awareness",
                    "Teacher wellbeing focus"
                ],
                "tip": "Focus on wellbeing resources and pilot programmes"
            },
            "2026-03": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "British Science Week – 13-22 Mar",
                    "World Book Day preparation",
                    "University dissertations due",
                    "Spring assessments begin",
                    "Easter holiday planning",
                    "Mother's Day activities",
                    "International Women's Day",
                    "Pi Day celebrations",
                    "Environmental awareness month",
                    "Student leadership elections"
                ],
                "tip": "Leverage STEM and literacy themes for content marketing"
            },
            "2026-04": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Easter break (3-20 Apr)",
                    "World Book Day – 23 Apr 2026",
                    "University Easter vacation",
                    "Exam season preparation",
                    "Summer term planning",
                    "Earth Day activities",
                    "Spring sports seasons",
                    "Revision timetables",
                    "Summer programme bookings",
                    "School trips planning"
                ],
                "tip": "Run reading-themed competitions for engagement"
            },
            "2026-05": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "SATs week for Year 6 – 12-15 May",
                    "GCSE and A-level exams begin",
                    "University final assessments",
                    "Half term (26-30 May)",
                    "Summer activities planning",
                    "Mental Health Awareness Week",
                    "Eurovision educational themes",
                    "Chelsea Flower Show visits",
                    "Sports Day preparations",
                    "Year 11 study leave"
                ],
                "tip": "Support exam stress management and revision techniques"
            },
            "2026-06": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "World Oceans Day – 8 Jun 2026",
                    "Exam season peak period",
                    "Thank a Teacher Day – 18 Jun 2026",
                    "University graduation ceremonies",
                    "Sports Day preparations",
                    "Father's Day activities",
                    "Summer fete planning",
                    "Refugee Week education",
                    "Wimbledon educational themes",
                    "Transition week planning"
                ],
                "tip": "Leverage appreciation campaigns and CSR angles"
            },
            "2026-07": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "Summer holidays begin",
                    "Exam results preparation",
                    "University summer break starts",
                    "Teacher training courses",
                    "Next year planning begins",
                    "Summer learning programmes",
                    "Graduation celebrations",
                    "Staff recruitment drives",
                    "School maintenance period",
                    "September preparation"
                ],
                "tip": "Ideal time for summer programs and teacher development"
            }
        };
        
        this.monthNames = {
            "2025-08": { name: "August", year: "2025" },
            "2025-09": { name: "September", year: "2025" },
            "2025-10": { name: "October", year: "2025" },
            "2025-11": { name: "November", year: "2025" },
            "2025-12": { name: "December", year: "2025" },
            "2026-01": { name: "January", year: "2026" },
            "2026-02": { name: "February", year: "2026" },
            "2026-03": { name: "March", year: "2026" },
            "2026-04": { name: "April", year: "2026" },
            "2026-05": { name: "May", year: "2026" },
            "2026-06": { name: "June", year: "2026" },
            "2026-07": { name: "July", year: "2026" }
        };
        
        this.init();
    }
    
    init() {
        this.createTimelineCircles();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.setupModal();
        
        // Pre-select December 2025 on load
        setTimeout(() => {
            this.selectMonth("2025-12");
        }, 100);
    }
    
    createTimelineCircles() {
        const track = document.getElementById('track');
        const monthKeys = Object.keys(this.calendarData);
        
        monthKeys.forEach((monthKey, index) => {
            const monthData = this.monthNames[monthKey];
            const circle = document.createElement('div');
            circle.className = 'month-circle';
            circle.setAttribute('data-month', monthKey);
            circle.setAttribute('data-index', index);
            circle.setAttribute('tabindex', '0');
            circle.setAttribute('role', 'button');
            circle.setAttribute('aria-label', `View ${monthData.name} ${monthData.year} events`);
            
            circle.innerHTML = `
                <div class="month-name">${monthData.name}</div>
                <div class="month-year">${monthData.year}</div>
            `;
            
            circle.addEventListener('click', () => {
                this.selectMonth(monthKey);
            });
            
            // Add individual keydown listeners for each circle
            circle.addEventListener('keydown', (e) => {
                this.handleCircleKeyboard(e, index);
            });
            
            track.appendChild(circle);
            this.monthCircles.push(circle);
        });
    }
    
    selectMonth(monthKey) {
        // Remove active class from all circles
        this.monthCircles.forEach(circle => {
            circle.classList.remove('active');
        });
        
        // Add active class to selected circle
        const selectedCircle = document.querySelector(`[data-month="${monthKey}"]`);
        if (selectedCircle) {
            selectedCircle.classList.add('active');
            this.currentMonth = monthKey;
            this.currentIndex = parseInt(selectedCircle.getAttribute('data-index'));
            
            // Smooth scroll to selected circle
            selectedCircle.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
        
        // Update info panel
        this.updateInfoPanel(monthKey);
    }
    
    updateInfoPanel(monthKey) {
        const monthData = this.calendarData[monthKey];
        const monthInfo = this.monthNames[monthKey];
        
        if (!monthData || !monthInfo) return;
        
        // Update month title
        const monthTitle = document.getElementById('month-title');
        monthTitle.textContent = `${monthInfo.name} ${monthInfo.year}`;
        
        // Update events list
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = '';
        
        monthData.events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            eventsList.appendChild(li);
        });
        
        // Update key tip
        const keyTipText = document.getElementById('key-tip-text');
        keyTipText.textContent = monthData.tip;
    }
    
    setupEventListeners() {
        // Main download button
        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.showModal();
            });
        }
        
        // Header download button
        const headerDownloadBtn = document.getElementById('header-download-btn');
        if (headerDownloadBtn) {
            headerDownloadBtn.addEventListener('click', () => {
                this.showModal();
            });
        }
    }
    
    setupKeyboardNavigation() {
        // Global keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Only handle if no modal is open and not in an input field
            if (!document.getElementById('modal-overlay').classList.contains('show') && 
                !['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
                
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.navigateMonth(-1);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.navigateMonth(1);
                        break;
                    case 'Home':
                        e.preventDefault();
                        this.navigateToMonth(0);
                        break;
                    case 'End':
                        e.preventDefault();
                        this.navigateToMonth(this.monthCircles.length - 1);
                        break;
                }
            }
        });
    }
    
    navigateMonth(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.monthCircles.length) {
            this.navigateToMonth(newIndex);
        } else if (direction > 0) {
            this.navigateToMonth(0); // Wrap to beginning
        } else {
            this.navigateToMonth(this.monthCircles.length - 1); // Wrap to end
        }
    }
    
    navigateToMonth(index) {
        if (index >= 0 && index < this.monthCircles.length) {
            const circle = this.monthCircles[index];
            const monthKey = circle.getAttribute('data-month');
            this.selectMonth(monthKey);
            circle.focus();
        }
    }
    
    handleCircleKeyboard(e, index) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = index > 0 ? index - 1 : this.monthCircles.length - 1;
                this.navigateToMonth(prevIndex);
                break;
                
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = index < this.monthCircles.length - 1 ? index + 1 : 0;
                this.navigateToMonth(nextIndex);
                break;
                
            case 'Enter':
            case ' ':
                e.preventDefault();
                const monthKey = e.target.getAttribute('data-month');
                this.selectMonth(monthKey);
                break;
                
            case 'Home':
                e.preventDefault();
                this.navigateToMonth(0);
                break;
                
            case 'End':
                e.preventDefault();
                this.navigateToMonth(this.monthCircles.length - 1);
                break;
        }
    }
    
    setupModal() {
        const modal = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');
        const leadForm = document.getElementById('lead-form');
        
        if (!modal || !modalClose || !leadForm) return;
        
        // Close modal handlers
        modalClose.addEventListener('click', () => {
            this.hideModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.hideModal();
            }
        });
        
        // Form submission
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }
    
    showModal() {
        const modal = document.getElementById('modal-overlay');
        if (modal) {
            modal.classList.add('show');
            
            // Focus on first input
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }
    
    hideModal() {
        const modal = document.getElementById('modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Return focus to download button
            const downloadBtn = document.getElementById('download-btn');
            if (downloadBtn) {
                downloadBtn.focus();
            }
        }
    }
    
    handleFormSubmission() {
        const form = document.getElementById('lead-form');
        if (!form) return;
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Basic validation
        if (!name || !email) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        this.hideModal();
        this.showSuccessMessage();
        this.triggerDownload();
        
        // Clear form
        form.reset();
    }
    
    showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.add('show');
            
            // Hide after 4 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 4000);
        }
    }
    
    triggerDownload() {
        // Create a simple PDF-like content for download
        const pdfContent = `Education Marketing Calendar 2025-2026
        
Strategic planning for UK education marketing

This calendar includes all key events and marketing insights for the education sector.

Visit our website for more resources and updates.`;
        
        // Create and trigger download
        const blob = new Blob([pdfContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Education-Marketing-Calendar-2025-2026.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    // Utility methods
    getCurrentMonth() {
        return this.currentMonth;
    }
    
    getCurrentIndex() {
        return this.currentIndex;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.educationCalendar = new EducationCalendar();
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationCalendar;
}