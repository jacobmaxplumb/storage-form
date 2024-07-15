import { useState } from "react";

const initialFormValues = {
  firstName: "",
  lastName: "",
  age: 0,
};

export const NameForm = () => {
  const [formValues, setFormValues] = useState(() => {
    if (localStorage.getItem('name-form-values')) {
        return JSON.parse(localStorage.getItem('name-form-values'));
    }
    return initialFormValues;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
  };

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
      <button onClick={() => console.log(formValues)}>Log Values</button>
    </div>
  );
};
