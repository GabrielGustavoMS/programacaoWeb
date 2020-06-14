function menor(v1, v2) {
    if (v1 < v2) {
        return "O menor é: " + v1;
    } else
    if (v1 > v2) {
        return "O menor é: " + v2;
    } else {
        return "Eles são iguais";
    }
}

function maior(v1, v2) {
    if (v1 > v2) {
        $("#resultado").val(v1);
    } else {
        $("#resultado").val(v2);
    }
}

function total(litros, tipo) {
    var r;
    switch (tipo) {
        case "diesel":
            r = litros * 3.17;
            break;
        case "gasolina":
            r = litros * 3.39;
            break;
        default:
            r = litros * 2.49;
    }
    return r;
}