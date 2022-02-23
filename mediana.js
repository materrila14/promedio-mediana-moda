
function calcularMediana(lista) {
    
    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        
        const promedioLista = sumaLista / lista.length;
        
        return promedioLista
    }

    lista.sort((a, b) => a - b)
    
    const mitadlista = parseInt(lista.length / 2);
    
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadlista - 1];
        const elemento2 = lista[mitadlista];
        
        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
        
        mediana = promedioElementos;
        
    } else {
        mediana = lista[mitadlista];
    }

    return mediana
}