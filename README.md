# Backend de la Aplicación de Reserva de Entrega de Materiales de Concreto

Este repositorio contiene el backend de una aplicación web de reserva de entrega de materiales de concreto, desarrollado con Express.js y MongoDB.

## Instrucciones de Instalación

1. Clona este repositorio en tu máquina local.

2. Asegúrate de tener [Node.js](https://nodejs.org) y [MongoDB](https://www.mongodb.com) instalados en tu sistema.

3. Abre una terminal en la carpeta raíz del proyecto.

4. Ejecuta el siguiente comando para instalar las dependencias: npm install


## Configuración de la Base de Datos

1. Asegúrate de que MongoDB esté en funcionamiento en tu máquina local.

2. El backend utiliza una base de datos local de MongoDB llamada `backend-v3`. Si deseas cambiar este nombre, modifica la URL de conexión en el archivo `app.js`.

## Ejecución del Servidor

Una vez instaladas las dependencias y configurada la base de datos, puedes ejecutar el servidor con el siguiente comando:

El servidor se ejecutará en `http://localhost:3000` de forma predeterminada.

npm run dev

## Endpoints Disponibles

El backend proporciona los siguientes endpoints:

- `GET /api/days`: Obtiene todos los días disponibles para entregas en el mes de septiembre.

- `GET /api/days/:dayId`: Obtiene los horarios disponibles para entregas en un día específico.

- `POST /api/reservations`: Crea una reserva de entrega de concreto.

## Uso de la API

Puedes usar herramientas como [Postman](https://www.postman.com) para probar los endpoints de la API. A continuación, se muestra un ejemplo de cómo crear una reserva utilizando el endpoint `/api/reservations`:

POST http://localhost:3000/api/reservations

Body:
{
"dayId": "<ID_DEL_DÍA>",
"hourId": "<ID_DEL_HORARIO>",
"name": "Nombre del Cliente",
"email": "correo@ejemplo.com",
"phone": "123456789"
}

Reemplaza `<ID_DEL_DÍA>` y `<ID_DEL_HORARIO>` con los identificadores correctos de la base de datos.
