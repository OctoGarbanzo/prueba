import { testConnection, updateDbConfig } from '../config/database.js';

export const testDbConnection = async (req, res) => {
  try {
    await testConnection(req.body);
    res.json({ message: 'Conexión exitosa' });
  } catch (error) {
    res.status(500).json({ message: 'Error en la conexión' });
  }
};

export const saveDbConfig = async (req, res) => {
  try {
    updateDbConfig(req.body);
    res.json({ message: 'Configuración guardada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la configuración' });
  }
};