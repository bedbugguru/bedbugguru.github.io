document.addEventListener("DOMContentLoaded", () => {

    // Identify elements
    const _bbg = document.querySelector("#bbg");
    const _homeLink = document.querySelector("#home-link"); 
    const _showsLink = document.querySelector("#shows-link"); 
    const _merchLink = document.querySelector("#merch-link"); 

    const toggleHome = document.getElementById("homepage");
    const toggleShows = document.getElementById("shows_page");
    const toggleMerch = document.getElementById("merch_page"); 

    // Function to hide all pages and then show the target page
    const showPage = (targetPage) => {
        toggleHome.style.display = "none";
        toggleShows.style.display = "none";
        toggleMerch.style.display = "none";
        if (targetPage) {
            targetPage.style.display = "block";
        }
    };

    // Click event for the spinning image
    _bbg.addEventListener("click", () => {
        if (window.confirm('just trust me ...')) {
            window.open('https://www.youtube.com/watch?v=ekIMGAmgXSI', '_blank');
        }
    });

    // Click event for the "Home" link
    _homeLink.addEventListener("click", (e) => {
        e.preventDefault(); 
        showPage(toggleHome);
    });

    // Click event for the "Shows" link
    _showsLink.addEventListener("click", (e) => {
        e.preventDefault(); 
        showPage(toggleShows);
    });
    
    // Click event for the "Merch" link
    _merchLink.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(toggleMerch);
        // The Shopify embed script will automatically run and load the products now
    });

    // Initial load: ensure only the Home page is visible
    showPage(toggleHome);

});
