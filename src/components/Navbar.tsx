import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, LogIn, UserPlus, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">Asilo de Ancianos</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
                  <LogIn className="w-5 h-5" />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link to="/register" className="flex items-center space-x-1 hover:text-indigo-200">
                  <UserPlus className="w-5 h-5" />
                  <span>Registro</span>
                </Link>
              </>
            ) : (
              <>
                {isAdmin && (
                  <Link to="/admin/dashboard" className="flex items-center space-x-1 hover:text-indigo-200">
                    <Settings className="w-5 h-5" />
                    <span>Panel Admin</span>
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-indigo-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Cerrar Sesión</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;