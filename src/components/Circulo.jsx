function Circulo({ onClick, x, y, circuloClicked }) {
  let circle_styles = {
    top: `${y}px`,
    left: `${x}px`,
    background: "radial-gradient(circle at left, #8e0000, #ff0000, #ff6060)",
  };
  return (
    <div
      className="w-16 h-16 rounded-full absolute"
      style={
        circuloClicked
          ? { border: "4px solid green", ...circle_styles }
          : circle_styles
      }
      onClick={onClick}
    />
  );
}

export default Circulo;
