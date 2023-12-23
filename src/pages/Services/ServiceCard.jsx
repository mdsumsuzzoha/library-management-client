import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {

    const {_id, name, img, author } = service;

    return (
        <div className="card bg-base-100 shadow-xl" >
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{author}</p>
                <div className="card-actions">
                <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div >
    )
}
ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard
