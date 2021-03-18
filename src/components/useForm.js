import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({ name: "", email: "", password: "" });

    const handleInput = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        //console.log(event.target.name)
        //console.log(event.target.value)      
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("form submitted")
        console.log(values)
    };

    return {
        handleInput,
        handleSubmit,
        values
    };
};

export default useForm;
