/* =========================================================
   MUJERES DE PROFESIÓN — CONTENIDO DEL SITIO
   ---------------------------------------------------------
   Todo el texto editable vive aquí. No hace falta tocar HTML.
   · Las ocho historias usan los textos del equipo (documentos
     "TEXTOS PAGINA WEB"); las citas entre comillas provienen de
     ellos o del fotolibro.
   ========================================================= */

window.MDP = {};

MDP.site = {
  domain: "mujeresdeprofesion.com",
  title: "Mujeres de Profesión",
  subtitle: "Ingeniería | Geología",
  isbn: "978-628-97839-0-2",
  /* Enlaces pendientes: se completan cuando existan */
  researchPdf: "",          // URL del PDF de la investigación completa
  researchSources: "",      // URL de fuentes (si es distinto al PDF)
  bookOrderUrl: "",         // formulario / tienda para pedir el libro
  contactEmail: "",         // correo de contacto del proyecto
  spotifyShow: ""           // URL del programa en Spotify
};

MDP.credits = [
  { rol: "Directora de Proyecto", en: "Project Director", nombres: ["Olga Rosalba Rodríguez Jiménez"], org: "Universidad Nacional de Colombia" },
  { rol: "Coordinador Creativo y de Comunicaciones", en: "Creative and Communications Coordinator", nombres: ["Sergio David Niño López"] },
  { rol: "Coordinador de Arte y Diseño", en: "Art and Design Coordinator", nombres: ["Paulo Cesar Acosta Castaño"] },
  { rol: "Equipo de Investigación", en: "Research Team", nombres: ["Laura Violetha Mora Estrella", "Aylen Zarhek Gutierrez Nova", "Sara Valentina Vásquez Riaño"], org: "Universidad Nacional de Colombia" },
  { rol: "Fotografías", en: "Photographs", nombres: ["Sergio David Niño López", "Paulo Cesar Acosta Castaño"] },
  { rol: "Edición – Impresión", en: "Editing – Printing", nombres: ["Pueblo Villano"] }
];

/* ---------------------------------------------------------
   LAS OCHO MUJERES  (orden del libro)
   img: nombres de archivo en assets/img/<slug>/
   --------------------------------------------------------- */
