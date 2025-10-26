// Wait for the HTML document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Identify elements
    const _bbg = document.querySelector("#bbg");
    const _homeLink = document.querySelector("#home-link"); // Target the new <a> tag
    const _showsLink = document.querySelector("#shows-link"); // Target the new <a> tag

    const toggleHome = document.getElementById("homepage");
    const toggleShows = document.getElementById("shows_page");

    // Click event for the spinning image
    _bbg.addEventListener("click", () => {
        if (window.confirm('just trust me ...')) {
            window.open('https://www.youtube.com/watch?v=ekIMGAmgXSI', '_blank');
        }
    });

    // Click event for the "Home" link
    _homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the link from navigating to "#"
        toggleHome.style.display = "block";
        toggleShows.style.display = "none";
    });

    // Click event for the "Shows" link (BUG FIXED)
    _showsLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the link from navigating to "#"
        
        // Removed the broken references to toggleAbout and toggleGallery
        toggleHome.style.display = "none";
        toggleShows.style.display = "block";
    });

});
