/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nickname = '';
        var pregunta = 'p1';
        var autocontrol=0;
        var autoconfianza=0;
        var empatia=0;
        var resolucionConflictos=0;
        var equilibrioEmocional=0;
        var autoconocimiento=0;
        var comunicacion=0;
        var capacidadEscucha=0;


        //var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13;
        //var fin = 1;

function preg1() {
    $("#panel").append("<br><p> - Usted se encuentra profundamente dormido cuando suena su despertador. Son las 5:00 am, todavía tiene sueño pero sabe que si quiere hacer algo productivo del día debe levantarse. ¿Qué hace?</p>");

    $("#panel").append("<input type='radio' id='1a' name='p1' value='1a' /><label for='5min'>A. Se levanta tranquilo y espera un segundo sentado en su cama </label><br>");
    $("#panel").append("<input type='radio' id='1b' name='p1' value='1b'/><label for='bano'>B. Apaga la alarma y sigue durmiendo</label><br>");
    $("#panel").append("<input type='radio' id='1c' name='p1' value='1c' /><label for='dormir'>C. Decide programar la alarma para el medio día y sigue durmiendo.</label><br>");
    deshabilitar_RadioButton();
	
}

function preg2() {
    $("#panel").append("<br><p> - Se queda mirando fijamente una mancha que se encuentra en la pared, “seguramente algún bicho fue aplastado algún día” piensa, decide:</p>");
    $("#panel").append("<input type='radio' id='2a' name='p2' value='2a' /><label for='2a'>A. Volverse a acostar y dormir hasta el medio día </label><br>");
    $("#panel").append("<input type='radio' id='2b' name='p2' value='2b'/><label for='2b'>B. Entrar al baño, tomar una ducha y vestirse.</label><br>");
    $("#panel").append("<input type='radio' id='2c' name='p2' value='2c' /><label for='2c'>C. Se dirige a la puerta e intenta entrar para ayudar a la persona en problemas.</label><br>");
	 deshabilitar_RadioButton();
}

function preg3() {
    $("#panel").append("<br><p> - Después de desayunar sale de su apartamento. En el momento en el que está cerrando la puerta escucha un golpe seco seguido de un grito de ayuda provenientes del apartamento del final del pasillo, ¿que hace? </p>");
    $("#panel").append("<input type='radio' id='3a' name='p3' value='3a' /><label for='3a'>A. Llama a las autoridades para informar del posible “accidente” </label><br>");
    $("#panel").append("<input type='radio' id='3b' name='p3' value='3b'/><label for='3b'>B. Entrar al baño, tomar una ducha y vestirse.</label><br>");
    $("#panel").append("<input type='radio' id='3c' name='p3' value='3c' /><label for='3c'>C. No se bañará, se sentará en su sofá y verá televisión hasta el medio día.</label><br>");
	 deshabilitar_RadioButton();
}

function preg4() {
    $("#panel").append("<br><p> - Mientras camina al final del pasillo escucha otro fuerte grito de ayuda, parece ser una persona mayor. ¿que hace?</p>");
    $("#panel").append("<input type='radio' id='4a' name='p4' value='4a' /><label for='4a'>A. Decide detenerse y llamar a las autoridades pertinentes.</label><br>");
    $("#panel").append("<input type='radio' id='4b' name='p4' value='4b'/><label for='4b'>B. Comienza a correr y decide embestir la puerta con toda su fuerza para abrirla.</label><br>");
    $("#panel").append("<input type='radio' id='4c' name='p4' value='4c' /><label for='4c'>C. Apresura el paso y prueba la perilla de la puerta para comprobar si está abierta.</label><br>");
	 deshabilitar_RadioButton();
}

function preg5() {
    $("#panel").append("<br><p> - Se da cuenta que la puerta está sin seguro y puede ingresar sin problema. Del cuarto de baño se escucha a una anciana preguntando “¿quien esta ahí?¿pueden ayudarme?”. Al acercarse al cuarto de baño la puerta está abierta y se da cuenta que la anciana está tirada en el piso. ¿que hace?</p>");
    $("#panel").append("<input type='radio' id='5a' name='p5' value='5a' /><label for='5a'>A. Desde la puerta le grita, “Todo va a estar bien” y espera la llegada de las autoridades sentado en el sofá de la anciana.</label><br>");
    $("#panel").append("<input type='radio' id='5b' name='p5' value='5b'/><label for='5b'>B. Corre hacia la anciana y la intenta hacer poner de pie.</label><br>");
    $("#panel").append("<input type='radio' id='5c' name='p5' value='5c' /><label for='5c'>C. ADesde lejos le pregunta a la anciana cómo está y que necesita.</label><br>");
 $("#panel").append("<input type='radio' id='5d' name='p5' value='5d' /><label for='5d'>D. Se acerca y mientras le pregunta cómo esta se detiene a mirar qué posibles golpes ha sufrido.</label><br>");
  deshabilitar_RadioButton();
}

