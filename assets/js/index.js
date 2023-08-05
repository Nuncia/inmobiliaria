const propiedadesJSON = [
    {
      id:1,
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      descripcionExtendida: "Bello descanso para ti y tu ...un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      id:2,
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      descripcionExtendida: "Bello descanso para ti y tu familia. Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      id:3,
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      descripcionExtendida: "Bello descanso para ti y tu familia, Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      id:4,
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      descripcionExtendida: "Bello descanso para ti y tu familia. Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      id:5,
      name: "Departamento",
      description: "Desde las alturas todo se ve mucho mejor",
      descripcionExtendida: "Bello descanso para ti y tu familia desde las alturas todo se ve mucho mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      id:6,
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      descripcionExtendida: "Bello descanso para ti y tu familia, vive una vida lujosa en la mansión de tus sueños",
      src:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-09/1406-alella-8.jpg?VersionId=y_WKuBR99.6uOVUdnlJJdvE4NtAvoyew&itok=aBAh6taH",
      rooms: 5,
      m: 500
    },
    {
      id:7,
      name: "Castillo en Francia",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      descripcionExtendida: "Bello descanso para ti y tu familia, vive una vida lujosa en la mansión de tus sueños",
      src:
        "https://www.civitatis.com/blog/wp-content/uploads/2020/12/castillo-chambord-loira.jpg",
      rooms: 150,
      m: 1200
    },
    {
      id:8,
      name: "Castillo en Portugal",
      description: "Vive bellos días en un Castillo de ensueño ",
      descripcionExtendida: "Bello descanso para ti y tu familia, vive una vida lujosa en el castillo de tus sueños",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jCqFQWjtlt8eqlwt6-L6Ztn7CrMZzDI7Dg&usqp=CAU",
      rooms: 150,
      m: 1200
    },
    {
      id:9,
      name: "Casa en el mar",
      description: "Un lugar ideal para descansar fuera de la ciudad, frente al mar",
      descripcionExtendida: "Bello descanso para ti y tu ...un lugar ideal para descansar cerca del mar y la arena",
      src:
        "https://static2.mansionglobal.com/production/media/article-images/2127238f5cbffa07a704baf564926921/large_SmartHomesBeachHouse_Lead.jpg",
      rooms: 4,
      m: 220
    },
    {
      id:10,
      name: "Casa de montaña",
      description: "Despierta con el sol saliendo de la montaña",
      descripcionExtendida: "La Casa La Montaña se encuentra en San José de Maipo, a 22 km del Museo Interactivo Mirador y a 31 km del Movistar Arena, y ofrece jardín y terraza.",
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/422127016.jpg?k=2e2bda0e29be2a0606da354b88ee88c1123cd1b1532532f86b85218455b722ff&o=&hp=1",
      rooms: 7,
      m: 230
    },
    {
      id:11,
      name: "Casa en la precordillera",
      description: "Arboles cerros y toda la flora y fauna de la zona precordillerana",
      descripcionExtendida: "Bello descanso para ti y tu familia, inmerso en la naturaleza. Aquí podrás conectarte con la flora y fauna de los alrededores.",
      src:
        "https://www.preciocasasmadera.es/537-home_default/montana.jpg",
      rooms: 4,
      m: 80
    },
    {
      id:12,
      name: "Casona en la ciudad",
      description: "Casona ubicada en Providencia con inmejorable acceso a comercio",
      descripcionExtendida: "Casona ubicada en Providencia con inmejorable acceso a mall y comercio en general, transporte, etc",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmCJ7n5e3IeiahrZcN8HwTPfAeYZUcNfDJw&usqp=CAU",
      rooms: 6,
      m: 300
    },
  ];

