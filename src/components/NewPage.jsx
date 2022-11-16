import React from "react";
import { useParams } from "react-router-dom";

const NewPage = (props) => {
    const { id } = useParams()
    return (
        <div>
            Hello this is another page <br />

            the passed ID is: {id} <br /><br />

            <div className="">
                <a href={'https://reactrouter.com/en/main/start/tutorial'} target="_blank">
                    React Navigation Docs
                </a>
            </div>

        </div>
    )
}

export default NewPage