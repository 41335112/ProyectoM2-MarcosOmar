# API MiniBlog 🚀

¡Bienvenido/a al repositorio de **MiniBlog**! Este proyecto es un servicio backend desarrollado con **Node.js**, **Express** y **PostgreSQL** que permite gestionar usuarios (**autores**) y publicaciones (**posts**) a través de una API RESTful.

---

## 📋 Descripción del Proyecto

MiniBlog proporciona la infraestructura backend necesaria para manejar autores y sus publicaciones de forma persistente.

### Funcionalidades principales:
* **Autores**: Operaciones CRUD (Crear, Leer, Actualizar y Eliminar autores).
* **Posts**: Operaciones CRUD para publicaciones asociadas a un autor mediante claves foráneas.
* **Documentación**: Documentación interactiva de la API con Swagger UI / OpenAPI.
* **Pruebas Automatizadas**: Tests unitarios escritos en **Vitest**.
* **Manejo de Errores**: Middleware centralizado para respuestas de error HTTP claras y código parametrizado seguro.

---

## 🛠️ Tecnologías Utilizadas

* **Node.js** y **Express**: Servidor web y rutas.
* **PostgreSQL** (con el cliente `pg`): Base de datos relacional y consultas SQL directas.
* **Vitest**: Framework de pruebas unitarias rápido.
* **Swagger UI / OpenAPI**: Documentación interactiva.
* **Dotenv**: Manejo de variables de entorno.

---

## 📁 Estructura del Proyecto

ProyectoM2/
│
├── controllers/
│   ├── authors.Controllers.js
│   └── post.controllers.js
│
├── middlewares/
│   ├── index.js
│   └── middPost.js
│
├── node_modules/
│
├── servers/
│   ├── authors.servers.js
│   └── post.server.js
│
├── src/
│   ├── config/
│   │
│   └── router/
│       └── index.js
│
├── test/
│
├── server.js
│
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md

🧪 Cómo Ejecutar las Pruebas (Vitest)
Las pruebas unitarias utilizan Vitest para evaluar los servicios y controladores de manera aislada utilizando mocks, sin afectar la base de datos de producción o desarrollo.

Para ejecutar los tests:

Bash
npm test

📖 Documentación OpenAPI / Swagger
Puedes consultar y probar de manera interactiva todos los endpoints navegando a la siguiente ruta desde tu navegador:

Local: http://localhost:3000/api-docs

🌐 Guía de Despliegue en Railway
Base de Datos: Crea un proyecto nuevo en Railway y añade un servicio de PostgreSQL.

Tablas Iniciales: Conéctate a la BD de Railway e inicialízala con los archivos setup.sql y seed.sql.

Servicio Backend:

Conecta tu repositorio de GitHub con Railway.

Configura las Variables de Entorno en el panel de Railway:

DATABASE_URL: Vincula la variable de conexión interna proporcionada por Railway.

NODE_ENV: production

Dominio: En la pestaña Settings -> Networking, genera tu dominio público para acceder a la API.

🤖 Registro del Uso de Inteligencia Artificial (IA)
En el desarrollo de este proyecto se contó con la asistencia de IA como apoyo técnico en las siguientes tareas:

Pruebas Unitarias: Configuración y simulación de datos (mocking) mediante Vitest.

Documentación OpenAPI: Formateo del objeto JavaScript (openapi.js) para servir la documentación con Swagger UI.

Optimización de Consultas SQL: Uso de consultas parametrizadas y combinaciones JOIN relacionales.

Toda la lógica generada fue revisada, probada y adaptada para asegurar el cumplimiento de las buenas prácticas del backend.