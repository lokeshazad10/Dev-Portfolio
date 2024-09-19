document.getElementById('home').addEventListener("click", ()=>{
    document.querySelector('#home-top').scrollIntoView({behavior: 'smooth'});
})
document.getElementById('project-nav').addEventListener("click", ()=>{
    document.querySelector('.project-container').scrollIntoView({behavior: 'smooth'});
})
document.getElementById('contact-nav').addEventListener("click", ()=>{
    document.querySelector('.contact').scrollIntoView({behavior: 'smooth'});
})
