import React from 'react';
import { Link } from "react-router-dom"

export default function Register() {

    return (
        <section>
            <div className="form-container">
                <h2>Login/Register</h2>
                <form autoComplete="off" noValidate>
                    <div className="form-input">
                        <label>Name</label>
                        <input name="name" type="text" />
                        <small className="form-error">error</small>
                    </div>

                    <div className="form-input">
                        <label>Email</label>
                        <input name="name" type="text" />
                        <small className="form-error"></small>
                    </div>

                    <div className="form-input">
                        <label>Password</label>
                        <input name="password" type="password" />
                        <small className="form-error"></small>
                    </div>

                    <button type="submit" className="form-btn">Submit</button><br />
                    <small>
                        Already have an account? Login <Link to='/register'>here</Link>
                    </small>
                </form>
            </div>
        </section>
    )
}
