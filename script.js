// document.querySelector('.home').addEventListener("click", ()=>{
//     document.querySelector('#home-top').scrollIntoView({behavior: 'smooth'});
// })
// document.querySelector('.project-nav').addEventListener("click", ()=>{
//     document.querySelector('.project-container').scrollIntoView({behavior: 'smooth'});
// })
// document.querySelector('.contact-nav').addEventListener("click", ()=>{
//     document.querySelector('.contact').scrollIntoView({behavior: 'smooth'});
// })

document.querySelectorAll('.home').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#home-top').scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll('.project-nav').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.project-container').scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll('.contact-nav').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.contact').scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll('.about-link').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.about').scrollIntoView({
            behavior: "smooth"
        });
    });
});

let menu = document.querySelector('.sidebar');
function showSidebar() {
    menu.style.display = "block";
}
function hideSidebar() {
    menu.style.display = "none";
}