MDP.women = [
  {
    slug: "lorena", no: "01",
    nombre: "Claudia Lorena Bolaños Satizabal", corto: "Lorena",
    profesion: "Ingeniera Electrónica", profesionEn: "Electronic Engineer",
    disciplina: "electronica", palabra: "Abrir camino", color: "#51698c",
    intereses: ["deporte"], hobby: "Triatlón", paginasLibro: "9 – 15",
    hero: { img: "home-2", pos: "51% 31%" }, card: "hobby-5", cardPos: "40% 30%",
    intro: [
      "Hay caminos que se recorren con la cabeza y otros con el cuerpo. Lorena conoce los dos: en la ingeniería encuentra el desafío de resolver; en el triatlón, el de resistir.",
      "En ambos ha aprendido que avanzar también significa sostenerse cuando el camino se hace difícil."
    ],
    cita: "Soy una princesa guerrera, soñadora, que no espera que nada le llegue, construye lo que quiere lograr.",
    resumenQR: "Ingeniera electrónica con experiencia en tecnología y liderazgo. La tecnología la sorprendió por su impacto en la sociedad y su capacidad de transformar. Su motivación: <em>abrir camino a las que vienen detrás</em>.",
    actos: {
      I: {
        titulo: "La tecnología como posibilidad",
        bloques: [
          { t: "txt", label: "El territorio", html: "La tecnología la sorprendió por su <strong>impacto en la sociedad y su capacidad de transformar</strong>. Lorena es ingeniera electrónica, con experiencia en tecnología y liderazgo, y trabaja en el área de <a class='xlink' data-x='research:electronica'>Defensa para Latinoamérica</a>." },
          { t: "ph", img: "contexto-2", s: "b" },
          { t: "ph", img: "contexto-1", s: "a" },
          { t: "txt", r: true, label: "Aprendizaje", html: "<strong>Aprender a no reaccionar.</strong> Tuvo que desarrollar autocontrol y aprender a negociar resultados de corto plazo pensando en cambios de largo plazo." },
          { t: "ph", img: "contexto-4", s: "c" }, { t: "ph", img: "contexto-3", s: "d", cap: "Más de una década en un sector que todavía necesita más mujeres." }
        ]
      },
      II: {
        titulo: "El cuerpo también sabe quién eres",
        bloques: [
          { t: "txt", label: "Más allá del trabajo", html: "En el <strong>triatlón</strong> reconoce su fuerza de voluntad y su orientación al logro. Y algo importante: ahí ha aprendido a cuidarse a sí misma." },
          { t: "ph", img: "hobby-1", s: "a" },
          { t: "ph", img: "hobby-3", s: "b" },
          { t: "pull", html: "Hay caminos que se recorren con la cabeza y otros con el cuerpo." },
          { t: "ph", img: "hobby-2", s: "c" }, { t: "ph", img: "hobby-4", s: "d" }
        ]
      },
      III: {
        titulo: "La amiga divertida",
        descubrimiento: "La amiga divertida, exploradora, que busca nuevas experiencias todo el tiempo.",
        nota: "“Soy una princesa guerrera, soñadora, que no espera que nada le llegue, construye lo que quiere lograr”.",
        foto: "hobby-5"
      },
      IV: { frase: "Somos sororas, somos un gallinero productivo y sobre todo una tribu que se apoya con amor." }
    },
    conexiones: [
      { con: "andrea", texto: "Orgullo de lo que somos y de lo que hemos logrado, y la motivación de abrir camino a las que vienen detrás. Lorena cree en el trabajo con otras mujeres; Andrea piensa que ya es hora de cambiar la idea de que no podemos trabajar juntas." }
    ]
  },
  {
    slug: "diana", no: "02",
    nombre: "Diana Marsela Patiño Espinoza", corto: "Diana",
    profesion: "Ingeniera Mecatrónica", profesionEn: "Mechatronics Engineer",
    disciplina: "mecatronica", palabra: "Persistir", color: "#8a5b43",
    intereses: ["lectura"], hobby: "Lectura", paginasLibro: "17 – 23",
    hero: { img: "home-1", pos: "54% 28%" }, card: "hobby-2", cardPos: "50% 25%",
    intro: [
      "Hay territorios profesionales que todavía parecen pertenecer a otros.",
      "Diana trabaja entre la mecánica automotriz y la electrónica, aportando una mirada real sobre las mujeres en un campo tradicionalmente masculino."
    ],
    cita: "En un oficio que todavía parece masculino, Diana no busca encajar en el molde: prefiere demostrar que no existe un único molde.",
    resumenQR: "Ingeniera mecatrónica. Trabaja en mecánica automotriz y electrónica en Danithi Car’s. Llegamos a su taller y nos dimos cuenta rápidamente de que <em>no pide permiso para pertenecer: demuestra que pertenece</em>.",
    actos: {
      I: {
        titulo: "Las máquinas abren un mundo",
        bloques: [
          { t: "txt", label: "Su fascinación", html: "“Me sorprendió lo fascinante de las máquinas y el mundo tan enorme que es la tecnología.”" },
          { t: "ph", img: "contexto-1", s: "b" },
          { t: "ph", img: "contexto-5", s: "a", cap: "Aprendizaje. “Muchas de las cosas que aprendí me tocó incluso a las malas.”" },
          { t: "txt", r: true, label: "El taller", html: "Diana trabaja en <strong>mecánica automotriz y electrónica</strong> en <strong>Danithi Car’s</strong>. La <a class='xlink' data-x='research:mecatronica'>mecatrónica</a> integra mecánica, electrónica, control y computación para desarrollar sistemas automatizados e inteligentes." },
          { t: "ph", img: "contexto-3", s: "c", cap: "Una mujer no es solamente “de escritorio”." }, { t: "ph", img: "contexto-4", s: "d" }
        ]
      },
      II: {
        titulo: "¿Qué existe más allá del trabajo?",
        bloques: [
          { t: "ph", img: "hobby-1", s: "a", cap: "“Viajar sin moverse”. Eso es la lectura para Diana." },
          { t: "txt", r: true, label: "La felicidad", html: "Cuando lee, puede detenerse en otras voces, otras ideas, cambiar de lugar y hacerse preguntas. Tal vez por eso no acepta fácilmente los límites que otros han imaginado para ella." },
          { t: "pull", html: "Los mundos son infinitos, posibles." },
          { t: "ph", img: "hobby-3", s: "c" }, { t: "ph", img: "hobby-4", s: "d" }
        ]
      },
      III: { titulo: "Las dos caras", descubrimiento: "“Las dos caras.”", foto: "hobby-5" },
      IV: { frase: "Siempre se puede." }
    },
    conexiones: [{ con: "lorena", texto: "Una encuentra una ventana cuando se cierran las puertas. La otra quiere abrirlas para quienes vienen detrás." }]
  },
  {
    slug: "maria-cristina", no: "03",
    nombre: "María Cristina Giraldo Chamorro", corto: "María Cristina",
    profesion: "Ingeniera Comercial", profesionEn: "Commercial Engineer",
    disciplina: "comercial", palabra: "Liderar sin perderse", color: "#6f5f8e",
    intereses: ["deporte"], hobby: "Tenis", paginasLibro: "25 – 31",
    hero: { img: "home-2", pos: "49% 19%" }, card: "hobby-2", cardPos: "50% 20%",
    intro: [
      "Liderar también es saber cuándo golpear, cuándo esperar y cuándo cambiar la estrategia.",
      "En el tenis, cada punto exige concentración, estrategia y capacidad para volver a empezar. En su profesión, María Cristina hace algo parecido: toma decisiones, lidera y construye nuevas posibilidades para la ingeniería."
    ],
    cita: "Su punto de quiebre: ocupar los espacios donde antes pocas mujeres podían decidir.",
    resumenQR: "Ingeniera comercial con un cargo gerencial de alto nivel. En el tenis, cada punto exige estrategia y capacidad para volver a empezar; en su profesión hace algo parecido. <em>La ingeniería también se trata de decidir cuando no existe un manual.</em>",
    actos: {
      I: {
        titulo: "La ingeniería también se trata de decidir cuando no existe un manual",
        bloques: [
          { t: "txt", label: "El territorio", html: "María Cristina es <strong>ingeniera comercial</strong> y ocupa un <strong>cargo gerencial de alto nivel</strong>. Su experiencia pone en primer plano la capacidad de las mujeres para participar en las decisiones estratégicas que orientan una organización." },
          { t: "ph", img: "contexto-1", s: "a" },
          { t: "ph", img: "contexto-5", s: "b", cap: "Toca aprender en el camino, tomar decisiones con información incompleta y liderar equipos en medio de la incertidumbre." },
          { t: "txt", r: true, label: "Aprendizaje", html: "Nuestro rol no se limita a programar o analizar datos. La <a class='xlink' data-x='research:comercial'>ingeniería comercial</a> combina análisis, economía, gestión y estrategia; la equidad también se juega en el acceso a la alta gerencia." },
          { t: "ph", img: "contexto-2", s: "c" }, { t: "ph", img: "contexto-3", s: "d" }
        ]
      },
      II: {
        titulo: "¿Qué existe más allá del trabajo?",
        bloques: [
          { t: "ph", img: "hobby-4", s: "b", cap: "Disciplina, cuerpo, respiración, equilibrio." },
          { t: "ph", img: "hobby-3", s: "a", cap: "Estrategia, paciencia, error y recomposición." },
          { t: "txt", r: true, label: "Descubrimiento", html: "Quizá no sea casualidad que le guste un deporte en el que cada jugada puede cambiar el partido." },
          { t: "pull", html: "El autocuidado es la base para cuidar y liderar a otros." },
          { t: "ph", img: "hobby-1", s: "c" }, { t: "ph", img: "contexto-4", s: "d" }
        ]
      },
      III: { titulo: "Autenticidad", descubrimiento: "Disfruta lo sencillo y entiende que el liderazgo no es perfección, sino autenticidad.", foto: "hobby-5" },
      IV: { frase: "La ingeniería no es solo para unas pocas, ni requiere ser perfecta para avanzar… vean que detrás de cada ingeniera hay una mujer real, que se equivoca, que se reinventa y que logra impactar con su talento." }
    },
    conexiones: [{ con: "milena", texto: "Dos mujeres que hablan de liderazgo desde lugares distintos." }]
  },
  {
    slug: "andrea", no: "04",
    nombre: "Andrea del Pilar Pedraza Aguilar", corto: "Andrea",
    profesion: "Ingeniera de Minas", profesionEn: "Mining Engineer",
    disciplina: "minas", palabra: "Hacerse escuchar", color: "#3c4a42",
    intereses: ["servicio"], hobby: "Servicio en su iglesia", paginasLibro: "33 – 39",
    hero: { img: "home-3", pos: "38% 36%" }, card: "contexto-4", cardPos: "50% 30%",
    intro: [
      "Andrea es luz. En la oscuridad de las minas, en la oscuridad de las almas.",
      "De las entrañas de la tierra asciende para acompañar, compartir y servir en su iglesia. Dos mundos distintos unidos por una misma sustancia."
    ],
    cita: "Mi historia también cuenta y merece ser escuchada y valorada.",
    resumenQR: "Ingeniera de minas en las minas de carbón de Tópaga. Su primera sorpresa fue descubrir el subsuelo y todo lo que sucede allí. Tuvo que aprender a confiar en sus conocimientos, defender sus ideas y <em>hacerse escuchar</em>.",
    actos: {
      I: {
        titulo: "Bajo tierra",
        bloques: [
          { t: "txt", label: "El territorio", html: "La primera sorpresa de Andrea fue descubrir el <strong>subsuelo</strong>, la explotación minera y todo lo que sucede allí. Trabaja en las <a class='xlink' data-x='research:minas'>minas de carbón</a> de Tópaga." },
          { t: "ph", img: "contexto-4", s: "b" },
          { t: "ph", img: "contexto-3", s: "a", cap: "Una mujer puede llevar la batuta de una explotación minera." },
          { t: "txt", r: true, label: "Aprendizaje", html: "Aprender a <strong>confiar en sus conocimientos</strong>, defender sus ideas y hacerse escuchar." },
          { t: "ph", img: "contexto-2", s: "c" }, { t: "ph", img: "contexto-1", s: "d" }
        ]
      },
      II: {
        titulo: "Detrás de la mujer fuerte",
        bloques: [
          { t: "txt", label: "Más allá del trabajo", html: "Andrea ha aprendido a <strong>descansar, tomar una pausa y recargar energías</strong>. De las entrañas de la tierra asciende para acompañar, compartir y servir en su iglesia." },
          { t: "ph", img: "hobby-1", s: "a" },
          { t: "ph", img: "hobby-4", s: "b" },
          { t: "pull", html: "Detrás de la mujer fuerte existe sensibilidad y disposición para darlo todo por los demás." },
          { t: "ph", img: "hobby-3", s: "c" }, { t: "ph", img: "hobby-2", s: "d" }
        ]
      },
      III: {
        titulo: "El descubrimiento",
        descubrimiento: "“Somos muchas las mujeres que enfrentamos diferentes retos y que, gracias a nuestro esfuerzo, somos capaces de sobrellevar situaciones personales, familiares y profesionales, especialmente en un mundo que aún sigue siendo mayoritariamente masculino”.",
        foto: "hobby-5"
      },
      IV: { frase: "Mi historia también cuenta y merece ser escuchada y valorada." }
    },
    conexiones: [
      { con: "jessica", texto: "Tres mujeres que, de maneras distintas, tuvieron que hacerse un lugar en espacios donde su presencia todavía llama la atención." },
      { con: "diana", texto: "La misma búsqueda, otro oficio: Diana no pide permiso para pertenecer en un taller de mecánica, demuestra que pertenece." }
    ]
  },
  {
    slug: "alejandra", no: "05",
    nombre: "Alejandra Carranza Correa", corto: "Alejandra",
    profesion: "Ingeniera de Sistemas", profesionEn: "Systems Engineer",
    disciplina: "sistemas", palabra: "Reconocerse", color: "#a0804f",
    intereses: ["naturaleza"], hobby: "Caminatas", paginasLibro: "55 – 61",
    hero: { img: "home-1", pos: "47% 18%" }, card: "contexto-4", cardPos: "50% 30%",
    intro: [
      "En la tecnología imagina, conecta y transforma; en las caminatas encuentra el tiempo para observar. Dos maneras distintas de avanzar, una misma curiosidad por descubrir qué hay más adelante.",
      "Desde la innovación construye su trayectoria en un sector donde hacer visible la experiencia de las mujeres también es transformar el futuro."
    ],
    cita: "Cada mujer que logra avanzar inspira a muchas más.",
    resumenQR: "Ingeniera de sistemas, directora de innovación y cofundadora de InterfaseTecnológica. Su primer descubrimiento fue la baja participación de mujeres en tecnología. <em>“He aprendido a verme y reconocerme”.</em>",
    actos: {
      I: {
        titulo: "No todo es innovación",
        bloques: [
          { t: "txt", label: "Su primer descubrimiento", html: "<strong>La baja participación de mujeres en tecnología.</strong> Alejandra es ingeniera de sistemas, directora de innovación y cofundadora de InterfaseTecnológica. A comienzos de siglo las mujeres alcanzaron el 42,84 % de las graduaciones en <a class='xlink' data-x='research:sistemas'>ingeniería de sistemas</a>; en 2025 llegaron al 17,37 %." },
          { t: "ph", img: "contexto-1", s: "a" },
          { t: "ph", img: "contexto-5", s: "b" },
          { t: "txt", r: true, label: "Aprendizaje", html: "Tuvo que aprender a gestionar terminaciones de contratos. <strong>No todo es innovación. También hay decisiones difíciles.</strong>" },
          { t: "pull", html: "¿Por qué seguimos creyendo que las mujeres no podemos trabajar juntas?" },
          { t: "ph", img: "contexto-3", s: "c" }, { t: "ph", img: "contexto-2", s: "d" }
        ]
      },
      II: {
        titulo: "La vida es mucho más que un trabajo",
        bloques: [
          { t: "txt", label: "El descubrimiento", html: "“La vida es mucho más que un trabajo, más que una profesión.” Alejandra hace <strong>caminatas por la naturaleza</strong>: tal vez porque algunas respuestas aparecen cuando una deja de correr." },
          { t: "ph", img: "hobby-1", s: "a" },
          { t: "ph", img: "hobby-2", s: "b", cap: "“Me tomo muy en serio lo que hago, me importan profundamente las personas con las que trabajo y muchas veces soy mucho más exigente conmigo misma de lo que los demás perciben”." },
          { t: "pull", html: "He aprendido a verme y reconocerme." },
          { t: "ph", img: "hobby-3", s: "c" }, { t: "ph", img: "hobby-4", s: "d" }
        ]
      },
      III: {
        titulo: "Lo que no se ve",
        descubrimiento: "Detrás de la seguridad y la determinación hay una persona reflexiva y sensible.",
        nota: "Alejandra no es solamente el cargo que ocupa ni los logros que acumula: como mujer también es aquello que descubre de sí misma cuando se permite mirar más allá de su profesión.",
        foto: "hobby-5"
      },
      IV: { frase: "Cada mujer que logra avanzar inspira a muchas más." }
    },
    conexiones: [
      { con: "lorena", texto: "Alejandra se conecta directamente con Lorena: trabajar juntas. Las dos comparten la misma pregunta y la misma respuesta sobre el trabajo entre mujeres." }
    ]
  },
  {
    slug: "milena", no: "06",
    nombre: "Milena Poveda Osorio", corto: "Milena",
    profesion: "Ingeniera Mecánica", profesionEn: "Mechanical Engineer",
    disciplina: "mecanica", palabra: "Permanecer con propósito", color: "#46716e",
    intereses: ["deporte"], hobby: "Golf", paginasLibro: "63 – 69",
    hero: { img: "home-1", pos: "50% 14%" }, card: "hobby-2", cardPos: "50% 20%",
    intro: [
      "Entre máquinas, energía y decisiones, Milena aprendió a moverse con precisión.",
      "En el campo de golf, mientras practica, encuentra otro tipo de desafío: calcular la distancia, elegir el golpe y confiar en el siguiente movimiento."
    ],
    cita: "Valorarnos y confiar en nosotras mismas, en nuestro talento.",
    resumenQR: "Ingeniera mecánica y gerente general de Blackstone Energy Colombia S.A.S. <em>“No lo hacemos por demostrar algo o por una lucha de género; lo hacemos porque amamos la carrera que escogimos”.</em>",
    actos: {
      I: {
        titulo: "Permanecer con propósito",
        bloques: [
          { t: "txt", label: "El territorio", html: "“No lo hacemos por demostrar algo o por una lucha de género; lo hacemos porque amamos la carrera que escogimos.” Milena es <strong>gerente general de Blackstone Energy Colombia S.A.S.</strong>" },
          { t: "ph", img: "contexto-3", s: "b" },
          { t: "ph", img: "contexto-1", s: "a", cap: "Permanecer en un sector exigente sin perder aquello que te hizo elegirlo." },
          { t: "txt", r: true, label: "Su lugar", html: "“Soy parte de un sector históricamente desafiante”. En Colombia, entre 2001 y 2025, las mujeres no alcanzaron el 12 % de las graduaciones en <a class='xlink' data-x='research:mecanica'>ingeniería mecánica</a>." },
          { t: "ph", img: "contexto-4", s: "c" }, { t: "ph", img: "contexto-2", s: "d" }
        ]
      },
      II: {
        titulo: "¿Qué sostiene a una mujer que parece tenerlo todo bajo control?",
        bloques: [
          { t: "txt", label: "Más allá del trabajo", html: "“El golf me ayuda a tener <strong>serenidad, control de las emociones</strong> y ser constante en lo que hago”." },
          { t: "ph", img: "hobby-4", s: "a" },
          { t: "ph", img: "hobby-2", s: "b" },
          { t: "pull", html: "La disciplina, la tenacidad y el liderazgo son fundamentales para Milena." },
          { t: "ph", img: "hobby-1", s: "c" }, { t: "ph", img: "hobby-3", s: "d" }
        ]
      },
      III: {
        titulo: "El descubrimiento",
        descubrimiento: "“Mi cercanía con Dios.”",
        foto: "hobby-5"
      },
      IV: { frase: "Valorarnos y confiar en nosotras mismas, en nuestro talento." }
    },
    conexiones: [
      { con: "maria-cristina", texto: "No desde la lucha, sino desde la confianza en el propio talento: dos mujeres que hablan de liderazgo desde lugares distintos." },
      { con: "claudia-maria", texto: "Confiar en el propio talento y en la fuerza que llevamos dentro: la misma convicción, dos oficios distintos." }
    ]
  },
  {
    slug: "claudia-maria", no: "07",
    nombre: "Claudia María Carrillo Vargas", corto: "Claudia María",
    profesion: "Ingeniera Civil", profesionEn: "Civil Engineer",
    disciplina: "civil", palabra: "Abrirse paso", color: "#8e4a5c",
    intereses: ["arte"], hobby: "Danza árabe", paginasLibro: "71 – 77",
    hero: { img: "home-1", pos: "43% 22%" }, card: "hobby-5", cardPos: "30% 30%",
    intro: [
      "Construir y bailar parecen mundos distintos. Pero ambos exigen equilibrio, precisión y confianza.",
      "Mientras estamos con Claudia María, ella trabaja con estructuras, caminos y territorios. Fuera de estos, encuentra en la danza árabe otra manera de habitar el cuerpo y el movimiento."
    ],
    cita: "Ella nos deja ver que también se construyen caminos cuando demuestra que puede recorrerlos.",
    resumenQR: "Ingeniera civil y administradora vial. Construir y bailar parecen mundos distintos, pero ambos exigen equilibrio, precisión y confianza. <em>Vemos dos lenguajes distintos en una misma mujer.</em>",
    actos: {
      I: {
        titulo: "Una dificultad que casi cualquiera puede comprender",
        bloques: [
          { t: "txt", label: "El territorio", html: "Claudia María es <strong>ingeniera civil</strong> y <strong>administradora vial</strong>. Su trabajo muestra que construir infraestructura también es construir posibilidades de movilidad, conexión y desarrollo para otros territorios." },
          { t: "ph", img: "contexto-3", s: "b" },
          { t: "ph", img: "contexto-1", s: "a", cap: "El desafío." },
          { t: "txt", r: true, label: "Una cifra", html: "La participación femenina en <a class='xlink' data-x='research:civil'>ingeniería civil</a> ha avanzado de manera sostenida y alcanzó el <strong>31,01 %</strong> en 2025, aunque el campo continúa marcado por estereotipos que lo presentan como exclusivamente masculino." },
          { t: "ph", img: "contexto-5", s: "c" }, { t: "ph", img: "contexto-4", s: "d" }
        ]
      },
      II: {
        titulo: "¿Qué existe más allá del trabajo?",
        bloques: [
          { t: "txt", label: "Una transformación", html: "Sus hobbies no solamente le gustan. Le enseñaron: <strong>conocerse, comprenderse, darse espacio, darse lugar y quererse</strong>." },
          { t: "ph", img: "hobby-1", s: "a" },
          { t: "ph", img: "hobby-3", s: "b", cap: "“Con el tiempo he aprendido a priorizar mi paz y mi bienestar”." },
          { t: "pull", html: "Vemos dos lenguajes distintos en una misma mujer." },
          { t: "ph", img: "hobby-2", s: "c" }, { t: "ph", img: "hobby-4", s: "d" }
        ]
      },
      III: { titulo: "Lo que no se ve", descubrimiento: "“Soy una mujer curiosa, que siente con el alma…”", nota: "Este retrato adquiere otra lectura. No es la ingeniera civil. Es la mujer que todavía está descubriendo todo lo que hay en ella.", foto: "hobby-5" },
      IV: { frase: "Quiero que se queden con la convicción de que tenemos la fuerza y la capacidad para cumplir nuestra misión de vida, que lo hecho con amor y certeza siempre sale bien." }
    },
    conexiones: [{ con: "alejandra", texto: "Confiar en la fuerza que llevamos dentro conecta maravillosamente con Alejandra, quien habla de aprender a reconocer esa fuerza." }]
  },
  {
    slug: "jessica", no: "08",
    nombre: "Jessica Stephanie Luengas Fajardo", corto: "Jessica",
    profesion: "Geóloga", profesionEn: "Geologist",
    disciplina: "geologia", palabra: "Leer el terreno", color: "#66764a",
    intereses: ["deporte", "naturaleza"], hobby: "Escalada", paginasLibro: "79 – 85",
    hero: { img: "home-1", pos: "49% 24%" }, card: "contexto-3", cardPos: "50% 20%",
    intro: [
      "Conocer la Tierra también es conquistar nuevos lugares para una profesión.",
      "Jessica estudia la Tierra y trabaja anticipándose a sus riesgos. La acompañamos a escalar y la vimos escogiendo el muro, reconociendo dificultades, roca, altura, equilibrio y marcando una ruta."
    ],
    cita: "Hay mujeres que no esperan que el camino aparezca. Aprenden a leer el terreno y encuentran el suyo.",
    resumenQR: "Geóloga y gerente de una empresa dedicada al análisis de riesgos de desastre, geotecnia, geociencias y topografía. Cuando escala vuelve a encontrarse con ella: <em>su profesión y su pasión exigen mirar el terreno antes de dar el siguiente paso.</em>",
    actos: {
      I: {
        titulo: "El territorio",
        bloques: [
          { t: "txt", label: "La posibilidad", html: "“Conocer cualquier lugar de Colombia, palparlo y entenderlo.”" },
          { t: "ph", img: "contexto-1", s: "a" },
          { t: "ph", img: "contexto-4", s: "b", cap: "Aprendizaje: “repensar sobre la frustración para encontrar soluciones”." },
          { t: "txt", r: true, label: "Su trabajo", html: "Jessica es <strong>geóloga</strong> y gerente de una empresa dedicada al análisis de riesgos de desastre, geotecnia, <a class='xlink' data-x='research:geologia'>geociencias</a> y topografía. Su trabajo conecta conocimiento científico, territorio y prevención." },
          { t: "ph", img: "contexto-2", s: "c" }, { t: "ph", img: "contexto-5", s: "d" }
        ]
      },
      II: {
        titulo: "¿Qué existe más allá del trabajo?",
        bloques: [
          { t: "ph", img: "hobby-3", s: "a", cap: "“Aprender un nuevo oficio o hobby ayuda a que el cerebro respire.”" },
          { t: "ph", img: "hobby-2", s: "b", cap: "La efectividad para tener tiempo." },
          { t: "txt", r: true, label: "Escalar", html: "Cuando Jessica escala vuelve a encontrarse con ella. Quizá por eso su profesión y su pasión se parecen tanto: ambas exigen mirar el terreno antes de dar el siguiente paso." },
          { t: "ph", img: "hobby-1", s: "c" }, { t: "ph", img: "hobby-5", s: "d" }
        ]
      },
      III: { titulo: "Lo que no se ve", descubrimiento: "“El alma tierna y amigable detrás de alguien fuerte.”", foto: "hobby-4" },
      IV: { frase: "Expresar las ‘fragilidades’ como herramientas para deconstruirse para ayudar a los demás." }
    },
    conexiones: [{ con: "andrea", texto: "Con Jessica descubrimos que las fragilidades también pueden ser herramientas. Con Andrea, la fortaleza no consiste en ocultar todas las partes vulnerables de una persona." }]
  }
];

