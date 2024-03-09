document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById("darkModeToggle");
    var dark = document.getElementById("darkmode-text");
    var light = document.getElementById("lightmode-text");
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      document.body.classList.add("dark-mode");
      darkModeToggle.src = "./images/toggle-on.png";
      light.style.display = "none";
      dark.style.display = "inline-block";
      document.body.classList.add("dark-mode");
      // document.getElementById("team").classList.add("dark-mode");
    }

    function toggleDarkMode() {
      var body = document.body;
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        darkModeToggle.src = "./images/toggle-on.png";
        light.style.display = "none";
        dark.style.display = "inline-block";
        body.classList.add("dark-mode");
        document.getElementById("collapseOne").classList.add("dark-mode");
        document.getElementById("collapseTwo").classList.add("dark-mode");
        document.getElementById("collapseThree").classList.add("dark-mode");
        document.body.classList.add("dark-mode");
      } else {
        darkModeToggle.src = "./images/toggle-off.png";
        dark.style.display = "none";
        light.style.display = "inline-block";
        body.classList.remove("dark-mode");
        document.getElementById("collapseOne").classList.remove("dark-mode");
        document.getElementById("collapseTwo").classList.remove("dark-mode");
        document.getElementById("collapseThree").classList.remove("dark-mode");
        document.body.classList.remove("dark-mode"); 
      }
    }

    darkModeToggle.addEventListener("click", toggleDarkMode);
  });