import { useSearchParams } from "react-router-dom";



function Login(){
    const[searchParam,setSearchParam]=useSearchParams();
    console.log(searchParam.get('name'));
    console.log(searchParam.get('email'));
    return(
        <>
        <p>{searchParam.get('name')}</p>
        <p>{searchParam.get('email')}</p>
        <button
        onClick={()=>{
            setSearchParam({name:"magha",email:searchParam.get('email')})
        }
        }
        >change</button>
        </>
    )
}
export default Login;