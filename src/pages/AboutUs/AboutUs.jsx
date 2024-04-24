
const AboutUs = () => {
    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/r4TZYk3/pexels-yankrukov-8867433.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Experience since 1999</h1>
                        <p className="py-6">We have been working since 1999 to be sure you are <br />getting the best MyHome service possible. <br />
                            MyHome aims to unite MyHome brokers to provide their clients and partners <br />with the top-notch level of brokerage services throughout the USA. </p>
                        <button className="btn btn-primary">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;