MDP.interests = [
  { id: "deporte", label: "Deporte" },
  { id: "arte", label: "Arte" },
  { id: "lectura", label: "Lectura" },
  { id: "servicio", label: "Servicio" },
  { id: "naturaleza", label: "Naturaleza" }
];

/* ---------------------------------------------------------
   GANCHOS DEL HERO — aparecen aleatorios en cada visita.
   w = slug de la mujer asociada (su foto acompaña el gancho)
   Usa *palabra* para resaltar en itálica.
   --------------------------------------------------------- */
MDP.hooks = [
  { w: "diana", h: "No pide permiso para *pertenecer*: demuestra que pertenece." },
  { w: "diana", h: "“Muchas de las cosas que aprendí me tocó incluso *a las malas*.”" },
  { w: "diana", h: "Una mujer no es solamente *“de escritorio”*." },
  { w: "lorena", h: "Llegar no siempre es suficiente. También hay que *abrir camino*." },
  { w: "lorena", h: "En la ingeniería, el desafío de resolver. En el triatlón, el de *resistir*." },
  { w: "maria-cristina", h: "¿Qué haces cuando *no existe un manual*?" },
  { w: "maria-cristina", h: "Liderar también es saber cuándo golpear, cuándo esperar y cuándo *cambiar la estrategia*." },
  { w: "andrea", h: "Todavía sorprende encontrar una mujer en la mina. Ella trabaja para que *deje de sorprender*." },
  { w: "andrea", h: "Abrir camino no siempre significa *avanzar sola*." },
  { w: "alejandra", h: "Algunas respuestas aparecen cuando una *deja de correr*." },
  { w: "alejandra", h: "Eran el 42,84 %. Hoy son el 17,37 %. *¿Qué pasó en sistemas?*" },
  { w: "milena", h: "En ingeniería no basta con llegar. Hay que *permanecer*." },
  { w: "milena", h: "Menos del 12 % de quienes se gradúan en mecánica son mujeres. *Milena es una de ellas.*" },
  { w: "claudia-maria", h: "Construir y bailar exigen lo mismo: *equilibrio, precisión y confianza*." },
  { w: "claudia-maria", h: "“Con el tiempo he aprendido a priorizar *mi paz*.”" },
  { w: "jessica", h: "Hay mujeres que no esperan que el camino aparezca. *Leen el terreno.*" },
  { w: "jessica", h: "¿Y si tus fragilidades fueran *herramientas*?" },
  { w: "jessica", h: "Aprender un nuevo hobby ayuda a que *el cerebro respire*." },
  { w: "lorena", h: "¿Quién dijo que *esto* no era para una mujer?" },
  { w: "diana", h: "No existe un *único molde*." }
];

