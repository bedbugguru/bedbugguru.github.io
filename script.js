document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('homepage');
    const showsPage = document.getElementById('shows_page');
    const merchPage = document.getElementById('merch_page');

    function updatePageDisplay() {
        // 1. Hide all sections first
        homePage.style.display = 'none';
        showsPage.style.display = 'none';
        merchPage.style.display = 'none';

        // 2. Read the current URL hash (e.g., "#merch")
        const hash = window.location.hash;

        // 3. Show the correct section based on the hash
        if (hash === '#shows') {
            showsPage.style.display = 'block';
        } else if (hash === '#merch') {
            merchPage.style.display = 'block';
        } else {
            // Default to the homepage if the hash is empty or unrecognized
            homePage.style.display = 'block';
        }

        // 4. Scroll to the top of the page smoothly when switching sections
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Run this function once when the page first loads
    updatePageDisplay();

    // Run this function every time the URL hash changes (like clicking a nav link)
    window.addEventListener('hashchange', updatePageDisplay);
});
