import PropTypes from 'prop-types';
import { useLoaderData, useParams } from "react-router-dom";



const EstateDetails = () => {

    const ditles = useLoaderData();
    const { id } = useParams();
    const cetagories = ditles.find(cetagories => cetagories.id === id);

    console.log(cetagories, id);

    return (
        <div className="max-w-[1220px] mx-auto mt-3">
            {/* <h2 className="text-3xl">Easted: {id}</h2> */}


            <section className="dark:bg-gray-100 rounded-md dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={cetagories.more_image} alt=""
                            className="object-cover rounded-lg w-full h-64 sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3
                                className="text-2xl font-semibold sm:text-4xl">
                                Estate Title:  {cetagories.estate_title}
                            </h3>
                            <p>Location: {cetagories.location}</p>
                            <p>Segment Name: {cetagories.segment_name}</p>
                            <p className='text-base font-bold'>Status: {cetagories.status}</p>
                            <p>Area: {cetagories.area}</p>
                            <p>Floor: {cetagories.floor}</p>
                            <p>Bedrooms: {cetagories.bedrooms}</p>
                            <p>Bathrooms: {cetagories.bathrooms}</p>
                            <p>Acres: {cetagories.acres}</p>
                            <p>Description: {cetagories.description}</p>
                            <p>Hoa Fee: {cetagories.hoa_fee}</p>
                            <h5 className='text-lg font-bold'>Price: {cetagories.price}</h5>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default EstateDetails;

EstateDetails.propTypes = {
    cetagories: PropTypes.object.isRequired
}