/**
 * Shared JavaScript functions for Post Lab website
 * Include this file in pages that need common functionality
 */

// =================================================================
// MOBILE NAVIGATION FUNCTIONS
// =================================================================

/**
 * Initialize mobile hamburger menu for responsive navigation
 */
function initializeMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.innerHTML = '☰';
    burger.style.cssText = 'display: none; font-size: 1.5rem; cursor: pointer; color: #569cd6; margin-left: auto;';
    
    function checkScreen() {
        if (window.innerWidth <= 768) {
            // Mobile view
            burger.style.display = 'block';
            if (!document.querySelector('.burger')) {
                burger.className = 'burger';
                document.querySelector('nav').appendChild(burger);
                
                // Add click event to toggle nav menu
                burger.addEventListener('click', function() {
                    if (navLinks.style.display === 'flex') {
                        navLinks.style.display = 'none';
                    } else {
                        navLinks.style.display = 'flex';
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '100%';
                        navLinks.style.right = '0';
                        navLinks.style.background = '#2d2d30';
                        navLinks.style.padding = '1rem';
                        navLinks.style.borderRadius = '0 0 8px 8px';
                        navLinks.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                        navLinks.style.zIndex = '1000';
                    }
                });
            }
        } else {
            // Desktop view
            burger.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
            navLinks.style.boxShadow = 'none';
        }
    }
    
    // Check on window resize
    window.addEventListener('resize', checkScreen);
    checkScreen(); // Initial check
}

// =================================================================
// SMOOTH SCROLLING FUNCTIONS
// =================================================================

/**
 * Add smooth scrolling behavior to internal links
 */
function initializeSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add smooth scrolling to anchor links within the same page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =================================================================
// IMAGE LOADING FUNCTIONS
// =================================================================

/**
 * Lazy load images when they come into view
 * Improves page load performance
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Handle image loading errors by replacing with placeholder
 */
function initializeImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken image with placeholder
            this.style.display = 'none';
            
            const placeholder = document.createElement('div');
            placeholder.className = 'placeholder-img';
            placeholder.style.width = this.style.width || '150px';
            placeholder.style.height = this.style.height || '150px';
            placeholder.innerHTML = 'Image not found';
            
            this.parentNode.insertBefore(placeholder, this);
        });
    });
}

// =================================================================
// FORM VALIDATION FUNCTIONS
// =================================================================

/**
 * Add basic form validation
 */
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ce9178'; // Orange for error
                    field.classList.add('error');
                } else {
                    field.style.borderColor = '#3e3e42'; // Normal border
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
}

// =================================================================
// ACCESSIBILITY FUNCTIONS
// =================================================================

/**
 * Add keyboard navigation support
 */
function initializeKeyboardNavigation() {
    // Add focus outlines for keyboard users
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-user');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-user');
    });
    
    // Add CSS for keyboard focus
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-user *:focus {
            outline: 2px solid #569cd6 !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Add skip-to-content link for screen readers
 */
function initializeSkipToContent() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #569cd6;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add id to main content if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Format dates consistently across the site
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Highlight the current page in navigation
 */
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Add loading states to external links
 */
function initializeExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // Add external link icon
        if (!link.innerHTML.includes('🔗') && !link.innerHTML.includes('external')) {
            link.innerHTML += ' <span style="font-size: 0.8em; opacity: 0.7;">↗</span>';
        }
        
        // Add security attributes
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// =================================================================
// ANIMATION FUNCTIONS
// =================================================================

/**
 * Add fade-in animation to elements as they come into view
 */
function initializeFadeInAnimations() {
    const animatedElements = document.querySelectorAll('.team-member, .research-card, .news-item');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Initially hide elements and add transition
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// =================================================================
// INITIALIZATION FUNCTION
// =================================================================

/**
 * Initialize all common functionality
 * Call this function when the DOM is loaded
 */
function initializePostLabWebsite() {
    // Core functionality
    highlightCurrentPage();
    initializeMobileNav();
    initializeSmoothScrolling();
    
    // Performance and UX
    initializeLazyLoading();
    initializeImageErrorHandling();
    initializeExternalLinks();
    
    // Accessibility
    initializeKeyboardNavigation();
    initializeSkipToContent();
    
    // Visual enhancements
    initializeFadeInAnimations();
    
    // Forms (if any exist on the page)
    initializeFormValidation();
    
    console.log('Post Lab website initialized successfully!');
}

// =================================================================
// AUTO-INITIALIZATION
// =================================================================

// Automatically initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePostLabWebsite);

// Export functions for manual use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePostLabWebsite,
        initializeMobileNav,
        highlightCurrentPage,
        formatDate,
        initializeLazyLoading,
        initializeImageErrorHandling
    };
}
