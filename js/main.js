document.addEventListener("scroll",function(){
    var navbar=document.querySelector(".navbar");
    var scrollvalue=window.scrollY
    if(scrollvalue>400){
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-danger");
    }
    else{
        navbar.classList.remove("bg-danger");
        navbar.classList.add("bg-light");
    }
})