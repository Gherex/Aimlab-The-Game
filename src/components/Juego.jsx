import { useState } from "react";
import CuentaRegresiva from "./CuentaRegresiva";
import Play from "./Play";

function Juego() {
  const [mostrarJuego, setMostrarJuego] = useState(false);

  const handleCuentaRegresivaFinish = () => {
    setMostrarJuego(true);
  };

  return (
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
      {!mostrarJuego ? (
        <CuentaRegresiva onFinish={handleCuentaRegresivaFinish} />
      ) : (
        <Play />
      )}
    </div>
  );
}

export default Juego;
