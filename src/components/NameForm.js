import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialFormValues = {
  firstName: "",
  lastName: "",
  age: 0,
};

export const NameForm = () => {
  const [formValues, handleChange, whatever] = useLocalStorage('name-form', initialFormValues);

  return (
    <div>
      <input
        placeholder="first name"
        value={formValues.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <input
        placeholder="last name"
        value={formValues.lastName}
        name="lastName"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="age"
        value={formValues.age}
        name="age"
        onChange={handleChange}
      />
      <button onClick={whatever}>Log Values</button>
    </div>
  );
};
