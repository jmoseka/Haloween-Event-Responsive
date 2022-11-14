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
        top: 0,
        behavior: "smooth"
    })

    // scrol to other thinks

    if (href !== "#" && href.startsWith("#")) {
        const sectionEl =  document.querySelector(href);
        sectionEl.scrollIntoView({behavior: 'smooth'})
    }
    })

    // close mobile nav
    console.log(link.classList)

    // if(link.classList.contains('nav-link')) {
    //     console.log('yes')
    //     headerEl.classList.toggle('nav-open');
    // }
})