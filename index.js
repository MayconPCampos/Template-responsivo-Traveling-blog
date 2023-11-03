// usa a classe "expand" no html para mostrar e esconder o monu mobile
const toggleMobile = () => {
    
    const navLinks = document.querySelector(".nav-list-mobile ul");
    const navMobile = document.querySelector(".nav-list-mobile")

    hideMenu = () => {
        navMobile.style.width = "0px";
        navLinks.classList.add("not-visible")
    }
    
    navMobile.classList.toggle("expand");

    //verifica a existência da classe para chamar função que esconde o menu
    if (!navMobile.classList.contains("expand")){
        setTimeout(() => hideMenu(),500);
      
    } else {
        navMobile.style.width = "300px";
        document.querySelector(".nav-list-mobile ul").classList.remove("not-visible")
    }
}

document.querySelector(".nav-list-mobile img").addEventListener("click", () => toggleMobile());
document.querySelector(".menu-bar").addEventListener("click", () => toggleMobile());

//remove classes para gerar os efeitos ao carregar a página
const animateScreen = () => {

    //fade in
    document.getElementById("main-container").classList.remove("is-loading");

    //para rotacionar logo da página
    document.querySelector("#header img").classList.remove("is-spining");

    //fade in título
    document.querySelector("#header h1").classList.remove("is-loading");
    document.querySelector("#header p").classList.remove("is-loading");

}
animateScreen();
