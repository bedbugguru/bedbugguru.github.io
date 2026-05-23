document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab the navigation buttons
    const homeLink = document.getElementById('home-link');
    const showsLink = document.getElementById('shows-link');
    const merchLink = document.getElementById('merch-link');

    // 2. Grab the page sections
    const homePage = document.getElementById('homepage');
    const showsPage = document.getElementById('shows_page');
    const merchPage = document.getElementById('merch_page');

    // 3. Helper function to hide all sections
    function hideAllSections() {
        homePage.style.display = 'none';
        showsPage.style.display = 'none';
        merchPage.style.display = 'none';
    }

    // 4. Set up click events for each button
    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Stops the page from jumping
        hideAllSections();
        homePage.style.display = 'block'; 
    });

    showsLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        showsPage.style.display = 'block';
    });

    merchLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        merchPage.style.display = 'block';
    });

    // 5. Ensure only the homepage is visible when the site first loads
    hideAllSections();
    homePage.style.display = 'block';
});
