import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked;
        console.log(name, email, photoURL, password, accept);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters! and More.');
            return;

        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('One Uper Characters!');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('One lower Characters!');
            return;
        }
        // else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        //     setRegisterError('Valid email address!');
        //     return;
        // }
        else if (!accept) {
            setRegisterError('Please accpet our terms and condictions.');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.');

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://i.ibb.co/XDW86Wy/pexels-alex-staudinger-1732414.jpg"
                        .then(() => {
                            console.log('Profile Updated');
                        })
                        .catch(error => {
                            console.error(error);
                        })


                })

                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Please Chacked Your Email!')
                    })

            })
            .catch(error => {
                console.error(error);
                setRegisterError('Already in Use!')
            })
    }

    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            <div className="text-center p-3 border ">
                <h1 className="text-4xl font-bold">Please Register!</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="email" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="card shrink-0 w-full max-w-sm">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered relative" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-[9px]">
                                    {
                                        showPassword ? <IoIosEyeOff className="text-2xl"></IoIosEyeOff> : <IoIosEye className="text-2xl"></IoIosEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <p href="#">Have an Account ?
                                    <Link to='/login' className="label-text-alt link link-hover text-red-600" href="">Please Login</Link>
                                </p>
                            </label>
                        </div>
                        <div className="flex items-center justify-center label mr-[32px] lg:mr-10">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2" htmlFor="terms">accpet our terms and condictions.</label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-secondary" value="Register" />
                        </div>
                        {
                            registerError &&
                            <div className="toast toast-top toast-end top-16">
                                <div className="alert alert-info bg-slate-500">
                                    <span className="text-red-600">{registerError}</span>
                                </div>
                            </div>

                            // <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success &&
                            <div className="toast toast-top toast-end top-16">
                                <div className="alert alert-info">
                                    <span className="text-green-200">{success}</span>
                                </div>
                            </div>
                            // <p className="text-green-600">{success}</p>
                        }
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;