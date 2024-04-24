// import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../firebase/firebase.config";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const LoginN = () => {

    const { loginUser, loginWithGoogle, LoginWithGithub } = useContext(AuthContext);
    const naviget = useNavigate();
    const location = useLocation();
    console.log('Location in the Login Pages', location);

    const [loginrError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const emailRef = useRef(null);

    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        setLoginError('');
        setLoginSuccess('');

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess('User Login Successfully.');
                e.target.reset();
                naviget('/');
                naviget(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                setLoginError('Please Register !')

            })

        // signInWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         setLoginSuccess('User Login Successfully.')
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setLoginError('Please Register !')

        //     })
    }



    const handelGithubLogin = () => {
        LoginWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }




    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            <div className="text-center p-3 border ">
                <h1 className="text-4xl font-bold">LoginN now!</h1>
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
                                className="input input-bordered bg-green-400"
                                required />
                        </div>


                        <div className="card shrink-0 w-full max-w-sm">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered relative bg-green-400" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-[9px]">
                                {
                                    showPassword ? <IoIosEyeOff className="text-2xl"></IoIosEyeOff> : <IoIosEye className="text-2xl"></IoIosEye>
                                }
                            </span>
                        </div>




                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password"
                                className="input input-bordered bg-green-400" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div> */}
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
                        <hr />
                        <div className="flex gap-6 justify-center">
                            <FcGoogle onClick={handelGoogleLogin} className="text-2xl"></FcGoogle>
                            <VscGithubInverted onClick={handelGithubLogin} className="text-2xl"></VscGithubInverted>
                        </div>
                        <hr />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginN;