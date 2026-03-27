import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatRoomProps {
  socket: any;
  currentBeing: any;
  selectedRoom: any;
  onBack: () => void;
}

const ChatRoomComponent: React.FC<ChatRoomProps> = ({ socket: _socket, currentBeing, selectedRoom, onBack }) => {
  return (
    <div className="h-full bg-slate-900 p-6">
      <div className="mb-4">
        <button 
          onClick={onBack}
          className="text-purple-400 hover:text-purple-300 mb-4"
        >
          ← Volver a salas
        </button>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          {selectedRoom?.name || 'Sala de Chat'}
        </h2>
      </div>
      
      <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 p-6 h-full flex items-center justify-center">
        <div className="text-center">
          <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Chat en Desarrollo</h3>
          <p className="text-gray-400">
            El sistema de chat en tiempo real estará disponible próximamente.
          </p>
          <p className="text-sm text-purple-300 mt-2">
            Conectado como: {currentBeing?.avatarName || 'Ser Anónimo'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomComponent;