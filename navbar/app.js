// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".menu_toggler");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
//    console.log(links.classList.contains('random'));
//    console.log(links.classList.contains('links'));
    if(links.classList.contains('show-links')) {
        links.classList.remove('show-links')
        navToggle.classList.remove('active')
    } 
    //if it's not there then add
    else {
        links.classList.add('show-links')
        navToggle.classList.add('active');

    }
//    links.
});