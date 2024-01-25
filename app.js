//variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = parseInt(Math.floor(numeroMaximo/3));
//loop
while(numeroUsuario != numeroSecreto) {
    //solicitar variable numeroUsuario
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 a ${numeroMaximo}, cuentas con ${maximoIntentos} intentos:`));
    maximoIntentos--;
    //guardar numeroUsuario en consola navegador
    console.log(numeroUsuario);
    //compara si numeroUsuario y numeroSecreto son iguales
    if (numeroUsuario == numeroSecreto) {
        //mensaje si acerta el número
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else{
        //Indicar si el numero secreto es mayor o menor
        if (numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor. Llevas ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        } else {
            alert(`El número secreto es mayor. Llevas ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        }
        //incrementamos contador cuando no acierta
        intentos++;
        // cantidad de intentos permitidos
        if (intentos > maximoIntentos) {
            alert(`Llegaste al número máximo de ${maximoIntentos} ${maximoIntentos == 1 ? 'intento' : 'intentos'}`)
            break;
        }
       
    }
}