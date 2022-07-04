// const toggle= document.querySelector('.#toggle')
// const headerToggle = document.querySelector('.header-toggle')
// const closeMenu = document.querySelector('.close-menu')
// const blurOverlay =document.querySelector('.blur_overlay')
// const IS_ACTIVE = 'is--active'


// const toggleNavigation = () =>{
//     headerToggle.classList.toggle(IS_ACTIVE)
//     blurOverlay.classList.toggle(IS_ACTIVE)
// }

// const click ='click'

// toggle.addEventListener(click , toggleNavigation)
// closeMenu.addEventListener(click , toggleNavigation)
// blurOverlay.addEventListener(click , toggleNavigation)  

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
// function hasClass(elem, className) {
// 	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }

// function toggleClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
//     if (hasClass(elem, className)) {
//         while (newClass.indexOf(" " + className + " ") >= 0 ) {
//             newClass = newClass.replace( " " + className + " " , " " );
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     } else {
//         elem.className += ' ' + className;
//     }
// }

// theToggle.onclick = function() {
//    toggleClass(this, 'on');
//    return false;
// }