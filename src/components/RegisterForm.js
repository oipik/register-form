import { useState } from "react";

const RegisterForm = ({ title }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name && data.email && data.pass) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <form className="wrapper__form" onSubmit={handleSubmit}>
            <h4 className="wrapper__title">{title}</h4>
            {submitted && valid ? <div className="success__message">Вы успешно зарегистрированы!</div> : null}
            <input
                className="wrapper__input fullname"
                type="text"
                value={data.name}
                placeholder="Name"
                onChange={(e) => setData({ ...data, name: e.target.value })} />
            {submitted && !data.name ? <p className="error__message">Please enter a Name</p> : null}
            <input
                className="wrapper__input email"
                type="email"
                value={data.email}
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })} />
            {submitted && !data.email ? <p className="error__message">Please enter an Email</p> : null}
            <input
                className="wrapper__input password"
                type="password"
                value={data.pass}
                placeholder="Password"
                onChange={(e) => setData({ ...data, pass: e.target.value })} />
            {submitted && !data.pass ? <p className="error__message">Please enter a Name</p> : null}
            <button className="wrapper__btn">Create Account</button>
            <p className="wrapper__text">By clicking “Create Account” you agree to our terms and privacy policy.</p>
        </form>
    )
}

export default RegisterForm;