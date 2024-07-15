import { useState } from "react"

export const useSimple = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const logMyValue = () => {
        console.log(value);
    }

    return [value, setValue, logMyValue];
}