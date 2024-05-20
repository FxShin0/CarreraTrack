//declaracion de carreras
let tecnicaturaEnDesarolloWeb = [
  {
    nombre: "Programacion Básica 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2619,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Informatica General",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2620,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Matematica General",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2621,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Ingles Tecnico 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2622,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Programacion Basica 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2623,
    correlativas: [2619],
    anio: 1,
  },
  {
    nombre: "Programacion Web 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2624,
    correlativas: [2619, 2620],
    anio: 1,
  },
  {
    nombre: "Bases de Datos 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2625,
    correlativas: [2619, 2620, 2621],
    anio: 1,
  },
  {
    nombre: "Introduccion al Diseño Grafico en la Web",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2626,
    correlativas: [2620],
    anio: 1,
  },
  {
    nombre: "Ingles Tecnico 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2627,
    correlativas: [2622],
    anio: 1,
  },
  {
    nombre: "Programacion Web 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2628,
    correlativas: [2623, 2624, 2625],
    anio: 2,
  },
  {
    nombre: "Diseños de Aplicaciones Web",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2629,
    correlativas: [2623, 2624, 2625],
    anio: 2,
  },
  {
    nombre: "Visualizaciones e Interfaces",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2630,
    correlativas: [2624, 2626],
    anio: 2,
  },
  {
    nombre: "Taller Web 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2631,
    correlativas: [2623, 2624, 2625],
    anio: 2,
  },
  {
    nombre: "Bases de Datos 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2632,
    correlativas: [2625, 2629],
    anio: 2,
  },
  {
    nombre: "Programacion Web 3",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2633,
    correlativas: [2628, 2629, 2630],
    anio: 2,
  },
  {
    nombre: "Tecnologia de Redes",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2634,
    correlativas: [2630],
    anio: 2,
  },
  {
    nombre: "Taller Web 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2635,
    correlativas: [2631],
    anio: 2,
  },
  {
    nombre: "Seguridad y Calidad en Aplicaciones Web",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2636,
    correlativas: [2628, 2629],
    anio: 2,
  },
  {
    nombre: "Introduccion a la Administracion de Proyectos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 2637,
    correlativas: [2632, 2633, 2634],
    anio: 3,
  },
  {
    nombre: "Taller Practico Integrador",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2638,
    correlativas: [2632, 2633, 2634, 2635, 2636],
    anio: 3,
  },
];
let ingenieriaEnInformatica = [
  {
    nombre: "Matematica Discreta",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3621,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Analisis Matematico 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3622,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Programacion Inicial",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3623,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Introduccion a los Sistemas de Informacion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3624,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Sistemas de Numeracion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3625,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Principios de Calidad de Software",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3626,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Algebra y Geometria Analitica 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3627,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Fisica 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3628,
    correlativas: [3622],
    anio: 1,
  },
  {
    nombre: "Programacion Estructurada Basica",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3629,
    correlativas: [3623],
    anio: 1,
  },
  {
    nombre: "Introduccion a la Gestion de Requisitos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3630,
    correlativas: [3624],
    anio: 1,
  },
  {
    nombre: "Fundamentos de Sistemas Embebidos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3631,
    correlativas: [3625],
    anio: 1,
  },
  {
    nombre: "Introduccion a Proyectos Informaticos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3632,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Analisis Matematico 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3633,
    correlativas: [3622],
    anio: 2,
  },
  {
    nombre: "Fisica 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3634,
    correlativas: [3628],
    anio: 2,
  },
  {
    nombre: "Topicos de Programacion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3635,
    correlativas: [3629, 3621],
    anio: 2,
  },
  {
    nombre: "Bases de Datos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3636,
    correlativas: [3629, 3621],
    anio: 2,
  },
  {
    nombre: "Analisis de Sistemas",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3637,
    correlativas: [3630],
    anio: 2,
  },
  {
    nombre: "Arquitectura de Computadoras",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3638,
    correlativas: [3631],
    anio: 2,
  },
  {
    nombre: "Responsabilidad Social Universitaria",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3676,
    correlativas: [3626],
    anio: 2,
  },
  {
    nombre: "Analisis Matematico 3",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3639,
    correlativas: [3633],
    anio: 2,
  },
  {
    nombre: "Algoritmos y Estructuras de Datos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3640,
    correlativas: [3635],
    anio: 2,
  },
  {
    nombre: "Bases de Datos Aplicada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3641,
    correlativas: [3636],
    anio: 2,
  },
  {
    nombre: "Principios de Diseño de Sistemas",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3642,
    correlativas: [3637, 3626],
    anio: 2,
  },
  {
    nombre: "Redes de Computadoras",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3643,
    correlativas: [3638, 3634],
    anio: 2,
  },
  {
    nombre: "Gestion de las Organizaciones",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3644,
    correlativas: [3632],
    anio: 2,
  },
  {
    nombre: "Taller de Integracion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3680,
    correlativas: [3638, 3636, 3635, 3632, 3630, 3626, 3625, 3624, 3623, 3621],
    anio: 2,
  },
  {
    nombre: "Algebra y Geometria Analitica 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3645,
    correlativas: [3627],
    anio: 3,
  },
  {
    nombre: "Paradigmas de Programacion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3646,
    correlativas: [3640, 3633],
    anio: 3,
  },
  {
    nombre: "Requisitos Avanzados",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3647,
    correlativas: [3642],
    anio: 3,
  },
  {
    nombre: "Diseño de Software",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3648,
    correlativas: [3642, 3636],
    anio: 3,
  },
  {
    nombre: "Sistemas Operativos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3649,
    correlativas: [3638],
    anio: 3,
  },
  {
    nombre: "Seguridad de la Informacion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3650,
    correlativas: [3643, 3638, 3635],
    anio: 3,
  },
  {
    nombre: "Practica Profesional Supervisada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3675,
    correlativas: [3642],
    anio: 3,
  },
  {
    nombre: "Probabilidad y Estadistica",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3651,
    correlativas: [3645, 3639, 3621],
    anio: 3,
  },
  {
    nombre: "Programacion Avanzada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3652,
    correlativas: [3641, 3646],
    anio: 3,
  },
  {
    nombre: "Arquitecturas de Sistemas Software",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3653,
    correlativas: [3648],
    anio: 3,
  },
  {
    nombre: "Virtualizacion de Hardware",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3654,
    correlativas: [3649, 3645, 3640],
    anio: 3,
  },
  {
    nombre: "Auditoria y Legislacion",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3655,
    correlativas: [3650],
    anio: 3,
  },
  {
    nombre: "Estadistica Aplicada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3656,
    correlativas: [3651, 3641],
    anio: 4,
  },
  {
    nombre: "Automatas y Gramatica",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3657,
    correlativas: [3646],
    anio: 4,
  },
  {
    nombre: "Programacion Concurrente",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3658,
    correlativas: [3654, 3646],
    anio: 4,
  },
  {
    nombre: "Gestion Aplicada al Desarollo de Software 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3659,
    correlativas: [3653, 3647, 3644],
    anio: 4,
  },
  {
    nombre: "Sistemas Operativos Avanzados",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3660,
    correlativas: [3654],
    anio: 4,
  },
  {
    nombre: "Gestion de Proyectos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3661,
    correlativas: [3651, 3650, 3644],
    anio: 4,
  },
  {
    nombre: "Matematica Aplicada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 6,
    codigo: 3662,
    correlativas: [3651],
    anio: 4,
  },
  {
    nombre: "Lenguajes y Compiladores",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3663,
    correlativas: [3657],
    anio: 4,
  },
  {
    nombre: "Inteligencia Artificial",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3664,
    correlativas: [3651, 3646],
    anio: 4,
  },
  {
    nombre: "Gestion Aplicada al Desarollo de Software 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3665,
    correlativas: [3659, 3652],
    anio: 4,
  },
  {
    nombre: "Seguridad Aplicada y Forensia",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3666,
    correlativas: [3655, 3652, 3649],
    anio: 4,
  },
  {
    nombre: "Gestion de la Calidad en Procesos de Sistemas",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3667,
    correlativas: [3647],
    anio: 4,
  },
  {
    nombre: "Inteligencia Artificial Aplicada",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3668,
    correlativas: [3664, 3656],
    anio: 5,
  },
  {
    nombre: "Innovacion y Emprendedorismo",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3669,
    correlativas: [3661],
    anio: 5,
  },
  {
    nombre: "Ciencia de Datos",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3670,
    correlativas: [3664, 3656],
    anio: 5,
  },
  {
    nombre: "Proyecto Final de Carrera",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3671,
    correlativas: [3667, 3661, 3660, 3659, 3656],
    anio: 5,
  },
  {
    nombre: "Electiva 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3672,
    correlativas: [3658, 3661, 3663],
    anio: 5,
  },
  {
    nombre: "Electiva 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3673,
    correlativas: [3662, 3666],
    anio: 5,
  },
  {
    nombre: "Electiva 3",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 4,
    codigo: 3674,
    correlativas: [3664, 3665],
    anio: 5,
  },
];
let expertoEnBoludos = [
  {
    nombre: "Deteccion de Boludos 1",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2619,
    correlativas: [null],
    anio: 1,
  },
  {
    nombre: "Deteccion de Boludos 2",
    estadoSet: 0,
    estadoCalc: 3,
    horasSemanales: 8,
    codigo: 2620,
    correlativas: [2619],
    anio: 2,
  },
];
//declaracion de carreras de unis
let carrerasUnlam = [
  {
    nombre: "Tecnicatura en Desarrollo Web",
    variable: tecnicaturaEnDesarolloWeb,
  },
  {
    nombre: "Ingenieria en Informatica",
    variable: ingenieriaEnInformatica,
  },
];
let carrerasUba = [
  {
    nombre: "Experto en Boludos",
    variable: expertoEnBoludos,
  },
];
//declaracion de Universidades
let universidades = [
  {
    acronimo: "UNLAM",
    nombre: "Universidad Nacional de La Matanza",
    carreras: carrerasUnlam,
  },
  {
    acronimo: "UBA",
    nombre: "Universidad de Buenos Aires",
    carreras: carrerasUba,
  },
];
//El resto del codigo
let carreraActual;
let nombreCarreraActual;
const showMenuBtn = document.querySelector("#show-menu");
const closeMenuBtn = document.querySelector("#close-menu");
const carrerasListContainer = document.querySelector(
  ".carreras-list-container"
);
const carreraContainer = document.querySelector(".carrera-container");
const ingenieriaEnInformaticaSelector = document.querySelector(
  "#ingenieriaEnInformatica"
);
const tecnicaturaEnDesarolloWebSelector = document.querySelector(
  "#tecnicaturaEnDesarolloWeb"
);
const setModeContainer = document.querySelector(".setMode-container");
const tituloDeCarrera = document.querySelector("#carrera-title");
const setModeBtn = document.querySelector(".setMode");
const viewModeBtn = document.querySelector(".viewMode");
const landingPage = document.querySelector(".landingPage");
const blurDiv = document.querySelector(".blur-screen");
const empezarBtn = document.querySelector(".empezarBtn");
const instrucciones = document.querySelector(".instrucciones");
const entendidoBtn = document.querySelector(".entendidoBtn");
const logoAndName = document.querySelector(".logoAndName");
/*<div class="anio" id="anio1">
          <p class="texto-anio"><span id="golden-span">1°</span> Año</p>
          <div class="materias-container">
            <div class="materia" id="mat1">
              <div class="info-container">
                <i class="fa-solid fa-circle-info info"></i>
              </div>
              <p class="materia-nombre" id="mat1">Bases de Datos</p>
            </div>
          </div>
</div>*/
const changeModes = () => {
  if (setModeBtn.classList.contains("grey-bg")) {
    setModeBtn.classList.remove("grey-bg");
    setModeBtn.classList.add("golden-bg");
    viewModeBtn.classList.remove("golden-bg");
    viewModeBtn.classList.add("grey-bg");
  } else {
    setModeBtn.classList.remove("golden-bg");
    setModeBtn.classList.add("grey-bg");
    viewModeBtn.classList.remove("grey-bg");
    viewModeBtn.classList.add("golden-bg");
  }
};
const renderizarCarrera = (carreraARenderizar, nombreCarrera) => {
  tituloDeCarrera.innerHTML = nombreCarrera;
  let anioMaximo = carreraARenderizar[carreraARenderizar.length - 1].anio;
  let carreraContainerInnerHtml = "";
  for (let x = 1; x <= anioMaximo; x++) {
    carreraContainerInnerHtml += `<div class="anio" id="anio${x}"></div>`;
  }
  //x representa el numero de anio recorrido
  carreraContainer.innerHTML = carreraContainerInnerHtml;
  let anioContainer;
  let anioInnerHtml = "";
  let cont = 0;
  let materiaAct;
  for (x = 1; x <= anioMaximo; x++) {
    anioContainer = document.querySelector(`#anio${x}`);
    anioInnerHtml += `<p class="texto-anio"><span class="golden-span">${x}°</span> Año</p>
          <div class="materias-container">`;
    while (
      cont < carreraARenderizar.length &&
      x == carreraARenderizar[cont].anio
    ) {
      anioInnerHtml += `
            <div class="materia">
              <div class="info-container id="info${carreraARenderizar[cont].codigo}">
                <i class="fa-solid fa-circle-info info"></i>
              </div>
              <p class="materia-nombre" id="mat${carreraARenderizar[cont].codigo}">${carreraARenderizar[cont].nombre}</p>
            </div>`;
      cont++;
    }
    anioInnerHtml += "</div>";
    anioContainer.innerHTML = anioInnerHtml;
    anioInnerHtml = "";
  }
  let funcionParaAsociar;
  actualizarViewData(carreraARenderizar);
  if (setModeBtn.classList.contains("golden-bg")) {
    funcionParaAsociar = setMode;
    renderizarColores(1, carreraARenderizar);
  } else if (viewModeBtn.classList.contains("golden-bg")) {
    funcionParaAsociar = viewMode;
    renderizarColores(2, carreraARenderizar);
  }
  for (x = 0; x < carreraARenderizar.length; x++) {
    materiaAct = document.querySelector(`#mat${carreraARenderizar[x].codigo}`);
    materiaAct.addEventListener("click", (evento) => {
      funcionParaAsociar(evento, carreraARenderizar);
    });
  }
};
const actualizarViewData = (carrera) => {
  carrera.forEach((materia) => {
    if (materia.correlativas.includes(null)) {
      materia.estadoCalc = 5;
    } else {
      let flagPromociona = 1,
        flagFinalAdeudado = 1,
        flagNoDisponible = 1,
        x,
        materiaCo;
      for (x = 0; x < materia.correlativas.length; x++) {
        materiaCo = carrera.find((materiaSub) => {
          return materiaSub.codigo == materia.correlativas[x];
        });
        if (materiaCo.estadoSet == 0) {
          flagPromociona = 0;
          flagFinalAdeudado = 0;
          break;
        } else if (materiaCo.estadoSet == 1) {
          flagPromociona = 0;
        }
      }
      if (flagPromociona == 1) {
        materia.estadoCalc = 5;
      } else if (flagFinalAdeudado == 1) {
        materia.estadoCalc = 4;
      } else if (flagNoDisponible == 1) {
        materia.estadoCalc = 3;
      }
    }
  });
};
//maneja el color de manera global al renderizar la carrera
//modo 1 indica setMode, modo 2 indica viewMode
const renderizarColores = (modo, carrera) => {
  let materiaAct, x;
  if (modo == 1) {
    for (x = 0; x < carrera.length; x++) {
      materiaAct = document.querySelector(`#mat${carrera[x].codigo}`);
      renderizarColorUnicaCaja(carrera[x].estadoSet, materiaAct);
    }
  } else {
    for (x = 0; x < carrera.length; x++) {
      materiaAct = document.querySelector(`#mat${carrera[x].codigo}`);
      materiaAct.classList.remove("red-bg");
      materiaAct.classList.remove("yellow-bg");
      materiaAct.classList.remove("green-bg");
      switch (carrera[x].estadoCalc) {
        case 3:
          materiaAct.classList.add("red-bg");
          break;
        case 4:
          materiaAct.classList.add("yellow-bg");
          break;
        case 5:
          //Solo pintamos de verde aquellas materias que aun no han sido aprobadas, si ya fueron aprobadas se mantienen doradas porque eso indica que ya se aprobaron, estado aprobado es el unico que es comun a view y set
          if (carrera[x].estadoSet != 2) {
            materiaAct.classList.add("green-bg");
          }
          break;
        default:
          break;
      }
    }
  }
};
//maneja el color de las cajas de manera individual

