
const validarIdPost = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({
      error: 'El ID enviado debe ser un número entero positivo válido'
    });
  }

  next();
};

const validarCrearPost = (req, res, next) => {

  const { title, content, author_id, published } = req.body;

  
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      error: 'El campo "title" es obligatorio y debe ser un texto'
    });
  }

  
  if (!content || typeof content !== 'string' || content.trim() === '') {
    return res.status(400).json({
      error: 'El campo "content" es obligatorio y debe ser un texto'
    });
  }

  
  if (!author_id || isNaN(author_id) || Number(author_id) <= 0) {
    return res.status(400).json({
      error: 'El campo "author_id" es obligatorio y debe ser un número ID válido'
    });
  }

  
  if (published !== undefined && typeof published !== 'boolean') {
    return res.status(400).json({
      error: 'El campo "published" debe ser un valor booleano (true o false)'
    });
  }

  next();
};

const validarActualizarPost = (req, res, next) => {

  const { title, content, author_id, published } = req.body;
  
  if (!title && !content && !author_id && published === undefined) {
    return res.status(400).json({
      error: 'Debe enviar al menos un campo para actualizar (title, content, author_id o published)'
    });
  }


  if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    return res.status(400).json({ error: 'El campo "title" no puede estar vacío' });
  }


  if (content !== undefined && (typeof content !== 'string' || content.trim() === '')) {
    return res.status(400).json({ error: 'El campo "content" no puede estar vacío' });
  }


  if (author_id !== undefined && (isNaN(author_id) || Number(author_id) <= 0)) {
    return res.status(400).json({ error: 'El campo "author_id" debe ser un número válido' });
  }


  if (published !== undefined && typeof published !== 'boolean') {
    return res.status(400).json({ error: 'El campo "published" debe ser un valor booleano (true o false)' });
  }

  next();
};

module.exports = {
 validarIdPost,
 validarCrearPost, 
 validarActualizarPost
}