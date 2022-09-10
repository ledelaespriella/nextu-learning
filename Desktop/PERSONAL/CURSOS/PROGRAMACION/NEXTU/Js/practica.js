function doble(array){
    var list=[];

    array.forEach(e => {
        list.push(e*2);
    })
    
    return list;
}

function impar(array){
    var list=[];
    
    array.map(ele=>{
        if (ele % 2 !== 0)list.push(ele);
    });
    
    return list;
}

function middle(array){
    var list=[];
    
    array.map(ele=>{

        if (ele % 2 !== 0){
            list.push(ele*2);
        }else{
            list.push(ele/2);
        }
    });
    
    return list;
}

var arreglo1 = [1,2,3,4,5];
var arreglo2 = [1,2,4,8];

var fechacurso = new Date (2019,3,4);
console.log (fechacurso.toDateString());