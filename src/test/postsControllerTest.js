import { describe, it, expect, vi, beforeEach } from 'vitest';
import postsController from '../src/controllers/posts.controller.js';
import postsService from '../src/services/posts.service.js';


vi.mock('../src/services/posts.service.js');

describe('Pruebas unitarias para Posts Controller (solo Vitest)', () => {
  let req, res, next;

  beforeEach(() => {
    vi.clearAllMocks();

    
    req = {
      params: {},
      body: {},
    };

    
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    next = vi.fn();
  });

  
    it('createPost - Debe retornar status 400 si faltan campos obligatorios', async () => {

     req.body = { title: 'Post sin contenido ni autor' };

     await postsController.createPost(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({error: 'Los campos title, content y author_id son obligatorios',});
    });

  
    it('getPostById - Debe retornar status 404 si el post no es encontrado', async () => {
     req.params = { id: '99' };
     postsService.getPostById.mockResolvedValueOnce(null);

     await postsController.getPostById(req, res, next);

     expect(postsService.getPostById).toHaveBeenCalledWith('99');
     expect(res.status).toHaveBeenCalledWith(404);
     expect(res.json).toHaveBeenCalledWith({ error: 'Publicación no encontrada' });
    });

  
    it('getAllPosts - Debe retornar status 200 y la lista de publicaciones', async () => {

     const mockPosts = [
      { id: 1, title: 'Post 1', content: 'Contenido 1', author_id: 1 }
     ];

     postsService.getAllPosts.mockResolvedValueOnce(mockPosts);

     await postsController.getAllPosts(req, res, next);

     expect(res.status).toHaveBeenCalledWith(200);
     expect(res.json).toHaveBeenCalledWith(mockPosts);

    });

});