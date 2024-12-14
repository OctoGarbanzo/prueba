import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

interface DbConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const [dbConfig, setDbConfig] = useState<DbConfig>({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_asilo_ancianos',
    port: 3306
  });
  const [message, setMessage] = useState('');

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDbConfig(prev => ({
      ...prev,
      [name]: name === 'port' ? parseInt(value) : value
    }));
  };

  const testConnection = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin/test-db', dbConfig);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error al conectar con la base de datos');
    }
  };

  const saveConfig = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin/save-db-config', dbConfig);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error al guardar la configuración');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Panel de Administración</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Configuración de Base de Datos</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Host</label>
              <input
                type="text"
                name="host"
                value={dbConfig.host}
                onChange={handleConfigChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Puerto</label>
              <input
                type="number"
                name="port"
                value={dbConfig.port}
                onChange={handleConfigChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Usuario</label>
              <input
                type="text"
                name="user"
                value={dbConfig.user}
                onChange={handleConfigChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                value={dbConfig.password}
                onChange={handleConfigChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Base de Datos</label>
              <input
                type="text"
                name="database"
                value={dbConfig.database}
                onChange={handleConfigChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={testConnection}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Probar Conexión
            </button>
            
            <button
              onClick={saveConfig}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Guardar Configuración
            </button>
          </div>

          {message && (
            <div className="mt-4 p-4 rounded-md bg-gray-100">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;