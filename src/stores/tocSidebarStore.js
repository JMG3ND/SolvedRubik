import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTocSidebarStore = defineStore('tocSidebarData', () => {
  //Constante reactiva que contiene los datos de los enlaces ancla del tocSidebar
  const tocSidebarData = ref(null);

  //Variable obsrvador que contendrá un objeto observador
  let observer = null;

  //Opciones del observador
  const options = {
    //El observador es el viewport
    //Definimos el margen del observador a un píxel en 60% de la altura de la pantalla
    rootMargin: "-30% 0px -70% 0px"
  }

  //Método de devolución de llamada para el observador
  const callback = (entries) => {
    try {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        let ancla = null;
        if (id)
          ancla = document.querySelector(`.toc-sidebar__link[href="#${id}"]`);

        //Preguntamos si la sección está intersectando
        if (entry.isIntersecting && entry) {
          //En caso de que así sea le asignamos una clase activa a los anclas
          ancla.classList.add("toc-sidebar__link--active");
        } else {
          //En caso de que ya no se esté intersectando le quitamos la clase
          ancla.classList.remove("toc-sidebar__link--active");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  /*
    Método que convierte los datos del tocSidebar dinámicos
    recibe un array de objetos data con el siguiente formato
    data = [
      {
        title: String,
        id: String
      }
    ]
  */
  const tocSidebarDataFill = data => {
    if (data) {
      const Array = [];

      //Este forEach extrae solo el title y el id de cada objeto del array
      //en caso de que la data contenga más datos de los requeridos
      data.forEach(element => {
        Array.push({ title: element.title, id: element.id });
      });

      //Se asignan los datos al tocSidebarData
      tocSidebarData.value = Array;

      if (Array) {
        //Creamos el nuevo observador
        if (observer)
          observer.disconnect();
        observer = new IntersectionObserver(callback, options);

        //Obtener las secciones que contienen el id
        const sections = document.querySelectorAll(".main-section--algorithm");

        //Añado todas las secciones al nuevo observador
        sections.forEach(element => observer.observe(element));
      }
    } else {
      if (observer)
        observer.disconnect();
      observer = null;
      tocSidebarData.value = null;
    }
  }
  return { tocSidebarData, tocSidebarDataFill }
})
