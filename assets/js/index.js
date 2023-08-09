const propiedadesJSON = [
    {
      id:1,
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      id:2,
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      id:3,
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      id:4,
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      id:5,
      name: "Departamento",
      description: "Desde las alturas todo se ve mucho mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      id:6,
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-09/1406-alella-8.jpg?VersionId=y_WKuBR99.6uOVUdnlJJdvE4NtAvoyew&itok=aBAh6taH",
      rooms: 5,
      m: 500
    },
    {
      id:7,
      name: "Castillo en Francia",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://www.civitatis.com/blog/wp-content/uploads/2020/12/castillo-chambord-loira.jpg",
      rooms: 150,
      m: 6700
    },
    {
      id:8,
      name: "Castillo en Portugal",
      description: "Vive bellos días en un Castillo de ensueño ",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jCqFQWjtlt8eqlwt6-L6Ztn7CrMZzDI7Dg&usqp=CAU",
      rooms: 150,
      m: 12000
    },
    {
      id:9,
      name: "Casa en el mar",
      description: "Un lugar ideal para descansar fuera de la ciudad, frente al mar",
      src:
        "https://static2.mansionglobal.com/production/media/article-images/2127238f5cbffa07a704baf564926921/large_SmartHomesBeachHouse_Lead.jpg",
      rooms: 4,
      m: 220
    },
    {
      id:10,
      name: "Casa de montaña",
      description: "Despierta con el sol saliendo de la montaña",
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/422127016.jpg?k=2e2bda0e29be2a0606da354b88ee88c1123cd1b1532532f86b85218455b722ff&o=&hp=1",
      rooms: 7,
      m: 230
    },
    {
      id:11,
      name: "Casa en la precordillera",
      description: "Arboles cerros y toda la flora y fauna de la zona precordillerana",
      src:
        "https://www.preciocasasmadera.es/537-home_default/montana.jpg",
      rooms: 4,
      m: 80
    },
    {
      id:12,
      name: "Casona en la ciudad",
      description: "Casona ubicada en Providencia con inmejorable acceso a comercio",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmCJ7n5e3IeiahrZcN8HwTPfAeYZUcNfDJw&usqp=CAU",
      rooms: 6,
      m: 300
    },
  ];
let cantCuartos = document
let cantidadPropiedades = 0;
let html = '';
let span = document.querySelector('#totalId');
const seccion = document.querySelector('.propiedades');

const verificaArreglo = (cantidadProps) => {
                        if(cantidadProps === 0){
                          alert('No se encotraron propiedades para esos rangos')
                        }
                      }
                      
                      const limpiarGaleria = ()=>{
                        seccion.innerHTML = '';
                    }

const buscarPropiedades = function(cantidadCuartos,desdeMetros, hastaMetros) {
                      html = '';
                      cantidadPropiedades = 0;
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
                                                    <button class="btn btn-info">Ver más</button>
                                                </section>
                                    </div>`
                            cantidadPropiedades+= 1;
                          }
                          seccion.innerHTML = html;
                          totalId.textContent = cantidadPropiedades;                         
                        }
                        limpiarGaleria();
                        verificaArreglo(cantidadPropiedades);
                      };

const validarValores = () => {
                          let cantidadCuartos = document.querySelector('#cantidadCuartos');
                          let desdeMetros = document.querySelector('#desde');
                          let hastaMetros = document.querySelector('#hasta');

                          if(cantidadCuartos === '' || desdeMetros === '' || hastaMetros === ''){
                            alert('Faltan campos por ingresar');
                          }
                          else{
                            if(cantidadCuartos <= 0 || desdeMetros <= 0 || hastaMetros <= 0){
                              alert('Los valores ingresados deben ser mayores a cero');
                            }
                            else{
                              if(cantidadCuartos < 1 || desdeMetros < 1 || hastaMetros < 1 || hastaMetros < desdeMetros){
                                alert('Los valores ingresados deben ser mayores que cero y "hasta" debe ser igual o mayor que "desde"')
                              }
                              else{
                                buscarPropiedades(cantidadCuartos, desdeMetros, hastaMetros);  
                              }
                            }
                          }  
                        };

const  cargarGaleria = () => {
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
                    <button class="btn btn-info" >Ver más</button>
                </section>
            </div>`
  }
  seccion.innerHTML = html;
  span.textContent = propiedadesJSON.length;
};

let boton = document.querySelector('#boton');
boton.addEventListener('click', ()=> validarValores());

cargarGaleria();