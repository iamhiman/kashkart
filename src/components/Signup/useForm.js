import { useState } from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        handleInput,
        handleSubmit,
        values,
        errors,
        isSubmitting
    };
};

export default useForm;