/* ---------------------------------------------------------
   INVESTIGACIÓN — datos tomados del fotolibro (interludio)
   start/end: [año, %]  · range: [min,max] · max: tope
   --------------------------------------------------------- */
MDP.research = {
  pregunta: "¿Acaso las mujeres en áreas STEM necesitan ganar un premio extraordinario para que su trabajo sea visible?",
  disciplinas: [
    { id: "electronica", titulo: "Ingeniería Electrónica y Telecomunicaciones", nombre: "Electrónica y Telecomunicaciones", w: "lorena", start: [2001, 17.27], end: [2022, 14.22],
      texto: "Diseña los circuitos, redes y sistemas que hacen posible la comunicación contemporánea: desde dispositivos médicos hasta fibra óptica, radares y satélites. La participación femenina pasó del 17,27 % en 2001 al 14,22 % en 2022. En un sector que necesita talento especializado, esa disminución revela que el crecimiento tecnológico no garantiza inclusión.",
      ella: "Lorena es ingeniera electrónica y trabaja en el área de Defensa para Latinoamérica. Entiende su presencia en el sector como una forma de abrir camino para quienes hoy se están formando." },
    { id: "mecatronica", titulo: "Ingeniería Mecatrónica", nombre: "Mecatrónica", w: "diana", start: [2016, 16.05], end: [2025, 12.75], nota: "2016 es el máximo histórico",
      texto: "Integra mecánica, electrónica, control y computación para desarrollar sistemas automatizados e inteligentes. La participación femenina alcanzó un máximo del 16,05 % en 2016 y descendió al 12,75 % en 2025, aun cuando aumentó el número absoluto de graduadas. El avance no siempre ocurre en línea recta.",
      ella: "Diana Marsela trabaja en mecánica automotriz y electrónica en Danithi Car’s: una experiencia concreta de trabajo técnico en un campo que sigue siendo leído, de forma equivocada, como territorio de hombres." },
    { id: "comercial", titulo: "Ingeniería Comercial", nombre: "Comercial", w: "maria-cristina", sinDato: true,
      texto: "Combina análisis, economía, gestión y estrategia. Aunque ha sido una vía de ingreso más accesible para las mujeres que otras ingenierías, la equidad no se mide solo en presencia: también se juega en el acceso a la alta gerencia, la toma de riesgos y las decisiones financieras de mayor impacto.",
      ella: "María Cristina ocupa un cargo gerencial de alto nivel. Su experiencia pone en primer plano la capacidad de las mujeres para participar en las decisiones estratégicas que orientan una organización." },
    { id: "minas", titulo: "Ingeniería de Minas", nombre: "Minas", w: "andrea", start: [2001, 23.7], end: [2025, 32.6], extra: { label: "Empleo minero", v: 14.9 },
      texto: "Explora, extrae y transforma los recursos del subsuelo. Es central para la economía nacional, pero históricamente asociada al riesgo, la fuerza física y los liderazgos masculinos. Entre 2001 y 2025 la participación de mujeres graduadas pasó de un promedio de 23,7 % a 32,6 %. En el empleo minero, sin embargo, su presencia sigue siendo reducida: 14,9 %.",
      ella: "Andrea trabaja en las minas de carbón de Tópaga. Su trayectoria hace visible una presencia femenina que, más que excepcional, debe convertirse en referente." },
    { id: "sistemas", titulo: "Ingeniería de Sistemas", nombre: "Sistemas", w: "alejandra", start: [2000, 42.84], mid: [2022, 19.16], end: [2025, 17.37], nota: "El año inicial corresponde a “comienzos de siglo”",
      texto: "Organiza buena parte de la vida digital: software, redes, información y herramientas que conectan industrias, servicios y personas. A comienzos de siglo las mujeres alcanzaron el 42,84 % de las graduaciones; en 2022 la cifra descendió al 19,16 % y en 2025 llegó al 17,37 %. La expansión tecnológica no ha eliminado los estereotipos que asocian la capacidad técnica con lo masculino.",
      ella: "Alejandra es directora de innovación y cofundadora de InterfaseTecnológica. Su recorrido combina creación empresarial, liderazgo y una mirada crítica sobre ser mujer en el sector tecnológico." },
    { id: "mecanica", titulo: "Ingeniería Mecánica", nombre: "Mecánica", w: "milena", max: 12, periodo: "2001–2025",
      texto: "Trabaja con movimiento, energía, materiales y sistemas que transforman el mundo físico. En Colombia, entre 2001 y 2025 las mujeres no alcanzaron el 12 % de las graduaciones. Aunque desde 2019 hay una leve recuperación, sigue siendo una de las especialidades con menor presencia de mujeres.",
      ella: "Milena es gerente general de Blackstone Energy Colombia S.A.S. Su trayectoria une experiencia técnica, liderazgo y una convicción clara: la excelencia profesional también puede abrir camino para otras mujeres." },
    { id: "civil", titulo: "Ingeniería Civil", nombre: "Civil", w: "claudia-maria", end: [2025, 31.01],
      texto: "Transforma territorios: diseña, construye y mantiene vías, edificaciones, redes y obras que sostienen la vida colectiva. La participación femenina ha avanzado de manera sostenida y alcanzó el 31,01 % en 2025, aunque el campo continúa marcado por estereotipos que lo presentan como exclusivamente masculino.",
      ella: "Claudia María es ingeniera civil y administradora vial. Construir infraestructura también es construir posibilidades de movilidad, conexión y desarrollo para otros territorios." },
    { id: "geologia", titulo: "Geología, Geociencias e Ingeniería Geológica", nombre: "Geología y Geociencias", w: "jessica", range: [30, 46], periodo: "2001–2025",
      texto: "Permite leer la Tierra: sus rocas, aguas, riesgos, recursos y transformaciones. Entre 2001 y 2025, la participación femenina en geología osciló entre el 30 % y el 46 %: una proporción mayor que en varias ingenierías, aunque todavía distante de una paridad sostenida.",
      ella: "Jessica es gerente de una empresa dedicada al análisis de riesgos de desastre, geotecnia, geociencias y topografía. Su trabajo conecta conocimiento científico, territorio y prevención." }
  ],
  /* Infografías del equipo de investigación (assets/img/investigacion/) */
  infografias: {
    educacion: {
      titulo: "Participación en educación",
      nota: "Cifras globales y de Colombia recopiladas por el equipo de investigación.",
      alt: "Infografía de participación en educación. La matrícula terciaria femenina pasó del 19 % en 2000 al 43,3 % en 2023. Tendencias de género en las matrículas de 2022: ratio de 100 hombres por cada 113 mujeres; en Colombia el 53,4 % son mujeres. Brecha STEAM global: 35 % de graduadas, sin variación en los últimos 10 años. Mujeres matriculadas en ingenierías: Estados Unidos 16 %, Chile 33 %, Sudáfrica 7 %, Australia 17 %.",
      datos: ["19 % → 43,3 % de matrícula terciaria femenina (2000–2023)", "100 hombres por cada 113 mujeres matriculadas (2022)", "35 % de graduadas STEAM, sin variación en 10 años", "Ingenierías: Chile 33 % · Australia 17 % · EE. UU. 16 % · Sudáfrica 7 %"]
    },
    laboral: {
      titulo: "Participación laboral",
      nota: "El título no cierra la brecha: la participación cae al pasar al empleo y a los cargos directivos.",
      alt: "Infografía de participación laboral. Participación femenina en la fuerza laboral global: 65,7 %. Participación laboral STEAM: 28,2 %. Mujeres que alcanzan altos cargos directivos: 12,4 %. Empleos en sectores tecnológicos y científicos: 25 %. Solicitudes de patentes a nivel mundial: 17 %. En 2022: 26 % de la fuerza laboral en datos e inteligencia artificial, 15 % en ingeniería y 12 % en computación en la nube.",
      datos: ["65,7 % en la fuerza laboral global", "28,2 % en empleo STEAM", "12,4 % llega a altos cargos directivos", "25 % de los empleos tecnológicos y científicos", "17 % de las solicitudes de patentes"]
    }
  },
  mecanismos: [
    { id: "caneria", nombre: "Cañería rota", en: "Leaky pipeline", texto: "Describe cómo la participación de las mujeres disminuye a medida que avanzan la formación y la carrera profesional.", ep: 3 },
    { id: "techo", nombre: "Techo de cristal", en: "Glass ceiling", texto: "Nombra los límites invisibles que frenan el ascenso a cargos directivos.", ep: 1 },
    { id: "matilda", nombre: "Efecto Matilda", en: "Matilda effect", texto: "Minimiza o atribuye a otros los logros de las mujeres.", ep: 4 },
    { id: "piso", nombre: "Piso engomado", en: "Sticky floor", texto: "Les dificulta despegar de los cargos iniciales. A esto se suma una distribución desigual del trabajo: gestión, mentoría y cuidado institucional recaen sobre ellas, aunque pocas veces se valoran al momento de promoverlas.", ep: 2 }
  ]
};

