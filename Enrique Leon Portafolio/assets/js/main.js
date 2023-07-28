


function datos(){

    let nombre=document.getElementById("idNombre").value;
    let edad=document.getElementById("idEdad").value;


    if(!nombre==""){
        console.log(nombre);
        document.getElementById("oli").innerHTML=nombre;
        document.getElementById("idNombre").style.borderColor="black";

    }else{
        console.log("Campo Vacio");
        document.getElementById("oli").innerHTML="Campo vacio";
        document.getElementById("idNombre").style.borderColor="red";
        document.getElementById("idNombre").focus();
    }

    if(!apellido==""){
        console.log(apellido);
        document.getElementById("oli").innerHTML=nombre;
        document.getElementById("idApellido").style.borderColor="black";

    }else{
        console.log("Campo Vacio");
        document.getElementById("oli").innerHTML="Campo vacio";
        document.getElementById("idApellido").style.borderColor="red";
        document.getElementById("idApellido").focus();
    }

    if(edad>=18){
        document.getElementById("oli").innerHTML+=". Eres mayor de edad";
        document.getElementById("idNombre").style.borderColor="black";

    }else if(edad>=10 && edad<18){
        document.getElementById("oli").innerHTML+=". Eres menor de edad (Adolescente)";
        document.getElementById("idNombre").style.borderColor="black";

    }else if(edad===""){
        document.getElementById("oli").innerHTML+=". Campo edad vacio";
        document.getElementById("idNombre").style.borderColor="red";
        document.getElementById("idEdad").focus();

    }else if(edad>=0 && edad<10){
        document.getElementById("oli").innerHTML+=". Eres menor de edad";
        document.getElementById("idNombre").style.borderColor="black";

    }else{
        document.getElementById("oli").innerHTML+=". Edad no valida";
        document.getElementById("idNombre").style.borderColor="red";
    }

    if(nombre=="" && edad===""){
        document.getElementById("idNombre").focus();
    }

    

}