
export default function Acciones({ alimentar, play }) {
    return (
        <div className="flex space-x-4">
        <button onClick={alimentar} className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow hover:shadow-md">
          Alimentar
        </button>
        <span className="px-5 py-2">haz click para acariciar</span>
      </div>
    );
} 