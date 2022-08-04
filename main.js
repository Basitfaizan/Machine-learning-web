
// start image slider
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let imageSliderContent = document.querySelector(".imageSliderContent")
console.log('hello');

left.addEventListener('click',()=>{
    console.log('left');
    let bigWidth = imageSliderContent.getBoundingClientRect();
    imageSliderContent.scrollLeft -= bigWidth.width- 200;
})
right.addEventListener('click',()=>{
    let bigWidth4 = imageSliderContent.getBoundingClientRect();
    imageSliderContent.scrollLeft += bigWidth4.width+ 200;;
})
// end image slider
// start navbar

let hamburger = document.querySelector('.hamburger')
let removeSidenav = document.querySelector('.removeSideNav')
let sideNav = document.querySelector('.sideNav')
hamburger.addEventListener('click',()=>{
    sideNav.classList.add('active')
})
removeSidenav.addEventListener('click',()=>{
    sideNav.classList.remove('active')
})
