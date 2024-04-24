import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";


const Login = () => {
    const [loginrError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const emailRef = useRef(null);

    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        setLoginError('');
        setLoginSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess('User Login Successfully.')
            })
            .catch(error => {
                console.error(error);
                setLoginError('Please Register !')

            })
    }



    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            <div className="text-center p-3 border ">
                <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Please Login</button>
                        </div>
                        <label className="label">
                            <p href="#">Don not account ?
                                <Link to='/register' className="label-text-alt link link-hover text-red-600" href="">Please Registation</Link>
                            </p>
                        </label>

                        {
                            loginrError &&
                            <p className="text-red-600">{loginrError}</p>
                        }
                        {
                            loginSuccess &&
                            <p className="text-green-600">{loginSuccess}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;