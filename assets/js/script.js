
const precioP = document.querySelector("#montoPrecio").innerHTML;
let ctotal = document.getElementById("calcularTotal()")

ctotal.addEventListener("click", function () {

    let cantidad = document.querySelector("#cantidadP").value;
    let selectColor = document.querySelector("#colorProdCompra")
    let lista = document.getElementById("colorP");
    let color = lista.options[lista.selectedIndex].value;
    let total = Number(cantidad) * Number(precioP);

    if (cantidad == ""){
        alert("Debe ingresar una cantidad");
    } else if (cantidad <= 0){
        alert("Debe ingresar un valor positivo");
    }else{
        document.querySelector("#totalProdCompra").innerText = cantidad;
    }

    
    document.querySelector("#totalMontoCompra").innerText = total;

    if (color == "azul") {
        selectColor.classList.add('selec-azul');
        selectColor.classList.remove('selec-negro');
    } else if (color == "negro") {
        selectColor.classList.add('selec-negro');
        selectColor.classList.remove('selec-azul');
    } else {
        alert("Debe seleccionar un color");
    }

});

