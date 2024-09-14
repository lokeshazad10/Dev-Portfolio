document.getElementById('home').addEventListener("click", ()=>{
    document.querySelector('#home-top').scrollIntoView({behavior: 'smooth'});
})
document.getElementById('project-nav').addEventListener("click", ()=>{
    document.querySelector('.project-container').scrollIntoView({behavior: 'smooth'});
})
document.getElementById('contact-nav').addEventListener("click", ()=>{
    document.querySelector('.contact').scrollIntoView({behavior: 'smooth'});
})

//making navbar fixed when scroll down
window.addEventListener('scroll', function(){
    var navbar = document.getElementById("header");

    var scrollPostion = window.scrollY || document.documentElement.scrollTop;

    if(scrollPostion>200){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
});

