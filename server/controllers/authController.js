import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getConnection } from '../config/database.js';

export const register = async (req, res) => {
  try {
    const connection = await getConnection();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    await connection.beginTransaction();
    
    try {
      // Insertar usuario
      const [userResult] = await connection.execute(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [req.body.email, hashedPassword]
      );
      
      // Insertar datos del solicitante
      await connection.execute(
        'INSERT INTO registoSolicitante SET ?',
        [{
          nombreSolicitante: req.body.nombreSolicitante,
          edadSolicitante: req.body.edadSolicitante,
          generoSolicitante: req.body.generoSolicitante,
          numeroCedulaSolicitante: req.body.numeroCedulaSolicitante,
          profesionOficio: req.body.profesionOficio,
          salario: req.body.salario,
          telefono: req.body.telefono,
          direccion: req.body.direccion,
          motivoSolicitud: req.body.motivoSolicitud,
          aporteDinero: req.body.aporteDinero
        }]
      );
      
      await connection.commit();
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el registro' });
  }
};

export const login = async (req, res) => {
  try {
    const connection = await getConnection();
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [req.body.email]
    );
    await connection.end();

    if (users.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = users[0];
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el login' });
  }
};