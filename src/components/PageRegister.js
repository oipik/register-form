import RegisterForm from "./RegisterForm";

import '../../src/reset.css'
import './register.scss';

const PageRegister = () => {
    return (
        <section className="wrapper">
            <div className="container">
                <RegisterForm title="LocStar"/>
            </div>
        </section>
    )
}

export default PageRegister