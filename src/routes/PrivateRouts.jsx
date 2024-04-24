import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouts;

PrivateRouts.propTypes = {
    children: PropTypes.node,
}