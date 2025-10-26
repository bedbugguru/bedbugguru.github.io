document.addEventListener('DOMContentLoaded', () => {
    // Get references to your page containers
    const _bbg = document.querySelector("#bbg");
    const homepage = document.getElementById('homepage');
    const showsPage = document.getElementById('shows_page');
    const merchPage = document.getElementById('merch_page');

    // Get references to your navigation links
    const homeLink = document.getElementById('home-link');
    const showsLink = document.getElementById('shows-link');
    const merchLink = document.getElementById('merch-link');

    // ----------------------------------------------------
    // Function to show a page and hide others
    // ----------------------------------------------------
    const showPage = (pageToShow) => {
        // Hide all pages first
        homepage.style.display = 'none';
        showsPage.style.display = 'none';
        merchPage.style.display = 'none';

        // Show the selected page
        pageToShow.style.display = 'block';

        // ----------------------------------------------------
        // 🛠️ THE CRITICAL FIX FOR SHOPIFY 🛠️
        // If the merch page is being shown, force a layout recalculation.
        // This is necessary because Shopify calculates its size while the element 
        // was hidden (display: none), giving it a height of 0.
        // ----------------------------------------------------
        if (pageToShow === merchPage) {
            // A slight delay (10ms) ensures the browser has time to apply 
            // the 'display: block' before the resize event is fired.
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 10);
        }
    };

    // ----------------------------------------------------
    // Initial State & Navigation Handlers
    // ----------------------------------------------------

    // 1. Set initial state (show homepage) and hide others
    showPage(homepage);

    // 2. Add event listeners to navigation links
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(homepage);
    });

    showsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(showsPage);
    });

    merchLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(merchPage);
    });

    _bbg.addEventListener("click", () => {
        if (window.confirm('just trust me ...')) {
            window.open('https://www.youtube.com/watch?v=ekIMGAmgXSI', '_blank');
        }
    });
});
