# Calidad-del-Aire-con-Firebase
Este Repositorio es un complemento a para [el dispositivo IoT de "Calidad del Aire"](https://github.com/UlisesGascon/Calidad-del-Aire) y que utiliza Firebase para transmitir y almacenar los datos

### [DEMO](https://calidaddelaire.firebaseio.com/)

### Funcionamiento

**Obtención de datos**

Para obtener los datos utilizamos [este dispositivo IoT](https://github.com/UlisesGascon/Calidad-del-Aire) que envia los datos por el puerto serial usando el formato JSON

**Parseo de datos**

Los datos son recolectados por Node.js usando la librería serialport y subidos posteriormente a Firebase.


### Instalación

**Parte del servidor**

1 - Actualiza la el archivo *[config.js](https://github.com/UlisesGascon/Calidad-del-Aire-con-Firebase/blob/master/server/config.js)* con tus datos
2 - Instala las dependencias de Nodejs.
```
npm install
```  
3 - Ejecuta el script para saber los puertos disponibles
```
node server
```
4 - Ejecuta el script con el puerto como parámetro y empezará la subida de datos
```
node server /dev/cu.usbmodem1411
```

**Parte web**

1. Actualiza la variable *ref* en el archivo *[app.js](https://github.com/UlisesGascon/Calidad-del-Aire-con-Firebase/blob/master/firebase/app.js)* con tus datos.
2. Sigue [estos pasos](https://www.firebase.com/docs/hosting/guide/deploying.html) para subir los archivos estáticos al hosting de Firebase 
