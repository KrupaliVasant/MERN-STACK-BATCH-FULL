import { useRef } from "react";

export default function DemoUseRef(){
    //useState(),useEffect()

    const greetings = useRef('Hello');
    const uname = useRef('');

    const onButtonClick=()=>{
        greetings.current.focus();  //focus input box
        alert(uname.current.value);
    }

    const onInputChange=()=>{
        console.log("Welcome "+greetings.current.value);
    }

    return(
        <>
        <input type="text" ref={greetings} onChange={onInputChange} />
        <input type="text" ref={uname} onChange={onInputChange} />
        <button onClick={onButtonClick} >Click Here</button>
        </>
    )
}