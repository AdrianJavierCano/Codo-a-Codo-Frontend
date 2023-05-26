//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }}



//Api echo en ajax

var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});

//Logica de inputs

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const tema = document.getElementById("tema");
const mensaje = document.getElementById("text-area");
const boton = document.getElementById("boton");
var regexNombre = /^[a-zA-Z]+$/;
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



document.getElementById("boton").addEventListener("click", function(event) {
    event.preventDefault();
  });


// Limpia pantalla para proxima carga de mensaje

  boton.addEventListener("click",() =>{

// Validar nombre

 for (var i = 0; i < nombre.value.length; i++) {
    var charCode = nombre.value.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  do{
  if (nombre.value.length >40) {
      alert("El campo 'nombre' solo puede contener hasta 40 caracteres");
      return false;
    }
  }while(false)

//   Validar email

//   var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
//   do{
       
//      if( validEmail.test(email.value) ){
//        return true;

//    }else{
//        alert('El email ingresado es invalido, por favor vuelve a ingresarlo');
//        return false;}
//    } while(false)


  
// Validar tema
for (var i = 0; i < tema.value.length; i++) {
    var charCode = tema.value.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'tema' debe contener solamente caracteres alfabeticos y espacios.");
      return false;
    }
  }

  do{
    if (tema.value.length >20) {
        alert("El campo 'tema' solo puede contener hasta 20 caracteres");
        return false;
      }
    }while(false)



alert("Mensaje enviado correctamente");

nombre.value ="";
email.value ="";
tema.value = "";
mensaje.value = "";

})




//  function validarEmail(email){
                
//    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
//    do{
        
//       if( validEmail.test(email) ){
//         return true;

// 	}else{
// 		alert('El email ingresado es invalido, por favor vuelve a ingresarlo');
//         return false;}
//     } while(false)
// }
 
    
 