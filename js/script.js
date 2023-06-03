window.addEventListener("load" , function(){
    document.querySelector('.page-loader').classList.add('fade-out');
    setTimeout(function(){
        document.querySelector('.page-loader').style.display="none";
    },2000)
    AOS.init();
})





const NavToggler = document.querySelector ('.nav-toggler');

NavToggler.addEventListener ("click" , Togglenav);

function Togglenav () {
    NavToggler.classList.toggle ('active')
    document.querySelector('.nav').classList.toggle("open")
}


/* close nav when clicking on a nav item */
document.addEventListener ('click', function(e) {
    if (e.target.closest(".nav-items")){
        Togglenav();

    }
})

/* sticky header */ 

window.addEventListener("scroll" , function(){
    if (this.pageYOffset > 200){

    document.querySelector('.header').classList.add('sticky');
    }
    else{
        document.querySelector('.header').classList.remove('sticky');
    }
})


/* ------------------ menu tabs -------------------*/
const menuTabscontent = document.querySelector('.menu-tab-content.active');
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener("click" ,function(e) {
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active")
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    
    }
    AOS.init();
    
}
)