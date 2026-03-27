import React from 'react';
import { Brain, FileText, Users, Activity, X } from 'lucide-react';

interface PersonalDashboardProps {
  currentUser: any;
  onClose: () => void;
}

const PersonalDashboard: React.FC<PersonalDashboardProps> = ({ currentUser, onClose }) => {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard Personal</h1>
              <p className="text-gray-400">Ser: {currentUser?.avatarName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Mis Análisis</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-1">0</div>
            <div className="text-sm text-gray-400">Análisis creados</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Colaboraciones</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-1">0</div>
            <div className="text-sm text-gray-400">Colaboraciones activas</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Activity className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Reputación</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {currentUser?.reputation?.overall_score || 50}
            </div>
            <div className="text-sm text-gray-400">Puntos de reputación</div>
          </div>
        </div>

        {/* Content Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Actividad Reciente</h3>
            <div className="text-center py-8">
              <Activity className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No hay actividad reciente</p>
              <p className="text-sm text-gray-500 mt-2">
                Empieza creando tu primer análisis cinematográfico
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Áreas de Expertise</h3>
            {currentUser?.expertise && currentUser.expertise.length > 0 ? (
              <div className="space-y-3">
                {currentUser.expertise.map((exp: any, index: number) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-3">
                    <div className="font-medium text-purple-300">{exp.name}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      Nivel: {exp.expertise_level}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Brain className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">Sin áreas de expertise definidas</p>
                <p className="text-sm text-gray-500 mt-2">
                  Tus áreas se desarrollarán automáticamente según tus contribuciones
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-slate-800/50 rounded-xl border border-purple-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg p-4 text-left transition-colors">
              <FileText className="w-6 h-6 text-purple-400 mb-2" />
              <div className="font-medium text-white">Crear Análisis</div>
              <div className="text-sm text-gray-400">Analiza una nueva película</div>
            </button>
            
            <button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-4 text-left transition-colors">
              <Users className="w-6 h-6 text-blue-400 mb-2" />
              <div className="font-medium text-white">Buscar Colaboradores</div>
              <div className="text-sm text-gray-400">Encuentra seres afines</div>
            </button>
            
            <button className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg p-4 text-left transition-colors">
              <Activity className="w-6 h-6 text-green-400 mb-2" />
              <div className="font-medium text-white">Ver Estadísticas</div>
              <div className="text-sm text-gray-400">Analiza tu progreso</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;