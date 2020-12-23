

   const slides=document.querySelector(".slider").children;
   const indicaterImages=document.querySelector(".slider-indicater").children;

    for(let i=0; i<indicaterImages.length; i++){
    	indicaterImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicaterImages.length; j++){
             indicaterImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
           	slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

    	})
    }