function preg6() {
    $("#panel").append("<br><p> - Antes de siquiera ponerse en pie la anciana explica que estaba lavando el baño cuando se resbaló y cayó, ahora le duele mucho la espalda baja. Pide que la ayude a ponerse más cómoda para tolerar el dolor. </p>");
    $("#panel").append("<input type='radio' id='6a' name='p6' value='6a' /><label for='6a'>A. Le dice que es mejor que se quede cómo está y espere la atención médica para evitar peores lesiones. </label><br>");
    $("#panel").append("<input type='radio' id='6b' name='p6' value='6b'/><label for='6b'>B. La ayuda a sentar en el lugar en que se encuentra ya que pudo observar que probablemente no pase nada grave.</label><br>");
    $("#panel").append("<input type='radio' id='6c' name='p6' value='6c' /><label for='6c'>C. Decide que lo mejor es ir a buscar ayuda para poder atender rápidamente a la anciana. </label><br>");
	 deshabilitar_RadioButton();
}

function preg7() {
    $("#panel").append("<br><p> - Repentinamente al apartamento de la anciana llega el administrador del edificio y un médico que buscan brindar atención.¿que hace? </p>");
    $("#panel").append("<input type='radio' id='7a' name='p7' value='7a' /><label for='7a'>A. Guía a las personas hasta donde la anciana </label><br>");
    $("#panel").append("<input type='radio' id='7b' name='p7' value='7b'/><label for='7b'>B. Los detiene un momento en la puerta para explicarles que pasó  </label><br>");
    $("#panel").append("<input type='radio' id='7c' name='p7' value='7c' /><label for='7c'>C. Se va sin explicarles nada </label><br>");
	deshabilitar_RadioButton();
    $("#mostrarRes").val(1);
    
}

function preg8() {
    $("#panel").append("<br><p> - Después de un rato se escucha un fuerte golpe seguido de un grito de ayuda, ¿que hace? </p>");
    $("#panel").append("<input type='radio' id='8a' name='p8' value='8a' /><label for='8a'>A. Sigue en lo que estaba sin importarle nada.</label><br>");
    $("#panel").append("<input type='radio' id='8b' name='p8' value='8b'/><label for='8b'>B. Se dirige al pasillo a verificar que pudo haber pasado </label><br>");
    $("#panel").append("<input type='radio' id='8c' name='p8' value='8c' /><label for='8c'>C. Llama a las autoridades informando sobre lo que escuchó</label><br>");
  deshabilitar_RadioButton();
}

function preg9() {
    $("#panel").append("<br><p> - Golpea la puerta lo más fuerte que puede con su hombro, pero la puerta resiste y lo que consigue es que rebote y se golpee fuertemente la cabeza contra la pared contraria. ¿que hace? </p>");
    $("#panel").append("<input type='radio' id='9a' name='p9' value='9a' /><label for='9a'>A. Se queda tendido en el suelo esperando ayuda</label><br>");
    $("#panel").append("<input type='radio' id='9b' name='p9' value='9b'/><label for='9b'>B. Se reincorpora y trata de abrir girar la perilla</label><br>");
    $("#panel").append("<input type='radio' id='8c' name='p9' value='9c' /><label for='9c'>C. Se regresa a su casa magullado y dolorido a seguir durmiendo </label><br>");
	 deshabilitar_RadioButton();
}

function preg10() {
    $("#panel").append("<br><p> - No hizo nada en el resto del día más allá de estar un poco adolorido de tanto descansar. Finaliza el día y se reinicia todo nuevamente.</p>");
	deshabilitar_RadioButton();
    ;
}

function preg11() {
    $("#panel").append("<br><p> - En la tabla de tareas del primer piso no hay ninguna tarea que te llame la atención, pero quien administra el edificio el día de hoy te pregunta que sucedió en tu piso, ¿que hace?</p>");
    $("#panel").append("<input type='radio' id='11a' name='p11' value='11a' /><label for='11a'>A. Ignoras la pregunta y decides salir a buscar una tarea en la calle.</label><br>");
    $("#panel").append("<input type='radio' id='11b' name='p11' value='11b'/><label for='11b'>B. Le cuentas que sonó un fuerte ruido en el piso pero no te interesa y saldrás a buscar una nueva tarea</label><br>");
    $("#panel").append("<input type='radio' id='11c' name='p11' value='11c' /><label for='11c'>C. Decides contarle todo lo que sonó y escuchaste, y te ofreces a ir al apartamento donde se presentó el inconveniente mientras llega más ayuda.</label><br>");
	 deshabilitar_RadioButton();
}

