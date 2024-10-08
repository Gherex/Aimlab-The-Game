import Boton from "./components/Boton";
import { useState } from "react";
import Juego from "./components/Juego";

function App() {
  const [showGame, setShowGame] = useState(false);

  function handleClick() {
    setShowGame(true);
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center bg-cyan-900 text-slate-100 h-screen">
        {!showGame ? (
          <>
            <h1 className="text-7xl font-mono relative mb-6">
              <span className="absolute transform rotate-[-20deg] left-[-30px]">
                A
              </span>
              <span className="relative right-[-10px]">imlab: The Gam</span>
              <span className="absolute transform rotate-[20deg] right-[-50px]">
                e
              </span>
            </h1>
            <div className="p-4 mb-4 flex space-x-10">
              <label className="select-none text-xl">
                Cantidad de objetivos:
                <input
                  type="number"
                  min="10"
                  max="100"
                  step="5"
                  className="text-blue-100 ml-2 text-2xl p-2 w-20 bg-cyan-800 outline-none rounded-lg"
                />
              </label>
              <label className="select-none text-xl">
                Velocidad en ms:
                <input
                  type="number"
                  min="100"
                  max="2000"
                  step="100"
                  className="text-blue-100 ml-2 text-2xl p-2 w-24 bg-cyan-800 outline-none rounded-lg"
                />
              </label>
            </div>
            <Boton onClick={handleClick}>Jugar</Boton>
          </>
        ) : (
          <Juego />
        )}
      </main>
    </>
  );
}

export default App;
