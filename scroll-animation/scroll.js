document.querySelectorAll('.card').forEach(card=>{
    gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 5%",
            end: "bottom 5%",
            scrub: true,
        }
    });
});