const $container = $('.container');
const $firstLogo = $('.firstLogo');
const $openClose = $('.openMenu, .closeMenu');
const $sentence = $('header p');
const $menuWide = $('.navigation nav ul li a, .burger nav ul li a');

// const container = document.querySelector('.container')
// const firstLogo = document.querySelector('.firstLogo');
// const open = document.querySelector('.openMenu');
// const close = document.querySelector('.closeMenu');
// const sentence = document.querySelector('header p');
// const menuNavigation = document.querySelectorAll('.navigation nav ul li a');
// const menuBurger = document.querySelector('.burger nav ul li a');

const $menuBurger = $('.burger nav');
const $up = $('.arrow, .logo img');
const $offer = $('.offer');
const $gallery = $('.gallery');
const $contact = $('.contact');


// Nawigation Wide

$menuWide.on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1500)
})

$up.on('click', function () {
    $('body, html').animate({
        scrollTop: '0px'
    }, 1500)
})

// menuNavigation.forEach(menu => menu.addEventListener('click', function () {
//     const goToSection = `[data-section=${this.getAttribute('class')}]`
//     const offset = document.querySelector(goToSection)
//     console.log(offset)

//     console.log(window.getComputedStyle(offset).offsetTop)

//     console.log(offset)
//     window.scrollTo({ top: 200, behavior: 'smooth' });
    
// }))



// Navigation Burger

$openClose.on("click", function () {
    $openClose.toggleClass('hide');
    $sentence.toggleClass('hide');
    $menuBurger.toggleClass('hide');
    $offer.toggleClass('hide');
    $gallery.toggleClass('hide');
    $contact.toggleClass('hide');
})

setTimeout(() => {
$container.removeClass('transition');
$firstLogo.addClass('transition');
}, 3000)



//GALERIA

const $panel = $('.panel');

$panel.on('click', function () {
    removeActiveClasses()
    $(this).addClass('active')
})

function removeActiveClasses() {
    $panel.removeClass('active')
}

