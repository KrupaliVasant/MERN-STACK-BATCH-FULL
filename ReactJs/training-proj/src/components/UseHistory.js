import { useHistory } from "react-router-dom"

const UseHistory = (props) => {
    const history = useHistory();

    const callContact=()=>{
        history.push("/contact");
        console.log(history);
    }

    return(
        <>
        <button type='button' onClick={callContact}>Use History</button>
        </>
    )
}

export default UseHistory;