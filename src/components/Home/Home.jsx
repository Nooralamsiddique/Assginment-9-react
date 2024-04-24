// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import AllEstate from "../../pages/AllEstate/AllEstate";
// import EstateDetails from "../../pages/EstateDetails/EstateDetails";
import AllEstate from "../../pages/AllEstate/AllEstate";
// import EstateDetails from "../../pages/EstateDetails/EstateDetails";
import Banner from "../Banner/Banner";
import OurAgents from "../OurAgents/OurAgents";
import PeopleSay from "../PeopleSay/PeopleSay";
// import { useLoaderData } from "react-router-dom";


const Home = () => {
    // const AmarName = useContext(AuthContext);
    // console.log(AmarName);

    // const cetagories = useLoaderData();
    // console.log(cetagories);

    return (
        <div>
            {/* <h2 className="text-5xl">This is Home:</h2> */}
            <Banner></Banner>
            <AllEstate></AllEstate>
            <PeopleSay></PeopleSay>
            <OurAgents></OurAgents>

            {/* {
                cetagories.map(catagori => <EstateDetails key={catagori.id} cetagories={catagori}></EstateDetails>)
            }

 */}

        </div>
    );
};

export default Home;