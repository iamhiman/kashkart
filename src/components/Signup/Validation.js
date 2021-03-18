export default function Validation(values) {
    let errors = {};
    let nameregex = /^[a-zA-Z ]*$/;
    let mailregex = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let pswdregex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

    if (values.username.replace(/\s/g, "").length <= 0) {
        errors.username = "*No whitespaces allowed !";
    }
    else if (values.username.length <= 5) {
        errors.username = "*Name is too short !";
    }
    else if (values.username.length > 25) {
        errors.username = "*Name should be less than 25 characters !";
    }
    else if (!values.username.match(nameregex)) {
        errors.username = "*Name can contain only alphabets !";
    }


    if (values.email.replace(/\s/g, "").length <= 0) {
        errors.email = "*No whitespaces allowed !";
    }
    else if (values.email.length > 40) {
        errors.email = "*Email should be less than 40 characters !";
    }
    else if (!values.email.match(mailregex)) {
        errors.email = "*Please enter valid Email !";
    }


    if (!values.password) {
        errors.password = "*Password is required";
    }
    else if (values.password.length < 8) {
        errors.password = "*Password needs to be more than 8 characters";
    }
    else if (values.password.length > 20) {
        errors.password = "*Password needs to be less than 20 characters";
    }
    else if (!values.password.match(pswdregex)) {
        errors.password = "*Invalid Password";
    }

    return errors;
}
