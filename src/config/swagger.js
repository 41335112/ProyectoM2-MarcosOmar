const swaggerJsdoc = require("swagger-jsdoc");

const swaggerSpec = {
 openapi: '3.0.0',
  info: {
    title: 'API MiniBlog',
    description: 'API RESTful en Node.js y Express para gestionar usuarios (autores) y publicaciones (posts).',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor Local',
    },
    {
      url: 'https://tu-app-production.up.railway.app/api',
      description: 'Servidor de Producción (Railway)',
    },
  ],
  paths: {
     '/authors': {
     get: {
         summary: 'Obtener todos los autores',
         responses: {
            '200': {
            description: 'Lista de autores obtenida exitosamente.',
          },
        },
      },
     post: {
         summary: 'Crear un nuevo autor',
          requestBody: {
            required: true,
             content: {
             'application/json': {
              schema: {
                 type: 'object',
                 required: ['name', 'email'],
                 properties: {
                 name: { type: 'string', example: 'Ana García' },
                  email: { type: 'string', example: 'ana@example.com' },
                  bio: { type: 'string', example: 'Desarrolladora Backend' },
                },
              },
            },
          },
        },
        responses: {
          '201': { description: 'Autor creado exitosamente.' },
          '400': { description: 'Datos inválidos o faltantes.' },
        },
      },
    },
    '/authors/{id}': {
      get: {
         summary: 'Obtener un autor por ID',
          parameters: [
             {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
             },
            ],
         responses: {
             '200': { description: 'Datos del autor.' },
             '404': { description: 'Autor no encontrado.' },
          },
        },
    },
    '/posts': {
      get: {
        summary: 'Obtener todas las publicaciones',
        responses: {
          '200': { description: 'Lista de publicaciones obtenida exitosamente.' },
        },
      },
      post: {
         summary: 'Crear una nueva publicación',
         requestBody: {
              required: true,
             content: {
             'application/json': {
                  schema: {
                  type: 'object',
                 required: ['title', 'content', 'author_id'],
                 properties: {
                      title: { type: 'string', example: 'Introducción a Express' },
                      content: { type: 'string', example: 'Express es un framework minimalista.' },
                      author_id: { type: 'integer', example: 1 },
                      published: { type: 'boolean', example: true },
                    },
                },
            },
          },
        },
        responses: {
          '201': { description: 'Publicación creada exitosamente.' },
          '400': { description: 'Faltan campos requeridos o autor inexistente.' },
        },
      },
    },
  },
};





module.exports ={
 swaggerSpec
}