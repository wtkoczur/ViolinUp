//nav appearing

const navbar = document.querySelector('.navbar');
//const btnUp = document.querySelector('.btnUp')

window.onscroll = function(){
    var height = 1;
    //window.innerHeight
    var top = window.scrollY;
    if (top >= height){
        navbar.classList.add('bg-active');
        //btnUp.classList.add('up')
    }else{
        navbar.classList.remove('bg-active');
        //btnUp.classList.remove('up')
    }
}