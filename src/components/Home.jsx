import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            this is the home page <br /> <br />
            
            <Link to={"newpage/893839"}>
                Go to a new page
            </Link>
        </div>
    )
}

export default Home