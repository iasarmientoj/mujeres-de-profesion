/* =========================================================
   INTERRUPTOR DEL MODO ESPERA
   ---------------------------------------------------------
   Este archivo se carga en el <head> de todas las páginas, antes
   de que se dibuje nada: así el sitio nunca alcanza a verse
   mientras el libro está en imprenta.

   CUANDO EL LIBRO SALGA DE IMPRENTA:
   pon  false  en la línea de abajo y el sitio vuelve a abrir
   completo (no hace falta tocar nada más).
   ========================================================= */
window.MDP_ESPERA = true;

if (window.MDP_ESPERA) document.documentElement.classList.add("en-espera");
