import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-green-200">

                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                        <div className="dark:text-gray-600">
                            If you have any questions, just fill in the contact form, and we will
                            answer you shortly. If you are living nearby, come visit our office
                        </div>

                        <hr />
                        <h3 className="text-2xl font-medium">Client Support:</h3>
                        <div className="flex items-center gap-2">
                            <BiPhoneCall className="text-2xl"></BiPhoneCall><span>+880-1715-59-933</span>
                        </div>
                        <hr />
                        <h3 className="text-2xl font-medium">E-mail:</h3>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-2xl"></MdEmail><span>info@demolink.org</span>
                        </div>
                        <hr />
                        <h3 className="text-2xl font-medium">Main Office:</h3>
                        <div className="flex items-center gap-2">
                            <BiLocationPlus className="text-2xl"></BiLocationPlus><span>201 Banani,Road-11,Gulsine,Dhaaka,Bangladesh .</span>
                        </div>
                        <hr />
                    </div>
                    <img src="https://i.ibb.co/SKByYsC/memory.png" alt="" className="w-fit md:h-64" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-orange-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-orange-300" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-orange-300"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;