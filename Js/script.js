
const navBtn = document.querySelector('.nav__btn')
const navMenu = document.querySelector('.nav-menu')
let navOpen = false ; 

   navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove('nav__btn--open')
        navMenu.classList.remove('nav-menu--open')
        navOpen = false;
        
    } else {
        navBtn.classList.add('nav__btn--open')
        navMenu.classList.add('nav-menu--open')
        navOpen = true;
    }
   })
    
//    Scroll bar ///////////////////////////////////////////////

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function(){
    
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRounded + '%'
    console.log(scrollPercentRounded);
})


