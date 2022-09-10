var pestana1= document.getElementById('pestana1');
var pestana2 = document.getElementById('pestana2');

pestana1.addEventListener('click', ()=>{
    var contenido = document.getElementById('contenido');
    contenido.setAttribute('class','contenido');
    contenido.innerHTML= "Presionando la pestaña 1";
})

pestana2.addEventListener('click', ()=>{
    var contenido = document.getElementById('contenido');
    contenido.setAttribute('class','contenido');
    contenido.innerHTML= "Presionando la pestaña 2";
})



// function contenido1() {

    

// }

// function contenido2() {

    

// }