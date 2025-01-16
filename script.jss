document.addEventListener("DOMContentLoaded", function () {
    const navbarHtml = `
    <nav class="nav">
        <h1 id="home"><a href="/index.html">Zahabiyah Rasheed</a></h1>
        <ul class="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="/resume.html">Resume</a></li>
            <li> 
                <div class="social-icons">
                    <a href="https://github.com/zahabrasheed" target="_blank">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">
                    </a>
                    <a href="https://www.linkedin.com/in/zahabiyah-rasheed-27018528b/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    `;

    // Find the placeholder element and inject the navbar HTML
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHtml;
    }
});
