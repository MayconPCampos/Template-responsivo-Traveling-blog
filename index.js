const toggleMobile = () => {
   
    document.querySelector(".nav-list-mobile").classList.toggle("expand");
    const navLinks = document.querySelectorAll(".nav-list-mobile a");
    console.log(navLinks);
    for( link of navLinks){
        link.classList.remove("not-visible");
    }
}
