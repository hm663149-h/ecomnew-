
import { Dropdown } from "bootstrap";
import { useState } from "react";
function Register() {
    const[err,setErr]=useState({});

    const [formdata,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        dob:'',
        phone:'',
        address:'',
        con:'',
        sub:false
    })
        const  validatePhone  = (phone) => {
            const regex = /^[0-9]{10}$/;
            return regex.text(phone);
        };
        
        const  onSubmitHandler=(event)=>{
            event.preventDefault();
            setErr({});
            if(formdata.name ===''|| formdata.name === null){
                setErr({
                    errName :'name cannot be blank'
                    
                })

            }
            

        else if(formdata.email ===''|| formdata.email === null){
            setErr({
                errName1:'email should  not be blank'
            })
        }

            else if(formdata.password.length <3 || formdata.password.length>9){
                setErr ({
                    errName2:' password length should be in range 3 to 9'
                })
            }
            else if (!validatePhone(formdata.phone)){
                setErr({
                    errName3:'phone number should be 10 digit & every character should be digit'
                })
            }
            else{
                console.log(formdata);
            }
        
    
            
            
            
        const onChangeHandler = (event) => {
            setFormData({
                ...formdata,
                [event.target.name]:event.target.type === 'checkbox'?event.target.checked:event.target.value
            })
        }



    return(
        <>
        <h1>Multiple input form</h1>
        <br/><br/>

        <form onSubmit={onSubmitHandler}>
        
            <input type="text"
            name="name"
            value={formdata.name}
            onChange={onChangeHandler}
            /><br/>
            {err.errName && <span style={{color:'red'}}>{err.errName}</span>}
            <br/>
            <input type="email"
            name="email"
            value={formdata.email}
            onChange={onChangeHandler}
            />
            {err.errName1 && <span style={{color:'red'}}>{err.errName1}
                </span>}
                <br/><br/>
            <input type="password"
            name="password"
            value={formdata.password}
            onChange={onChangeHandler}
            />
            {err.errName2 && <span style={{color:'red'}}>{err.errName2}</span>}
            <br/><br/>
            <input type="date"
            name="dob"
            value={formdata.dob}
            onChange={onChangeHandler}
            /><br/><br/>

            <input type="tel"
            name="phone"
            value={formdata.phone}
            onChange={onChangeHandler}
            /><br/>
            {err .errName && <span style={{color:'red'}}>{err.errName3}</span>}
            <br/>


            <textarea
            name="address"
            value={formdata.address}
            onChange={onChangeHandler}
            ></textarea><br/><br/>
            <select
            name="con"
            value={formdata.con}
            onChange={onChangeHandler}
            >
                <option value='INDIA'>INDIA</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="JAPAN">JAPAN</option>

            </select><br/><br/>
            <input type ="checkbox"
            name="sub"
            checked={formdata.sub}
            onChange={onChangeHandler}
            />subcribe<br/><br/>

            <button>
                submit
            </button>

            
        </form>
        <h4>{JSON.stringify(formdata)}</h4>
        </>
    )
        }
}
export default Register;