function preg12() {
    $("#panel").append("<br><p> - Caminó todo el día sin rumbo fijo, no encontró ninguna tarea ni ningún objetivo en el día, se dirige a su apartamento a finalizar el día a espera que se reinicie todo nuevamente.</p>");
    deshabilitar_RadioButton();
    
}

function preg13() {
    $("#panel").append("<br><p> - Contestan en emergencias, informan todo lo que has escuchado y te recomiendan ir a revisar qué sucedió con la persona en problemas mientras llega más ayuda.¿que haces?</p>");
    $("#panel").append("<input type='radio' id='p13' name='13a' value='13a' /><label for='13a'>A. Me dirijo al apartamento donde hay alguien en problemas.</label><br>");
    $("#panel").append("<input type='radio' id='p13' name='13b' value='13b'/><label for='13b'>B. Ignoró las recomendaciones y sigo mi camino</label><br>");
    $("#panel").append("<input type='radio' id='p13' name='13c' value='13c' /><label for='13c'>C. Me devuelvo al apartamento a seguir descansando</label><br>");
	 deshabilitar_RadioButton();
}

function guardarnickname() {

nickname = $("#nickname").val();
        //alert('Su nombre es: '+nickname); 
        $("#nick").hide();
        $("#nickname").attr("disabled", "disabled");
        $("#panel").append("<h1>Instrucciones del juego</h1><br><p>- El juego está ambientado en la actualidad, en un mundo cíclico, eso quiere decir que todos los días el personaje tiene la posibilidad de tomar nuevas decisiones que afecten directamente el desenvolvimiento de su día.</p>");
        $("#panel").append("<h1>Reglas</h1><br><p>- En pantalla le comenzarán a aparecer una serie de situaciones, planteamientos, escenarios y causas a las cuales se les darán una cantidad limitada de opciones de las cuales usted seleccionará la que considere apropiada.<br></br>-Al finalizar el juego tendrá la oportunidad de ver que “Habilidad personal” fue la que destacó durante su participación en el juego.</p>");
        preg1();
}

function mostrarResutadotest(){
    $("#panel").append("<br><p> - " + nickname + " has terminado el test, los resultados son los siguientes:</p>");
    $("#panel").append("<table> <tr> <th align='center' COLSPAN='2'>Habilidades Personales</th> </tr> <tr> <td>Autoconocimiento</td> <td>"+autoconocimiento+"</td> </tr> <tr> <td>Resolución de conflictos</td> <td>"+resolucionConflictos+"</td> </tr> <tr> <td>Autocontrol</td> <td>"+autocontrol+"</td> </tr> <tr> <td>Autoconfianza</td> <td>"+autoconfianza+"</td> </tr> <tr> <td>Equilibrio emocional</td> <td>"+equilibrioEmocional+"</td> </tr> <tr> <td>Comunicación</td> <td>"+comunicacion+"</td> </tr> <tr> <td>Empatía</td> <td>"+empatia+"</td> </tr> <tr> <td>Capacidad de escucha</td> <td>"+capacidadEscucha+"</td> </tr> </table>");
}

