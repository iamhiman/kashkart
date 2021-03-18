import React from 'react';
import { Link } from "react-router-dom"
import useForm from "./useForm";
import validate from "./Validation";
import FormSuccess from "./FormSuccess";

export default function Register() {

    const { handleInput, handleSubmit, values, errors, isSubmitting } = useForm(validate);

    return (
        <section>
            { (Object.keys(errors).length === 0 && isSubmitting) ? (<FormSuccess name={values.username} />) :
                (<div className="form-container">
                    <h2>Login/Register</h2>
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <div className="form-input">
                            <label>Name</label>
                            <input name="username" type="text" onChange={handleInput} value={values.username} />
                            {errors.username && <small className="form-error">{errors.username}</small>}
                        </div>

                        <div className="form-input">
                            <label>Email</label>
                            <input name="email" type="text" onChange={handleInput} value={values.email} />
                            {errors.email && <small className="form-error">{errors.email}</small>}
                        </div>

                        <div className="form-input">
                            <label>Password</label>
                            <input name="password" type="password" onChange={handleInput} value={values.password} />
                            {errors.password && <small className="form-error">{errors.password}</small>}
                        </div>

                        <button type="submit" className="form-btn">Submit</button><br />
                        <small>
                            Already have an account? Login <Link to='/register'>here</Link>
                        </small>
                    </form>
                </div>)}
        </section>
    )
}
