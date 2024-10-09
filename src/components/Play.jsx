import { useState, useEffect } from "react";
import Circulo from "./Circulo";

function Play({ cantidadObjetivos, velocidad }) {
  const [puntos, setPuntos] = useState(0);
  const [circuloVisible, setCirculoVisible] = useState(false);
  const [posicion, setPosicion] = useState({ x: 100, y: 100 });
  const [puedeSumarPunto, setPuedeSumarPunto] = useState(false);
  const [objetivosRestantes, setObjetivosRestantes] =
    useState(cantidadObjetivos);

  const handleCirculoClick = () => {
    if (puedeSumarPunto) {
      setPuntos(puntos + 1);
      setPuedeSumarPunto(false);
    }
  };

  const generarPosicionAleatoria = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 64));
    const y = Math.floor(Math.random() * (window.innerHeight - 64));
    setPosicion({ x, y });
    setCirculoVisible(true);
    setPuedeSumarPunto(true);
  };

  // Efecto para manejar la aparición y desaparición del círculo automáticamente
  useEffect(() => {
    if (objetivosRestantes > 0) {
      const intervalId = setInterval(() => {
        if (circuloVisible) {
          setCirculoVisible(false); // Oculta el círculo
          setPuedeSumarPunto(false); // Reseteamos para que no se sume punto si no se hizo clic
        } else {
          generarPosicionAleatoria(); // Genera una nueva posición y hace visible el círculo
          setObjetivosRestantes((prev) => prev - 1);
        }
      }, velocidad);

      return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
    }
  }, [circuloVisible, velocidad, objetivosRestantes]);

  return (
    <div className="w-screen h-screen bg-gray-800 relative flex flex-col items-center justify-center">
      {objetivosRestantes > 0 ? (
        circuloVisible && (
          <Circulo onClick={handleCirculoClick} x={posicion.x} y={posicion.y} />
        )
      ) : (
        <p className="text-white text-2xl">
          ¡Juego terminado! Puntaje final: {puntos}
        </p>
      )}
    </div>
  );
}

export default Play;
