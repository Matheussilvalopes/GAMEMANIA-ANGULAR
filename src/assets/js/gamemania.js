function mostrarMenu(){
    let menu= document.getElementById("menu3")
    if(getComputedStyle(menu).display=="none"){
        menu.style.display="flex"
    }else{
        menu.style.display="none"
    }
}

$(document).ready(function () {
    let bannerAtual=1
    let listaBanners= ["banner-pc1", "banner-pc2", "banner-pc3"]
    setInterval(mudarBanner, 4000);

    function mudarBanner() {
        if (bannerAtual>0) {
            $("#carrosselIndex").removeClass(listaBanners[bannerAtual-1])
            
        }else{
            $("#carrosselIndex").removeClass(listaBanners[2])
    
        }
        
         $("#carrosselIndex").addClass(listaBanners[bannerAtual])
        
         bannerAtual++
        
        if (bannerAtual>2) {
            bannerAtual=0
        }
    }
    
    
})
