import React, { useEffect } from 'react';
import './animacion.css';
import IconReact from "./assets/iconoreact.jsx"
import IconHtml5 from "./assets/iconohtml5.jsx"
import IconBxlCss3 from "./assets/iconocss.jsx"
import IconSquareJs from "./assets/iconojs.jsx"
import IconVite from "./assets/iconovite.jsx"
function Animacion() {
  useEffect(() => { //Esto hace que se ejecute cuando se renderize en el dom y cuando tu digas, en este caso solo en el dom porque el segundo argumento esta vacio.
    const scrollers = document.querySelectorAll(".scroller");

    //Si no tiene reducen motion se aplica la animacion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {

        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); //Explicacion arriba.

  return (
    <div className='divanim'>
        <div class="scroller" data-direction="left" data-speed="fast">
            <div class="scroller__inner">
                <IconHtml5/>
                <IconSquareJs/>
                <IconBxlCss3/>
                <IconReact/>
                <IconVite/>
            </div>
        </div>
    </div>
 
  );
}

export default Animacion;
