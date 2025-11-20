import{useForm} from "react-hook-form";


function About (){

    const {register,handleSubmit,formState:{errors}}=useForm();


    const myonSubmit =(data)=>{
        console.log(data);
    }
    return(
        <>
        <form onSubmit={handleSubmit(myonSubmit)}>
            <input
            {...register('fname',{required:"can not be blank",maxlength:{
                value:10,
                message:"should be 10"
            },
            minlength:{
                value:3,
                message:'greater than 3'
            }
            })}
            />{errors.fname && <span style={{color:'red'}}>{errors.fname.message }</span>}<br/><br/>
            <input
            {...register('lname',{required:"can not be blank"})}
            />
            {errors.lname && <span style={{color:'red'}}>{errors.lname.message }</span>}
            <br/><br/>
            <input type="email"
            {...register('email')}
            /><br/><br/>
            <input type="password"
            {...register('password',{required:"can not be blank",
                 pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:"must contain at least 8 characters ,incliding upper/lowercase,number and special character"

            }

            })}
           
            /><br/><br/>
            <textarea
            {...register('address')}
            /><br/><br/>
            <input type="number"
            {...register ('age',{required:"can not be blank",
                min:{
                    value:18,
                    message:"minimum age 18"
                },
                max:{
                    value:65,
                    message:"maximum age 65"
                }
            })}
            />
            <select
            {...register('country')}
            >
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="JAPAN">JAPAN</option>
            </select>
            
            <input type="checkbox"
            {...register('subscribe')}
            />
            <button>submit</button>
        </form>
        </>
    )
}
export default About;