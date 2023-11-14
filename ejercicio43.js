/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
 */
        /**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */


let hora=23;
let min=15;
let seg=39;

//while true(bucle infinito) ve sumando un seg a cada vuelta
while (true) {
     seg++;
//Cuando seg llegue a 60 sumale un minuto y pon segundos a 0;
     if(seg==60 ) {
       min+=1;
       seg=0;
     }
//Cuando min llegue a sesenta sumale una hora y pon minutos a 0;
     if(min==60) {
       hora+=1;
       min=0;
     }
//Cuando llegue a 23:59:59 pon la hora a 0;
     if(hora>=24) {
       hora=0;
     }
//Devuelveme un console.log con la hora:
      console.log(hora+":"+min+":"+seg); 
}



//Pedir ayuda y revisar en clase
 //hacer con bucle while con if dentro donde en cada if se vaya sumando un minuto y en seg igual y en horas igual   




