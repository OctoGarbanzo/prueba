import React from 'react';
import { Heart, Clock, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenidos al Asilo de Ancianos
        </h1>
        <p className="text-xl text-gray-600">
          Brindando cuidado y atención con amor y dedicación
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Cuidado Personalizado</h3>
          <p className="text-gray-600 text-center">
            Atención individualizada para cada residente según sus necesidades específicas
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Atención 24/7</h3>
          <p className="text-gray-600 text-center">
            Personal médico y de cuidado disponible las 24 horas del día
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Actividades Sociales</h3>
          <p className="text-gray-600 text-center">
            Programas de actividades y eventos para mantener activos a nuestros residentes
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
        <p className="text-gray-600 mb-4">
          Nuestro asilo de ancianos se dedica a proporcionar un ambiente acogedor y seguro
          para nuestros residentes. Contamos con personal altamente calificado y las
          instalaciones necesarias para garantizar el bienestar de nuestros adultos mayores.
        </p>
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Asilo de ancianos"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;