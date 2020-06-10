/*Calculando área de um trapézio*/



//Captura e coverte os valores de entrada/mostra saída 
function calcular() {
    var alturat = parseFloat(document.getElementById("altura").value);
    console.log(alturat);
    var baseMenort = parseFloat(document.getElementById("baseMenorV").value);
    console.log(baseMenort);
    var baseMaiort = parseFloat(document.getElementById("baseMaiorV").value);
    console.log(baseMaiort);


    area = areaTrapezio(alturat, baseMenort, baseMaiort);
    document.getElementById("resultadotxt").value = area;

}
//Cálculo da área do trapézio
function areaTrapezio(altura, baseMenor, baseMaior) {
    var area = (altura * (baseMenor + baseMaior)) / 2;
    return area;


}


/*exercício 2*/
//Captura e coverte os valores de entrada/mostra saída 
function calcImc() {
    var altura = parseFloat(document.getElementById("alturatxt").value);
    console.log(altura);
    var peso = parseFloat(document.getElementById("pesotxt").value);
    console.log(peso);
    var imc = seuImc(peso,altura );
    document.getElementById("imcFinal").value = imc;
    
    var conceito = verificarImc(imc);
    document.getElementById("conceitoImc").value = conceito;
}

function seuImc(peso,altura) {
    iMC = peso / (altura * altura);
    return iMC;
    console.log(iMC);
}

function verificarImc(iMC) {
    if (iMC >= 18.5 && iMC <= 24.99) {
        return "Peso normal";

    } else if (iMC >= 25 && iMC <= 29.99) {
        return "Acima do peso";

    } else if (iMC >= 30 && iMC <= 34.99) {
        return "Obesidade I";

    } else if (iMC >= 35 && iMC <= 39.99) {
        return "Obesidade II(Severa)";

    }else if(iMC>40){
        return "Obesidade III (mórbida)";
    }else{
        return "Abaixo do peso";
    }


}
