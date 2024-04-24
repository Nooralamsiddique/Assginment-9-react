import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const UpdateProfile = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="max-w-[1220px] mx-auto mt-4">
            {/* <h2 className="text-3xl">Update  Your Profile Please</h2> */}
            <div className="text-center bg-green-200 my-2 rounded-xl p-3">
                <h1 className="text-4xl font-bold">Update  Your Profile Please</h1>
            </div>

            <div className="flex justify-center items-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name"
                                className="input input-bordered bg-green-400" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="email" name="photoURL" placeholder="PhotoURL"
                                className="input input-bordered bg-green-400" />
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
                                    className="input input-bordered relative bg-green-400" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-[9px]">
                                    {
                                        showPassword ? <IoIosEyeOff className="text-2xl"></IoIosEyeOff> : <IoIosEye className="text-2xl"></IoIosEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-secondary" value="Update Your Profile" />
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;