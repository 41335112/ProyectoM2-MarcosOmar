# MiniBlog API 🚀

API REST desarrollada en Node.js y Express conectada a PostgreSQL para gestionar usuarios (`authors`) y publicaciones (`posts`). Proyecto desarrollado como parte de los entregables de la startup **DevSpark**.

---

## 📋 Descripción del Proyecto
MiniBlog es un servicio backend diseñado para proporcionar una API estable, simple y documentada que permite gestionar contenido de forma estructurada. Utiliza consultas SQL directas parametrizadas (con el paquete `pg`) para asegurar la persistencia y evitar inyecciones SQL, implementando validaciones básicas, respuestas HTTP estándar, pruebas unitarias con `supertest` y documentación mediante OpenAPI.

---

## 🛠️ Tecnologías y Dependencias
* **Node.js** & **Express**: Entorno de ejecución y framework web.
* **PostgreSQL**: Base de datos relacional.
* **pg**: Cliente de PostgreSQL para Node.js (consultas SQL directas).
* **Jest & Supertest**: Herramientas para testing unitario e integración de endpoints.
* **OpenAPI**: Estándar para la documentación de la API.

---

## 🗄️ Esquema de Base de Datos

La base de datos cuenta con dos tablas principales relacionadas:

1. **`authors`**:
   * `id` (SERIAL, PK)
   * `name` (VARCHAR, no vacío)
   * `email` (VARCHAR, único)
   * `bio` (TEXT)
   * `created_at` (TIMESTAMP)

2. **`posts`**:
   * `id` (SERIAL, PK)
   * `author_id` (INT, FK -> `authors.id`)
   * `title` (VARCHAR, no vacío)
   * `content` (TEXT, no vacío)
   * `published` (BOOLEAN)
   * `created_at` (TIMESTAMP)


## 📌 Endpoints Principales (REST API): ` `
   1. **`Autores (/authors)`**: 

   * `GET /authora` -> Listar todos los usuarios.

   * ` GET /authors/:id`-> Obtener el detalle de un usuario por ID.

   * ` POST /authors/authors`-> Crear un nuevo usuario (Valida que el nombre no esté vacío y el email sea único).

  * ` PUT /authors/:id`-> Actualizar un usuario existente.

  * ` DELET/authors/:id`-> Eliminar un usuario.

  2. **` Piblicaciones (/post)`**:
 
  * ` GET /post`-> Listar todas las publicaciones.

  * ` GET /posts/:id`-> Obtener el detalle de una publicación.
 
  * ` GET /posts/author/:authorId`-> Listar posts detallados de un autor específico.

  * ` POST /pots`-> Crear un post (Valida title, content y author_id existentes).

  * ` PUT /posts/:id`-> Actualizar un post.

  * ` DELETE /posts/:id`-> Eliminar un post.

#  Registro del Uso de IA
1. Durante el desarrollo de este proyecto se utilizó asistencia de Inteligencia Artificial para:

2. El diseño inicial del esquema relacional y consultas SQL parametrizadas.

3. La estructuración de las pruebas unitarias con Supertest

# Estructura del Proyecto MiniBlog

```text
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
```