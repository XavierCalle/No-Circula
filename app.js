
function resultado(){
	var placa = document.getElementsByName("placa")[0].value; //obtiene la placa del input

	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"); //crea un array con los días
	var f=new Date(); //obtiene la fecha actual
	var dia=(diasSemana[f.getDay()]); //obtiene el día actual
	//dia="Martes";

	if(placa.length==7){ //comprueba el tamaño de la placa
		var n=placa.substr(6); //crea una variable en la que se guarda el ultimo digito de la placa
		
		if(dia=="Lunes"&&(n==1||n==2)){ //restriccion por día y numero de placa
			alert("Usted tiene NO circula el día de hoy.")
		}

		else if(dia=="Martes"&&(n==3||n==4)){
			alert("Usted tiene NO circula el día de hoy.")
		}

		else if(dia=="Miércoles"&&(n==5||n==6)){
			alert("Usted tiene NO circula el día de hoy.")
		}

		else if(dia=="Jueves"&&(n==7||n==8)){
			alert("Usted tiene NO circula el día de hoy.")
		}

		else if(dia=="Viernes"&&(n==9||n==0)){
			alert("Usted tiene NO circula el día de hoy.")
		}

		else{
			alert("Tiene libre circulación el día de hoy.")
		}
	}
	else{
		alert("Placa no válida")
	}	
}