/* ---------------------------------------------------------
   PODCAST — pega en "spotify" la URL de inserción (embed)
   de cada episodio: https://open.spotify.com/embed/episode/XXXX
   --------------------------------------------------------- */
MDP.podcast = [
  { no: 1, titulo: "Lo que hacemos", tema: "Vida profesional", spotify: "",
    desc: "Cómo llegaron a su profesión, qué hacen cada día y qué decisiones las trajeron hasta aquí. La profesional, antes que el título.",
    tx: "La transcripción completa estará disponible con el lanzamiento del episodio." },
  { no: 2, titulo: "De dónde venimos", tema: "Vida familiar", spotify: "",
    desc: "La casa, las familias, los apoyos y las ausencias. Lo que sostiene una trayectoria cuando nadie la está mirando.",
    tx: "La transcripción completa estará disponible con el lanzamiento del episodio." },
  { no: 3, titulo: "Las aulas", tema: "Experiencia en la universidad", spotify: "",
    desc: "Octavo semestre que se mezcla con tercero, un profesor, una compañera, un laboratorio. Recuerdos que no llegan en línea recta.",
    tx: "La transcripción completa estará disponible con el lanzamiento del episodio." },
  { no: 4, titulo: "Ser mujer en la ingeniería", tema: "Género y profesión", spotify: "",
    desc: "Cuatro mujeres compitiendo por un puesto frente a treinta y cinco hombres. Cosas que parecen normales hasta que se escuchan en voz alta. No hay una sola experiencia: hay varias miradas.",
    tx: "La transcripción completa estará disponible con el lanzamiento del episodio." },
  { no: 5, titulo: "Para las que vienen", tema: "Reflexiones", spotify: "",
    desc: "Lo que le dirían a una chica que está eligiendo carrera, y a la mujer que hoy está batallando en su trabajo.",
    tx: "La transcripción completa estará disponible con el lanzamiento del episodio." }
];
/* Texto oficial del podcast (documento "textos podcast - pagina web - exposición") */
MDP.podcastIntro = [
  "El podcast es una extensión de los relatos compartidos por las mujeres participantes de este proyecto. A través de su propia voz, ellas cuentan momentos de sus vidas en los que han tenido que enfrentar situaciones y desafíos que han marcado tanto su trayectoria profesional como su vida personal.",
  "Son cinco episodios que abordan diferentes temas y momentos significativos en la vida de cada una de ellas, recorriendo sus experiencias profesionales, personales y sus trayectorias como mujeres en la ingeniería, la geología y otras áreas STEM. Cada episodio abre un espacio para escuchar, más allá de su profesión, a la persona que existe detrás de ella: sus decisiones, aprendizajes, dificultades y las experiencias que han contribuido a construir quiénes son y el trabajo que realizan actualmente.",
  "Descubrimos que, aunque sus historias son distintas, hay experiencias que las conectan. Los desafíos, las decisiones y las formas de enfrentarlos terminan entrelazándose para revelar un relato común: el de Mujeres de Profesión que han construido sus caminos profesionales atravesando obstáculos, transformaciones y momentos que también las han definido como personas."
];

