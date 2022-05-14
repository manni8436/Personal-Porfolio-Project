// get the navbar variable
const body = document.querySelector("body");
// get the button to toggle dark mode 
const button = document.querySelector(".fa-solid.fa-moon");
// get local storage value for dark-mode 
let darkModeStorage = localStorage.getItem("dark-mode");

// navbar is set up now but we should change this to set a theme 
// for the whole site rather than changing section at a time.. adding and removing css classes
// we can use the div class="theme" for this which i added to the html of the body

const darkMode = () => {
    button.classList.add("fa-sun");
    button.classList.remove("fa-moon");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
};

const lightMode = () => {
    button.classList.remove("fa-sun");
    button.classList.add("fa-moon");
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}

button.addEventListener("click", () => {
    darkModeStorage = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkModeStorage === "disabled") {
        darkMode();
    } else {
        lightMode();
    }
});