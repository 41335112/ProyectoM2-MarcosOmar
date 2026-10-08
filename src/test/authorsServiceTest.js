import { describe, it, expect, vi, beforeEach } from 'vitest';
import authorsService from '../src/services/authors.service.js';
import db from '../src/config/db.js';


describe('Pruebas unitarias para Authors'), () =>{
 
    it('getAllAuthors - Debe retornar un arreglo de autores', async () => {
       
        const mockAuthors = [
        { id: 1, name: 'Ana García', email: 'ana@example.com', bio: 'Dev' },
        { id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com', bio: 'Writer' }
       ];
       
       db.query.mockResolvedValueOnce({ rows: mockAuthors });

       const result = await authorsService.getAllAuthors();

       expect(db.query).toHaveBeenCalledWith('SELECT * FROM authors ORDER BY id ASC');
       expect(result).toEqual(mockAuthors);
       expect(result.length).toBe(2);

    });

    it('getAuthorById - Debe retornar el autor si existe', async () => {
      const mockAuthor = { id: 1, name: 'Ana García', email: 'ana@example.com' };
      db.query.mockResolvedValueOnce({ rows: [mockAuthor] });

      const result = await authorsService.getAuthorById(1);

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM authors WHERE id = $1', [1]);
      expect(result).toEqual(mockAuthor);
    });

    it('createAuthor - Debe insertar y retornar el autor creado', async () => {
      const newAuthorData = { name: 'María López', email: 'maria@example.com', bio: 'Backend Dev' };
      const mockCreatedAuthor = { id: 3, ...newAuthorData };

      db.query.mockResolvedValueOnce({ rows: [mockCreatedAuthor] });

      const result = await authorsService.createAuthor(newAuthorData);

      expect(db.query).toHaveBeenCalledWith(
      'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
      ['María López', 'maria@example.com', 'Backend Dev']
      );
      expect(result).toEqual(mockCreatedAuthor);
    });

    
}