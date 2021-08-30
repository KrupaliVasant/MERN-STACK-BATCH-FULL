import { useLocation, useParams } from "react-router-dom";

const UserId=()=>{
    const params = useParams();
    const loc = useLocation();
    console.log(params);
    console.log(loc);
    return(
        <>
            <h1>Your ID is: {params.id}</h1>
        </>
    )
}

export default UserId;