


const logginRequest = (req, res, next) =>{

}



const validarIdAutor = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({
      error: 'El ID enviado debe ser un número entero positivo válido'
    });
  }

  next(); 
};

const validarCrearAutor = (req, res, next) => {
  
    const { nombre, gmail } = req.body;

  if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({
      error: 'El campo "nombre" es requerido y no puede estar vacío'
    });
  };

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!gmail || !regexEmail.test(gmail)) {
    return res.status(400).json({
      error: 'El campo "gmail" es requerido y debe ser un correo electrónico válido'
    });
  }

  next();
};

const validarActualizarAutor = (req, res, next) => {
  const { nombre, gmail, bio } = req.body;

  
  if (!nombre && !gmail && bio === undefined) {
    return res.status(400).json({
      error: 'Debe enviar al menos un campo para actualizar (nombre, gmail o bio)'
    });
  }

  if (gmail) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(gmail)) {
      return res.status(400).json({
        error: 'El formato de "gmail" no es válido'
      });
    }
  }

  next();
};

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: error.message
    });
};


module.exports = {
    logginRequest,
    validarIdAutor,
    validarCrearAutor,
    validarActualizarAutor,
    errorHandler
}