import { useState, useEffect } from "react";
import Circulo from "./Circulo";
import Boton from "./Boton";

function Play({ cantidadObjetivos, velocidad, restartGame }) {
  const [puntos, setPuntos] = useState(0);
  const [circuloVisible, setCirculoVisible] = useState(false);
  const [posicion, setPosicion] = useState({ x: 100, y: 100 });
  const [puedeSumarPunto, setPuedeSumarPunto] = useState(false);
  const [objetivosRestantes, setObjetivosRestantes] = useState(cantidadObjetivos);
  const [circuloClicked, setCirculoClicked] = useState(false);

  const handleCirculoClick = () => {
    if (puedeSumarPunto) {
      setCirculoClicked(true);
      setPuntos(puntos + 1);
      setPuedeSumarPunto(false);
    }
  };

  const generarPosicionAleatoria = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 64));
    const y = Math.floor(Math.random() * (window.innerHeight - 64));
    setPosicion({ x, y });
    setCirculoClicked(false);
    setCirculoVisible(true);
    setPuedeSumarPunto(true);
  };

  // Efecto para manejar la aparición y desaparición del círculo automáticamente
  useEffect(() => {
    if (objetivosRestantes >= 0) {
      const intervalId = setInterval(() => {
        if (circuloVisible) {
          setCirculoVisible(false);
          setPuedeSumarPunto(false);
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
      {objetivosRestantes >= 0 ? (
        circuloVisible && (
          <Circulo
            onClick={handleCirculoClick}
            circuloClicked={circuloClicked}
            x={posicion.x}
            y={posicion.y}
          />
        )
      ) : (
        <div className="flex justify-center items-center flex-col">
          <p className="text-white text-xl md:text-2xl lg:text-3xl select-none mb-6">
            ¡Juego terminado! Puntaje final: {puntos}
          </p>
          <Boton onClick={restartGame}>Volver al menú</Boton>
        </div>
      )}
    </div>
  );
}

export default Play;
