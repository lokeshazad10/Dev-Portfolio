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
    var navbar = document.querySelector('header');

    var scrollPostion = window.scrollY || document.documentElement.scrollTop;

    if(scrollPostion>200){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
});

let pre = '50%'
const slide = document.querySelectorAll('.project-card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('pre-btn');

nextBtn.addEventListener('click', function(){
    slide.forEach(function(item){
        item.style.transform = 'translateX(50%)';
    });
});

prevBtn.addEventListener('click', function(){
    slide.forEach(function(item){
        item.style.transform = 'translateX(-50)';

    });
});