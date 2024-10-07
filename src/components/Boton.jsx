function Boton({ children, onClick }) {
  return (
    <button
      className="bg-cyan-950 w-40 h-20 rounded-2xl border-2 font-bold text-2xl hover:bg-cyan-600 select-none duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Boton;
