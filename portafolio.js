// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
      figure: "media/foto-01.jpg",
    title: "Producto Maggi",
    about: "Creación de nueva línea de productos de comida preparada a base de Coucous",
}, {
    figure: "media/foto-02.jpg",
    title: "Abono tipo compost",
    about: "Creación de la marca, producto y packaging de abono",
}, {
    figure: "media/foto-03.jpg",
    title: "Luminaria de estaño",
    about: "Creación de nueva técnica para realizar un efecto en la luz",
}, {
    figure: "media/foto-04.jpg",
    title: "Marca Pisco Chilena ",
    about: "Creación marca, packaging y línea gráfica",
}, {
    figure: "media/foto-05.jpg",
    title: "Producto de higiene personal ",
    about: "Higiene para situación de emergencia",
}, {
    figure: "media/foto-06.jpg",
    title: "Atrio",
    about: "Creación del diseño para portar imágenes religiosas",

  }, {

      figure: "media/foto-07.jpg",
      title: "Cartel asilo de ancianos",
      about: "Diseño gráfico de la fachada del acilo",

}, {
     figure: "media/foto-08.jpg",
     title: "Plataforma de interacción para monos",
     about: "Creación del diseño e instalación de plataformas especiales para gibones",

}, {
     figure: "media/foto-09.jpg",
     title: "Implemento elongación",
     about: "Creación del diseño y marca de producto deportivo, especializado en estiramientos y elongación",

   }, {
      figure: "media/foto-10.jpg",
      title: "Bebida Energética",
      about: "Marca y packaging de bebestible nocturno, energético y sin alcohol",

    }, {
      figure: "media/foto-11.jpg",
      title: "Jugo de hierbas",
      about: "Nuevo producto de hierbas con distintas frutas, con funciones medicinales",

    }, {
      figure: "media/foto-12.jpg",
      title: "Nueva formula de cemento",
      about: "Nuevo material ingenieril para construcción de muros y edificaciones",

    }, {
      figure: "media/foto-13.jpg",
      title: "Diseño editorial",
      about: "Libro de poesía, construcción gráfica y editorial",


    }, {
      figure: "media/foto-14.jpg",
      title: "Afiche Publicitario Campaña ModoPapa",
      about: "Diseño y difusión de campaña para la venida del papa a Chile",

    }, {
      figure: "media/foto-15.jpg",
      title: "Muebles exteriores",
      about: "Diseño y fabricación de muebles para jardín de acilo",

    }, {
      figure: "media/foto-16.jpg",
      title: "Lámpara estaño",
      about: "Diseño y elaboración de lámpara que distribuye la luz a través de láminas de estaño",

    }, {
      figure: "media/foto-16.jpg",
      title: "Atrio estatua virgen",
      about: "Diseño y elaboración de atrio y base para la virgen de exterior ",






}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
