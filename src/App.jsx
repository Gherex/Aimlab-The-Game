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
      <main className="flex justify-center items-center bg-cyan-900 text-slate-100 h-screen">
        {!showGame ? <Boton onClick={handleClick}>Jugar</Boton> : <Juego />}
      </main>
    </>
  );
}

export default App;
