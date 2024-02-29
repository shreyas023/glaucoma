document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById("darkModeToggle");
    var dark = document.getElementById("darkmode-text");
    var light = document.getElementById("lightmode-text");
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      document.body.classList.add("dark-mode");
      darkModeToggle.src = "./toggle-on.png";
      light.style.display = "none";
      dark.style.display = "inline-block";
    }

    darkModeToggle.addEventListener("click", toggleDarkMode);

    function toggleDarkMode() {
      var body = document.body;
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        darkModeToggle.src = "./toggle-on.png";
        light.style.display = "none";
        dark.style.display = "inline-block";
        body.classList.add("dark-mode");
        document.getElementById("collapseOne").classList.add("dark-mode");
        document.getElementById("collapseTwo").classList.add("dark-mode");
        document.getElementById("collapseThree").classList.add("dark-mode");
        document.getElementById("schedule").classList.add("dark-mode");
        document.getElementById("team").classList.add("dark-mode");
      } else {
        darkModeToggle.src = "./toggle-off.png";
        dark.style.display = "none";
        light.style.display = "inline-block";
        body.classList.remove("dark-mode");
        document.getElementById("collapseOne").classList.remove("dark-mode");
        document.getElementById("collapseTwo").classList.remove("dark-mode");
        document.getElementById("collapseThree").classList.remove("dark-mode");
        document.getElementById("schedule").classList.remove("dark-mode");
        document.getElementById("team").classList.remove("dark-mode");
      }
    }

  });

  document.getElementById("bg-video").addEventListener("ended", function() {
    window.location.href = "./index.html";
  });