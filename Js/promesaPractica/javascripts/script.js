const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        const number = parseInt(Math.random() * 10);
        if (number % 2 == 0) {
            resolve(number)
        }
        else {
            reject("Rechazado")
        }
    },
 1000)
});

const procesar = async ()=>{
    try {
        const resultado = await promise;
        clearInterval(intervalo);
        console.log('resultado: ', resultado);
    } catch (error) {
        console.log('error: ', error);
    }
}

procesar();

const intervalo = setInterval(()=>{
    window.location.reload();
},2000);