/* ---------------------------------------------------------
   EXPOSICIÓN FOTOGRÁFICA
   --------------------------------------------------------- */
MDP.exposicion = {
  lugar: "Edificio de Posgrados de Ciencias Humanas",
  institucion: "Universidad Nacional de Colombia",
  fechas: "",               // p. ej. "Del 5 al 30 de octubre de 2026" (vacío = "Próximamente")
  horario: "",              // p. ej. "Lunes a viernes · 8:00 a. m. – 6:00 p. m."
  mapa: "",                 // URL de Google Maps (opcional)
  textos: [
    "El proyecto Mujeres de Profesión se extiende al espacio físico a través de una exposición fotográfica en el edificio de Posgrados de Ciencias Humanas de la Universidad Nacional. La exposición propone llevar las historias de las participantes a un contexto artístico y cotidiano, donde sus imágenes puedan ser contempladas más allá de las páginas del fotolibro y convertirse en un encuentro directo con quienes hacen parte del proyecto. Las fotografías dialogan con el espacio universitario para visibilizar las múltiples dimensiones de las mujeres participantes.",
    "El retrato en blanco y negro adquiere un carácter particular. A diferencia de las fotografías que muestran sus espacios de trabajo, herramientas y contextos profesionales, esta imagen busca detener la mirada en ellas mismas: en su presencia, identidad y dimensión humana.",
    "Al llevar estos retratos a la exposición, Mujeres de Profesión amplía su relato desde la investigación y la palabra hacia la imagen y el espacio, creando una experiencia que permite acercarse a las protagonistas desde una mirada más íntima. Así, la exposición se convierte en otra forma de contar sus historias y de recordar que detrás de cada profesión, cargo o trayectoria existe una mujer con una historia propia."
  ]
};

