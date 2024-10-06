import Boton from "./components/Boton";

function App() {

  function startGame () {
    
  }

  return (
    <>
      <main className="flex justify-center items-center bg-cyan-900 text-slate-100 h-screen">
        <Boton onClick={startGame}>Jugar</Boton>
      </main>
    </>
  );
}

export default App;
