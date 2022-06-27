const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('.links-container');

open.addEventListener('click',function(){
    nav.classList.add('show-nav');
    close.style.display = 'block'
    open.style.display = 'none'
})
close.addEventListener('click',function(){
    nav.classList.remove('show-nav');
    open.style.display = 'block'
    close.style.display = 'none'
})