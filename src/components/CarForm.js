import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialFormValue = {
  make: "",
  model: "",
  year: "",
  colors: []
};

export const CarForm = () => {
  const [formValues, handleChange, whatever, handleCheckboxChange] = useLocalStorage('car-form', initialFormValue);

  return (
    <div>
      <input
        placeholder="make"
        name="make"
        value={formValues.make}
        onChange={handleChange}
      />
      <input
        placeholder="model"
        name="model"
        value={formValues.model}
        onChange={handleChange}
      />
      <input
        placeholder="year"
        name="year"
        value={formValues.year}
        onChange={handleChange}
      />
      <input onChange={handleCheckboxChange} id="colors" name="red" checked={formValues.colors.includes('red')} type="checkbox" /> red
      <input onChange={handleCheckboxChange} id="colors" name="green" checked={formValues.colors.includes('green')} type="checkbox" /> green
      <input onChange={handleCheckboxChange} id="color" name="blue" checked={formValues.colors.includes('blue')} type="checkbox" /> blue
      <button onClick={whatever}>Log Values</button>
    </div>
  );
};
