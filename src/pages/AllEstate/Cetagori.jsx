import PropTypes from 'prop-types';
import { LiaRestroomSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Cetagori = ({ cetagorie }) => {

    const { estate_title, bedrooms, bathrooms, location, price, status, floor, area, image } = cetagorie;


    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 relative">
                <p className='absolute font-bold top-10 right-12 bg-orange-300 px-1 py-1 rounded-lg'>{status}</p>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{estate_title}</h2>
                <p>{location}</p>
                <p>Price: ${price} /=</p>
                <div className='flex items-center gap-x-5'>
                    <p>Bedrooms: {bedrooms}</p>
                    <LiaRestroomSolid className='text-3xl'></LiaRestroomSolid>  <p>Bathrooms: {bathrooms}</p>
                </div>
                <div className='block'>
                    <p>Floor: {floor}</p>
                    <p className='block'>Area: {area}sf </p>
                </div>
                <div className="card-actions">
                    <Link to={`/estateDetails/${cetagorie.id}`}><button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Cetagori;

Cetagori.propTypes = {
    cetagorie: PropTypes.object.isRequired
}