/* ---------------------------------------------------------
   AGENDA — exposiciones, charlas y talleres.
   Agrega un objeto por evento; se ordenan por fecha y los
   pasados se muestran aparte automáticamente.
   fecha: "AAAA-MM-DD"  · tipo: Exposición | Charla | Taller
   {
     fecha: "2026-10-15", hora: "4:00 p. m.", tipo: "Charla",
     titulo: "Nuevas formas de divulgación en ciencia",
     lugar: "Auditorio …, Universidad Nacional",
     desc: "…", url: ""   // enlace de inscripción (opcional)
   }
   --------------------------------------------------------- */
MDP.agenda = [];

MDP.podcastBonus = {
  titulo: "Cómo promover la ingeniería en tu entorno", tema: "Episodio oculto · se desbloquea al completar el álbum", spotify: "",
  desc: "Nuevas formas de divulgación en ciencia: cómo una investigación puede contarse de manera más cercana y cómo tú puedes abrir camino a más mujeres en ingeniería desde tu colegio, tu universidad o tu trabajo."
};

/* ---------------------------------------------------------
   ÁLBUM — 5 momentos coleccionables por mujer (40 en total)
   act: acto del perfil donde aparece el momento
   ch: reto  · quiz {q, o[], a}  · blank {s (___), a, o[]}
             · timing {q}        · puzzle {img}
   --------------------------------------------------------- */
MDP.stickers = {
  "lorena": [
    { t: "Resolver", act: "I", img: "contexto-2", ch: { type: "quiz", q: "¿En qué área trabaja Lorena?", o: ["Defensa para Latinoamérica", "Minería de carbón", "Banca de inversión"], a: 0 } },
    { t: "Una década", act: "I", img: "contexto-1", ch: { type: "puzzle", img: "contexto-1" } },
    { t: "Resistir", act: "II", img: "hobby-1", ch: { type: "timing", q: "Pulsa justo cuando la línea cruce la meta." } },
    { t: "Sostenerse", act: "II", img: "hobby-3", ch: { type: "blank", s: "Avanzar también significa ___ cuando el camino se hace difícil.", a: "sostenerse", o: ["sostenerse", "detenerse", "rendirse"] } },
    { t: "Que otras lleguen", act: "IV", img: "hobby-5", ch: { type: "quiz", q: "Para Lorena, se trata de hacer posible que…", o: ["otras lleguen", "ella llegue primero", "nadie la alcance"], a: 0 } }
  ],
  "diana": [
    { t: "La fascinación", act: "I", img: "contexto-1", ch: { type: "blank", s: "“Me sorprendió lo fascinante de las ___ y el mundo tan enorme que es la tecnología.”", a: "máquinas", o: ["máquinas", "oficinas", "reuniones"] } },
    { t: "A las malas", act: "I", img: "contexto-5", ch: { type: "quiz", q: "¿Cómo dice Diana que aprendió muchas cosas?", o: ["Incluso a las malas", "Solo en los libros", "Sin equivocarse nunca"], a: 0 } },
    { t: "No solo de escritorio", act: "I", img: "contexto-3", ch: { type: "puzzle", img: "contexto-1" } },
    { t: "Viajar sin moverse", act: "II", img: "hobby-1", ch: { type: "timing", q: "Pasa la página en el momento justo." } },
    { t: "Siempre se puede", act: "IV", img: "hobby-2", ch: { type: "quiz", q: "¿Cuál es la frase de Diana?", o: ["Siempre se puede", "Todo llega", "Mejor sola"], a: 0 } }
  ],
  "maria-cristina": [
    { t: "Sin manual", act: "I", img: "contexto-1", ch: { type: "quiz", q: "La ingeniería también se trata de decidir cuando no existe un…", o: ["manual", "presupuesto", "jefe"], a: 0 } },
    { t: "Incertidumbre", act: "I", img: "contexto-2", ch: { type: "puzzle", img: "contexto-2" } },
    { t: "Cada punto", act: "II", img: "hobby-3", ch: { type: "timing", q: "Devuelve la pelota cuando la línea esté en la zona." } },
    { t: "Autocuidado", act: "II", img: "hobby-4", ch: { type: "blank", s: "El ___ es la base para cuidar y liderar a otros.", a: "autocuidado", o: ["autocuidado", "sacrificio", "control"] } },
    { t: "Autenticidad", act: "III", img: "hobby-5", ch: { type: "quiz", q: "Para María Cristina, el liderazgo no es perfección, sino…", o: ["autenticidad", "autoridad", "velocidad"], a: 0 } }
  ],
  "andrea": [
    { t: "Luz", act: "I", img: "contexto-4", ch: { type: "blank", s: "Andrea es ___. En la oscuridad de las minas, en la oscuridad de las almas.", a: "luz", o: ["luz", "fuerza", "roca"] } },
    { t: "La mina", act: "I", img: "contexto-3", ch: { type: "puzzle", img: "contexto-4" } },
    { t: "Que deje de sorprender", act: "I", img: "contexto-2", ch: { type: "quiz", q: "¿Para qué trabaja Andrea?", o: ["Para que encontrar una mujer en la mina deje de sorprender", "Para ser la única mujer en la mina", "Para salir de la minería"], a: 0 } },
    { t: "Dos mundos", act: "II", img: "hobby-1", ch: { type: "timing", q: "Pulsa cuando la vagoneta salga a la luz." } },
    { t: "Ayudar a otros", act: "IV", img: "hobby-5", ch: { type: "quiz", q: "Abrir camino no siempre significa…", o: ["avanzar sola", "llegar primero", "ir más rápido"], a: 0 } }
  ],
  "alejandra": [
    { t: "Innovación", act: "I", img: "contexto-4", ch: { type: "quiz", q: "¿Qué empresa cofundó Alejandra?", o: ["InterfaseTecnológica", "Danithi Car’s", "Blackstone Energy"], a: 0 } },
    { t: "Imaginar", act: "I", img: "contexto-1", ch: { type: "puzzle", img: "contexto-1" } },
    { t: "Dejar de correr", act: "II", img: "hobby-2", ch: { type: "blank", s: "Algunas respuestas aparecen cuando uno deja de ___.", a: "correr", o: ["correr", "pensar", "hablar"] } },
    { t: "El siguiente paso", act: "II", img: "hobby-3", ch: { type: "timing", q: "Da el paso cuando la línea esté en la zona." } },
    { t: "Reconocerse", act: "III", img: "hobby-5", ch: { type: "quiz", q: "Alejandra eligió no solo adaptarse al futuro, sino…", o: ["ayudar a imaginarlo", "predecirlo", "esperarlo"], a: 0 } }
  ],
  "milena": [
    { t: "Precisión", act: "I", img: "contexto-3", ch: { type: "quiz", q: "¿Qué empresa dirige Milena?", o: ["Blackstone Energy Colombia", "InterfaseTecnológica", "Danithi Car’s"], a: 0 } },
    { t: "Energía", act: "I", img: "contexto-1", ch: { type: "puzzle", img: "contexto-3" } },
    { t: "El golpe", act: "II", img: "hobby-4", ch: { type: "timing", q: "Golpea cuando la línea esté en el punto justo." } },
    { t: "Su propio ritmo", act: "II", img: "hobby-2", ch: { type: "blank", s: "Disfruta ir a su propio ___, marcar su propio recorrido.", a: "ritmo", o: ["ritmo", "jefe", "horario"] } },
    { t: "Excelencia", act: "IV", img: "hobby-5", ch: { type: "quiz", q: "Según Milena, ¿qué también abre caminos?", o: ["La excelencia", "La suerte", "La prisa"], a: 0 } }
  ],
  "claudia-maria": [
    { t: "Estructuras", act: "I", img: "contexto-3", ch: { type: "puzzle", img: "contexto-3" } },
    { t: "El desafío", act: "I", img: "contexto-1", ch: { type: "quiz", q: "Además de ingeniera civil, Claudia María es…", o: ["administradora vial", "geóloga", "piloto"], a: 0 } },
    { t: "Dos lenguajes", act: "II", img: "hobby-1", ch: { type: "quiz", q: "¿Qué danza practica Claudia María?", o: ["Danza árabe", "Salsa", "Ballet"], a: 0 } },
    { t: "Mi paz", act: "II", img: "hobby-3", ch: { type: "blank", s: "“Con el tiempo he aprendido a priorizar mi ___ y mi bienestar”.", a: "paz", o: ["paz", "trabajo", "agenda"] } },
    { t: "Siente con el alma", act: "III", img: "hobby-5", ch: { type: "timing", q: "Sigue el compás: pulsa cuando la línea esté en la zona." } }
  ],
  "jessica": [
    { t: "Palpar el territorio", act: "I", img: "contexto-1", ch: { type: "quiz", q: "Para Jessica, la posibilidad es conocer cualquier lugar de…", o: ["Colombia, palparlo y entenderlo", "Europa, y fotografiarlo", "su ciudad, y quedarse"], a: 0 } },
    { t: "Frustración", act: "I", img: "contexto-4", ch: { type: "blank", s: "Aprendizaje: repensar sobre la ___ para encontrar soluciones.", a: "frustración", o: ["frustración", "suerte", "rutina"] } },
    { t: "Leer el terreno", act: "I", img: "contexto-3", ch: { type: "puzzle", img: "contexto-3" } },
    { t: "El cerebro respira", act: "II", img: "hobby-3", ch: { type: "timing", q: "Asegura el siguiente agarre en el momento justo." } },
    { t: "Fragilidades", act: "IV", img: "hobby-4", ch: { type: "quiz", q: "Jessica propone expresar las fragilidades como…", o: ["herramientas", "secretos", "debilidades"], a: 0 } }
  ]
};

