// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cetagori from "./Cetagori";


const AllEstate = () => {

    const [cetagories, setCetagories] = useState([]);

    useEffect(() => {
        fetch('cetagories.json')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, [])

    // console.log(cetagories);


    return (
        <div className="max-w-[1220px] mx-auto">
            {/* <h2 className="text-3xl">All estate pages: {cetagories.length}</h2> */}

            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl sm:mb-2 md:mb-5 lg:mb-10 font-bold border">Featured Properties</h2>
                        <div
                            className=" grid grid-cols-1 p-4 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

                            {
                                cetagories.map(cetagorie => <Cetagori key={cetagorie.id} cetagorie={cetagorie}> </Cetagori>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllEstate;