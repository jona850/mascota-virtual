import { useState, useEffect, useRef } from 'react';


export default function CriaturaEnCaja({animo , play}) {
    const [position, setPosition] = useState({ x: 50, y: 50 }); // en porcentaje
    const boxRef = useRef(null);
  
    const moveRandomly = () => {
      if (!boxRef.current) return;
  
      const box = boxRef.current.getBoundingClientRect();
      const creatureSize = 60; // ancho/alto de la criatura en px
  
      // Generar posición aleatoria dentro de los límites
      const maxX = box.width - creatureSize;
      const maxY = box.height - creatureSize;
  
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
  
      // Convertir a porcentaje para usar con top/left
      const xPercent = (newX / box.width) * 100;
      const yPercent = (newY / box.height) * 100;
  
      setPosition({ x: xPercent, y: yPercent });
    };
  
    // Mover cada 2 segundos
    useEffect(() => {
      const interval = setInterval(moveRandomly, 2000);
      return () => clearInterval(interval);
    }, []);
  
    // Asegurar que al montar, la criatura esté dentro
    useEffect(() => {
      moveRandomly();
    }, []);
  
    return (
      <div ref={boxRef}
        className="relative w-auto  h-64 bg-indigo-500 border-2 border-indigo-200 rounded-xl overflow-hidden p-2 m-3"
      >
        {/* Criatura */}
        <button onClick={play}
          className="absolute text-5xl transition-transform duration-700 ease-out"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)', // centra el emoji en la posición
          }}
        >
                {animo === 'feliz' && '🐶'}
                {animo === 'triste' && '😢'}
                {animo === 'excitado' && '🤩'}
                {animo === 'idle' && '😊'}
                {animo === 'dormido' && '🥱'}
        </button>

      </div>
    );
  }