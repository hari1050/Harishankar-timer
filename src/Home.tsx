import { useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
import { AddTimerModal } from './components/AddTimerModal';
import { Toaster } from 'sonner';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <Toaster position="top-right" />
      <div className="bg-white w-[480px] px-6 py-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer App</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-lg font-medium"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>
        
        <div className="flex flex-col items-center w-full">
          <TimerList />
        </div>
        
        <AddTimerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default Home;
