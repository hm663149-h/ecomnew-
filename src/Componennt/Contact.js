import { useState } from "react";

function Contact(){
    const[username,setUsername]=useState('');


    const onChangeHandler =(event)=>{
        setUsername(event.target.value)
    }
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        console.log(username);
    }


    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text"
                onChange={onChangeHandler}
                />
            
            <button>submit</button>
            </form>
            </>
        
    )
}
export default Contact;