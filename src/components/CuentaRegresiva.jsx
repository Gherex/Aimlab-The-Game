import { useEffect, useState } from "react";

function CuentaRegresiva({ onFinish }) {
  const [contador, setContador] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador((prevContador) => {
        if (prevContador === 1) {
          clearInterval(intervalId);
          onFinish();
          return 1;
        }
        return prevContador - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onFinish]);

  return <div className="text-10xl font-sans">{contador}</div>;
}

export default CuentaRegresiva;
