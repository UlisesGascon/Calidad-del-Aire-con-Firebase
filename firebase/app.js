(function(){
	var ref = new Firebase("https://calidaddelaire.firebaseio.com/datos");
	ref.on("value", function(snapshot) {
		var datos = snapshot.val();
	  
		var datosHTML = '<div class="panel panel-default"><div class="panel-body">';
			datosHTML += '<h4><span>Temperatura: '+datos.temperatura.valor+'°C</span><span class="pull-right">Humedad: '+datos.humedad.valor+'%</span></h4>';
			datosHTML += '</div></div>';


		for (var i in datos) {
		  	if (i === "humedad" || i === "temperatura"){
		  		continue;
		  	} else {
		  		if(datos[i].valido){
					datosHTML += '<div class="panel panel-default"><div class="panel-body">';
					datosHTML += '<h4 class="elemento">'+i+': '+datos[i].valor+' '+datos[i].unidad;
					if(datos[i].umbralAlcanzado){
						datosHTML += '<span class="label label-danger pull-right">Umbral alcanzado</span>';
					}
					datosHTML += '</h4><p><strong>Descripcion:</strong> '+datos[i].descripcion+'</p>';
					datosHTML += '</div></div>';	  			
		  		}
		  	}
		}
	  document.getElementById("datos").innerHTML = datosHTML;

	}, function (errorObject) {
	  console.log("ERROR de lectura: " + errorObject.code);
	});
})();