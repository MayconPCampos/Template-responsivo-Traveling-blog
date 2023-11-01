const toggleMobile = () => {
    
    const navLinks = document.querySelector(".nav-list-mobile ul");
    const navMobile = document.querySelector(".nav-list-mobile")

    hideMenu = () => {
        navMobile.style.width = "0px";
        navLinks.classList.add("not-visible")
    }
    
    navMobile.classList.toggle("expand");

    //verifica a classe atual e se estiver expandida esconde o conteúdo
    if (!navMobile.classList.contains("expand")){
        setTimeout(() => hideMenu(),500);
      
    } else {
        navMobile.style.width = "300px";
        document.querySelector(".nav-list-mobile ul").classList.remove("not-visible")
    }
}