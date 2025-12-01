// src/components/Mascota.jsx
import { useEffect, useState, useRef } from 'react';
import Acciones from './acciones';
import Caja  from './caja';
import Estado from './estado';
export default function Mascota() {
  const [animo, fijarAnimo] = useState("feliz"); // ← minúscula
  const [hambre, fijarHambre] = useState(70);
  const inactividadRef = useRef(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      fijarHambre(prev => {
        const nuevaHambre = Math.max(0, prev - 1);
        if (nuevaHambre < 30) {
          fijarAnimo('triste'); // ← minúscula
        } else if (nuevaHambre > 70) {
          fijarAnimo('feliz'); // ← minúscula
        }
        return nuevaHambre;
      });
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  const alimentar = () => {
    fijarHambre(prev => Math.min(100, prev + 30));
    fijarAnimo('feliz'); // ← minúscula
  };

  const play = () => {
    fijarAnimo('excitado');
    setTimeout(() => {
      fijarAnimo(hambre > 50 ? 'feliz' : 'triste'); // minúsculas
    }, 2000);
  };




  const reiniciarInactividad = () => {
    if (inactividadRef.current) clearTimeout(inactividadRef.current);
    inactividadRef.current = setTimeout(() => {
      fijarAnimo('idle');
    }, 10000);
  };

  useEffect(() => {
    reiniciarInactividad();
    return () => {
      if (inactividadRef.current) clearTimeout(inactividadRef.current);
    };
  }, []);

  return (



    <div className="h-auto w-[30%] bg-white outline outline-1 rounded-2xl p-3">     
      <Acciones alimentar={alimentar} play={play} />
      <Caja animo={animo} play={play} /> 
      <Estado hambre={hambre} />
    </div>
  );
}