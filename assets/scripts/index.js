const mainImgDOM = document.querySelector('.main-img-container img');
const menuDOM = document.querySelector('.menu');
const menuCloseDOM = document.querySelector('.menu-close');

function setMenuToggle(){
    menuCloseDOM.classList.toggle('d-none');
    menuDOM.classList.toggle('d-none');
}

console.log(mainImgDOM.src);
window.addEventListener("resize", _ => {
    document.body.clientWidth < 768 ? mainImgDOM.src= './assets/images/image-web-3-mobile.jpg' : mainImgDOM.src= './assets/images/image-web-3-desktop.jpg';
})

menuDOM.addEventListener("click", _ =>{
    setMenuToggle();
});
menuCloseDOM.addEventListener("click", _ =>{
    setMenuToggle();
});