function calculo_habilidadesPersonales(res,pregunta){
    switch(res) {
        case '1a':
            autocontrol+=1;   
        break;
        case '1b':
            autoconfianza+=1;
        break;
        case '1c':
            autoconfianza+=1;
        break;
        case '2a':
            autoconfianza+=1;
        break;
        case '2b':
            autoconfianza+=1;
            autocontrol+=1;
        break;
        case '2c':
            autoconfianza+=1;
        break;
        case '3a':
            empatia-=1;
            autocontrol-=1;
            autoconfianza-=1;
        break;
        case '3b':
            autocontrol+=1;
        break;
        case '3c':
            autoconfianza+=1;
            empatia+=1;
        break;
        case '4a':
            resolucionConflictos+=1;
        break;
        case '4b':
            autoconfianza+=1;
        break;
        case '4c':
            autoconfianza+=1;
            autocontrol+=1;
            equilibrioEmocional+=1;
            autoconocimiento+=1;
            resolucionConflictos+=1;
        break;
        case '5a':
            empatia-=1;
            capacidadEscucha-=1;
        break;
        case '5b':
            empatia+=1;
            autoconfianza+=1;
        break;
        case '5c':
            empatia+=1;
        break;
        case '5d':
            empatia+=1;
            comunicacion+=1;
            equilibrioEmocional+=1;
            autocontrol+=1;
            autoconocimiento+=1;
            capacidadEscucha+=2;
        break;
        case '6a':
            equilibrioEmocional+=1;
            comunicacion+=1;
        break;
        case '6b':
            equilibrioEmocional+=1;
            autoconfianza+=1;
            resolucionConflictos+=1;
            empatia+=1;
        break;
        case '6c':
            equilibrioEmocional+=1;
            resolucionConflictos+=1;
        break;
        case '7a':
            resolucionConflictos+=1;
            comunicacion+=1;
        break;
        case '7b':
            comunicacion+=1;
            resolucionConflictos+=1;
            empatia+=1;
            capacidadEscucha+=1;
        break;
        case '7c':
            equilibrioEmocional-=1;
            autocontrol-=1;
            autoconfianza-=1;
        break;
        case '8a':
            empatia-=1;
        break;
        case '8b':
            empatia+=1;
            equilibrioEmocional+=1;
        break;
        case '8c':
            autocontrol+=1;
        break;
        case '9a':
            equilibrioEmocional-=1;
            autocontrol-=1;
            autoconfianza-=1;
            resolucionConflictos-=1;
        break;
        case '9b':
            equilibrioEmocional+=1;
            autocontrol+=1;
            autoconfianza+=1;
            resolucionConflictos+=1;
        break;
        case '9c':
            equilibrioEmocional-=1;
            autocontrol-=1;
            autoconfianza-=1;
            resolucionConflictos-=1;
            comunicacion-=1;
        break;
        case '11a':
            empatia-=1;
         break;
        case '11b':
            empatia-=1;
            resolucionConflictos-=1;
        break;
        case '11c':
            equilibrioEmocional+=1;
            autocontrol+=1;
            autoconfianza+=1;
            resolucionConflictos+=1;
            empatia+=1;
        break;
        case '13a':
            equilibrioEmocional+=1;
            autocontrol+=1;
            autoconfianza+=1;
            resolucionConflictos+=1;
            empatia+=1;
        break;
        case '13b':
            empatia-=1;
            resolucionConflictos-=1;
        break;
        case '13b':
            empatia-=1;
            resolucionConflictos-=1;
        break;
        default:
            alert('No coincide ningun caso');
    }
    alert('la pregunta es:'+pregunta);
    if (pregunta=='p7' || pregunta=='p10' || pregunta=='p12') mostrarResutadotest();
}

function deshabilitar_RadioButton() {
   // alert('La pregunta es:' + pregunta);
    $("#panel").on("click", "input[name=" + pregunta + "]", function () {
        /* var radioValue = $('input[name="despertar"]:checked').val();
         alert("La edad seleccionada es: " +radioValue );
         $("#panel").append("<br> - " + nickname + " " + radioValue);*/
        $("input[name=" + pregunta + "]").attr("disabled", "disabled");

   // do {
        res = $('input[name="'+pregunta+'"]:checked').val();
        calculo_habilidadesPersonales(res,pregunta);
        //alert('Entramos al while');
        if (res=='1a') {
            pregunta='p2';
            preg2();
        }

        if (res=='2b') {
            pregunta='p3';
            preg3();
                
        }

         if (res=='3c' || res=='8b' || res=='11c' ||res=='13a')  {
            pregunta='p4';
            preg4();
                
        }

         if (res=='4c' || res=='9b') {
            pregunta='p5';
            preg5();
                
        }

         if (res=='5b' || res=='5c' || res=='5d') {
            pregunta='p6';
            preg6();
                
        }

         if (res=='6a' || res=='6b' || res=='6c'|| res=='5a' || res=='9a') {
            pregunta='p7';
            preg7();
          
                
        }

         if (res=='1b' || res=='1c' || res=='2a'|| res=='2c') {
            pregunta='p8';
            preg8();
                
        }

         if (res=='4b') {
            pregunta='p9';
            preg9();
                
        }

         if (res=='8a' || res=='9c' || res=='13c') {
            pregunta='p10';
            preg10();
          
                
        }

         if (res=='3a' || res=='13b') {
            pregunta='p11';
            preg11();
                
        }

         if (res=='11a' || res=='11b') {
            pregunta='p12';
            preg12();
            
                
        }

         if (res=='3b' || res=='4a' || res=='8c') {
            pregunta='p13';
            preg13();
                
        }


    });

    
    
}

$(document).ready(function () {
    
});


  