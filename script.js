const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
})

/** SMOOTH SCROLLING */
/** all element with href property */
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute("href")
    
        
    // scroll back to the top
    if(href === "#") window.scrollTo({
        top: 20,
        behavior: "smooth"
    })

    // scrol to other links

    if (href !== "#" && href.startsWith("#")) {
        const sectionEl =  document.querySelector(href);
        sectionEl.scrollIntoView({behavior: 'smooth'})
    }

    if(link.classList.contains('nav-link')) {
       
        headerEl.classList.toggle('nav-open');
    }
    })

})

////////////////////////////////////////////////////
/** STICKY NAVIGATION */
/////////////////////////////////////////////////////

const sectionHeroGrid = document.querySelector(".hero-grid");
const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];

    if(ent.isIntersecting === false) {
        document.body.classList.add('sticky')
    }

    else {
        document.body.classList.remove('sticky')
    }

},
 {
    // in the viewport
    root: null,
    threshold: 0,

})

observer.observe(sectionHeroGrid);

