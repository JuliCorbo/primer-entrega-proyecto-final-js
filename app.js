const usuario1 = prompt("ingrese su nombre de usuario")

let saludo = "Hola" + " " + usuario1 + " " + "Bienvenido a la tienda virtual de Vivero Pimpaji!"

alert (saludo)
console.log (usuario1 + "Inicio session")

 const seccion = prompt ("Deseas visitar la seccion de fertilizantes ? escriba si para ingresar, o no para continuar con la pagina ")
console.log(usuario1 + " ingreso en la seccion de fertilizantes")


class Fertilizantes {
    constructor(variedad, tamaño, precio){
        this.variedad = variedad;
        this.tamaño = tamaño;
        this.precio = Number(precio);
    }
}

const nuquifol = new Fertilizantes ("floracion", "20ml" , 500)
const quelafol = new Fertilizantes ("hierro" , "20 ml" , 500)
const nitrofosca = new Fertilizantes("fertilizador","300 gr", 450)



if (seccion == "si" || seccion == "Si"){

    alert("usted ingreso a la seccion de Fertilizantes")
    

    const pedidoFertilizantes = [];
    

    let cantidad = prompt("ingrese la cantidad total de fertilizantes que necesita")
    
    for(i = 1; i <=cantidad; i ++){
        let tipo = prompt("ingrese que fertilizante desea agregar. las variedades disponibles son: nuquifol, quelafol, nitrofosca" )

        console.log(usuario1 + " ingreso" + " " + tipo)
        pedidoFertilizantes.push (cantidad, tipo);
        console.log(pedidoFertilizantes)
    }
}