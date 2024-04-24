import { FcHome } from "react-icons/fc";


const Banner = () => {
    return (
        <div className="max-w-[1220px] mx-auto">
            <div className="carousel w-full mt-3 rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XDW86Wy/pexels-alex-staudinger-1732414.jpg"
                        className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-green-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                    <div className="absolute gap-x-2 lg:mt-[350px] ml-[440px]">
                        <div className="flex justify-center items-center mb-5">
                            <FcHome className="text-4xl"></FcHome>
                            <h3 className="text-4xl font-semibold ml-3"><span className="text-purple-600 font-extrabold">e</span>Home</h3>
                        </div>
                        <div className="flex">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Y8FgWMh/pexels-eziz-charyyev-1475938.jpg"
                        className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-green-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                    <div className="absolute gap-x-2 lg:mt-[350px] ml-[440px]">
                        <div className="flex justify-center items-center mb-5">
                            <FcHome className="text-4xl"></FcHome>
                            <h3 className="text-4xl font-semibold ml-3"><span className="text-purple-600 font-extrabold">e</span>Home</h3>
                        </div>
                        <div className="flex">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6b8tpWc/pexels-frans-van-heerden-1438832.jpg"
                        className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-green-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                    <div className="absolute gap-x-2 lg:mt-[350px] ml-[440px]">
                        <div className="flex justify-center items-center mb-5">
                            <FcHome className="text-4xl"></FcHome>
                            <h3 className="text-4xl font-semibold ml-3"><span className="text-purple-600 font-extrabold">e</span>Home</h3>
                        </div>
                        <div className="flex">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/z7wxrw6/pexels-expect-best-323780.jpg"
                        className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-green-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                    <div className="absolute gap-x-2 lg:mt-[350px] ml-[440px]">
                        <div className="flex justify-center items-center mb-5">
                            <FcHome className="text-4xl"></FcHome>
                            <h3 className="text-4xl font-semibold ml-3"><span className="text-purple-600 font-extrabold">e</span>Home</h3>
                        </div>
                        <div className="flex">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="relative flex items-center justify-center w-full rounded-lg border mt-3 dark:text-gray-900">
                <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                    <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                            src="https://i.ibb.co/XDW86Wy/pexels-alex-staudinger-1732414.jpg" alt="Image 1" />

                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                            src="https://i.ibb.co/Y8FgWMh/pexels-eziz-charyyev-1475938.jpg" alt="Image 2" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                            src="https://i.ibb.co/6b8tpWc/pexels-frans-van-heerden-1438832.jpg" alt="Image 3" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                            src="https://i.ibb.co/z7wxrw6/pexels-expect-best-323780.jpg" alt="Image 4" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                            src="https://source.unsplash.com/random/240x360/?5" alt="Image 5" />
                    </div>
                </div>
                <button aria-label="Slide forward" id="next"
                    className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>



        </div>
    );
};

export default Banner;