# Front-end-challenge

Desafío técnico para el cargo de desarrollador front end.

Misión: 

Proveer un sitio web que permita visualizar las historias de usuario que un miembro del proyecto tenga pendientes. 
Para ello, se deben consumir los servicios que se consideren necesarios, de Taiga.io, para desplegar por pantalla las historias de usuario que un usuario de este servicio mantenga como pendientes.
Se considera incluir un login a la solución y el uso de un token para consumir los servicios.

## Empezando

Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba.

### Prerrequisitos

El proyecto se encuentra hecho en Angular 9.
Ejecute el siguiente comando para instalar el CLI de Angular:

``
npm i -g @angular/cli@9.1.2
``

### Instalación

Una vez descargado el código fuente ejecute:

``
npm install
``

Si desea generar la librería, ejecute:

``
npm run build:lib
``

## Ejecutando las pruebas

Ejecute el siguiente comando para iniciar las pruebas automatizadas:

``
ng test
``

## Implementación

Dentro del proyecto, diríjase a la carpeta 'environment' y defina su ENDPOINT.
Debe contar con una cuenta Taiga. 

Como ejemplo:

EndPoint: https://api.taiga.io

Creación de cuenta de usuario en: https://tree.taiga.io/

## Construido con

* [Taiga] (https://taigaio.github.io/taiga-doc/dist/api.html) - API
* [Angular] (https://angular.io) - Framework

## Autor

* ** Cristian Armijo ** - * Desarrollador FullStack * 