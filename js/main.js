document.addEventListener('DOMContentLoaded', () => {
    // Set active nav link based on current URL
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    const navLength = navLinks.length;
    
    for (let i = 0; i < navLength; i++) {
        if (navLinks[i].href === currentLocation) {
            navLinks[i].classList.add('active');
        } else if (currentLocation.endsWith('/') && navLinks[i].href.endsWith('index.html')) {
             navLinks[i].classList.add('active');
        }
    }

    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });

    // Dark/Light Mode Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (themeIcon) {
            if (currentTheme === 'dark') {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            if (themeIcon) {
                if (newTheme === 'dark') {
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                }
            }
        });
    }

    // Set Current Year in Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});
