import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "mustang",
    year: "1964",
    color: "red",
  });

  const [inputColor, setInputColor] = useState("yellow");

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: inputColor };
    });
  };

  const handleColorInputChange = (event) => {
    setInputColor(event.target.value);
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p style={{ color: car.color }}>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <input
        type="text"
        value={inputColor}
        onChange={handleColorInputChange}
        placeholder="Enter color"
      />
      <button type="button" onClick={updateColor}>
        Update Color
      </button>
    </>
  );
}

export default Car;
