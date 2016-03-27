var serialport = require('serialport'),
	SerialPort = require("serialport").SerialPort,
	puerto = process.argv[2],
    Firebase = require("firebase"),
    config = require('./config');


var myFirebaseRef = new Firebase("https://"+config.firebaseApp+".firebaseio.com/"+config.firebaseAppRuta);

if (puerto) {

    var serialPort = new SerialPort(puerto, {
        encoding: 'utf8',
        parser: serialport.parsers.readline("\n"),
        baudrate: 9600
    });

    serialPort.open(function(error) {
        if (error) {
            console.log('Error al arrancar: ' + error);
        } else {

            console.log('Comunicación establecida con éxito!');
            console.log('Iniciando la recepción de datos:');
            serialPort.on('data', function(datos) {
                //console.log(datos);
                var datosSerie = JSON.parse(datos);


                myFirebaseRef.authWithCustomToken(config.token, function(error, authData) {
                    if (error) {
                        console.log('[FIREBASE] ERROR - Identificación erronea. Revisa la configuración del Token', error);
                    } else {
                        myFirebaseRef.set(datosSerie, function(){
                            if (error) {
                                console.log('[FIREBASE] ERROR - Sincronización fallida');
                            }
                        });
                    }
                });
            });
        }
    });

} else {

    serialport.list(function(err, ports) {
        ports.forEach(function(port) {
            console.log(port.comName);
        });
    });

}