/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var nickname='puta';

function guardarnickname(){
   
    nickname=$("#nickname").val();
    //alert('Su nombre es: '+nickname); 
    $("#nick").hide();
    $("#nickname").attr("disabled","disabled");
    
    $("#panel").append("<h1>Instrucciones del juego</h1><br><p>- Este es un juego de rol, el cual esta ambientado en la actualidad <br> - Se formularán una serie de ecenarios y tu participarás en ellos <br>- Dependiendo de tus desiciones van a surgir eventos</p>");
    $("#panel").append("<br> - "+nickname+" se despierta en su cama y sabe que tiene que trabajar. ¿que hace?</p>");
    
    $("#panel").append("<input type='radio' id='5min' name='despertar' value='Duerme 5 minutos mas' /><label for='5min'>A. Duerme 5 minutos mas</label><br>");
    $("#panel").append("<input type='radio' id='bano' name='despertar' value='Se entra a bañar'/><label for='bano'>B. Se entra a bañar</label><br>");
    $("#panel").append("<input type='radio' id='dormir' name='despertar' value='Deside quedarse durmiendo toda la mañana' /><label for='dormir'>C. Deside quedarse durmiendo toda la mañana</label><br>");
     
}

$(document).ready(function(){
   
    $("#panel").on("click","input[name=despertar]",function () { 
        var radioValue=$('input[name="despertar"]:checked').val();
        //alert("La edad seleccionada es: " +radioValue );
      $("#panel").append( "<br> - "+nickname+" "+radioValue);
      $("input[name='despertar']").attr("disabled","disabled");
      
    });
    
});

   
  