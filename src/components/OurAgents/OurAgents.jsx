

const OurAgents = () => {
    return (
        <div className="max-w-[1220px] mx-auto">
            <h3 className="text-4xl text-center mt-4 py-3 mb-4 font-bold border">Our Agents</h3>

            <div>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation"
                                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                    src="https://i.ibb.co/DgJNm1k/pexels-kampus-8204396.jpg" />
                                <div className="p-6 space-y-2">
                                    <h3
                                        className="text-2xl font-semibold">
                                        Lily Bicharm
                                    </h3>
                                    <p>Realtor, Agency</p>
                                    <h4 className="text-2xl font-normal">About Me</h4>
                                    <p>Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor,
                                        Michael prides himself on his unparalleled service with an aptitude for problem solving –
                                        something essential for navigating clients through the challenges of today’s real estate market.

                                        I am a licensed real estate broker, an active member in local and national real estate industry
                                        organizations, a lover of architecture and an active member to such philanthropic causes.</p>
                                    <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation"
                                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                    src="https://i.ibb.co/qB8Dbgv/pexels-mart-production-7709168.jpg" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold">
                                        Jack London</h3>
                                    <span className="text-xs dark:text-gray-600">Commercial Broker , Lux Estate</span>
                                    <h4 className="text-2xl font-normal">About Me</h4>
                                    <p>As an award-winning Realtor ® and CEO of The Egypt Sherrod Real Estate Group, Egypt’s daily business
                                        activities include counseling modest first-time home buyers to quarterbacking the listing/marketing
                                        of homes owned by corporate leaders, celebrities, physicians and investors throughout Atlanta.</p>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation"
                                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                    src="https://i.ibb.co/XCFkPvQ/pexels-yankrukov-8867213.jpg" />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold">Salesperson</h3>
                                    <span className="text-xs dark:text-gray-600">Salesperson, Lux Estate</span>
                                    <h4 className="text-2xl font-normal">About Me</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <button type="button"
                                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">
                                Load more Agents...</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurAgents;