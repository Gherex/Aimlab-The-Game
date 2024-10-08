function Circulo({ onClick, x, y }) {
  return (
    <div
      className="w-16 h-16 bg-red-600 rounded-full absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
      onClick={onClick} // Llamamos la función cuando se hace clic
    />
  );
}

export default Circulo;
