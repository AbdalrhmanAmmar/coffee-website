// Dark-mode
darkmood = document.getElementById("darkmood");

darkmood.onclick = function() {
    darkmood.classList.toggle("active");
    document.body.classList.toggle("dark-theme");
};