const viewMode = (evento, carrera) => {};
const setMode = (evento, carrera) => {
  let idMateria = evento.target.id.substring(3);
  let materiaClick = carrera.find((materia) => {
    return idMateria == materia.codigo;
  });
  actualizarSetData(materiaClick, carrera);
  actualizarViewData(carrera); //nota: en algun momento capaz vendria bien hacer una funcion que lo calcule de manera individual, asi optimizamos un toque porque esta funcion esta pensada para el renderizado global...
  renderizarColorUnicaCaja(materiaClick.estadoSet, evento.target);
  renderizarColoresCorrelativasSet(materiaClick, carrera);
  animacionEnClick(evento.target, "heartbeatAnimacion", 100);
};
const renderizarColoresCorrelativasSet = (materia, carrera) => {
  let materiasDependientes = carrera.filter((materiaDep) => {
    return materiaDep.correlativas.includes(materia.codigo);
  });
  materiasDependientes.forEach((materiaDep2) => {
    if (materiaDep2.estadoCalc == 3) {
      materiaDep2.estadoSet = 0;
      renderizarColorUnicaCaja(
        materiaDep2.estadoSet,
        document.querySelector(`#mat${materiaDep2.codigo}`)
      );
    }
  });
};
const actualizarSetData = (materia, carrera) => {
  if (materia.estadoCalc == 5) {
    materia.estadoSet++;
    if (materia.estadoSet > 2) {
      materia.estadoSet = 0;
    }
  } else if (materia.estadoCalc == 4) {
    materia.estadoSet++;
    if (materia.estadoSet > 1) {
      materia.estadoSet = 0;
    }
  } else if (materia.estadoCalc == 3) {
    materia.correlativas.forEach((idCorrelativa) => {
      let materiaCheck = carrera.find((materiaCar) => {
        return materiaCar.codigo == idCorrelativa;
      });
      if (materiaCheck.estadoSet == 0) {
        animacionEnClick(
          document.querySelector(`#mat${idCorrelativa}`),
          "shakeAnimacion",
          500
        );
      }
    });
  }
};
//ojo que materiaAct no es el objeto materia sino el elemento html asociado
const renderizarColorUnicaCaja = (estadoSet, materiaAct) => {
  materiaAct.classList.remove("grey-bg");
  materiaAct.classList.remove("white-bg");
  materiaAct.classList.remove("golden-bg");
  switch (estadoSet) {
    case 0:
      materiaAct.classList.add("grey-bg");
      break;
    case 1:
      materiaAct.classList.add("white-bg");
      break;
    case 2:
      materiaAct.classList.add("golden-bg");
      break;
    default:
      break;
  }
};
const animacionEnClick = (materia, nombreClaseAnimacion, animacionTime) => {
  const materiaContainer = materia.closest(".materia");
  // Agrega la clase de animación al contenedor padre
  materiaContainer.classList.add(nombreClaseAnimacion);
  // Elimina la clase de animación después de 1 segundo
  setTimeout(() => {
    materiaContainer.classList.remove(nombreClaseAnimacion);
  }, animacionTime);
};
const seleccionCarrera = (evento) => {
  cerrarMenu();
  let partes = evento.target.id.split("0");
  let universidadString = partes[0];
  let carreraString = partes[1].replace(/-/g, " ");
  let universidad = universidades.find((universidad) => {
    return universidad.acronimo == universidadString;
  });
  console.log(universidad);
  let carreras = universidad.carreras;
  let carrera = carreras.find((carrera) => {
    return carrera.nombre == carreraString;
  });
  console.log(carrera);
  carreraActual = carrera.variable;
  nombreCarreraActual = carrera.nombre;
  renderizarCarrera(carreraActual, nombreCarreraActual);
  setModeContainer.classList.remove("hide");
  ocultarObjeto(landingPage);
  ocultarObjeto(instrucciones);
};
const generarMenu = () => {
  let container = document.querySelector(".tituloYLista");
  let x, y;
  universidades.forEach((universidad) => {
    container.innerHTML += `<h3>${universidad.acronimo}</h3>
    <ul class="carreras-list" id="${universidad.acronimo}" ></ul>`;
  });
  for (x = 0; x < universidades.length; x++) {
    let lista = document.querySelector(`#${universidades[x].acronimo}`);
    lista.innerHTML = "";
    universidades[x].carreras.forEach((carrera) => {
      let idCarrera = (
        universidades[x].acronimo +
        "0" +
        carrera.nombre.replace(/ /g, "-")
      ).replace(/\s/g, "");
      lista.innerHTML += `<li id="${idCarrera}">${carrera.nombre}</li>`;
      // seleccionador = document.querySelector(`#${idCarrera}`);
      // seleccionador.addEventListener("click", seleccionCarrera);
    });
  }
  let seleccionador, idSel;
  for (x = 0; x < universidades.length; x++) {
    for (y = 0; y < universidades[x].carreras.length; y++) {
      idSel = (
        universidades[x].acronimo +
        "0" +
        universidades[x].carreras[y].nombre.replace(/ /g, "-")
      ).replace(/\s/g, "");
      seleccionador = document.querySelector(`#${idSel}`);
      seleccionador.addEventListener("click", seleccionCarrera); //no entiendo xq asi si pero bueno, funciona, aunque detesto recorrer todo 2 veces...
    }
  }
};
generarMenu();
const ocultarObjeto = (objeto) => {
  objeto.classList.add("hide-left");
  setTimeout(() => {
    objeto.classList.add("hide");
  }, 100);
};
const mostrarObjeto = (objeto) => {
  setTimeout(() => {
    objeto.classList.remove("hide-left");
    objeto.classList.remove("hide");
  }, 200);
};
entendidoBtn.addEventListener("click", (evento) => {
  ocultarObjeto(instrucciones);
  mostrarMenu();
});
empezarBtn.addEventListener("click", (evento) => {
  ocultarObjeto(landingPage);
  mostrarObjeto(instrucciones);
});
const mostrarMenu = () => {
  showMenuBtn.classList.add("hide");
  closeMenuBtn.classList.remove("hide");
  carrerasListContainer.classList.remove("hide-right");
  carrerasListContainer.classList.add("slide-left");
  blurDiv.classList.remove("hide");
};
const cerrarMenu = () => {
  showMenuBtn.classList.remove("hide");
  closeMenuBtn.classList.add("hide");
  carrerasListContainer.classList.remove("slide-left");
  carrerasListContainer.classList.add("hide-right");
  blurDiv.classList.add("hide");
};
blurDiv.addEventListener("click", cerrarMenu);
// tecnicaturaEnDesarolloWebSelector.addEventListener("click", () => {
//   cerrarMenu();
//   carreraActual = 0;
//   renderizarCarrera(carreraActual);
// });
// ingenieriaEnInformaticaSelector.addEventListener("click", () => {
//   cerrarMenu();
//   carreraActual = 1;
//   renderizarCarrera(carreraActual);
// });
showMenuBtn.addEventListener("click", mostrarMenu);
closeMenuBtn.addEventListener("click", cerrarMenu);
viewModeBtn.addEventListener("click", () => {
  changeModes();
  renderizarCarrera(carreraActual, nombreCarreraActual);
});
setModeBtn.addEventListener("click", () => {
  changeModes();
  renderizarCarrera(carreraActual, nombreCarreraActual);
});
//Animacion para el titulo
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo-maquina-escribir");
  const subtitulo = document.getElementById("subTitulo");
  const texto = "Carrera <span class='golden-span'>Track</span>";
  const textoSinEtiquetas = "Carrera Track";
  const velocidad = 60; // Velocidad de escritura en milisegundos

  const caretSpan = document.createElement("span");
  caretSpan.className = "caret";
  titulo.appendChild(caretSpan);

  for (let i = 0; i <= textoSinEtiquetas.length; i++) {
    setTimeout(() => {
      // Construir el texto con etiquetas HTML
      let parteVisible = textoSinEtiquetas.substring(0, i);

      if (i > 7) {
        // 7 es la longitud de "Carrera "
        parteVisible =
          "Carrera <span class='golden-span'>" +
          textoSinEtiquetas.substring(8, i) +
          "</span>";
      }

      titulo.innerHTML = parteVisible;
      titulo.appendChild(caretSpan); // Volver a agregar la barra después de actualizar el texto
    }, i * velocidad);
  }
});
logoAndName.addEventListener("click", () => {
  location.reload();
});