/* Recompensa al completar a cada mujer: se muestra la ficha de su
   disciplina (investigación) + "lo que no cabe en el libro". */
MDP.unlocks = {
  "lorena": "“Una encuentra una ventana cuando se cierran las puertas. La otra quiere abrirlas para quienes vienen detrás.” Lorena y Diana comparten el mismo hilo: la persistencia.",
  "diana": "En el libro, el retrato de Diana se llama “Las dos caras”. Descubre cuál es la otra en la página 23.",
  "maria-cristina": "“La ingeniería no es solo para unas pocas, ni requiere ser perfecta para avanzar.”",
  "andrea": "“Abrir camino no siempre significa avanzar sola. A veces significa ayudar a otros a encontrar el suyo.”",
  "alejandra": "Alejandra no es solamente el cargo que ocupa ni los logros que acumula.",
  "milena": "En un campo donde todavía son pocas las mujeres, Milena habla de permanecer y resistir sin perder su calidad humana.",
  "claudia-maria": "“Soy una mujer curiosa, que siente con el alma…”",
  "jessica": "“El alma tierna y amigable detrás de alguien fuerte.” ¿Jessica eres tú?"
};

/* ---------------------------------------------------------
   CÓDIGOS QR DEL LIBRO  →  mujeresdeprofesion.com/qrN
   Cambia "to" para redirigir sin reimprimir el libro.
   type: woman | podcast | research | generic
   --------------------------------------------------------- */
MDP.qr = {
  1:  { type: "podcast", to: "podcast/", libro: "Presentación · p. 5",
        titulo: "Escucha sus historias", texto: "Escanea el código y escucha en la voz de cada mujer sus historias. Cinco episodios sobre la vida profesional, la familia, la universidad, ser mujer en la ingeniería y lo que le dirían a quienes vienen detrás." },
  2:  { type: "woman", w: "lorena", to: "mujeres/lorena/", libro: "p. 14" },
  3:  { type: "woman", w: "diana", to: "mujeres/diana/", libro: "p. 22" },
  4:  { type: "woman", w: "maria-cristina", to: "mujeres/maria-cristina/", libro: "p. 30" },
  5:  { type: "woman", w: "andrea", to: "mujeres/andrea/", libro: "p. 38" },
  6:  { type: "research", to: "investigacion/#fuentes", libro: "Investigación · p. 46",
        titulo: "La investigación completa", texto: "Conoce la investigación completa y todas las fuentes consultadas: participación, brechas y condiciones de permanencia de las mujeres en ingeniería y ciencias de la tierra en Colombia." },
  7:  { type: "research", to: "investigacion/#brecha", libro: "Investigación · p. 47",
        titulo: "¿Cómo se fabrica una brecha?", texto: "Sigue el rastro de los mecanismos que reproducen la desigualdad. Porque ¡sorpresa!: no aparecen de la nada. Se aprenden, se repiten y se vuelven norma en la escuela, el trabajo y las instituciones." },
  8:  { type: "woman", w: "alejandra", to: "mujeres/alejandra/", libro: "p. 60" },
  9:  { type: "woman", w: "milena", to: "mujeres/milena/", libro: "p. 68" },
  10: { type: "woman", w: "jessica", to: "mujeres/jessica/", libro: "p. 84" },
  /* qr11: reservado para Claudia María (en la 1.ª impresión, su página 76
     quedó con un QR de formulario por error). Úsalo en la reimpresión. */
  11: { type: "woman", w: "claudia-maria", to: "mujeres/claudia-maria/", libro: "p. 76 (reimpresión)" },
  12: { type: "generic", to: "mujeres/", titulo: "Ocho trayectorias", texto: "Conoce a las ocho mujeres de Mujeres de Profesión." },
  13: { type: "generic", to: "album/", titulo: "El álbum de momentos", texto: "Colecciona los momentos de las ocho trayectorias." },
  14: { type: "generic", to: "investigacion/", titulo: "La investigación", texto: "Las cifras muestran la estructura; ellas muestran cómo se habita." },
  15: { type: "generic", to: "libro/", titulo: "El fotolibro", texto: "Mujeres de Profesión existe solo en papel." },
  16: { type: "generic", to: "", titulo: "Mujeres de Profesión", texto: "Ingeniería | Geología" }
};
