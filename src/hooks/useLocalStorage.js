import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValues) => {
    const [values, setValues] = useState(() => {
        if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key))
        return initialValues;
    })

    console.log(values);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'number') {
            setValues({...values, [name]: parseInt(value)});
        } else {
            setValues({...values, [name]: value});
        }   
    }

    const handleCheckboxChange = (e) => {
        const {name, checked, id} = e.target;
        if (checked) {
            const newItems = [...values[id], name];
            setValues({...values, [id]: newItems})
        } else {
            setValues({...values, [id]: values[id].filter(item => item !== name)})
        }
    }

    const logValues = () => {
        console.log(values);
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(values))
    }, [values])

    return [values, handleChange, logValues, handleCheckboxChange];
}