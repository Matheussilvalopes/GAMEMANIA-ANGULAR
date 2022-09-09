$(document).ready(
    function(){
      let slideAtual=1
      let listaSlides=["banner-1", "banner-2", "banner-3"]
      setInterval(mudarslide, 6000);

      function mudarslide() {
          if (slideAtual>0) {
            $("#carrossel").removeClass(listaSlides[slideAtual-1])     
          }else{
            $("#carrossel").removeClass(listaSlides[2])
          }
    
           $("#carrossel").addClass(listaSlides[slideAtual])
    
           slideAtual++

           if (slideAtual>2) {
              slideAtual=0    
            }
        }
    }
     
)