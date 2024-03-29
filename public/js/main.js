const typed = new Typed('.typed', {
    // strings: [
    //     '<i class="profesion">Programador</i>', 
    //     '<i class="profesion">Diseñador</i>',
    //     '<i class="profesion">Ingeniero</i>' 
    // ],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


// boton dark 
const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark'); //agregar clase de dark
    btnSwitch.classList.toggle('active');//cambia estado del boton


    //guardamos el modo en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});







//comprabación de localstoragge variable dark
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark'); //agregar clase de dark
    btnSwitch.classList.add('active');//cambia estado del boton
}else{
    document.body.classList.remove('dark'); //quitar clase de dark
    btnSwitch.classList.remove('active');//cambia estado del boton
}
