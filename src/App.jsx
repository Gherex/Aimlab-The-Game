import Boton from "./components/Boton";
import { useState } from "react";
import Juego from "./components/Juego";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [cantidadObjetivos, setCantidadObjetivos] = useState(10);
  const [velocidad, setVelocidad] = useState(1000);

  function restartGame() {
    setShowGame(false);
    setCantidadObjetivos(10);
    setVelocidad(1000);
  }

  function handleClick(e) {
    e.preventDefault();
    setShowGame(true);
  }

  function handleChangeObjetivos(e) {
    let cantObj = e.target.value;
    if (cantObj >= 0 && cantObj <= 200) setCantidadObjetivos(cantObj);
  }

  function handleChangeVelocidad(e) {
    let vel = e.target.value;
    if (vel >= 100 && vel <= 3000) setVelocidad(vel);
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center bg-cyan-900 text-slate-100 h-screen">
        {!showGame ? (
          <>
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl relative mb-6">
              <span className="absolute transform rotate-[-20deg] left-[-30px]">
                A
              </span>
              <span className="relative right-[-10px]">imlab: The Gam</span>
              <span className="absolute transform rotate-[20deg] right-[-50px]">
                e
              </span>
            </h1>
            <form className="p-4 mb-4 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center mb-8 sm:flex-row md:flex-row lg:flex-row">
                <label className="select-none text-lg sm:text-xl md:text-2xl lg:text-3xl mr-6 mb-2">
                  Cantidad de objetivos:
                  <input
                    id="objetivos"
                    type="number"
                    min="10"
                    max="100"
                    step="5"
                    value={cantidadObjetivos}
                    onChange={handleChangeObjetivos}
                    className="text-blue-100 ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 w-20 bg-cyan-800 outline-none rounded-lg"
                  />
                </label>
                <label className="select-none text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Velocidad en ms:
                  <input
                    id="velocidad"
                    type="number"
                    min="100"
                    max="2000"
                    step="100"
                    value={velocidad}
                    onChange={handleChangeVelocidad}
                    className="text-blue-100 ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 w-24 bg-cyan-800 outline-none rounded-lg"
                  />
                </label>
              </div>
              <Boton onClick={handleClick}>Jugar</Boton>
            </form>
          </>
        ) : (
          <Juego
            cantidadObjetivos={cantidadObjetivos}
            velocidad={velocidad}
            restartGame={restartGame}
          />
        )}
      </main>
    </>
  );
}

export default App;
