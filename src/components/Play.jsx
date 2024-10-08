import { useState, useEffect } from "react";
import Circulo from "./Circulo";

function Play() {
  const [puntos, setPuntos] = useState(0); // Maneja el puntaje
  const [circuloVisible, setCirculoVisible] = useState(false); // Controla si el círculo está visible
  const [posicion, setPosicion] = useState({ x: 100, y: 100 }); // Posición inicial del círculo
  const [puedeSumarPunto, setPuedeSumarPunto] = useState(false); // Controla si puede sumar puntos al hacer click

  // Función que se llama cuando se hace clic en el círculo
  const handleCirculoClick = () => {
    if (puedeSumarPunto) {
      setPuntos(puntos + 1); // Aumenta el puntaje solo si el círculo está visible
      setPuedeSumarPunto(false); // Evitamos que se pueda sumar más de un punto por clic
    }
  };

  // Función para generar una nueva posición aleatoria en la pantalla
  const generarPosicionAleatoria = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 64)); // 64 es el ancho del círculo
    const y = Math.floor(Math.random() * (window.innerHeight - 64)); // 64 es el alto del círculo
    setPosicion({ x, y });
    setCirculoVisible(true); // Hace visible el nuevo círculo
    setPuedeSumarPunto(true); // Permitimos que se pueda sumar un punto si se hace clic
  };

  // Efecto para manejar la aparición y desaparición del círculo automáticamente
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (circuloVisible) {
        setCirculoVisible(false); // Oculta el círculo
        setPuedeSumarPunto(false); // Reseteamos para que no se sume punto si no se hizo clic
      } else {
        generarPosicionAleatoria(); // Genera una nueva posición y hace visible el círculo
      }
    }, 1000); // Intervalo de 500ms para la aparición/desaparición

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [circuloVisible]);

  return (
    <div className="w-screen h-screen bg-gray-800 relative flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-4 select-none">Puntaje: {puntos}</h1>

      {circuloVisible && (
        <Circulo onClick={handleCirculoClick} x={posicion.x} y={posicion.y} />
      )}
    </div>
  );
}

export default Play;
