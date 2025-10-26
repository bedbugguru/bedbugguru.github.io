body {
    background: url("images/film.png");
    background-color: black; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    overflow-y: scroll;
    cursor: url("images/skull.png"), auto;
    padding-bottom: 50px; 
    margin: 0;
}

img {
    max-width: 100%;
    height: auto; 
}

.button {
    max-width: 70px; 
    margin: 10px; 
}

.button:hover {
    opacity: 0.8;
}

pre {
    color: aliceblue;
}

.text {
    color: lightgreen;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
}

/* Butterfree size globally defined, shrunk for better balance */
#homepage #bbg { 
    max-width: 120px; 
    width: 12%; 
    margin: 20px auto; 
}

.spinning {
    animation: spin 2s infinite;
}

@keyframes spin {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(359deg);
    }
}

#shows_page, #merch_page {
    display: none;
    padding-top: 30px;
    color: whitesmoke; 
}

/* Merch Page Layout */
#collection-component-1761456625660 {
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    color: whitesmoke !important; 
}

.show-flyer {
    max-width: 500px; 
    margin-bottom: 20px; 
}

.header-nav {
    display: flex;
    justify-content: center; 
    flex-wrap: wrap; 
    margin: 15px 0;
}

/* Ensure Social Links container is a flex container */
.social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
}

.footer {
    text-align: center;
    padding: 10px 0;
    width: 100%;
    color: rgba(255, 255, 255, 0.8); 
    font-size: 14px; 
}

/* ---------------------------------------------------- */
/* --- Desktop View (min-width 800px) --- */
/* ---------------------------------------------------- */

@media only screen and (min-width: 800px) {
    
    /* Make Header buttons stretch across the page */
    .header-nav {
        justify-content: space-between; 
        max-width: 800px; 
        margin: 15px auto;
    }
    
    .header-nav a img {
        max-width: 180px; 
    }
    
    /* Reduce size of main logo and banner */
    #homepage #bbglogo { 
        width: 40%; 
        max-width: 450px;
    }
    #homepage #banner { 
        width: 35%; 
        max-width: 400px;
    }
    
    /* Make Social/Streaming links larger and stretch */
    .social-links {
        justify-content: space-between; 
        max-width: 700px; 
    }

    .social-links a img {
        max-width: 120px; 
    }
    
    h1 { font-size: 24px; color: rgb(126, 62, 126); font-family: Arial, Helvetica, sans-serif; }
    h2 { font-size: 18px; color: rgb(75, 170, 41); font-family: Arial, Helvetica, sans-serif; }
    h3 { font-size: 18px; color: rgb(0, 0, 0); font-family: Arial, Helvetica, sans-serif; }
    p { font-size: 12px; color: whitesmoke; font-family: Arial, Helvetica, sans-serif; }

    .container {
        padding-left: 5%;
        padding-right: 5%;
        background-color: whitesmoke;
        width: 100%;
        display: inline-block;
        border: 1px solid rgb(0, 0, 0);
        box-sizing: border-box;
    }
}


/* ---------------------------------------------------- */
/* --- Mobile View (max-width: 800px) --- */
/* ---------------------------------------------------- */

@media only screen and (max-width: 800px) {

    /* Force Nav buttons to stack/fall onto new lines */
    .header-nav {
        flex-direction: column; 
        align-items: center; 
    }
    
    .header-nav a {
        width: 50%; 
        min-width: 150px; 
        margin: 10px auto; 
    }
    
    /* Force Social links to stack/fall onto new lines */
    .social-links {
        flex-direction: column; 
        align-items: center; 
    }

    .social-links .link {
        width: 50%;
        min-width: 150px;
        margin: 10px auto;
    }

    #homepage #bbg {
        max-width: 100px; 
        width: 20%;
    }
    
    #homepage #bbglogo { width: 80%; }
    #homepage #banner { width: 70%; }
    
    h1 { font-size: 100%; }
    h2 { font-size: 100%; }
    h3 { font-size: 70%; }
    a { font-size: 100%; }
    p { font-size: 50%; }

    .container {
        padding-left: 5%;
        padding-right: 5%;
        background-color: whitesmoke;
        width: 80%;
        display: inline-block;
        border: 1px solid rgb(0, 0, 0);
        box-sizing: border-box;
    }
}