let cantidadCuartos = document.querySelector('#cantidadCuartos').value;
let desdeMetros = document.querySelector('#desde').value;
let hastaMetros = document.querySelector('#hasta').value;
let cantidadPropiedades = 0;
let html = '';
let span = document.querySelector('#totalId');
const seccion = document.querySelector('.propiedades');
for(let propiedad of propiedadesJSON){
  html += `<div class="propiedad">
              <div class="img" style="background-image: url(${propiedad.src})"></div>
              <section>
                  <h5>${propiedad.name}</h5>
                  <div class="d-flex justify-content-between">
                      <p>Cuartos: ${propiedad.rooms}</p>
                      <p>Metros: ${propiedad.m}</p>
                  </div>
                  <p class="my-3">${propiedad.description}</p>
                  <button class="btn btn-info" onclick="mostrarPropiedad(${propiedad.id})">Ver más</button>
              </section>
          </div>`
}
seccion.innerHTML = html;
span.textContent = propiedadesJSON.length;

          //  ----------------------------------- Funcion Buscar propiedades
const buscarPropiedades = function(){
                          let cantidadCuartos = document.querySelector('#cantidadCuartos').value;
                          let desdeMetros = document.querySelector('#desde').value;
                          let hastaMetros = document.querySelector('#hasta').value;
                          html = '';
                          cantidadPropiedades = 0;
                          if(cantidadCuartos === '' || desdeMetros === '' || hastaMetros === ''){
                            alert('Faltan campos por ingresar');
                          }
                          else{
                            console.log('entro')
                            if(cantidadCuartos <= 0 || desdeMetros <= 0 || hastaMetros <= 0){
                              alert('Los valores ingresados deben ser mayores a cero');
                            }
                            else{
                              if(cantidadCuartos < 0 || desdeMetros < 0 || hastaMetros < 0){
                                alert('Ingrese valores mayores que cero')
                              }
                              else{
                                if( hastaMetros < desdeMetros){
  
                                  alert('"hasta" debe ser igual o mayor que "desde".');
                                }
                                else{
                                  for(let propiedad of propiedadesJSON){
                                    if(Number(propiedad.rooms) === Number(cantidadCuartos) && propiedad.m >= desdeMetros && propiedad.m <= hastaMetros){
                                      html += `<div class="propiedad mb-5">
                                                          <div class="img" style="background-image: url(${propiedad.src})"></div>
                                                          <section>
                                                              <h5>${propiedad.name}</h5>
                                                              <div class="d-flex justify-content-between">
                                                                  <p>Cuartos: ${propiedad.rooms}</p>
                                                                  <p>Metros: ${propiedad.m}</p>
                                                              </div>
                                                              <p class="my-3">${propiedad.description}</p>
                                                              <button class="btn btn-info" onclick="mostrarPropiedad(${propiedad.id})">Ver más</button>
                                                          </section>
                                               </div>`
                                       cantidadPropiedades+= 1;
                                    }
                                    seccion.innerHTML = html;
                                    totalId.textContent = cantidadPropiedades;
                                  }
                                }
                              }
                            }
                          }  
                        };

let boton = document.querySelector('#boton');
boton.addEventListener('click', ()=> buscarPropiedades());


      //  ------------------------------------ Funcion Mostrar Propiedad
const mostrarPropiedad = (idElemento) => {
    const padreDetalle = document.querySelector('.detalle_propiedad');
    const gridContainer = document.querySelector('.gridContainer');
    let detalle = propiedadesJSON[idElemento - 1];
    gridContainer.style.display = 'none';
    padreDetalle.style.display = 'block';
    padreDetalle.innerHTML += `<a href="./index.html" style="color:white;" >Inicio</a>
                              <div class="container">
                                  <section>
                                      <div>
                                          <section class="detalle_section">
                                              <div class="detalle_propiedad">
                                                  <img class="detalle" src="${detalle.src}" alt="">
                                                  <h4>${detalle.name}</h4>
                                                  <p>${detalle.descripcionExtendida}</p>
                                              </div> 
                                          </section>
                                      </div>
                                  </section>
                              </div>`
                          };